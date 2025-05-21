import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

// const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Page = () => {
	return (
		<div className="min-h-svh h-full w-full">
			<div className="w-full border-b shadow fixed top-0  px-4 bg-white z-50">
				<Header />
				{/* //   <Categories category={categories} /> */}
			</div>

			<section className="w-full h-full min-h-svh max-w-screen-xl mx-auto pb-[130px] pt-[130px] bg-green-300">
				<div>hello</div>

				{/* <div className="my-8 px-4">
					<div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
						{[...Array(16)].map((_, index) => (
							<div key={index}>
								<EmblaCarousel slides={SLIDES} />
							</div>
						))}
					</div>
				</div> */}

				<EmblaCarousel slides={SLIDES} />
			</section>

			{/* <MobileFooterBar /> */}
			<Footer />
		</div>
	);
};

export default Page;
