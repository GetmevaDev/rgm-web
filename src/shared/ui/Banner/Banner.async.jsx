import dynamic from "next/dynamic";

export const BannerAsync = dynamic(() => import("./Banner"));
