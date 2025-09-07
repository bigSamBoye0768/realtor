"use client";

import React, { useEffect } from "react";
import StepLayout from "../../_components/stepLayout";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios-instance";
import { toast } from "sonner";

type FormData = {
	description: string;
};

const MAX_LENGTH = 500;

const Page = () => {
	const pathname = usePathname();
	const listingId = pathname.split("/")[2];
	const router = useRouter();
	const navigations = useStepNavigation();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		defaultValues: { description: "" },
	});

	const description = watch("description");

	// 🔹 Prefill with saved data
	useEffect(() => {
		const fetchListing = async () => {
			try {
				const res = await api.get(`/listings/${listingId}`);
				if (res.data?.description) {
					reset({ description: res.data.description });
				}
			} catch (err) {
				console.error("Failed to fetch listing", err);
				toast.error("Could not load saved data");
			}
		};
		if (listingId) fetchListing();
	}, [listingId, reset]);

	// 🔹 Autosave on typing
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (description) {
				api.patch(`/listings/${listingId}`, { description }).catch((err) => {
					console.error("Autosave failed", err);
				});
			}
		}, 800); // debounce

		return () => clearTimeout(timeout);
	}, [description, listingId]);

	const onSubmit = async (data: FormData) => {
		try {
			await api.patch(`/listings/${listingId}`, {
				description: data.description,
				currentStep: navigations.next,
			});

			if (navigations.next) {
				router.push(`/become-a-host/${listingId}/${navigations.next}`);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.error(err);
			toast.error(err?.response?.data?.error || err.message || "Something went wrong");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StepLayout onNext={handleSubmit(onSubmit)} isNextLoading={isSubmitting}>
				<div className="px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
					<div className="w-full py-6">
						<div className="w-full pb-3">
							<h1 className="font-semibold text-2xl md:text-3xl">Create your description</h1>
							<p className="text-base font-medium text-black/70">Share what makes your place special.</p>
						</div>

						<div className="w-full mt-2 animate-list-stagger delay-200">
							<textarea
								{...register("description", {
									required: "Description is required",
									maxLength: {
										value: MAX_LENGTH,
										message: `Max ${MAX_LENGTH} characters`,
									},
								})}
								maxLength={MAX_LENGTH}
								className={cn(
									"outline-none border font-medium text-sm md:text-base rounded-xl w-full min-h-60 p-3 md:p-4 transition",
									errors.description
										? "border-red-500 bg-red-50 focus-visible:shadow-[rgb(220,38,38)_0px_0px_0px_2px]"
										: "border-black bg-transparent focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px]"
								)}
								placeholder="Describe your place..."
							/>
							{errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
						</div>

						<div className={cn("animate-list-stagger delay-500 mt-1", errors.description ? "text-red-600" : "text-black/70")}>
							{description?.length || 0}/{MAX_LENGTH}
						</div>
					</div>
				</div>
			</StepLayout>
		</form>
	);
};

export default Page;

// "use client";

// import React, { useState } from "react";
// import StepLayout from "../../_components/stepLayout";
// import { useStepNavigation } from "@/hooks/use-step-navigation";
// import { usePathname, useRouter } from "next/navigation";

// const Page = () => {
// 	const pathname = usePathname();
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [isDisabled, setIsDisabled] = useState(false);
// 	const navigations = useStepNavigation();
// 	const router = useRouter();

// 	const handleNext = async () => {
// 		setIsLoading(true);
// 		setIsDisabled(true);

// 		try {
// 			if (navigations.next) {
// 				router.push(`/become-a-host/${pathname.split("/")[2]}/${navigations.next}`);
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		} finally {
// 			// optional: only reset loading if navigation failed
// 		}
// 	};

// 	return (
// 		<StepLayout onNext={handleNext} isNextLoading={isLoading} isNextDisabled={isDisabled}>
// 			<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
// 				<div className="w-full py-6">
// 					<div className="w-full pb-3">
// 						<h1 className="font-semibold text-2xl md:text-3xl">Create your description</h1>
// 						<p className="text-base font-medium text-black/70 ">Share what makes your place special.</p>
// 					</div>
// 					<div className="w-full mt-2 animate-list-stagger delay-200">
// 						<textarea
// 							className="bg-transparent outline-none focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px] focus-visible:border-none border font-medium text-sm md:text-base border-black rounded-xl w-full min-h-60 p-3 md:p-4"
// 							autoCorrect="false"
// 						></textarea>
// 					</div>
// 					<div className="animate-list-stagger delay-500">0/500</div>
// 				</div>
// 			</div>
// 		</StepLayout>
// 	);
// };

// export default Page;
