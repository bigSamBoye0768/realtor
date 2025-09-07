"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback } from "react";
import StepLayout from "../../_components/stepLayout";
import { usePathname, useRouter } from "next/navigation";
import { useStepNavigation } from "@/hooks/use-step-navigation";
import debounce from "lodash.debounce";
import { api } from "@/lib/axios-instance";

interface FloorPlan {
	guests: number;
	bedrooms: number;
	beds: number;
}

type CounterType = keyof FloorPlan;

interface CounterConfig {
	type: CounterType;
	label: string;
	minValue: number;
	maxValue: number;
}

const counterConfig: CounterConfig[] = [
	{ type: "guests", label: "Guests", minValue: 1, maxValue: 25 },
	{ type: "bedrooms", label: "Bedrooms", minValue: 0, maxValue: 50 },
	{ type: "beds", label: "Beds", minValue: 0, maxValue: 50 },
];

const Page = () => {
	const pathname = usePathname();
	const router = useRouter();
	const navigations = useStepNavigation();
	const listingId = pathname.split("/")[2];

	const [counts, setCounts] = useState<FloorPlan>({
		guests: 1,
		bedrooms: 0,
		beds: 0,
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	// ✅ Prefill existing data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await api.get(`/listings/${listingId}`);
				if (res.data) {
					setCounts({
						guests: res.data.guests ?? 1,
						bedrooms: res.data.bedrooms ?? 0,
						beds: res.data.beds ?? 0,
					});
				}
			} catch (err) {
				console.error("Failed to fetch listing:", err);
			}
		};
		fetchData();
	}, [listingId]);

	// ✅ Debounced autosave
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSave = useCallback(
		debounce(async (newCounts: FloorPlan) => {
			try {
				setIsSaving(true);
				await api.patch(`/listings/${listingId}`, {
					...newCounts,
					currentStep: navigations.current,
				});
			} catch (err) {
				console.error("Autosave failed:", err);
			} finally {
				setIsSaving(false);
			}
		}, 500),
		[listingId, navigations.current]
	);

	useEffect(() => {
		if (listingId) {
			debouncedSave(counts);
		}
	}, [counts, listingId, debouncedSave]);

	// ✅ Step navigation
	const handleNext = async () => {
		setIsLoading(true);
		try {
			if (navigations.next) {
				router.push(`/become-a-host/${listingId}/${navigations.next}`);
			}
		} catch (err) {
			console.error(err);
		}
	};

	// ✅ Counter handlers
	const increment = (type: CounterType, maxValue: number) => {
		setCounts((prev) => {
			if (prev[type] >= maxValue) return prev;
			return { ...prev, [type]: prev[type] + 1 };
		});
	};

	const decrement = (type: CounterType, minValue: number) => {
		setCounts((prev) => {
			if (prev[type] <= minValue) return prev;
			return { ...prev, [type]: prev[type] - 1 };
		});
	};

	return (
		<StepLayout onNext={handleNext} isNextLoading={isLoading}>
			<div className="px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
				<div className="w-full py-6">
					{/* ✅ Header */}
					<div className="w-full pb-2 md:pb-3">
						<h1 className="font-semibold text-2xl animate-list-stagger md:text-3xl">Let&apos;s start with the basics</h1>
					</div>

					<div className="w-full md:mt-4">
						<h3 className="font-semibold animate-list-stagger text-lg py-2">How many people can stay here?</h3>
						<div className="mt-2 md:mt-0">
							{counterConfig.map(({ type, label, minValue, maxValue }, i) => (
								<div
									className="flex justify-between items-center flex-nowrap gap-x-3 text-base border-b last:border-b-0 py-4 animate-list-stagger"
									key={type}
									style={{ animationDelay: `${500 + i * 20}ms` }}
								>
									<div>{label}</div>
									<div className="flex items-center basis-[120px]">
										<Button
											variant="outline"
											size="icon"
											className="rounded-full disabled:cursor-not-allowed"
											disabled={counts[type] === minValue}
											onClick={() => decrement(type, minValue)}
										>
											{Icons.minus()}
										</Button>
										<div className="flex-1 text-center">{counts[type]}</div>
										<Button
											variant="outline"
											size="icon"
											className="rounded-full disabled:cursor-not-allowed"
											disabled={counts[type] === maxValue}
											onClick={() => increment(type, maxValue)}
										>
											{Icons.plus()}
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* ✅ Saving indicator beneath everything */}
					{isSaving && <div className="text-sm text-gray-500 mt-4 animate-pulse">Saving...</div>}
				</div>
			</div>
		</StepLayout>
	);
};

export default Page;

// "use client";

// import { Icons } from "@/components/icons";
// import { Button } from "@/components/ui/button";
// import React, { useState } from "react";
// import StepLayout from "../../_components/stepLayout";
// import { usePathname, useRouter } from "next/navigation";
// import { useStepNavigation } from "@/hooks/use-step-navigation";

// interface FloorPlan {
// 	guests: number;
// 	bedrooms: number;
// 	beds: number;
// }

// type CounterType = keyof FloorPlan;

// interface CounterConfig {
// 	type: CounterType;
// 	label: string;
// 	minValue: number;
// 	maxValue: number;
// }

// const Page = () => {
// 	const pathname = usePathname();
// 	const [isLoading, setIsLoading] = useState(false);
// 	const navigations = useStepNavigation();
// 	const router = useRouter();

// 	const handleNext = async () => {
// 		setIsLoading(true);
// 		try {
// 			console.log("inside", isLoading);

// 			if (navigations.next) {
// 				router.push(`/become-a-host/${pathname.split("/")[2]}/${navigations.next}`);
// 			}
// 		} catch (err) {
// 			console.log(err);
// 		} finally {
// 			// optional: only reset loading if navigation failed
// 		}
// 	};

// 	const [counts, setCounts] = useState<FloorPlan>({ guests: 1, bedrooms: 0, beds: 0 });

// 	const counterConfig: CounterConfig[] = [
// 		{ type: "guests", label: "Guests", minValue: 1, maxValue: 25 },
// 		{ type: "bedrooms", label: "Bedrooms", minValue: 0, maxValue: 50 },
// 		{ type: "beds", label: "Beds", minValue: 0, maxValue: 50 },
// 	];

// 	const increment = (type: CounterType, maxValue: number) => {
// 		if (counts[type] >= maxValue) return;

// 		setCounts((prev) => ({
// 			...prev,
// 			[type]: prev[type] + 1,
// 		}));
// 	};

// 	const decrement = (type: CounterType, minValue: number) => {
// 		if (counts[type] <= minValue) return;

// 		setCounts((prev) => ({
// 			...prev,
// 			[type]: prev[type] - 1,
// 		}));
// 	};

// 	console.log(counts);

// 	return (
// 		<StepLayout onNext={handleNext} isNextLoading={isLoading}>
// 			<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
// 				<div className="w-full py-6">
// 					<div className="w-full pb-2 md:pb-3">
// 						<h1 className="font-semibold text-2xl animate-list-stagger md:text-3xl">Let&apos;s start with the basics </h1>
// 					</div>
// 					<div className="w-full md:mt-4">
// 						<h3 className="font-semibold animate-list-stagger text-lg py-2">How many people can stay here?</h3>
// 						<div className="mt-2 md:mt-0">
// 							{counterConfig.map(({ type, label, minValue, maxValue }, i) => (
// 								<div
// 									className="flex justify-between items-center flex-nowrap gap-x-3 text-base border-b last:border-b-0 py-4 animate-list-stagger"
// 									key={type}
// 									style={{ animationDelay: `${500 + i * 20}ms` }}
// 								>
// 									<div>{label}</div>
// 									<div className="flex items-center basis-[120px]">
// 										<Button
// 											variant="outline"
// 											size="icon"
// 											className="rounded-full disabled:cursor-not-allowed"
// 											disabled={counts[type] === minValue}
// 											onClick={() => decrement(type, minValue)}
// 										>
// 											{Icons.minus()}
// 										</Button>
// 										<div className="flex-1 text-center">{counts[type]}</div>
// 										<Button variant="outline" size="icon" className="rounded-full" onClick={() => increment(type, maxValue)}>
// 											{Icons.plus()}
// 										</Button>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 					{/* <div className="w-full mt-4">
// 					<h3 className="font-semibold text-lg py-2">Does every bedroom have a lock?</h3>
// 				</div> */}
// 				</div>
// 			</div>
// 		</StepLayout>
// 	);
// };

// export default Page;
