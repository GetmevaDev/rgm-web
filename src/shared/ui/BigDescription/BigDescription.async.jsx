import dynamic from "next/dynamic";

export const BigDescriptionAsync = dynamic(() => import("./BigDescription"));
