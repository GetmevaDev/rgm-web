import React from "react";

import { Button } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step9 = ({ onBack, onNext, reviews }) => (
  <div>
    <div className={styles.title}>Step 9: Final Evaluation</div>

    <p className={styles.step_desc}>
      Given what you've seen of our packages and considering your <br />
      needs, do you feel we could be the right fit for your business?
    </p>

    <div className={styles.buttons}>
      <Button
        variant="contained"
        onClick={onNext}
        type="button"
        className={styles.final_btn}
      >
        Yes
      </Button>

      <Button variant="outline" type="button" className={styles.final_btn}>
        Maybe, I need more information
      </Button>
    </div>
    <Reviews reviews={reviews} />
  </div>
);
