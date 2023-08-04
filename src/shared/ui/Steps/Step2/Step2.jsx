import React, { useCallback, useEffect, useState } from "react";

import { Rating } from "@/shared/common";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step2 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [strategyError, setStrategyError] = useState("");

  const handleFormChange = useCallback(
    (field, value) => {
      setFormData({ ...formData, [field]: value });
    },
    [formData, setFormData]
  );

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  useEffect(() => {
    const { strategy } = formData;

    if (strategy) {
      setStrategyError(strategy ? "" : "Complete the field");
    }

    setIsNextButtonDisabled(!strategy);
  }, [formData]);

  const handleFormInteraction = useCallback(() => {
    const { strategy } = formData;
    setStrategyError(strategy ? "" : "Complete the field");
    setIsNextButtonDisabled(!strategy);
  }, [formData]);

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
            onChange={(e) => handleFormChange("strategy", e.target.value)}
            onBlur={handleFormInteraction}
            error={strategyError}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant="outline" onClick={onBack} type="button">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          type="button"
          disabled={isNextButtonDisabled}
        >
          Next
        </Button>
      </div>
      <Reviews reviews={reviews} />
    </div>
  );
};
