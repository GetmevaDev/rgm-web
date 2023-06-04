import dynamic from "next/dynamic";

export const CasesAsync = dynamic(() => import("./Cases"));
