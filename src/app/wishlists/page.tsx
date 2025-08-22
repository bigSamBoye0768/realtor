import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import React from "react";

const Page = () => {
	return (
		<div className="min-h-[100vh] w-full">
			<div className="w-full border-b shadow fixed hidden md:block top-0 bg-white z-40">
				<Header showSearch={false} />
			</div>

			<section className="w-full h-full min-h-[100vh] max-w-screen-xl mx-auto px-4 md:pt-[70px] pb-[70px]">
				<div className=" py-7">
					<div>
						<h1 className="text-2xl font-bold mb-4 md:mt-8">Wishlists</h1>

						<div className="mt-8">
							<div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 md:gap-6">
								{[...Array(2)].map((_, index) => (
									<div key={index} className="">
										<div className="w-full grid grid-cols-2 grid-rows-2 aspect-square rounded-3xl overflow-hidden gap-1.5">
											{[...Array(4)].map((_, index) => (
												<div key={index} className="bg-gray-400"></div>
											))}
										</div>

										<div className="mt-2">
											<h3 className="font-semibold text-sm">Recently viewed</h3>
											<div className="text-black/60 font-semibold">2 weeks ago</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<MobileFooterBar />
			<div className="hidden md:block w-full">
				<Footer maxWidth="max-w-[1180px]" />
			</div>
		</div>
	);
};

export default Page;
