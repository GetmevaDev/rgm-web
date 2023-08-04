import React, { useCallback, useEffect, useState } from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step1 = ({ formData, setFormData, onNext, onBack, reviews }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const [broughtError, setBroughtError] = useState("");
  const [increaseError, setIncreaseError] = useState("");

  const handleFormChange = useCallback(
    (field, value) => {
      setFormData({ ...formData, [field]: value });
    },
    [formData, setFormData]
  );

  useEffect(() => {
    const { brought, increase } = formData;

    if (brought || increase) {
      setBroughtError(brought ? "" : "Complete the field");
      setIncreaseError(increase ? "" : "Complete the field");
    }

    setIsNextButtonDisabled(!brought || !increase);
  }, [formData]);

  const handleFormInteraction = useCallback(() => {
    const { brought, increase } = formData;
    setBroughtError(brought ? "" : "Complete the field");
    setIncreaseError(increase ? "" : "Complete the field");
    setIsNextButtonDisabled(!brought || !increase);
  }, [formData]);

  return (
    <div className={styles.step1}>
      <div className={styles.title}>Step 1: Preliminary Information</div>

      <div className={styles.answers}>
        <div className={styles.answer}>
          <TextArea
            placeholder="What brought you to us today?"
            value={formData?.brought}
            onChange={(e) => handleFormChange("brought", e.target.value)}
            onBlur={handleFormInteraction}
            error={broughtError}
          />
        </div>
        <div className={styles.answer}>
          <TextArea
            placeholder="How are you currently trying to increase your revenue?"
            value={formData?.increase}
            onChange={(e) => handleFormChange("increase", e.target.value)}
            onBlur={handleFormInteraction}
            error={increaseError}
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
