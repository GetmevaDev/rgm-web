import React, { useEffect, useState } from "react";

import { ETheme } from "@/providers";

import { LOCAL_STORAGE_THEME_KEY } from "../constants";
import { useTheme } from "../hooks";

export const FacebookSvg = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY || ETheme.Light));
  }, []);

  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2844 0.304199H1.06163C0.64317 0.304199 0.303711 0.643658 0.303711 1.06211V13.2849C0.303711 13.7039 0.64317 14.0428 1.06163 14.0428H7.64129V8.72255H5.85011V6.64973H7.64129V5.11845C7.64129 3.34444 8.72549 2.37931 10.3083 2.37931C11.0668 2.37931 11.7188 2.43483 11.9089 2.46002V4.31474H10.8092C9.95052 4.31474 9.78337 4.72747 9.78337 5.32853V6.65145H11.835L11.5688 8.72942H9.78337V14.0428H13.2839C13.7035 14.0428 14.0423 13.7039 14.0423 13.2849V1.06211C14.0423 0.643658 13.7035 0.304199 13.2844 0.304199Z"
        fill={theme === ETheme.Light ? "black" : "white"}
      />
    </svg>
  );
};
