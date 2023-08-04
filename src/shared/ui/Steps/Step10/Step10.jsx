import React from "react";

import { Button } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step10 = ({ onClose, reviews }) => (
  <div>
    <p className={styles.desc_step}>
      Thank you for completing the survey. A representative will contact you
      shortly to authorize the agreement.
    </p>
    <div className={styles.buttons}>
      <Button
        variant="contained"
        onClick={onClose}
        type="button"
        className={styles.close_button}
      >
        Close
      </Button>
    </div>

    <Reviews reviews={reviews} />
  </div>
);
