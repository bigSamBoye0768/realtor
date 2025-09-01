import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request) {
	const user = await getCurrentUser();
	if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

	const host = await prisma.host.findUnique({ where: { userId: user.id ?? "" } });
	if (!host) return NextResponse.json({ error: "Not a host" }, { status: 403 });

	const listing = await prisma.listing.create({
		data: {
			hostId: host.id,
			status: "Draft",
		},
		select: { id: true, status: true },
	});

	return NextResponse.json({ ok: true, listingId: listing.id, status: listing.status });
}
