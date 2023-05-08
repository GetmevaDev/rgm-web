import React, { useCallback, useMemo, useState } from "react";

import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";

import { defaultTheme } from "./Theme";

import styles from "./Map.module.scss";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({ lat: 40.7571437, lng: -73.9864708 }), []);

  if (!isLoaded) return null;

  const defaultOptions = {
    styles: defaultTheme,
  };

  return (
    <div className={styles.map}>
      <GoogleMap
        mapContainerClassName={styles.map}
        center={center}
        zoom={16}
        options={defaultOptions}
      >
        <MarkerF position={center} icon={{ url: "/svg/marker.svg" }} />
      </GoogleMap>
    </div>
  );
};