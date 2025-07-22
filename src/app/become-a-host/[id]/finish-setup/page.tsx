"use client";

import React, { useState } from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";

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
			<div className=" px-4 max-w-6xl mx-auto w-full min-h-svh py-20 h-full flex items-center justify-center">
				<div className="flex flex-col-reverse md:flex-row py-4">
					<div className=" font-[550] text-sm md:text-base flex-1 flex flex-col justify-center items-start">
						<h3>Step 3</h3>
						<h1 className="md:text-4xl py-4 text-2xl">Finish up and publish</h1>
						<p className="font-medium">Finally, you&apos;ll choose booking settings, set up pricing, and publish your listing.</p>
					</div>
					<div className=" flex-1">
						<video
							className="w-full h-full"
							autoPlay
							muted
							playsInline
							loop={false}
							controls={false}
							src="/assets/videos/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4"
						></video>
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
