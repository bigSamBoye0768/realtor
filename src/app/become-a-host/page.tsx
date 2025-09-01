import Image from "next/image";
import React from "react";
import { BahOptions } from "./_components/bah-options";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import StepLayout from "./_components/stepLayout";

const Page = async () => {
	const user = await getCurrentUser();
	if (!user || !user.isHost) redirect("/explore");

	return (
		<StepLayout>
			<div className="w-full min-h-svh py-20">
				<div className="become-a-host-create-actual mt-2 h-full">
					<div className="become-a-host-create-actual-container w-full max-w-[620px] mx-auto">
						<h1 className="bah-wb-header text-[26px] md:text-[32px] font-semibold text-neutral-900 pt-10 md:pt-0 mb-[10px] md:mb-4">
							Welcome back <span className="capitalize">{`, ${user.firstName}`}</span>
						</h1>

						<div className="uncomplete-listings w-full">
							<h2 className="ucl-header font-semibold text-[22px] mt-[25px] mb-2 text-left text-neutral-700">Finish your listing</h2>

							<button className="uncompleted-listing w-full px-2 py-4 md:px-[18px] md:py-6 border border-gray-300 rounded-xl mt-3 cursor-pointer transition ease-in-out hover:bg-neutral-100 hover:border-black">
								<div className="uncompleted-listing-wrap flex items-center gap-[14px]">
									<div className="ucl-image">
										<Image
											src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
											alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
											className="aspect-square w-[45px] h-[45px] object-cover rounded"
											width={45}
											height={45}
										/>
									</div>
									<div className="ucl-started text-[16px] font-semibold text-neutral-700">Your Apartment listing started July 22, 2023</div>
								</div>
							</button>

							<button className="uncompleted-listing w-full px-2 py-4 md:px-[18px] md:py-6 border border-gray-300 rounded-xl mt-3 cursor-pointer transition ease-in-out hover:bg-neutral-100 hover:border-black">
								<div className="uncompleted-listing-wrap flex items-center gap-[14px]">
									<div className="ucl-image">
										<Image
											src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
											alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
											className="aspect-square w-[45px] h-[45px] object-cover rounded"
											width={45}
											height={45}
										/>{" "}
									</div>
									<div className="ucl-started text-[16px] font-semibold text-neutral-700">Your Unique space listing started July 22, 2023</div>
								</div>
							</button>
						</div>

						<BahOptions />
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
