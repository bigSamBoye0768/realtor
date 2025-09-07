"use client";

import React, { useEffect } from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios-instance";
import { toast } from "sonner";

type FormData = {
	title: string;
};

const MAX_LENGTH = 32;

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
		defaultValues: { title: "" },
	});

	const title = watch("title");

	// 🔹 Prefill with existing listing data
	useEffect(() => {
		const fetchListing = async () => {
			try {
				const res = await api.get(`/listings/${listingId}`);
				if (res.data?.title) {
					reset({ title: res.data.title });
				}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				console.error("Failed to fetch listing", err);
				toast.error("Could not load saved data");
			}
		};
		if (listingId) fetchListing();
	}, [listingId, reset]);

	// 🔹 Autosave on typing
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (title) {
				api.patch(`/listings/${listingId}`, { title }).catch((err) => {
					console.error("Autosave failed", err);
				});
			}
		}, 800); // debounce

		return () => clearTimeout(timeout);
	}, [title, listingId]);

	const onSubmit = async (data: FormData) => {
		try {
			await api.patch(`/listings/${listingId}`, {
				title: data.title,
				currentStep: navigations.next, // update progress
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
						<div className="w-full pb-3 animate-list-stagger">
							<h1 className="font-semibold text-2xl md:text-3xl">Now, let&apos;s give your place a title</h1>
							<p className="text-base font-medium text-black/70">Short titles work best. Have fun with it—you can always change it later.</p>
						</div>

						<div className="w-full mt-2 animate-list-stagger delay-200">
							<textarea
								{...register("title", {
									required: "Title is required",
									maxLength: { value: MAX_LENGTH, message: `Max ${MAX_LENGTH} characters` },
								})}
								maxLength={MAX_LENGTH} // ⬅️ Prevent typing beyond limit
								className={cn(
									"outline-none border font-semibold text-base md:text-xl rounded-xl w-full min-h-44 p-3 md:p-4 transition",
									errors.title
										? "border-red-500 bg-red-50 focus-visible:shadow-[rgb(220,38,38)_0px_0px_0px_2px]"
										: "border-black bg-transparent focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px]"
								)}
							/>
							{errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
						</div>

						<div className={cn("animate-list-stagger delay-500 mt-1", errors.title ? "text-red-600" : "text-black/70")}>
							{title?.length || 0}/{MAX_LENGTH}
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
// import { usePathname, useRouter } from "next/navigation";
// import { useStepNavigation } from "@/hooks/use-step-navigation";
// import { api } from "@/lib/axios-instance";
// import { toast } from "sonner";

// const Page = () => {
// 	const pathname = usePathname();
// 	const listingId = pathname.split("/")[2];
// 	const [isLoading, setIsLoading] = useState(false);
// 	const navigations = useStepNavigation();
// 	const router = useRouter();

// 	const [title, setTitle] = useState("");

// 	const handleNext = async () => {
// 		if (!title.trim()) {
// 			toast.error("Please enter a title for your place");
// 			return;
// 		  }

// 		setIsLoading(true);
// 		try {
// 			await api.patch(`/listings/${listingId}`, {
// 				title,
// 							currentStep: navigations.next,
// 						});

// 			if (navigations.next) {
// 				router.push(`/become-a-host/${listingId}/${navigations.next}`);
// 			}
// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 		} catch (err: any) {
// 			console.error(err);
//       toast.error(err?.response?.data?.error || err.message || "Something went wrong");
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	return (
// 		<StepLayout onNext={handleNext} isNextLoading={isLoading}>
// 			<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
// 				<div className="w-full py-6">
// 					<div className="w-full pb-3 animate-list-stagger">
// 						<h1 className="font-semibold text-2xl md:text-3xl">Now, let&apos;s give your place a title</h1>
// 						<p className="text-base font-medium text-black/70 ">Short titles work best. Have fun with it--you can always change it later.</p>
// 					</div>
// 					<div className="w-full mt-2 animate-list-stagger delay-200">
// 						<textarea onChange={(e) => setTitle(e.target.value)} className="bg-transparent outline-none focus-visible:shadow-[rgb(34,34,34)_0px_0px_0px_2px] focus-visible:border-none border font-semibold text-base md:text-xl border-black rounded-xl w-full min-h-44 p-3 md:p-4"></textarea>
// 					</div>
// 					<div className=" animate-list-stagger delay-500">0/32</div>
// 				</div>
// 			</div>
// 		</StepLayout>
// 	);
// };

// export default Page;
