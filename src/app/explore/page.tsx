import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Listing, ListingSkeleton } from "@/components/listing";
import { Suspense } from "react";

// const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => {
	return (
		<div className="min-h-svh h-full w-full">
			<div className="w-full border-b shadow fixed top-0 bg-white z-[100]">
				<Header />
				<div className="w-full">
					<div className="flex items-center w-full max-w-screen-2xl mx-auto 2xl:px-20 lg:px-10 md:px-8 px-0">
						<div className="flex-1 overflow-hidden">
							<Categories />
						</div>
						<div className="mark-b md:flex pl-6 hidden">
							<Button>Filter</Button>
							<Button>Filter</Button>
						</div>
					</div>
				</div>
			</div>

			<section className="w-full relative 2xl:px-20 lg:px-10 md:px-8 px-4 h-full min-h-svh max-w-screen-2xl mx-auto pb-[130px] pt-[130px] bg-white">
				<div className="my-8">
					<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
						{[...Array(16)].map((_, index) => (
							// <Suspense fallback={<ListingSkeleton />} key={index}>
							// 	<Listing />
							// </Suspense>

							<ListingSkeleton key={index} />
						))}
					</div>
				</div>

				<div className="my-8">
					<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
						{[...Array(16)].map((_, index) => (
							<Suspense fallback={<ListingSkeleton />} key={index}>
								<Listing />
							</Suspense>

							// <ListingSkeleton key={index} />
						))}
					</div>
				</div>

				<EmblaCarousel slides={SLIDES} />

				<div className="mt-8">
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]"></div>
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,rgba(14,30,37,0.32)_0px_2px_16px_0px]"></div>
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[rgba(0,0,0,0.18)_0px_2px_4px]"></div>
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[rgba(0,0,0,0.15)_0px_2px_8px]"></div>
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0_125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]"></div>
					<div className="w-52 mt-8 aspect-square rounded-lg shadow-[0_3px_15px_7px_rgba(0,0,0,0.15)]"></div>
				</div>

				<Skeleton className="w-full  aspect-video mt-8" />

				{/* <ListingDrawer /> */}
			</section>

			<MobileFooterBar />
			<Footer />
		</div>
	);
};

export default Page;
