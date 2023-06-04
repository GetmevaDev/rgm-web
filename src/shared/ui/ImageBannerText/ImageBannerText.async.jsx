import dynamic from "next/dynamic";

export const ImageBannerTextAsync = dynamic(() => import("./ImageBannerText"));
