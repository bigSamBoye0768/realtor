"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

const Page = () => {
	const [price, setPrice] = useState("50");

	const inputRef = useRef<HTMLInputElement>(null);
	const [showButton, setShowButton] = useState(true);

	const handleButtonClick = () => {
		setShowButton(false);
		inputRef.current?.focus();
	};

	const handleBlur = () => {
		setShowButton(true);
	};

	const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPrice(e.target.value);
	};

	return (
		<div className="h-[100vh] py-20 px-4 min-h-svh">
			<div className="mark-b max-w-2xl mx-auto w-full h-full">
				<div className="mark h-full w-full">
					<div className="w-full h-full flex flex-col justify-between">
						<div className="mark-b">
							<div>
								<h1 className="font-semibold text-2xl md:text-3xl">Now, set a weekday base price</h1>
								<p className="text-base font-[550] text-black/60 ">Tip: $40. You’ll set a weekend price next. </p>
							</div>
						</div>
						<div className="mark-b flex items-center justify-center">
							<div className="inline-block">
								<div className="font-bold text-7xl md:text-9xl relative">
									<div className="flex flex-nowrap text-inherit">
										<span>₵</span>
										<span className="invisible">{price}</span>
									</div>
									<input
										type="text"
										className=" w-full bg-transparent h-full top-0 text-right absolute border-none outline-none"
										value={price}
										onChange={handlePriceChange}
										ref={inputRef}
										onBlur={handleBlur}
									/>
								</div>
							</div>
							{showButton && (
								<div className="inline-block relative -bottom-6 md:-bottom-8 ">
									<Button variant="outline" className="rounded-full p-0 aspect-square h-8 w-8" onClick={handleButtonClick}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 32 32"
											aria-label="Edit"
											role="img"
											focusable="false"
											style={{ display: "block", height: "16px", width: "16px" }}
										>
											<path d="m18.23 7.35 6.42 6.42L10 28.4c-.38.38-.88.59-1.41.59H3v-5.59c0-.52.21-1.04.59-1.41L18.23 7.35zm9.98-3.56a4.54 4.54 0 0 0-6.42 0l-1.44 1.44 6.42 6.42 1.44-1.44a4.54 4.54 0 0 0 0-6.42z"></path>
										</svg>
									</Button>
								</div>
							)}
						</div>
						<div className="mark-b"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;

// "use client";

// import { useState } from "react";

// type CountField = {
//   label: string;
//   value: number;
//   setValue: (val: number) => void;
// };

// export default function RoomCountSelector() {
//   const [bedrooms, setBedrooms] = useState(0);
//   const [beds, setBeds] = useState(0);
//   const [bathrooms, setBathrooms] = useState(0);

//   const fields: CountField[] = [
//     { label: "Bedrooms", value: bedrooms, setValue: setBedrooms },
//     { label: "Beds", value: beds, setValue: setBeds },
//     { label: "Bathrooms", value: bathrooms, setValue: setBathrooms }
//   ];

//   return (
//     <div className="space-y-4">
//       {fields.map(({ label, value, setValue }) => (
//         <div key={label} className="flex items-center justify-between border p-4 rounded-md">
//           <span className="font-medium">{label}</span>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setValue(value - 1)}
//               disabled={value < 1}
//               className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               −
//             </button>
//             <span className="w-10 text-center">{value === 0 ? "Any" : value}</span>
//             <button
//               onClick={() => setValue(value + 1)}
//               className="px-3 py-1 border rounded"
//             >
//               +
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
