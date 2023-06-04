import dynamic from "next/dynamic";

export const FeedbackAsync = dynamic(() => import("./Feedback"));
