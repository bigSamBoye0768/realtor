"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
// import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const routes = [
	{
		title: "Explore",
		url: `/explore`,
		icon: Icons.explore(),
		activeIcon: Icons.exploreBlack(),
	},
	{
		title: "Wishlists",
		url: `/wishlists`,
		icon: Icons.wishlists(),
		activeIcon: Icons.wishlistsBlack(),
	},
	{
		title: "Categories",
		url: `/category`,
		icon: Icons.category({ style: { width: "24", height: "24" } }),
		activeIcon: Icons.cartBlack({ style: { width: "24", height: "24" } }),
	},
	{
		title: "Inbox",
		url: `/inbox`,
		icon: Icons.inbox(),
		activeIcon: Icons.inbox(),
	},
	{
		title: "Log in",
		url: `/account-settings`,
		icon: Icons.user(),
		activeIcon: Icons.userBlack(),
	},
];

export const MobileFooterBar = () => {
	const pathname = usePathname();
	console.log(pathname);

	const matches = useIsMobile();
	const [isVisible, setIsVisible] = useState(true);

	let lastScrollY = 0;
	const handleScroll = () => {
		if (typeof window != "undefined") {
			if (window.scrollY > lastScrollY) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		}
		lastScrollY = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!matches) return null;

	return (
		<footer
			className={`w-full h-[60px] flex border-t fixed bottom-0 z-20 bg-white left-0 right-0 transition-all duration-250 ease-in-out ${
				isVisible ? "translate-y-[0%]" : "translate-y-[100%]"
			}`}
		>
			<div className="flex max-w-[500px] w-full mx-auto items-center flex-nowrap">
				{routes.map((route, index) => (
					<Link
						href={route.url}
						key={index}
						className={cn(
							"flex border-t-2 border-transparent h-full flex-col w-[25%] items-center justify-between py-1",
							pathname === route.url && "border-black"
						)}
					>
						{pathname === route.url ? route.activeIcon : route.icon}
						{/* <Image src={`${pathname === '/' ? "/home-black.svg" : "/home.svg"}`} alt='user svg' width={25} height={25} /> */}
						<span
							className={cn(
								"text-[11px] overflow-hidden text-black/80 text-ellipsis whitespace-nowrap",
								pathname === route.url && "font-bold text-black"
							)}
						>
							{route.title}
						</span>
					</Link>
				))}
			</div>
		</footer>
	);
};
