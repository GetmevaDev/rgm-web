import React from "react";

import { Rating } from "@/shared/common";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step2 = ({ onBack, onNext, reviews }) => (
  <div>
    <div className={styles.title}>Step 2: Evaluating Current Strategy</div>

    <div className={styles.answers}>
      <div className={styles.answer}>
        <Rating label="How satisfied are you with your current results?" />
      </div>
      <div className={styles.answer}>
        <TextArea placeholder="If you do not make this change now, what do you believe the consequences would be?" />
      </div>
    </div>
    <div className={styles.buttons}>
      <Button variant="outline" onClick={onBack} type="button">
        Back
      </Button>
      <Button variant="contained" onClick={onNext} type="button">
        Next
      </Button>
    </div>
    <Reviews reviews={reviews} />
  </div>
);
