import dynamic from "next/dynamic";

export const SliderAsync = dynamic(() => import("./Slider"));
