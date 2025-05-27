"use client";

import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { Icons } from "./_components/icons";

const bookOptions = [
	{ title: "Approve or decline requests", description: "Guests must ask if they can book  or rent.", icon: Icons.request },
	{ title: "Use instant Book", description: "Guests can book automatically.", icon: Icons.instant },
];

const Page = () => {
	const [selected, setSelected] = useState("");

	console.log(selected);

	return (
		<div className="w-full min-h-svh py-20 h-full px-4 flex items-center justify-center">
			<div className="max-w-screen-sm w-full mx-auto pt-2">
				<h1 className="text-2xl md:text-3xl font-[550] py-4 animate-list-stagger">Decide how you&apos;ll confirm reservations</h1>
				<div className="mt-3 pb-4">
					<RadioGroup.Root className="grid grid-cols-1 gap-3" onValueChange={(v) => setSelected(v)}>
						{bookOptions.map((option, i) => (
							<RadioGroup.Item
								key={i}
								value={option.title}
								className={cn(
									"w-full cursor-pointer  animate-list-stagger flex gap-3 justify-between items-start p-5 md:p-6 rounded-xl",
									selected === option.title ? "bg-white box-shadow" : "bg-[#F7F7F7] text-black/70"
								)}
								style={{ animationDelay: `${500 + i * 20}ms` }}
							>
								<div className="w-full max-w-sm">
									<div className="text-left font-semibold text-base pb-1">{option.title}</div>
									<p className="text-sm  text-left">{option.description}</p>
								</div>
								<div className="flex items-center justify-center">{option.icon()}</div>
							</RadioGroup.Item>
						))}
					</RadioGroup.Root>
				</div>
			</div>
		</div>
	);
};

export default Page;
