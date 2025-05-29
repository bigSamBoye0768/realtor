import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import Link from "next/link";
import React from "react";

// const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Page = () => {
	return (
		<div className="min-h-svh h-full w-full">
			<div className="w-full border-b shadow fixed top-0 bg-white z-50">
				<Header />
				<Categories />
			</div>

			<section className="w-full 2xl:px-20 lg:px-10 md:px-8 px-4 h-full min-h-svh max-w-screen-2xl mx-auto pb-[130px] pt-[130px] bg-white">
				<div className="my-8">
					<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
						{[...Array(16)].map((_, index) => (
							<Link href="/" className="" key={index}>
								<div className="">
									<div className="rounded-2xl overflow-hidden">
										<EmblaCarousel slides={SLIDES} />
									</div>
									<div className="text-[0.938rem] flex flex-col justify-between gap-1.5 pt-2">
										<div>
											<div className="flex gap-x-4 justify-between">
												<div className="font-bold line-clamp-1">Ghazoua, Morrocco oiyiy jgfkt ujtrir hgsj sjsj solsl kskk</div>
												<div className="whitespace-nowrap">󰀄 New </div>
											</div>
											<div className="text-black/50 font-semibold">Hosted by Sophie</div>
										</div>
										<div className="text-black/50 font-semibold">
											<strong className="text-black">₵139</strong> night
										</div>
									</div>
								</div>
							</Link>
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
			</section>

			<MobileFooterBar />
			<Footer />
		</div>
	);
};

export default Page;
