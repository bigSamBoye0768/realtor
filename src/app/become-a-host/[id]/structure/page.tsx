"use client";

import React, { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { Icons } from "./_components/icons";

const structures = [
	{ name: "House", icon: Icons.house },
	{ name: "Apartment", icon: Icons.apartment },
	{ name: "House", icon: Icons.house },
	{ name: "Apartment", icon: Icons.apartment },
	{ name: "House", icon: Icons.house },
	{ name: "Apartment", icon: Icons.apartment },
	{ name: "House", icon: Icons.house },
	{ name: "Apartment", icon: Icons.apartment },
	{ name: "House", icon: Icons.house },
	{ name: "Apartment", icon: Icons.apartment },
	{ name: "House", icon: Icons.house },
];

const Page = () => {
	const [selected, setSelected] = useState("");

	console.log(selected);

	return (
		<div className="w-full min-h-svh py-20 h-full px-4">
			<div className="max-w-screen-sm w-full mx-auto pt-2">
				<h1 className="text-2xl md:text-3xl font-semibold py-4 animate-list-stagger">Which of these best describe your place?</h1>
				<div className="mt-3 pb-4">
					<RadioGroup.Root className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-3" onValueChange={(v) => setSelected(v)}>
						{structures.map((option, i) => (
							<RadioGroup.Item
								key={i}
								value={option.name}
								className={cn(
									"w-full cursor-pointer animate-list-stagger flex flex-col justify-between items-start gap-1 p-3 rounded-xl",
									selected === option.name ? "bg-white box-shadow" : "bg-[#F7F7F7] text-black/70"
								)}
								style={{ animationDelay: `${600 + i * 20}ms` }}
							>
								<div>{option.icon()}</div>
								<div className="text-left font-[550] text-sm">{option.name}</div>
							</RadioGroup.Item>
						))}
					</RadioGroup.Root>
				</div>
			</div>
		</div>
	);
};

export default Page;

// "use client"

// import React, { useState } from 'react'
// import * as RadioGroup from "@radix-ui/react-radio-group"
// import Image from 'next/image'
// import { cn } from '@/lib/utils'
// import { Input } from '@/components/ui/input'

// const payment = [
//     { name: "Card", image: "card.svg" },
//     { name: "MTN Mobile Money", image: "/mtn-mobile-logo-icon.svg" },
//     // { name: "Telecel Mobile Money", image: "/mtn-mobile-logo-icon.svg" },
// ]
// export const PaymentMethods = () => {

//     const [selected, setSelected] = useState("Card")

//     console.log(selected);

//     return (
//         <>
//             <RadioGroup.Root className="flex gap-x-2 flex-nowrap" onValueChange={(v) => setSelected(v)}>
//                 {payment.map((option, i) => (
//                     <RadioGroup.Item key={i} value={option.name} className={cn('w-full cursor-pointer flex flex-col justify-between items-start gap-1 p-3 rounded-lg', selected === option.name ? "bg-white shadow-[0_4px_8px_-2px_rgba(9,30,66,0.25),0_0_0_1px_rgba(9,30,66,0.08)]" : "bg-[#F7F7F7] text-black/70")}>
//                         <div>
//                             <Image alt={option.name} src={option.image} width={option.name === "MTN Mobile Money" ? 28 : 36} height={option.name === "MTN Mobile Money" ? 28 : 36} />
//                         </div>
//                         <div className='text-left'>{option.name}</div>
//                     </RadioGroup.Item>
//                 ))}
//             </RadioGroup.Root>

//             <div>
//                 <div className='mt-4 font-semibold text-[#222222]'>Card information</div>
//                 <div className='mt-2 relative'>
//                     <Input className='w-full border-none shadow-none h-10 bg-[#F7F7F7] focus:bg-white rounded-lg pr-[5.2rem]' type="email" placeholder='1234 1234 1234 1234' autoComplete='cc-number' inputMode='numeric' />
//                     <div className='absolute top-1/2 -translate-y-1/2 right-0 mr-3 flex gap-x-0.5 flex-nowrap items-center'>
//                         <Image alt={"visacard"} src={"visacard.svg"} width={28} height={28} />
//                         <Image alt={"mastercard"} src={"mastercard.svg"} width={28} height={28} />
//                     </div>
//                 </div>
//                 <div className='flex mt-2 gap-x-2 flex-nowrap'>
//                     <Input className='w-full border-none shadow-none h-10 bg-[#F7F7F7] focus:bg-white rounded-lg' type="email" placeholder='MM / YY' autoComplete='cc-exp' inputMode='numeric' aria-required='true' />
//                     <div className='relative w-full'>
//                         <Input className='w-full border-none shadow-none h-10 bg-[#F7F7F7] focus:bg-white rounded-lg pr-12' type="email" placeholder='CVC' autoComplete='cc-csc' inputMode='numeric' aria-required='true' />
//                         <div className='absolute top-1/2 -translate-y-1/2 right-0 mr-3'>
//                             <Image alt={"Card"} src={"card.svg"} width={28} height={28} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Input className='w-full border-none shadow-none h-10 bg-[#F7F7F7] focus:bg-white rounded-lg mt-2' type="email" placeholder='Full name on card' autoComplete='cc-name' inputMode='text' spellCheck='false' aria-required='true' />

//         </>
//     )
// }

// shadow-[0_1px_1px_rgba(9,30,66,0.25),0_0_1px_1px_rgba(9,30,66,0.13)]
