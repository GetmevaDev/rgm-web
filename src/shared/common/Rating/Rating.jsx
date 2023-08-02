// Rating.js
import React, { useState } from "react";

import styles from "./Rating.module.scss";

export const Rating = ({ label }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };
  return (
    <div className={styles.ratingContainer}>
      <p className={styles.label}>{label}</p>
      <p className={styles.rating}>{rating}</p>
      <div className={styles.starsContainer}>
        {[...Array(10)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={ratingValue}
              type="button"
              className={`${styles.ratingNumber} ${
                ratingValue <= rating || ratingValue <= hoveredRating
                  ? styles.active
                  : ""
              }`}
              onClick={() => handleRatingChange(ratingValue)}
              onMouseEnter={() => handleHover(ratingValue)}
              onMouseLeave={handleMouseLeave}
            >
              {ratingValue}
            </button>
          );
        })}
      </div>
    </div>
  );
};
