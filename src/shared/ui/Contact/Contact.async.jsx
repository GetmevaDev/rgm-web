import dynamic from "next/dynamic";

export const ContactAsync = dynamic(() => import("./Contact"));
