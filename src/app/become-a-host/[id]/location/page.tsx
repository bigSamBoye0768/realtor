"use client";

import React from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { toast } from "sonner";
import { api } from "@/lib/axios-instance";

const Page = () => {
	const pathname = usePathname();
	const navigations = useStepNavigation();
	const router = useRouter();
	const listingId = pathname.split("/")[2];


	let disableAll: (v: boolean) => void = () => {};
	let setButtonLoading: (b: "next" | "back" | "save" | null) => void = () => {};

	const handleNext = async () => {
		disableAll(true);
		setButtonLoading("next");

		try {
			await api.patch(`/listings/${listingId}`, {
				currentStep: navigations.next,
			});

			if (navigations.next) {
				router.push(`/become-a-host/${listingId}/${navigations.next}`);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log(err);
			setButtonLoading(null);
			disableAll(false);
			toast.error(err?.response?.data?.error || err.message || "Oops, something went wrong");
		}
	};

	return (
		<StepLayout
			onNext={handleNext}
			onMount={(setDisabled, setLoadingButton) => {
				disableAll = setDisabled;
				setButtonLoading = setLoadingButton;
			}}
			canProceed={true}
		>
			<div>Location</div>;
		</StepLayout>
	);
};

export default Page;
