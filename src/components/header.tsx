"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";

const placeholder = "Search by address, city, neighbourhood or country";
export const Header = () => {
	const menuBtnRef = useRef<HTMLButtonElement>(null);
	const [openMenuLinks, setOpenMenuLinks] = useState(false);
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuOutsideClick = (event: MouseEvent) => {
		if (
			menuBtnRef.current &&
			!menuBtnRef.current.contains(event.target as Node)
		) {
			setOpenMenuLinks(false);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleMenuOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleMenuOutsideClick);
		};
	}, []);

	return (
		<header className="mark h-[80px] w-full">
			<div className="mark-b flex items-center w-full h-full">
				<div className="mark lg:flex-1 flex">
					<Link
						href="/"
						className="inline-flex items-center mark gap-1 text-black font-semibold text-base"
					>
						{Icons.house()} nestQuest
					</Link>
				</div>

				<div className="mark-b px-2 w-full max-w-[350px]">
					<Button
						variant="outline"
						className="rounded-full hover:bg-transparent overflow-hidden h-[48px] border-black/40 py-0 px-2 w-full justify-between"
						title="Search"
						onClick={() => setOpen((val) => !val)}
					>
						<div className="pl-6 truncate font-semibold">{placeholder}</div>
						<div className="bg-black w-[32px] h-[32px] aspect-square rounded-full flex items-center justify-center">
							<svg
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
								width="12"
								height="12"
								aria-hidden="true"
								role="presentation"
								focusable="false"
							>
								<g fill="none" stroke="#FFFFFF" strokeWidth="5.33333px">
									<path
										d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
										stroke="#FFFFFF"
										fill="none"
										strokeWidth="5.33333px"
									></path>
								</g>
							</svg>
						</div>
					</Button>
				</div>

				<div className="flex-1 flex items-center justify-end mark gap-2">
					<Button
						variant="ghost"
						className="rounded-full h-10 font-semibold text-sm shadow-none"
					>
						Become a host
					</Button>
					<div>
						<Button
							variant="outline"
							ref={menuBtnRef}
							onClick={() => setOpenMenuLinks((val) => !val)}
							className={cn(
								"rounded-full flex items-center relative p-1.5 h-10 shadow-none hover:bg-transparent",
								`${
									openMenuLinks
										? "shadow-[#0000002e_0_2px_4px]"
										: "hover:shadow-[#0000002e_0_2px_4px]"
								}`
							)}
						>
							<div className="flex items-center justify-center pl-1.5">
								<svg
									width="16"
									height="16"
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="presentation"
									focusable="false"
								>
									<g
										fill="none"
										fillRule="nonzero"
										stroke="#222222"
										strokeWidth="3px"
									>
										<path
											d="m2 16h28"
											stroke="#222222"
											fill="none"
											strokeWidth="3px"
										></path>
										<path
											d="m2 24h28"
											stroke="#222222"
											fill="none"
											strokeWidth="3px"
										></path>
										<path
											d="m2 8h28"
											stroke="#222222"
											fill="none"
											strokeWidth="3px"
										></path>
									</g>
								</svg>
							</div>
							<div className="flex items-center justify-center">
								<svg
									viewBox="0 0 32 32"
									width="28"
									height="28"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="presentation"
									focusable="false"
								>
									<path
										d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
										fill="#717171"
									></path>
								</svg>
							</div>

							{/* {openMenuLinks && ( */}
							<div
								data-state={openMenuLinks ? "toggleOpen" : "toggleClose"}
								className={cn(
									"bg-white mark rounded-[16px] z-[60] max-h-[calc(100vh_-_150px)] shadow-[#0000001a_0_3px_6px_4px] w-[240px] h-fit py-6 overflow-hidden absolute top-[50px] right-0 transition-all duration-150",
									"data-[state=toggleOpen]:visible data-[state=toggleOpen]:opacity-100",
									"data-[state=toggleClose]:invisible data-[state=toggleClose]:opacity-0"
								)}
							>
								<ul className="w-full mark-b flex flex-col gap-1 py-5">
									{/* <li>
                                    <Button variant="outline" className='w-full border-0 border-b-1 justify-start rounded-none' size="lg">Login</Button>
                                </li> */}
									<li>
										<Link href="login" className="flex">
											<div className="w-full border-0 border-b-1 justify-start rounded-none">
												Signup
											</div>
										</Link>
									</li>
									<li>
										<Link href="" className="flex">
											<div className="w-full border-0 last:border-b-0 justify-start rounded-none">
												Account
											</div>
										</Link>
									</li>
								</ul>
							</div>

							{/* )} */}
						</Button>
					</div>
				</div>
			</div>

			<div
				data-state={open ? "isOpen" : "notOpen"}
				className="bg-red-400 py-2 absolute left-0 right-0 w-full z-50 data-[state=notOpen]:opacity-0 data-[state=notOpen]:scale-x-0 data-[state=notOpen]:-translate-y-full data-[state=isOpen]:translate-y-0 data-[state=isOpen]:scale-x-100 data-[state=isOpen]:opacity-100 transition-all duration-200"
			>
				<div className="px-4 w-full mark-b max-w-screen-md mx-auto ">
					<div className="flex bg-gray-300 rounded-full">
						<div className="w-full flex-1 rounded-full h-16 mark-b relative overflow-hidden">
							<div className="absolute inset-0 bg-white rounded-full shadow">
								<label className="flex mark h-full items-center gap-x-2 flex-nowrap">
									<Input placeholder={placeholder} className="truncate" />
									<Button className="rounded-full h-11 w-11 mr-2">
										<div className="flex items-center justify-center">
											<svg
												viewBox="0 0 32 32"
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												aria-hidden="true"
												role="presentation"
												focusable="false"
											>
												<g fill="none" stroke="#FFFFFF" strokeWidth="5.33333px">
													<path
														d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
														stroke="#FFFFFF"
														fill="none"
														strokeWidth="5.33333px"
													></path>
												</g>
											</svg>
										</div>
									</Button>
								</label>
							</div>
						</div>
						{/* <div className="dates flex-1 mark rounded-full"></div>
						<div className="guests flex-1 mark rounded-full"></div> */}
					</div>
				</div>
			</div>
		</header>
	);
};

// box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)
// hover:box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

// btn hover:box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18)
