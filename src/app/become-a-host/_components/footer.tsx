import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";

export const Footer = () => {
	return (
		<footer className="mark flex mx-auto h-[80px] px-12 w-full">
			<div className="w-full absolute top-0 left-0 flex items-center gap-x-1 right-0">
				<Progress value={0} className="w-full rounded-none h-1.5" />
				<Progress value={0} className="w-full rounded-none h-1.5" />
				<Progress value={0} className="w-full rounded-none h-1.5" />
			</div>
			<div className="flex items-center justify-between mark w-full mt-1.5">
				<div>
					<Button variant="ghost" className="underline font-bold">
						Back
					</Button>
				</div>
				<div>
					<Button size="lg" className="font-bold h-12">
						Get started
					</Button>
					<Button size="lg" className="font-bold h-12">
						Next
					</Button>
				</div>
			</div>
		</footer>
	);
};
