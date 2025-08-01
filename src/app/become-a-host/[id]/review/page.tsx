"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Icons } from "./_components/icons";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

const next = [
	{
		title: "Confirm a few details and publish",
		description: "We’ll let you know if you need to verify your identity or register with the local government.",
		icon: Icons.confirm,
	},
	{
		title: "Set up your calendar",
		description: "Choose which dates your listing is available. It will be visible 24 hours after you publish.",
		icon: Icons.calendar,
	},
	{
		title: "Adjust your settings",
		description: "Set house rules, select a cancellation policy, choose how guests book, and more.",
		icon: Icons.adjust,
	},
];

const Page = () => {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
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
			<div className=" px-4 max-w-4xl mx-auto w-full min-h-svh py-20 h-full flex items-center justify-center">
				<div className="w-full py-4">
					<h1 className="font-[550] text-4xl animate-list-stagger">Review your listing</h1>
					<p className="py-3 text-base mb-2 tex-black/70 animate-list-stagger">
						Here&apos;s what we&apos;ll show to guests. Make sure everything looks good.
					</p>
					<div className="flex flex-col md:flex-row">
						<div className=" w-full md:w-[42%]">
							<div className="rounded-xl  animate-list-stagger delay-[300ms] p-4 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
								<div className="relative w-full aspect-square rounded-xl overflow-hidden">
									<Image src="/assets/photos/522414603-accra.jpg" alt={`522414603-accra.jpg`} fill className="aspect-square object-cover" />
									<div className="absolute top-4 left-4 bg-white text-sm p-1 rounded-md font-bold">Show preview</div>
								</div>
								<div className="flex gap-x-2 mt-4 justify-between">
									<div className="w-full max-w-[270px]">
										<div className="font-bold line-clamp-1 text-sm">Lorem ipsum dolor sit amet consec adipis elit. Alias, temporibus.</div>
										<div className="text-sm pt-1">
											<strong className="">₵139</strong> / month
										</div>
									</div>
									<div className="whitespace-nowrap text-sm">New 󰀄</div>
								</div>
							</div>
						</div>
						<div className=" flex-1 pt-7 md:pt-0 md:pl-16">
							<h2 className="text-xl font-semibold pb-5">What&apos;s next?</h2>
							<div>
								{next.map((item, i) => (
									<div key={i} className="flex gap-x-5 mb-5 animate-list-stagger" style={{ animationDelay: `${600 + i * 10}ms` }}>
										<div>{item.icon()}</div>
										<div>
											<h2 className="font-semibold text-lg">{item.title}</h2>
											<p className="text-sm tex-black/60">{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
// py-16
