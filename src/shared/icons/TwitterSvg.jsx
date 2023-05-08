import React from "react";

import { useTheme } from "../hooks";

export const TwitterSvg = () => {
  const { theme } = useTheme();

  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7268 1.53191C16.1432 1.78844 15.52 1.9632 14.8639 2.04299C15.5325 1.64006 16.0469 1.00501 16.2903 0.247295C15.6631 0.613293 14.968 0.879712 14.2281 1.02809C13.6373 0.395673 12.7951 0 11.86 0C10.0683 0 8.61552 1.45278 8.61552 3.24254C8.61552 3.49973 8.6452 3.74702 8.69927 3.98376C6.0021 3.85649 3.61158 2.56132 2.01174 0.603401C1.73016 1.07953 1.57255 1.63281 1.57255 2.23555C1.57255 3.36322 2.14627 4.35438 3.01543 4.93668C2.48325 4.91953 1.98273 4.77313 1.54617 4.53045V4.57068C1.54617 6.14348 2.66262 7.45513 4.14838 7.75387C3.87602 7.82707 3.5885 7.86663 3.29372 7.86663C3.08665 7.86663 2.88816 7.84685 2.68966 7.80992C3.10578 9.09783 4.30203 10.0369 5.72579 10.0633C4.61791 10.9331 3.21393 11.4514 1.7018 11.4514C1.44461 11.4514 1.18808 11.4363 0.930237 11.4072C2.37378 12.3265 4.07452 12.864 5.91373 12.864C11.8844 12.864 15.1454 7.92071 15.1454 3.64085C15.1454 3.50302 15.1454 3.36388 15.1355 3.22539C15.7693 2.77103 16.3226 2.19664 16.7578 1.5451L16.7268 1.53191Z"
        fill={theme === "app_light_theme" ? "black" : "white"}
      />
    </svg>
  );
};
