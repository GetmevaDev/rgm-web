import dynamic from "next/dynamic";

export const OurServicesAsync = dynamic(() => import("./OurServices"));
