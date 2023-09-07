import React from "react";

import { Table } from "@/shared/common/Table/Table";

import { Button } from "../..";

import styles from "../Steps.module.scss";

export const Step8 = ({
  items,
  list,
  onNext,
  formData,
  setFormData,
  setStep,
  handleSubmit,
  onBack,
}) => {
  const handleBack = () => {
    if (formData?.isUpdating === "no") {
      setStep(6);
    }
  };

  return (
    <div>
      <div className={styles.title}>Step 8: Our Marketing Pricing</div>
      <p className={styles.sub}>*All plans require a 6 month commitment.*</p>
      <Table
        items={items}
        list={list}
        formData={formData}
        setFormData={setFormData}
      />

      <div className={styles.buttons}>
        <Button variant="outline" onClick={handleBack} type="button">
          Back
        </Button>
        <Button variant="contained" onClick={onNext} type="button">
          Next
        </Button>
      </div>
    </div>
  );
};
