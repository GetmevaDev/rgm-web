import dynamic from "next/dynamic";

export const OutComesAsync = dynamic(() => import("./OutComes"));
