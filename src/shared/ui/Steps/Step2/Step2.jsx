import React from "react";

import { Rating } from "@/shared/common";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step2 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleNext = () => {
    setFormData({ ...formData });
    onNext();
  };

  return (
    <div>
      <div className={styles.title}>Step 2: Evaluating Current Strategy</div>

      <div className={styles.answers}>
        <div className={styles.answer}>
          <Rating
            label="How satisfied are you with your current results?"
            value={formData.rating}
            onRatingChange={handleRatingChange}
          />
        </div>
        <div className={styles.answer}>
          <TextArea
            placeholder="If you could change something about your current strategy, what would it be?"
            value={formData.strategy}
            onChange={(e) =>
              setFormData({ ...formData, strategy: e.target.value })
            }
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant="outline" onClick={onBack} type="button">
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} type="button">
          Next
        </Button>
      </div>
      <Reviews reviews={reviews} />
    </div>
  );
};
