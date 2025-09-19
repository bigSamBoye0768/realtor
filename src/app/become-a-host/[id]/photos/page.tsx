"use client";

import { usePathname, useRouter } from "next/navigation";
import StepLayout from "../../_components/stepLayout";
import { Upload } from "./_components/upload";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import { api } from "@/lib/axios-instance";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
	const pathname = usePathname();
	const navigations = useStepNavigation();
	const router = useRouter();
	const listingId = pathname.split("/")[2];

	const { data, isLoading } = useQuery({
		queryKey: ["listing-photos", listingId],
		queryFn: async () => {
			const res = await api.get(`/listings/photos?listingId=${listingId}`);
			return res.data;
		},
	});

	let disableAll: (v: boolean) => void = () => {};
	let setButtonLoading: (b: "next" | "back" | "save" | null) => void = () => {};

	const handleNext = async () => {
		disableAll(true);
		setButtonLoading("next");
		try {
			if (navigations.next) {
				router.push(`/become-a-host/${listingId}/${navigations.next}`);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setButtonLoading(null);
			disableAll(false);
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleImageUpload = async (file: File[]) => {};

	return (
		<StepLayout
			onNext={handleNext}
			onMount={(setDisabled, setLoadingButton) => {
				disableAll = setDisabled;
				setButtonLoading = setLoadingButton;
			}}
			isPrefetching={isLoading}
		>
			<div className="px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full">
				<div className="w-full py-6">
					<div className="w-full pb-3 animate-list-stagger">
						<h1 className="font-semibold text-2xl md:text-3xl">Add some photos of your barn</h1>
						<p className="text-base font-medium text-black/70 ">You&apos;ll need 5 photos to get started. You can add more or make changes later.</p>
					</div>
					<div className="w-full mt-2">
						<Upload listingId={listingId} initialPhotos={data ?? []} />
					</div>
					{/* <div className=" animate-list-stagger delay-500">0/32</div> */}
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;
