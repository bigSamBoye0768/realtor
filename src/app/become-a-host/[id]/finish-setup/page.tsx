import React from "react";

const Page = () => {
	return (
		<div className=" px-4 max-w-6xl mx-auto w-full min-h-svh py-20 h-full flex items-center justify-center">
			<div className="flex flex-col-reverse md:flex-row py-4">
				<div className=" font-[550] animate-list-stagger text-sm md:text-base flex-1 flex flex-col justify-center items-start">
					<h3>Step 3</h3>
					<h1 className="md:text-4xl py-4 text-2xl">Finish up and publish</h1>
					<p className="font-medium">Finally, you&apos;ll choose booking settings, set up pricing, and publish your listing.</p>
				</div>
				<div className=" flex-1">
					<video className="w-full h-full" autoPlay muted src="/assets/videos/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4"></video>
				</div>
			</div>
		</div>
	);
};

export default Page;
// py-16
