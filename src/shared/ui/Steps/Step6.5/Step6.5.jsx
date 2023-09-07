import React from "react";

import { Radio } from "@/shared/common";

import { Button, PackagePricing } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step65 = ({
  onBack,
  reviews,
  setStep,
  formData,
  setFormData,
  packageItems,
  packageList,
}) => (
  <div>
    <div>
      <div className={styles.title}>Step 6: Choose Your Website Package</div>

      <div className={styles.offer}>
        We offer a range of website packages to suit businesses of every size.
        Select the one that best fits your needs
      </div>

      <PackagePricing
        items={packageItems}
        list={packageList}
        formData={formData}
        setFormData={setFormData}
      />

      <div className={styles.buttons}>
        <Button variant="outline" onClick={() => setStep(6)} type="button">
          Back
        </Button>

        <Button
          variant="contained"
          // eslint-disable-next-line no-confusing-arrow
          onClick={() => setStep(7)}
          type="button"
        >
          Next
        </Button>
      </div>
      <Reviews reviews={reviews} />
    </div>
  </div>
);
