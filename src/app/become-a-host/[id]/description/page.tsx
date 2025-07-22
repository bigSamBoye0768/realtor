"use client";

import React, { useState } from "react";
import StepLayout from "../../_components/stepLayout";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { usePathname, useRouter } from "next/navigation";

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
			<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
				<div className="w-full py-6">
					<div className="w-full pb-3">
						<h1 className="font-semibold text-2xl md:text-3xl">Create your description</h1>
						<p className="text-base font-medium text-black/70 ">Share what makes your place special.</p>
					</div>
					<div className="w-full mt-2 animate-list-stagger delay-200">
						<textarea
							className="bg-transparent outline-none focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px] focus-visible:border-none border font-medium text-sm md:text-base border-black rounded-xl w-full min-h-60 p-3 md:p-4"
							autoCorrect="false"
						></textarea>
					</div>
					<div className="animate-list-stagger delay-500">0/500</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
