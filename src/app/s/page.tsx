// import React from "react";

// const Page = () => {
// 	return (
// 		<div className="flex items-start">
// 			<div className="w-[60%] h-[2000px] bg-red-200">Main content</div>
// 			<div className="w-[40%] h-screen sticky top-0 bg-green-300">Sticky sidebar</div>
// 		</div>
// 	);
// };

// export default Page;

import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import { Button } from "@/components/ui/button";
import { ListingSkeleton } from "@/components/listing";

const Page = () => {
	return (
		<div className="min-h-svh w-full">
			<div className="w-full border-b shadow fixed left-0 right-0 top-0 bg-white z-[100]">
				<Header />
				<div className="w-full md:border-t">
					<div className="flex items-center w-full max-w-screen-3xl mx-auto 2xl:px-20 lg:px-10 md:px-8 px-0">
						<div className="flex-1 overflow-hidden">
							<Categories />
						</div>
						<div className="md:flex pl-6 hidden">
							<Button>Filter</Button>
							<Button>Filter</Button>
						</div>
					</div>
				</div>
			</div>

			<section className="w-full h-full min-h-svh mx-auto pt-[calc(70px_+_65px)] md:pt-[calc(80px_+_65px)] bg-white">
				<div className="w-full flex items-start h-full">
					<div className="md:w-[60%] w-full min-h-svh bg-fuchsia-200 2xl:px-20 lg:px-10 md:px-8 px-4 pt-10 pb-20">
						<div className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
							{[...Array(16)].map((_, index) => (
								// <Suspense fallback={<ListingSkeleton />} key={index}>
								// 	<Listing />
								// </Suspense>

								<ListingSkeleton key={index} />
							))}
						</div>
					</div>
					<div className="bg-amber-200 w-[40%] h-[calc(100vh_-_(80px_+_65px))] sticky top-[calc(80px_+_65px)] hidden md:block"></div>
				</div>
			</section>

			<MobileFooterBar />
			<Footer />
		</div>
	);
};

export default Page;
