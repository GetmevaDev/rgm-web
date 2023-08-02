import React, { useState } from "react";

import { Radio } from "@/shared/common";
import { Table } from "@/shared/common/Table/Table";

import { Button, PackagePricing } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step5 = ({
  onBack,
  onNext,
  reviews,
  formData,
  setFormData,
  packageItems,
  packageList,
}) => {
  const [isQuestion, setIsQuestion] = useState(null);
  const [showPriceComponent, setShowPriceComponent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChoice = (value) => {
    setIsQuestion(value);
    setErrorMessage("");
  };

  const handleNext = () => {
    if (isQuestion === null) {
      setErrorMessage("Please select an option");
    } else if (isQuestion === "yes") {
      onNext(6);
    } else {
      setShowPriceComponent(true);
    }
  };

  console.log(isQuestion, "isQuestion");

  return (
    <div>
      {showPriceComponent ? (
        <div>
          <PackagePricing
            items={packageItems}
            list={packageList}
            formData={formData}
            setFormData={setFormData}
          />

          <div className={styles.buttons}>
            <Button variant="outline" onClick={() => onBack(5)} type="button">
              Back
            </Button>
            <Button variant="contained" onClick={() => onNext(7)} type="button">
              Next
            </Button>
          </div>

          <Reviews reviews={reviews} />
        </div>
      ) : (
        <div>
          <div className={styles.title}>Step 5</div>

          <div className={styles.question}>
            Do you currently have a website?
          </div>
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
            <Button variant="contained" onClick={handleNext} type="button">
              Next
            </Button>
          </div>
          <Reviews reviews={reviews} />
        </div>
      )}
    </div>
  );
};
