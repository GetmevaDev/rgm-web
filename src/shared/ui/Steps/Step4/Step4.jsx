import React from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step4 = ({ onBack, onNext, reviews }) => (
  <div>
    <div className={styles.title}>Step 4: Expected Benefits</div>

    <TextArea placeholder="How do you feel our services could assist you in achieving your goals?" />

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
