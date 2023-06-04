import React, { useMemo } from "react";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import { defaultTheme } from "./Theme";

import styles from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({ lat: 40.85837639470487, lng: -73.64867593976045 }),
    []
  );
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

export default Map;
