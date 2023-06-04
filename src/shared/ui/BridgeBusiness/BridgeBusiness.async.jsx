import dynamic from "next/dynamic";

export const BridgeBusinessAsync = dynamic(() => import("./BridgeBusiness"));
