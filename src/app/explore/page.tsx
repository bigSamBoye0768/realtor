import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const Page = () => {
	return (
		<div className="min-h-svh h-full w-full">
			<div className="w-full border-b shadow fixed top-0  px-4 bg-white z-50">
				<Header />
				{/* //   <Categories category={categories} /> */}
			</div>

			<section className="w-full h-full min-h-svh max-w-screen-xl mx-auto pb-[130px] pt-[130px] bg-green-300">
				hello
				{/* <div className="px-0 lg:px-4">
		  <BannersCarousel />
		  </div> */}
				{/* <div className="my-8 px-4">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-6">
			  {[...Array(16)].map((_, index) => (
				<ProductCard key={index}/>
			  ))}
			</div>
		  </div> */}
			</section>

			{/* <MobileFooterBar /> */}
			<Footer />
		</div>
	);
};

export default Page;
