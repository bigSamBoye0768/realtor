"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { Filter } from "./filter";

const placeholder = "Search by address, city, or neighbourhood";

export const Header = ({ showSearch = true }: { showSearch?: boolean }) => {
	const menuBtnRef = useRef<HTMLButtonElement>(null);
	const menuLinks = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLElement>(null);
	const headerSearchRef = useRef<HTMLDivElement>(null);
	const searchBtnRef = useRef<HTMLButtonElement>(null);

	const [openMenuLinks, setOpenMenuLinks] = useState(false);
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuOutsideClick = (event: MouseEvent) => {
		console.log(event.target as Node);
		console.log(headerRef.current);
		// console.log(menuBtnRef.current?.contains(event.target as Node));
		// console.log(headerSearchRef.current?.contains(event.target as Node));
		console.log(headerRef.current !== event.target);

		if (!menuBtnRef.current?.contains(event.target as Node) && menuLinks.current !== event.target) {
			setOpenMenuLinks(false);
		}

		if (!headerSearchRef.current?.contains(event.target as Node)) {
			setOpen(false);
		}

		// if (
		// 	menuBtnRef.current &&
		// 	!menuBtnRef.current.contains(event.target as Node)
		// ) {
		// 	setOpenMenuLinks(false);
		// }
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleMenuOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleMenuOutsideClick);
		};
	}, []);

	let lastScroll = 0;
	const handleWindowScroll = () => {
		console.log("scollY", window.scrollY);
		if (window.scrollY > lastScroll) {
			setOpen(false);
		}

		lastScroll = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener("scroll", handleWindowScroll);

		return () => window.addEventListener("scroll", handleWindowScroll);
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleLinkClick = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		// console.log(e);
		// setOpenMenuLinks(true);
		// Only close if clicking an actual link (<a> tag)
		// if (e.target.tagName === "A") {
		// 	setOpenMenuLinks(false);
		// }
	};

	return (
		<>
			<header className="h-[80px] w-full hidden md:block max-w-screen-3xl 2xl:px-20 lg:px-10 md:px-8 px-4 mx-auto" ref={headerRef}>
				<div className=" flex  items-center w-full h-full">
					<div className=" lg:flex-1 flex">
						<Link href="/" className="inline-flex items-center  gap-1 text-black font-semibold text-base">
							{Icons.house()} nestQuest
						</Link>
					</div>

					{showSearch && (
						<div
							className="px-2 w-full max-w-[350px] data-[state=notOpen]:opacity-100 data-[state=isOpen]:opacity-0 data-[state=notOpen]:visible data-[state=isOpen]:invisible transition-all duration-150"
							data-state={open ? "isOpen" : "notOpen"}
						>
							<Button
								variant="outline"
								className="rounded-full bg-transparent hover:bg-transparent overflow-hidden h-[48px] border-black/40 py-0 px-2 w-full justify-between shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
								title="Search"
								onClick={() => setOpen(true)}
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
					)}

					<div className="flex-1 flex items-center justify-end  gap-2">
						<Filter
							trigger={
								<Button variant="outline" className="rounded-full h-10 font-semibold text-sm shadow-none">
									Filter
								</Button>
							}
						/>
						<Button variant="ghost" className="rounded-full h-10 font-semibold text-sm shadow-none">
							Become a host
						</Button>
						<div className=" relative ">
							<Button
								variant="outline"
								ref={menuBtnRef}
								onClick={() => setOpenMenuLinks((val) => !val)}
								className={cn(
									"rounded-full bg-transparent flex items-center p-1.5 h-10 shadow-none hover:bg-transparent",
									`${openMenuLinks ? "shadow-[#0000002e_0_2px_4px]" : "hover:shadow-[#0000002e_0_2px_4px]"}`
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
										<g fill="none" fillRule="nonzero" stroke="#222222" strokeWidth="3px">
											<path d="m2 16h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
											<path d="m2 24h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
											<path d="m2 8h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
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
							</Button>
							{/* {openMenuLinks && ( */}
							<div
								ref={menuLinks}
								onClick={(e) => handleLinkClick(e)}
								data-state={openMenuLinks ? "toggleOpen" : "toggleClose"}
								className={cn(
									"bg-white  rounded-[16px] z-[60] max-h-[calc(100vh_-_150px)] shadow-[#0000001a_0_3px_6px_4px] w-[240px] h-fit py-6 overflow-hidden absolute top-[50px] right-0 transition-all duration-150",
									"data-[state=toggleOpen]:visible data-[state=toggleOpen]:opacity-100",
									"data-[state=toggleClose]:invisible data-[state=toggleClose]:opacity-0"
								)}
							>
								<ul className="w-full  flex flex-col gap-1 py-5">
									{/* <li>
                                    <Button variant="outline" className='w-full border-0 border-b-1 justify-start rounded-none' size="lg">Login</Button>
                                </li> */}
									<li>
										<Link href="/" className="flex">
											<div className="w-full border-0 border-b-1 justify-start rounded-none">Signup</div>
										</Link>
									</li>
									<li>
										<Link href="/explore" className="flex">
											<div className="w-full border-0 last:border-b-0 justify-start rounded-none">Account</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div
					ref={headerSearchRef}
					data-state={open ? "isOpen" : "notOpen"}
					className="bg-white py-2 border-b shadow absolute left-0 right-0 w-full z-50 data-[state=notOpen]:opacity-0 data-[state=notOpen]:scale-x-0 data-[state=notOpen]:-translate-y-full data-[state=isOpen]:translate-y-0 data-[state=isOpen]:scale-x-100 data-[state=isOpen]:opacity-100 transition-all duration-200"
				>
					<div className="px-4 w-full  max-w-screen-md mx-auto ">
						<div className="flex bg-gray-300 rounded-full">
							<div className="w-full flex-1 rounded-full h-16  relative">
								<div className="absolute inset-0 bg-white rounded-full shadow-[0_3px_15px_7px_rgba(0,0,0,0.15)] overflow-hidden">
									<label className="flex  h-full items-center gap-x-2 flex-nowrap">
										<Input
											placeholder={placeholder}
											className="pl-4 truncate shadow-none border-none outline-none focus-visible:outline-none focus-visible:ring-0"
										/>
										<Button className="rounded-full h-11 w-11 mr-2" ref={searchBtnRef}>
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
							{/* <div className="dates flex-1  rounded-full"></div>
						<div className="guests flex-1  rounded-full"></div> */}
						</div>
					</div>
				</div>
			</header>

			<header className="h-[70px]  w-full md:hidden max-w-screen-2xl 2xl:px-20 lg:px-10 md:px-8 px-4 mx-auto">
				<div className=" w-full h-full flex flex-nowrap items-center justify-center">
					<Button
						variant="outline"
						className="rounded-full bg-transparent hover:bg-transparent overflow-hidden h-[48px] border-[#DDDDDD] border py-0 px-2 w-full justify-between shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
						title="Search"
					>
						<div className="pl-2.5 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								aria-hidden="true"
								role="presentation"
								focusable="false"
								style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor" }}
							>
								<path
									d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
									fill="#222222"
								></path>
							</svg>
						</div>
						<div className="truncate font-semibold flex-1 text-left mr-4">{placeholder}</div>
						{/* <div className="bg-transparent border w-[32px] h-[32px] aspect-square rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								aria-hidden="true"
								role="presentation"
								focusable="false"
								style={{ display: "block", height: "16px", width: "16px", fill: "#2222222" }}
								width="16"
								height="16"
							>
								<path
									d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
									fill="#222222"
								></path>
							</svg>
						</div> */}
					</Button>
					<Filter
						trigger={
							<Button
								variant="outline"
								className="rounded-full bg-transparent items-center justify-center hover:bg-transparent overflow-hidden ml-2 h-[48px] w-[48px] border-[#DDDDDD] border aspect-square shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
								title="Filter"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									aria-hidden="true"
									role="presentation"
									focusable="false"
									style={{ display: "block", height: "16px", width: "16px", fill: "#2222222" }}
									width="16"
									height="16"
								>
									<path
										d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
										fill="#222222"
									></path>
								</svg>
							</Button>
						}
					/>
				</div>
			</header>
		</>
	);
};

export const HeaderSkeleton = () => {
	return (
		<>
			<header className="h-[80px] w-full hidden md:block max-w-screen-3xl 2xl:px-20 lg:px-10 md:px-8 px-4 mx-auto">
				<div className=" flex  items-center w-full h-full">
					<div className=" lg:flex-1 flex">
						<div className="inline-flex items-center  gap-1 text-black font-semibold text-base">{Icons.house()} nestQuest</div>
					</div>

					<div className="px-2 w-full max-w-[350px]">
						<Button
							variant="outline"
							className="rounded-full bg-transparent hover:bg-transparent overflow-hidden h-[48px] border-black/40 py-0 px-2 w-full justify-between shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]"
							title="Search"
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

					<div className="flex-1 flex items-center justify-end  gap-2">
						<Button variant="ghost" className="rounded-full h-10 font-semibold text-sm shadow-none">
							Become a host
						</Button>
						<div className=" relative ">
							<Button
								variant="outline"
								className={cn(
									"rounded-full bg-transparent flex items-center p-1.5 h-10 shadow-none hover:bg-transparent",
									`shadow-[#0000002e_0_2px_4px] hover:shadow-[#0000002e_0_2px_4px]`
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
										<g fill="none" fillRule="nonzero" stroke="#222222" strokeWidth="3px">
											<path d="m2 16h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
											<path d="m2 24h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
											<path d="m2 8h28" stroke="#222222" fill="none" strokeWidth="3px"></path>
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
							</Button>
						</div>
					</div>
				</div>
			</header>

			<header className="h-[70px]  w-full md:hidden max-w-screen-2xl 2xl:px-20 lg:px-10 md:px-8 px-4 mx-auto">
				<div className=" w-full h-full flex flex-nowrap items-center justify-center">
					<Button
						variant="outline"
						className="rounded-full bg-transparent hover:bg-transparent overflow-hidden h-[48px] border-[#DDDDDD] border py-0 px-2 w-full justify-between shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
						title="Search"
					>
						<div className="pl-2.5 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								aria-hidden="true"
								role="presentation"
								focusable="false"
								style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor" }}
							>
								<path
									d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
									fill="#222222"
								></path>
							</svg>
						</div>
						<div className="truncate font-semibold flex-1 text-left mr-4">{placeholder}</div>
					</Button>
					<Filter
						trigger={
							<Button
								variant="outline"
								className="rounded-full bg-transparent items-center justify-center hover:bg-transparent overflow-hidden ml-2 h-[48px] w-[48px] border-[#DDDDDD] border aspect-square shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
								title="Filter"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									aria-hidden="true"
									role="presentation"
									focusable="false"
									style={{ display: "block", height: "16px", width: "16px", fill: "#2222222" }}
									width="16"
									height="16"
								>
									<path
										d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
										fill="#222222"
									></path>
								</svg>
							</Button>
						}
					/>
				</div>
			</header>
		</>
	);
};

// box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)
// hover:box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

// btn hover:box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18)

// shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]

// box-shadow: 0 3px 15px 7px rgba(0, 0, 0, 0.15)
// box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
// box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
// box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
// box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
// box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
// 0 8px 28px rgba(0, 0, 0, 0.28)
