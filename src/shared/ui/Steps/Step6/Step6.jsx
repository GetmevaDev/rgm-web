import React, { useState } from "react";

import { Radio } from "@/shared/common";
import { Table } from "@/shared/common/Table/Table";

import { Button, PackagePricing } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step6 = ({
  onBack,
  reviews,
  setStep,
  formData,
  setFormData,
  packageItems,
  packageList,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const { isUpdating } = formData;

  const handleChoice = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      isUpdating: value,
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
        {formData?.isQuestion === "no" ? (
          <div>
            <PackagePricing
              items={packageItems}
              list={packageList}
              formData={formData}
              setFormData={setFormData}
            />

            <div className={styles.buttons}>
              <Button variant="outline" onClick={onBack} type="button">
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => setStep(7)}
                type="button"
              >
                Next
              </Button>
            </div>

            <Reviews reviews={reviews} />
          </div>
        ) : (
          <div>
            <div className={styles.title}>Step 6:</div>

            <div className={styles.question}>
              Does your website require updating or improvement?
            </div>
            <div className={styles.options}>
              <Radio
                label="Yes"
                name="option"
                value="yes"
                ariaLabel="yes"
                checked={isUpdating === "yes"}
                onChange={() => handleChoice("yes")}
              />

              <Radio
                label="No"
                name="option"
                value="no"
                ariaLabel="no"
                checked={isUpdating === "no"}
                onChange={() => handleChoice("no")}
              />
            </div>
            <div className={styles.buttons}>
              <Button variant="outline" onClick={onBack} type="button">
                Back
              </Button>

              <Button
                variant="contained"
                // eslint-disable-next-line no-confusing-arrow
                onClick={() =>
                  isUpdating === "no" ? setStep(8) : setStep(6.5)
                }
                type="button"
                disabled={isUpdating !== "yes" && isUpdating !== "no"}
              >
                Next
              </Button>
            </div>
            <Reviews reviews={reviews} />
          </div>
        )}
      </div>
    </div>
  );
};
