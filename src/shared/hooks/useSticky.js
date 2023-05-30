/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export const useSticky = () => {
  const [isSticky, setSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    if (element.current) {
      window.pageYOffset > element.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    }
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      const context = this;
      const args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
};
