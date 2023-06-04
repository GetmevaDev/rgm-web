import dynamic from "next/dynamic";

export const SubmitFormAsync = dynamic(() => import("./SubmitForm"));
