import React from "react";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step3 = ({ onBack, onNext, reviews, formData, setFormData }) => (
  <div>
    <div className={styles.title}>Step 3: Considering Changes</div>

    <div className={styles.answers}>
      <div className={styles.answer}>
        <TextArea
          placeholder="Have you made attempts to make this change in the past? If so, please elaborate. If not, what prevented you from doing so?"
          value={formData.attempts}
          onChange={(e) =>
            setFormData({ ...formData, attempts: e.target.value })
          }
        />
      </div>
      <div className={styles.answer}>
        <TextArea
          placeholder="If you do not make this change now, what do you believe the consequences would be?"
          value={formData.consequences}
          onChange={(e) =>
            setFormData({ ...formData, consequences: e.target.value })
          }
        />
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
