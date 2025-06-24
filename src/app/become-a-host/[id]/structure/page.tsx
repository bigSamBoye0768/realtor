"use client";

import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { ProperyTypeIcons } from "@/lib/constants";

const Page = () => {
	const [selected, setSelected] = useState("");

	console.log(selected);

	console.log(Object.entries(ProperyTypeIcons));

	return (
		<div className="w-full min-h-svh py-20 h-full px-4">
			<div className="max-w-screen-sm w-full mx-auto pt-2">
				<h1 className="text-2xl md:text-3xl font-semibold py-4 animate-list-stagger">Which of these best describe your place?</h1>
				<div className="mt-3 pb-4">
					<RadioGroup.Root className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-3" onValueChange={(v) => setSelected(v)}>
						{Object.entries(ProperyTypeIcons).map(([type, icon], i) => (
							<RadioGroup.Item
								key={i}
								value={type}
								className={cn(
									"w-full cursor-pointer animate-list-stagger flex flex-col justify-between items-start gap-1 p-3 rounded-xl",
									selected === type ? "bg-white box-shadow" : "bg-[#F7F7F7] text-black/70"
								)}
								style={{ animationDelay: `${600 + i * 20}ms` }}
							>
								<div>{icon}</div>
								<div className="text-left font-[550] text-sm">{type}</div>
							</RadioGroup.Item>
						))}
					</RadioGroup.Root>
				</div>
			</div>
		</div>
	);
};

export default Page;
