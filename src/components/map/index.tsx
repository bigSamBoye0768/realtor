"use client";

import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Skeleton } from "../ui/skeleton";
import { Loader } from "../ui/loader";

const containerStyle = {
	width: "100%",
	height: "400px",
};

const center = {
	lat: 5.614818, // Example: Accra
	lng: -0.205874,
};

export default function Map() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Don't forget the !
	});

	if (!isLoaded) return <MapLoading />;

	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
			{/* Children like Marker can go here */}
		</GoogleMap>
	);
}

export const MapLoading = () => {
	return (
		<div className="w-full h-full relative">
			<Skeleton className="w-full h-full rounded-none" />
			<div className="absolute rounded-3xl bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 shadow-[rgba(0,0,0,0.15)_0px_2px_8px]">
				<Loader className="w-1.5 h-1.5" />
			</div>
		</div>
	);
};
