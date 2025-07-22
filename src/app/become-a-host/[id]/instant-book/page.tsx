"use client";

import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { Icons } from "./_components/icons";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

const bookOptions = [
	{ title: "Approve or decline requests", description: "Guests must ask if they can book  or rent.", icon: Icons.request },
	{ title: "Use instant Book", description: "Guests can book automatically.", icon: Icons.instant },
];

const Page = () => {
	const [selected, setSelected] = useState("");

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

	console.log(selected);

	return (
		<StepLayout onNext={handleNext} isNextLoading={isLoading} isNextDisabled={isDisabled}>
			<div className="w-full min-h-svh py-20 h-full px-4 flex items-center justify-center">
				<div className="max-w-screen-sm w-full mx-auto pt-2">
					<h1 className="text-2xl md:text-3xl font-[550] py-4 animate-list-stagger">Decide how you&apos;ll confirm reservations</h1>
					<div className="mt-3 pb-4">
						<RadioGroup.Root className="grid grid-cols-1 gap-3" onValueChange={(v) => setSelected(v)}>
							{bookOptions.map((option, i) => (
								<RadioGroup.Item
									key={i}
									value={option.title}
									className={cn(
										"w-full cursor-pointer  animate-list-stagger flex gap-3 justify-between items-start p-5 md:p-6 rounded-xl",
										selected === option.title ? "bg-white box-shadow" : "bg-[#F7F7F7] text-black/70"
									)}
									style={{ animationDelay: `${500 + i * 20}ms` }}
								>
									<div className="w-full max-w-sm">
										<div className="text-left font-semibold text-base pb-1">{option.title}</div>
										<p className="text-sm  text-left">{option.description}</p>
									</div>
									<div className="flex items-center justify-center">{option.icon()}</div>
								</RadioGroup.Item>
							))}
						</RadioGroup.Root>
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
