import React, { useCallback, useEffect, useState } from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step3 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const [attemptstError, setAttemptsError] = useState("");
  const [consequencesError, setConsequencesError] = useState("");

  const handleFormChange = useCallback(
    (field, value) => {
      setFormData({ ...formData, [field]: value });
    },
    [formData, setFormData]
  );

  useEffect(() => {
    const { attempts, consequences } = formData;

    if (attempts || consequences) {
      setAttemptsError(attempts ? "" : "Complete the field");
      setConsequencesError(consequences ? "" : "Complete the field");
    }

    setIsNextButtonDisabled(!attempts || !consequences);
  }, [formData]);

  const handleFormInteraction = useCallback(() => {
    const { attempts, consequences } = formData;
    setAttemptsError(attempts ? "" : "Complete the field");
    setConsequencesError(consequences ? "" : "Complete the field");
    setIsNextButtonDisabled(!attempts || !consequences);
  }, [formData]);

  return (
    <div>
      <div className={styles.title}>Step 3: Considering Changes</div>

      <div className={styles.answers_end}>
        <div className={styles.answer}>
          <TextArea
            placeholder="Have you made attempts to make this change in the past? If so, please elaborate. If not, what prevented you from doing so?"
            onChange={(e) => handleFormChange("attempts", e.target.value)}
            onBlur={handleFormInteraction}
            error={attemptstError}
            value={formData.attempts}
          />
        </div>
        <div className={styles.answer}>
          <TextArea
            placeholder="If you do not make this change now, what do you believe the consequences would be?"
            value={formData.consequences}
            onChange={(e) => handleFormChange("consequences", e.target.value)}
            onBlur={handleFormInteraction}
            error={consequencesError}
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
