"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import "./embla.css";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import Image from "next/image";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
	});

	// const [canScrollPrev, setCanScrollPrev] = useState(false);
	// const [canScrollNext, setCanScrollNext] = useState(true);

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return;
			emblaMainApi.scrollTo(index);
		},
		[emblaMainApi, emblaThumbsApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		setSelectedIndex(emblaMainApi.selectedScrollSnap());
		emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
	}, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaMainApi) return;
		onSelect();

		emblaMainApi.on("select", onSelect).on("reInit", onSelect);
	}, [emblaMainApi, onSelect]);

	const scrollPrev = useCallback(() => {
		if (emblaMainApi) emblaMainApi.scrollPrev();
	}, [emblaMainApi]);

	const scrollNext = useCallback(() => {
		if (emblaMainApi) emblaMainApi.scrollNext();
	}, [emblaMainApi]);

	return (
		<div className="embla w-full mark group relative">
			<div className="embla__viewport w-full" ref={emblaMainRef}>
				<div className="embla__container w-full">
					{slides.map((index) => (
						<div className="embla__slide relative w-full h-full gap-0" key={index}>
							<Image
								src="/assets/photos/b9ae0435-0527-459c-a181-e006654e470a.webp"
								alt="b9ae0435-0527-459c-a181-e006654e470a.webp"
								className="aspect-square object-cover w-full mark"
								width={800}
								height={800}
							/>
						</div>
					))}
				</div>
			</div>

			<Button
				variant="ghost"
				size="sm"
				className="embla__prev absolute invisible mark-b opacity-0 group-hover:visible group-hover:opacity-100 duration-150 hover:bg-transparent top-1/2 z-10 left-2 -translate-y-1/2 rounded-full p-0 aspect-square"
				onClick={scrollPrev}
			>
				{Icons.leftArrow({
					style: {
						display: "block",
						fill: "none",
						height: "16px",
						width: "16px",
						stroke: "currentcolor",
						strokeWidth: "4.33333",
						overflow: "visible",
					},
				})}
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="embla__next absolute hover:bg-transparent top-1/2 z-10 right-2 -translate-y-1/2 rounded-full p-0 aspect-square"
				onClick={scrollNext}
			>
				{Icons.rightArrow({
					style: {
						display: "block",
						fill: "none",
						height: "16px",
						width: "16px",
						stroke: "currentcolor",
						strokeWidth: "4.33333",
						overflow: "visible",
					},
				})}
			</Button>

			<div className="embla-thumbs mark-b absolute bottom-2 left-1/2 -translate-x-1/2">
				<div className="embla-thumbs__viewport w-full max-w-16" ref={emblaThumbsRef}>
					<div className="embla-thumbs__container flex-nowrap">
						{slides.map((index) => (
							<Thumb key={index} onClick={() => onThumbClick(index)} selected={index === selectedIndex} index={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
