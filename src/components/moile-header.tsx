"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Filter } from "./filter";
import Link from "next/link";

const placeholder = "Search by address, city, or neighbourhood";

export const MobileHeader = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [query, setQuery] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [open, setOpen] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleSearch = () => {
		console.log("Search for:", query);
		setOpen(false); // close dropdown
		// Update search params or navigate here
	};

	return (
		<header className="h-[70px] mark w-full md:hidden max-w-screen-2xl 2xl:px-20 lg:px-10 md:px-8 px-4 mx-auto">
			<div className=" w-full mark-b h-full flex flex-nowrap items-center justify-center">
				<DropdownMenu>
					<DropdownMenuTrigger className="w-full">
						<Button
							variant="outline"
							className="rounded-full mark bg-transparent hover:bg-transparent overflow-hidden h-[48px] border-[#DDDDDD] border py-0 px-2 w-full justify-between shadow-[0_3px_10px_rgba(0,0,0,0.1)]"
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
					</DropdownMenuTrigger>

					<DropdownMenuContent
						sideOffset={8}
						className="bg-white px-0 w-full mark min-w-full rounded-[16px] z-[100] max-h-[calc(100vh_-_150px)] shadow-[#0000001a_0_3px_6px_4px] transition-all duration-150"
					>
						<DropdownMenuItem
							asChild
							className="px-3 cursor-pointer w-full capitalize py-2 text-sm hover:bg-black/5 focus:bg-black/5 border-b last:border-b-0 rounded-none"
						>
							<Link href={""} className="w-full">
								Accra
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

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
	);
};
