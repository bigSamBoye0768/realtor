"use client";

import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useStepNavigation } from "@/hooks/use-step-navigation";

type StepLayoutProps = {
	children: React.ReactNode;
	onNext?: () => void;
	isNextDisabled?: boolean;
	isNextLoading?: boolean;
};

const StepLayout = ({ children, onNext, isNextDisabled, isNextLoading }: StepLayoutProps) => {
	// const pathname = usePathname();
	// const currentSlug = pathname.split("/").pop() as string;
	const { back, next } = useStepNavigation();

	return (
		<div className="w-full min-h-svh relative">
			<div className="w-full fixed top-0 px-3.5 lg:px-12 bg-white z-50">
				<Header />
			</div>
			<main className="w-full min-h-svh h-full ">{children}</main>
			<div className="w-full fixed bottom-0 bg-white">
				<Footer onNext={onNext} isNextDisabled={isNextDisabled} isNextLoading={isNextLoading} backStep={back} nextStep={next} />
			</div>
		</div>
	);
};

export default StepLayout;
