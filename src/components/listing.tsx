import React, { Suspense } from "react";
import EmblaCarousel from "./carousel/EmblaCarousel";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Listings = () => {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
			{[...Array(16)].map((_, index) => (
				<Suspense fallback={<ListingSkeleton />} key={index}>
					<Listing />
				</Suspense>
			))}
		</div>
	);
};

export const Listing = () => {
	return (
		<Link href="/bedroom-apartment-osu/65445454567457" className="">
			<div className="">
				<div className="rounded-2xl overflow-hidden">
					<EmblaCarousel slides={SLIDES} options={{ containScroll: "trimSnaps", dragFree: false, loop: false, align: "start" }} />
				</div>
				<div className="text-[0.938rem] flex flex-col justify-between gap-1.5 pt-2">
					<div>
						<div className="flex gap-x-4 justify-between">
							<div className="font-bold line-clamp-1">Apartment in Kumasi</div>
							<div className="whitespace-nowrap">󰀄 New </div>
						</div>
						<div className="text-black/50 font-semibold">Hosted by Sophie</div>
						<div className="text-black/50 font-semibold">2 beds</div>
					</div>
					<div className="text-black/50 font-semibold">
						<strong className="text-black">₵139</strong> night
					</div>
				</div>
			</div>
		</Link>
	);
};

export const ListingsSkeleton = () => {
	return (
		<div className="grid mark grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
			{[...Array(16)].map((_, index) => (
				<ListingSkeleton key={index} />
			))}
		</div>
	);
};

export const ListingSkeleton = () => {
	return (
		<div className="">
			<Skeleton className="rounded-2xl w-full aspect-square" />
			<div className="text-[0.938rem] flex flex-col justify-between gap-1.5 pt-2">
				<div className="flex flex-col gap-1">
					<div className="flex gap-x-4 justify-between">
						<Skeleton className="h-4 w-[80%]" />
						<Skeleton className="h-4 w-12" />
					</div>
					<Skeleton className="h-3 w-32" />
					<Skeleton className="h-3 w-12" />
				</div>
				<Skeleton className="h-4 mt-1 w-20" />
			</div>
		</div>
	);
};
