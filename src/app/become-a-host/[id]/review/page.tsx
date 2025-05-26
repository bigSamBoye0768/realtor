import Image from "next/image";
import React from "react";
import { Icons } from "./_components/icons";

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
	return (
		<div className=" px-4 max-w-4xl mx-auto w-full min-h-svh py-20 h-full flex items-center justify-center">
			<div className="w-full py-4">
				<h1 className="font-[550] text-4xl">Review your listing</h1>
				<p className="py-3 text-base mb-2 tex-black/70">Here&apos;s what we&apos;ll show to guests. Make sure everything looks good.</p>
				<div className="flex flex-col md:flex-row">
					<div className=" w-full md:w-[42%]">
						<div className="rounded-xl p-4 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
							<div className="relative w-full aspect-square rounded-xl overflow-hidden">
								<Image src="/assets/photos/522414603-accra.jpg" alt={`522414603-accra.jpg`} fill className="aspect-square object-cover" />
								<div className="absolute top-4 left-4 bg-white text-sm p-1 rounded-md font-bold">Show preview</div>
							</div>
							<div className="flex gap-x-2 mt-4 justify-between">
								<div className="w-full max-w-[270px]">
									<div className="font-bold line-clamp-1 text-sm">Lorem ipsum dolor sit amet consec adipis elit. Alias, temporibus.</div>
									<div className="text-sm pt-1">₵22 / month</div>
								</div>
								<div className="whitespace-nowrap text-sm">New 󰀄</div>
							</div>
						</div>
					</div>
					<div className=" flex-1 pt-7 md:pt-0 md:pl-16">
						<h2 className="text-xl font-semibold pb-5">What&apos;s next?</h2>
						<div>
							{next.map((item, i) => (
								<div key={i} className="flex gap-x-4 mb-4">
									<div>{item.icon()}</div>
									<div>
										<h2 className="font-semibold text-base">{item.title}</h2>
										<p className="text-sm tex-black/70">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
// py-16
