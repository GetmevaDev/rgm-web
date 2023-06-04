import dynamic from "next/dynamic";

export const AwardsAsync = dynamic(() => import("./Awards"));
