import dynamic from "next/dynamic";

export const MapAsync = dynamic(() => import("./Map"));
