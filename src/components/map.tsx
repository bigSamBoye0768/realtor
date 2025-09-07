"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  ViewStateChangeEvent,
} from "react-map-gl";
import { useState, useMemo } from "react";
import Supercluster from "supercluster";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

type Listing = {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  price: number;
};

type Props = {
  listings: Listing[];
  initialLng?: number;
  initialLat?: number;
  initialZoom?: number;
  styleUrl?: string;
};

export default function ClusteredListingsMap({
  listings,
  initialLng = -74.5,
  initialLat = 40,
  initialZoom = 9,
  styleUrl = "mapbox://styles/mapbox/streets-v12",
}: Props) {
  const [selected, setSelected] = useState<Listing | null>(null);
  const [bounds, setBounds] = useState<[number, number, number, number] | null>(null);
  const [zoom, setZoom] = useState(initialZoom);

  // prepare geojson features for supercluster
  const points = listings.map((l) => ({
    type: "Feature" as const,
    properties: { cluster: false, listingId: l.id, title: l.title, price: l.price },
    geometry: { type: "Point" as const, coordinates: [l.longitude, l.latitude] },
  }));

  // build the cluster index
  const supercluster = useMemo(
    () =>
      new Supercluster({
        radius: 60, // px radius to cluster
        maxZoom: 20,
      }).load(points),
    [points]
  );

  const clusters = useMemo(() => {
    if (!bounds) return [];
    return supercluster.getClusters(bounds, Math.round(zoom));
  }, [supercluster, bounds, zoom]);

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{ longitude: initialLng, latitude: initialLat, zoom: initialZoom }}
      mapStyle={styleUrl}
      style={{ width: "100%", height: "100%" }}
      onMove={(evt: ViewStateChangeEvent) => {
        const { viewState } = evt;
        setZoom(viewState.zoom);
        if (evt.target.getBounds) {
          const b = evt.target.getBounds().toArray().flat() as [number, number, number, number];
          setBounds(b);
        }
      }}
    >
      {/* Controls */}
      <NavigationControl position="top-right" />
      <GeolocateControl position="top-right" trackUserLocation />

      {/* Render clusters & markers */}
      {clusters.map((cluster: any) => {
        const [lng, lat] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } = cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              longitude={lng}
              latitude={lat}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                const expansionZoom = Math.min(
                  supercluster.getClusterExpansionZoom(cluster.id),
                  20
                );
                evt.target.flyTo({ center: [lng, lat], zoom: expansionZoom, duration: 500 });
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow cursor-pointer">
                {pointCount}
              </div>
            </Marker>
          );
        }

        // single listing marker
        const { listingId, title, price } = cluster.properties;
        const listing = listings.find((l) => l.id === listingId)!;
        return (
          <Marker
            key={listing.id}
            longitude={lng}
            latitude={lat}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelected(listing);
            }}
          >
            <div className="rounded-full bg-white border px-2 py-1 text-xs font-semibold shadow cursor-pointer">
              ${price}
            </div>
          </Marker>
        );
      })}

      {/* Popup when marker clicked */}
      {selected && (
        <Popup
          longitude={selected.longitude}
          latitude={selected.latitude}
          onClose={() => setSelected(null)}
          closeOnClick={false}
          anchor="top"
        >
          <div>
            <h3 className="font-semibold">{selected.title}</h3>
            <p>${selected.price} / night</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
