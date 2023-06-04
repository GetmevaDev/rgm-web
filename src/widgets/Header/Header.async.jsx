import dynamic from "next/dynamic";

export const HeaderAsync = dynamic(() => import("./Header"));
