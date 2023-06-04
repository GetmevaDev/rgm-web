import dynamic from "next/dynamic";

export const PledgeAsync = dynamic(() => import("./Pledge"));
