import dynamic from "next/dynamic";

export const NavigationAsync = dynamic(() => import("./Navigation"));
