import dynamic from "next/dynamic";

export const FeaturedPressAsync = dynamic(() => import("./FeaturedPress"));
