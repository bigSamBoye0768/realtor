"use client";

import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
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

	const [price, setPrice] = useState("50");

	const inputRef = useRef<HTMLInputElement>(null);
	const [showButton, setShowButton] = useState(true);

	const handleButtonClick = () => {
		setShowButton(false);
		inputRef.current?.focus();
	};

	const handleFocus = () => {
		setShowButton(false);
	};

	const handleBlur = () => {
		setShowButton(true);
	};

	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(e.target.value);
	};

	return (
		<StepLayout onNext={handleNext} isNextLoading={isLoading} isNextDisabled={isDisabled}>
			<div className="h-[100vh] py-20 px-4 min-h-svh">
				<div className="max-w-2xl mx-auto w-full h-full">
					<div className="h-full w-full">
						<div className="w-full h-full flex flex-col justify-between">
							<div className="">
								<div>
									<h1 className="font-semibold text-2xl md:text-3xl">Now, set a weekday base price</h1>
									<p className="text-base font-[550] text-black/60 ">Tip: $40. You’ll set a weekend price next. </p>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="inline-block relative">
									<div className="font-bold text-7xl md:text-9xl relative">
										<div className="flex flex-nowrap text-inherit">
											<span>₵</span>
											<span className="invisible">{price}</span>
										</div>
										<input
											type="text"
											className=" w-full bg-transparent h-full top-0 text-right absolute border-none outline-none"
											value={price}
											onChange={handlePriceChange}
											ref={inputRef}
											onBlur={handleBlur}
											onFocus={handleFocus}
										/>
									</div>

									{showButton && (
										<div className="absolute bottom-0 -right-8">
											<Button variant="outline" className="rounded-full p-0 aspect-square h-8 w-8" onClick={handleButtonClick}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 32 32"
													aria-label="Edit"
													role="img"
													focusable="false"
													style={{ display: "block", height: "16px", width: "16px" }}
												>
													<path d="m18.23 7.35 6.42 6.42L10 28.4c-.38.38-.88.59-1.41.59H3v-5.59c0-.52.21-1.04.59-1.41L18.23 7.35zm9.98-3.56a4.54 4.54 0 0 0-6.42 0l-1.44 1.44 6.42 6.42 1.44-1.44a4.54 4.54 0 0 0 0-6.42z"></path>
												</svg>
											</Button>
										</div>
									)}
								</div>
							</div>
							<div className=""></div>
						</div>
					</div>
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
