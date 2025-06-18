import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileFooterBar } from "@/components/mobile-footer-bar";
import { Button } from "@/components/ui/button";
// import { Filter } from "@/components/filter";

const Page = () => {
	return (
		<div className="min-h-svh h-full w-full">
			<div className="w-full border-b shadow fixed top-0 bg-white z-[100]">
				<Header />
				<div className="w-full md:border-t">
					<div className="flex items-center w-full max-w-screen-3xl mx-auto 2xl:px-20 lg:px-10 md:px-8 px-0">
						<div className="flex-1 overflow-hidden">
							<Categories />
						</div>
						<div className="md:flex pl-10 hidden">
							{/* <Filter
								trigger={
									<Button variant="outline" className="rounded-full h-10 font-semibold text-sm shadow-none">
										Filter
									</Button>
								}
							/> */}
							<Button>Filter</Button>
						</div>
					</div>
				</div>
			</div>

			<section className="w-full relative 2xl:px-20 lg:px-10 md:px-8 px-4 h-full min-h-svh max-w-screen-3xl mx-auto pt-[calc(70px_+_65px)] md:pt-[calc(80px_+_65px)] pb-[130px] bg-white">
				<div className="mt-4 md:mt-6 mark-b">
					<div className="w-full h-full mark">
						<div className="mark-b grid grid-cols-4 grid-rows-2 min-h-[300px] max-h-[calc(60vh_-_64px)] h-full gap-2">
							<div className="mark w-full h-full col-span-2 row-span-2"></div>
							<div className="mark w-full h-full"></div>
							<div className="mark w-full h-full"></div>
							<div className="mark w-full h-full"></div>
							<div className="mark w-full h-full"></div>
						</div>
					</div>
				</div>
			</section>

			<MobileFooterBar />
			<Footer />
		</div>
	);
};

export default Page;
