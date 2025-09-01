import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { listingPatchSchema, toPrismaUpdate } from "@/lib/schemas/listingPatch";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const user = await getCurrentUser();

	if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

	const host = await prisma.host.findUnique({ where: { userId: user.id ?? "" } });
	if (!host) return NextResponse.json({ error: "Not a host" }, { status: 403 });

	const body = await req.json();
	const parsed = listingPatchSchema.safeParse(body);
	console.log("PATCH LISTING", parsed);

	if (!parsed.success) {
		return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
	}

	// Verify ownership (use your own user lookup if needed)
	const listing = await prisma.listing.findUnique({
		where: { id: id },
		include: { host: true },
	});
	if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });

	if (listing.host.userId !== user.id) {
		return NextResponse.json({ error: "Forbidden" }, { status: 403 });
	}

	// Turn validated client payload into Prisma update data
	const { data, location } = toPrismaUpdate(parsed.data);

	// (Optional) create/attach Location (and PostGIS point) if you support inline location
	let locationIdToSet: string | undefined;
	if (location) {
		if (location.id) {
			locationIdToSet = location.id;
		} else {
			const created = await prisma.location.create({
				data: {
					address: location.address,
					city: location.city,
					state: location.state,
					country: location.country,
					postalCode: location.postalCode,
					// coordinates left null for now (Unsupported type)
				},
				select: { id: true },
			});
			locationIdToSet = created.id;

			// If you store geography(Point, 4326) and lat/lng are provided:
			if (location.lat != null && location.lng != null) {
				await prisma.$executeRawUnsafe(
					`
             UPDATE "Location"
             SET "coordinates" = ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography
             WHERE "id" = $3
           `,
					location.lng,
					location.lat,
					created.id
				);
			}
		}
	}

	const updated = await prisma.listing.update({
		where: { id: id },
		data: { ...data, ...(locationIdToSet ? { locationId: locationIdToSet } : {}) },
		include: { location: true },
	});

	return NextResponse.json(updated);
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const listing = await prisma.listing.findUnique({
		where: { id: id },
		include: { location: true, host: { include: { user: true } } },
	});

	if (!listing) return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json(listing);
}

// import { prisma } from "@/lib/prisma";
// import { Prisma } from "@prisma/client";
// // ...
// const { data, location } = toPrismaUpdate(parsed.data);

// let locationIdToSet: string | undefined;

// if (location) {
//   // 1) Attach to an existing Location
//   if (location.id) {
//     locationIdToSet = location.id;

//     // Optional: if lat/lng provided, update the PostGIS point in that Location
//     if (location.lat != null && location.lng != null) {
//       await prisma.$executeRaw(
//         Prisma.sql`
//           UPDATE "Location"
//           SET "coordinates" = ST_SetSRID(ST_MakePoint(${location.lng}, ${location.lat}), 4326)::geography
//           WHERE "id" = ${location.id}
//         `
//       );
//     }

//     // Optional: also update address fields if provided
//     const addressFields = ["address","city","state","country","postalCode"] as const;
//     const hasAddressUpdates = addressFields.some(k => (location as any)[k] != null);
//     if (hasAddressUpdates) {
//       await prisma.location.update({
//         where: { id: location.id },
//         data: {
//           ...(location.address ? { address: location.address } : {}),
//           ...(location.city ? { city: location.city } : {}),
//           ...(location.state ? { state: location.state } : {}),
//           ...(location.country ? { country: location.country } : {}),
//           ...(location.postalCode ? { postalCode: location.postalCode } : {}),
//         },
//       });
//     }

//   } else {
//     // 2) Create a new Location first (address parts only)
//     const created = await prisma.location.create({
//       data: {
//         address: location.address,
//         city: location.city,
//         state: location.state,
//         country: location.country,
//         postalCode: location.postalCode,
//       },
//       select: { id: true },
//     });
//     locationIdToSet = created.id;

//     // 3) Write the PostGIS geography point if lat/lng provided
//     if (location.lat != null && location.lng != null) {
//       await prisma.$executeRaw(
//         Prisma.sql`
//           UPDATE "Location"
//           SET "coordinates" = ST_SetSRID(ST_MakePoint(${location.lng}, ${location.lat}), 4326)::geography
//           WHERE "id" = ${created.id}
//         `
//       );
//     }
//   }
// }

// // Finally update the listing, wiring in the new/attached location id
// const updated = await prisma.listing.update({
//   where: { id: params.id },
//   data: { ...data, ...(locationIdToSet ? { locationId: locationIdToSet } : {}) },
//   include: { location: true },
// });
// return NextResponse.json(updated);
