import { Icons } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="h-svh w-full">
			<div className="mark w-full h-full flex">
				<div className="mark-b w-1/2 relative h-full">
					<Image src="/assets/photos/pexels-umkreisel-app-2832034.jpg" fill className="object-cover" alt="banner" />
					<div className="absolute inset-0 bg-black opacity-70"></div>
					<Link href="/" className="inline-flex items-center  gap-1 font-semibold text-base absolute text-white top-6 left-6">
						{Icons.houseWhite()} nestQuest
					</Link>
				</div>
				<div className="mark-b w-1/2">
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
