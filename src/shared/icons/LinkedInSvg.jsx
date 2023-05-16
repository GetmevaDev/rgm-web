import React from "react";

import { ETheme } from "@/providers";

import { useTheme } from "../hooks";

export const LinkedInSvg = () => {
  const { theme } = useTheme();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_617_3610)">
        <path
          d="M15.996 15.9999V15.9993H15.9998V10.498C15.9998 7.80677 15.4204 5.73364 12.2742 5.73364C10.7617 5.73364 9.74667 6.56364 9.33229 7.35052H9.28854V5.98489H6.30542V15.9993H9.41167V11.0405C9.41167 9.73489 9.65917 8.47239 11.276 8.47239C12.8692 8.47239 12.8929 9.96239 12.8929 11.1243V15.9999H15.996Z"
          fill={theme === ETheme.Light ? "black" : "white"}
        />
        <path
          d="M1.24683 5.9856H4.35683V16H1.24683V5.9856Z"
          fill={theme === ETheme.Light ? "black" : "white"}
        />
        <path
          d="M2.80101 1C1.80663 1 0.999756 1.80687 0.999756 2.80125C0.999756 3.79562 1.80663 4.61937 2.80101 4.61937C3.79538 4.61937 4.60226 3.79562 4.60226 2.80125C4.60163 1.80687 3.79476 1 2.80101 1V1Z"
          fill={theme === ETheme.Light ? "black" : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_617_3610">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.999756 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};