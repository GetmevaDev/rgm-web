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
  handleSubmit,
}) => (
  <div>
    <div className={styles.title}>Step 8: Our Marketing Pricing</div>
    <p className={styles.sub}>*All plans require a 6 month commitment.*</p>
    <Table
      items={items}
      list={list}
      formData={formData}
      setFormData={setFormData}
    />

    <Button
      variant="contained"
      onClick={handleSubmit}
      type="button"
      className={styles.btn_submit}
    >
      Submit
    </Button>
  </div>
);
