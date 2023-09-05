import React, { useState } from "react";

import { Radio } from "@/shared/common";

import { Button } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step5 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const { isQuestion } = formData;

  const handleChoice = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isQuestion: value,
    }));
    setErrorMessage("");
  };

  const handleNext = () => {
    if (isQuestion !== "yes" && isQuestion !== "no") {
      setErrorMessage("Please select an option.");
      return;
    }

    onNext();
  };

  return (
    <div>
      <div>
        <div className={styles.title}>Step 5</div>

        <div className={styles.question}>Do you currently have a website?</div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className={styles.options}>
          <Radio
            label="Yes"
            name="option"
            value="yes"
            ariaLabel="yes"
            checked={isQuestion === "yes"}
            onChange={() => handleChoice("yes")}
          />

          <Radio
            label="No"
            name="option"
            value="no"
            ariaLabel="no"
            checked={isQuestion === "no"}
            onChange={() => handleChoice("no")}
          />
        </div>
        <div className={styles.buttons}>
          <Button variant="outline" onClick={onBack} type="button">
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            type="button"
            disabled={isQuestion !== "yes" && isQuestion !== "no"}
          >
            Next
          </Button>
        </div>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};
