import React, { useState } from "react";

import styles from "./SearchInput.module.scss";

export const SearchInput = ({ results, setResults }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let timeoutId;

  const debounce = (func, delay) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };

  const performSearch = async (searchQuery) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        // `http://localhost:1337/api/blog-posts-pages?_q=${searchQuery}`
        `https://cms-rgm.herokuapp.com/api/blog-posts-pages?_q=${searchQuery}`
      );
      const data = await response.json();
      setResults(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    debounce(() => {
      if (searchQuery.trim() !== "") {
        performSearch(searchQuery);
      } else {
        setResults([]);
      }
    }, 1000);
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        className={styles.input}
        placeholder="Search"
        onChange={handleInputChange}
      />
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        className={styles.search_svg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5549 24.6307L20.4494 18.5099C21.9193 16.5482 22.7128 14.1603 22.7102 11.7067C22.7102 5.43961 17.6241 0.34082 11.3727 0.34082C5.1212 0.34082 0.0351562 5.43961 0.0351562 11.7067C0.0351562 17.9739 5.1212 23.0727 11.3727 23.0727C13.8201 23.0753 16.202 22.2798 18.1588 20.8062L24.2643 26.927C24.5733 27.204 24.9764 27.3518 25.3908 27.3402C25.8052 27.3286 26.1994 27.1583 26.4925 26.8645C26.7856 26.5706 26.9554 26.1754 26.967 25.76C26.9786 25.3446 26.8311 24.9405 26.5549 24.6307ZM3.27444 11.7067C3.27444 10.101 3.7494 8.53142 4.63924 7.19634C5.52908 5.86125 6.79385 4.82068 8.27361 4.20621C9.75336 3.59174 11.3816 3.43097 12.9525 3.74422C14.5234 4.05748 15.9664 4.83069 17.099 5.96608C18.2315 7.10148 19.0028 8.54806 19.3153 10.1229C19.6277 11.6977 19.4674 13.3301 18.8544 14.8136C18.2415 16.297 17.2035 17.565 15.8718 18.457C14.54 19.3491 12.9743 19.8253 11.3727 19.8253C9.22567 19.8227 7.16735 18.9665 5.6492 17.4445C4.13105 15.9226 3.27702 13.8591 3.27444 11.7067Z"
          fill="#BDA76A"
        />
      </svg>
    </div>
  );
};
