import React from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step1 = ({ formData, setFormData, onNext, onBack, reviews }) => (
  <div className={styles.step1}>
    <div className={styles.title}>Step 1: Preliminary Information</div>

    <div className={styles.answers}>
      <div className={styles.answer}>
        <TextArea
          placeholder="What brought you to us today?"
          value={formData?.brought}
          onChange={(e) =>
            setFormData({ ...formData, brought: e.target.value })
          }
        />
      </div>
      <div className={styles.answer}>
        <TextArea
          placeholder="How are you currently trying to increase your revenue?"
          value={formData?.increase}
          onChange={(e) =>
            setFormData({ ...formData, increase: e.target.value })
          }
        />
      </div>
    </div>

    <div className={styles.buttons}>
      <Button variant="outline" onClick={onBack} type="button">
        Back
      </Button>
      <Button variant="contained" onClick={() => onNext(2)} type="button">
        Next
      </Button>
    </div>

    <Reviews reviews={reviews} />
  </div>
);
