"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const startPages = ["overview", "about-your-place", "stand-out", "final"];

const steps = [
    ["about-your-place", "structure", "privacy-type", "location"], // Step 0
    ["stand-out", "amenities", "photos"], // Step 1
    ["final", "pricing", "publish"], // Step 2
];

export const Footer = () => {
    const pathname = usePathname();
    const router = useRouter();
    const pathSegments = pathname.split("/").filter(Boolean);
    console.log(pathSegments);
    const id = pathSegments[1];
    const currentSlug = pathSegments[pathSegments.length - 1];
    console.log(currentSlug);

    console.log(pathname);

    let currentStep = 0;
    let pageIndex = 0;

    steps.forEach((step, i) => {
        const idx = step.indexOf(currentSlug);
        // console.log({ idx });

        if (idx !== -1) {
            currentStep = i;
            pageIndex = idx;
        }
    });

    console.log("currentStep", currentStep);
    console.log("pageIndex", pageIndex);

    // [0, 0, 0]
    const progressValues = steps.map((step, i) => {
        if (currentSlug === "overview") {
            return 0;
        }

        // For previous steps, progress is full
        if (i < currentStep) return 100;
        // For current step:
        if (i === currentStep) {
            // If on the step start page, progress is 0 (step not started)
            if (currentSlug === startPages[i]) return 0;
            // Otherwise, calculate progress based on page position in step
            const pageIndex = step.indexOf(currentSlug);
            if (pageIndex === -1) return 0; // safety fallback
            return (pageIndex / (step.length - 1)) * 100;
        }
        // For future steps, progress is 0
        return 0;
    });

    console.log("progressValues", progressValues);

    const flatPages = ["overview", ...steps.flat()];
    const currentFlatIndex = flatPages.indexOf(currentSlug);

    console.log(flatPages);
    console.log(currentFlatIndex);

    const buildPath = (slug: string) => `/become-a-host/${id}/${slug}`;

    const goBack = () => {
        if (currentFlatIndex > 0) {
            router.push(buildPath(flatPages[currentFlatIndex - 1]));
        }
    };
    const goNext = () => {
        if (currentFlatIndex < flatPages.length - 1) {
            router.push(buildPath(flatPages[currentFlatIndex + 1]));
        }
    };

    return (
        <footer className="mark flex mx-auto h-[80px] px-12 w-full">
            <div className="w-full absolute top-0 left-0 flex items-center gap-x-1 right-0">
                {progressValues.map((value, i) => (
                    <Progress value={value} className="w-full rounded-none h-1.5 transition-all duration-300" key={i} />
                ))}
                {/* <Progress value={0} className="w-full rounded-none h-1.5" />
                <Progress value={0} className="w-full rounded-none h-1.5" /> */}
            </div>
            <div className="flex items-center justify-between mark w-full mt-1.5">
                <div>
                    {currentSlug !== startPages[0] && (
                        <Button variant="ghost" className="underline font-bold rounded-xl" onClick={goBack}>
                            Back
                        </Button>
                    )}
                </div>
                <div className="flex items-center gap-x-2">
                    <Button size="lg" className="font-bold h-12 rounded-xl">
                        Get started
                    </Button>
                    <Button size="lg" className="font-bold h-12 rounded-xl" onClick={goNext}>
                        Next
                    </Button>
                </div>
            </div>
        </footer>
    );
};

// { params }: {params:Promise<{ id: string }>}
