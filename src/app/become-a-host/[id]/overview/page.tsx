"use client";

import Image from "next/image";
import React, { useState } from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

const overview = [
	{
		title: "Tell us about your place",
		description: "Share some basic info, like where it is and how many guests can stay.",
		image: "/assets/photos/bed.webp",
	},
	{
		title: "Make it stand out",
		description: "Add 5 or more photos plus a title and description—we'll help you out.",
		image: "/assets/photos/decor.webp",
	},
	{
		title: "Finish up and publish",
		description: "Choose if you would like to start with an experienced guest, set a starting price, and publish your listing.",
		image: "/assets/photos/door.webp",
	},
];

const Page = () => {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const navigations = useStepNavigation();
	const router = useRouter();

	const handleNext = async () => {
		setIsLoading(true);
		setIsDisabled(true);

		try {
			console.log("inside", isLoading);

			if (navigations.next) {
				router.push(`/become-a-host/${pathname.split("/")[2]}/${navigations.next}`);
			}
		} catch (err) {
			console.log(err);
		} finally {
			// optional: only reset loading if navigation failed
		}
	};

	return (
		<StepLayout onNext={handleNext} isNextLoading={isLoading} isNextDisabled={isDisabled}>
			<div className=" px-4 max-w-7xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
				<div className="flex flex-col md:flex-row py-4 md:gap-4">
					<div className="font-[550] flex-1 flex flex-col justify-center items-start">
						<h1 className=" lg:text-5xl md:text-4xl py-4 text-2xl  md:max-w-lg w-full">It’s easy to get started on nestQuest</h1>
					</div>
					<div className="flex-1">
						{overview.map((item, i) => (
							<div key={i} className="flex flex-nowrap border-b last:border-b-0 py-5 md:py-8 gap-x-3">
								<div className="flex items-baseline gap-x-3 flex-nowrap">
									<div className="font-semibold text-lg md:text-xl">{i + 1}</div>
									<div className="flex-1">
										<h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
										<p className="text-sm md:text-base pt-1 text-black/70">{item.description}</p>
									</div>
								</div>
								<div className="relative aspect-square w-20 h-20 md:w-32 md:h-32">
									<Image src={item.image} alt={item.title} className="object-cover" fill />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
