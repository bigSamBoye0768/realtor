// app/api/listings/incomplete/route.ts
import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { ListingStatus, PropertyType } from "@prisma/client";
import { NextResponse } from "next/server";

export type IncompleteListingDTO = {
	id: string;
	photoUrls: string[];
	postedDate: string; // ISO string for client
	propertyType: PropertyType | null;
	currentStep: string | null;
};

export async function GET() {
	const user = await getCurrentUser();
	if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

	// If you already looked up host by userId, use host.id below (cheapest & clearest)
	const host = await prisma.host.findUnique({ where: { userId: user.id } });
	if (!host) return NextResponse.json({ error: "Not a host" }, { status: 403 });

	const listings = await prisma.listing.findMany({
		where: {
			status: ListingStatus.Draft,
			hostId: host.id,
		},
		orderBy: { postedDate: "desc" },
		select: {
			id: true,
			photoUrls: true,
			postedDate: true,
			propertyType: true,
			currentStep: true,
		},
	});

	// Normalize dates to ISO strings for the client
	const dto: IncompleteListingDTO[] = listings.map((l) => ({
		id: l.id,
		photoUrls: l.photoUrls ?? [],
		postedDate: l.postedDate.toISOString(),
		propertyType: l.propertyType,
		currentStep: l.currentStep ?? null,
	}));

	return NextResponse.json(dto);
}
