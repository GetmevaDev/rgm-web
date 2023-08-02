import React, { useState } from "react";

import styles from "./Rating.module.scss";

export const Rating = ({ label, value, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingChange = (newValue) => {
    onRatingChange(newValue);
  };

  const handleHover = (newValue) => {
    setHoveredRating(newValue);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className={styles.ratingContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.starsContainer}>
        {[...Array(10)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={ratingValue}
              type="button"
              className={`${styles.ratingNumber} ${
                ratingValue <= value || ratingValue <= hoveredRating
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
