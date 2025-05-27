"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

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

const Page = () => {
	const [counts, setCounts] = useState<FloorPlan>({ guests: 1, bedrooms: 0, beds: 0 });

	const counterConfig: CounterConfig[] = [
		{ type: "guests", label: "Guests", minValue: 1, maxValue: 25 },
		{ type: "bedrooms", label: "Bedrooms", minValue: 0, maxValue: 50 },
		{ type: "beds", label: "Beds", minValue: 0, maxValue: 50 },
	];

	const increment = (type: CounterType, maxValue: number) => {
		if (counts[type] >= maxValue) return;

		setCounts((prev) => ({
			...prev,
			[type]: prev[type] + 1,
		}));
	};

	const decrement = (type: CounterType, minValue: number) => {
		if (counts[type] <= minValue) return;

		setCounts((prev) => ({
			...prev,
			[type]: prev[type] - 1,
		}));
	};

	console.log(counts);

	return (
		<div className=" px-4 max-w-2xl mx-auto w-full min-h-svh py-20 h-full md:flex items-center justify-center">
			<div className="w-full py-6">
				<div className="w-full pb-3">
					<h1 className="font-semibold text-2xl animate-list-stagger md:text-3xl">Let&apos;s start with the basics </h1>
				</div>
				<div className="w-full mt-4">
					<h3 className="font-semibold animate-list-stagger text-lg py-2">How many people can stay here?</h3>
					<div>
						{counterConfig.map(({ type, label, minValue, maxValue }, i) => (
							<div
								className="flex justify-between items-center flex-nowrap gap-x-3 text-base border-b py-4 animate-list-stagger"
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
									<Button variant="outline" size="icon" className="rounded-full" onClick={() => increment(type, maxValue)}>
										{Icons.plus()}
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* <div className="w-full mt-4">
					<h3 className="font-semibold text-lg py-2">Does every bedroom have a lock?</h3>
				</div> */}
			</div>
		</div>
	);
};

export default Page;
