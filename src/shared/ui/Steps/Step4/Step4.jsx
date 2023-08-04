import React, { useCallback, useEffect, useState } from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step4 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [servicesError, setServicesError] = useState("");

  const handleFormChange = useCallback(
    (field, value) => {
      setFormData({ ...formData, [field]: value });
    },
    [formData, setFormData]
  );

  useEffect(() => {
    const { services } = formData;

    if (services) {
      setServicesError(services ? "" : "Complete the field");
    }

    setIsNextButtonDisabled(!services);
  }, [formData]);

  const handleFormInteraction = useCallback(() => {
    const { services } = formData;
    setServicesError(services ? "" : "Complete the field");
    setIsNextButtonDisabled(!services);
  }, [formData]);

  return (
    <div>
      <div className={styles.title}>Step 4: Expected Benefits</div>

      <TextArea
        placeholder="How do you feel our services could assist you in achieving your goals?"
        value={formData.services}
        onChange={(e) => handleFormChange("services", e.target.value)}
        onBlur={handleFormInteraction}
        error={servicesError}
      />

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
