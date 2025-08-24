"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.MAPBOX_TOKEN as string;

type Props = {
	initialLng?: number;
	initialLat?: number;
	initialZoom?: number;
	styleUrl?: string;
};

export default function Map({
	initialLng = -74.5,
	initialLat = 40,
	initialZoom = 9,
	styleUrl = "mapbox://styles/sam-boi0768/cmc62esbk026z01sd74eng2ts", // e.g. 'mapbox://styles/mapbox/streets-v12'
}: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);

	useEffect(() => {
		if (!containerRef.current || mapRef.current) return;

		mapRef.current = new mapboxgl.Map({
			container: containerRef.current,
			// If you omit style, v3 defaults to the Mapbox Standard style.
			style: styleUrl ?? undefined,
			center: [initialLng, initialLat],
			zoom: initialZoom,
		});

		// Optional controls
		mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");
		mapRef.current.addControl(new mapboxgl.GeolocateControl({ trackUserLocation: true }));

		return () => {
			mapRef.current?.remove();
			mapRef.current = null;
		};
	}, [initialLng, initialLat, initialZoom, styleUrl]);

	return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
