import dynamic from "next/dynamic";

export const BlockAsync = dynamic(() => import("./Block"));
