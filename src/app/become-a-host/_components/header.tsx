import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<header className=" pt-5 pb-1 mx-auto  w-full">
			<div className="flex items-center justify-between ">
				<div>
					<Link href="/" className=" flex">
						<div className="flex items-center justify-center">{Icons.house({ style: { width: "35px", height: "35px" } })}</div>
					</Link>
				</div>
				<div className="flex items-center  flex-nowrap gap-x-2">
					<Button variant="secondary" className="rounded-full font-semibold">
						Questions?
					</Button>
					<Button variant="outline" className="rounded-full font-semibold">
						Exit
					</Button>
					<Button variant="outline" className="rounded-full font-semibold">
						Save & Exit
					</Button>
				</div>
			</div>
		</header>
	);
};
