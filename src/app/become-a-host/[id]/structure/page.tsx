"use client";

import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { properties } from "@/lib/constants";

const Page = () => {
	const [selected, setSelected] = useState("");

	console.log(selected);

	return (
		<div className="w-full min-h-svh py-20 h-full px-4">
			<div className="max-w-screen-sm w-full mx-auto pt-2">
				<h1 className="text-2xl md:text-3xl font-semibold py-4 animate-list-stagger">Which of these best describe your place?</h1>
				<div className="mt-3 pb-4">
					<RadioGroup.Root className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-4" onValueChange={(v) => setSelected(v)}>
						{properties.map(({ value, icon, label }, i) => (
							<RadioGroup.Item
								key={i}
								value={value}
								className={cn(
									"w-full cursor-pointer animate-list-stagger flex flex-col justify-between items-start gap-1 p-4 rounded-xl",
									selected === value ? "bg-white box-shadow" : "bg-[#F7F7F7] text-black/70"
								)}
								style={{ animationDelay: `${600 + i * 20}ms` }}
							>
								<div>{icon}</div>
								<div className="text-left font-[550] text-sm">{label}</div>
							</RadioGroup.Item>
						))}
					</RadioGroup.Root>
				</div>
			</div>
		</div>
	);
};

export default Page;
