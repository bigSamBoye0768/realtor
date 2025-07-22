"use client";

import React, { useState } from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

const Page = () => {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);
	const navigations = useStepNavigation();
	const router = useRouter();

	const handleNext = async () => {
		setIsLoading(true);
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
		<StepLayout onNext={handleNext} isNextLoading={isLoading}>
			<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
				<div className="w-full py-6">
					<div className="w-full pb-3 animate-list-stagger">
						<h1 className="font-semibold text-2xl md:text-3xl">Now, let&apos;s give your place a title</h1>
						<p className="text-base font-medium text-black/70 ">Short titles work best. Have fun with it--you can always change it later.</p>
					</div>
					<div className="w-full mt-2 animate-list-stagger delay-200">
						<textarea className="bg-transparent outline-none focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px] focus-visible:border-none border font-semibold text-base md:text-xl border-black rounded-xl w-full min-h-44 p-3 md:p-4"></textarea>
					</div>
					<div className=" animate-list-stagger delay-500">0/32</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
