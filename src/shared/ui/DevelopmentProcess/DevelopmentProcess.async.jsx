import dynamic from "next/dynamic";

export const DevelopmentProcessAsync = dynamic(
  () => import("./DevelopmentProcess")
  // eslint-disable-next-line function-paren-newline
);
