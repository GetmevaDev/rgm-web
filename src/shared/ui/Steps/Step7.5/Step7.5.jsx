import React from "react";

import { Button } from "../..";

import styles from "../Steps.module.scss";

export const Step75 = ({ onNext, onBack, setStep, setFormData }) => (
  <div className={styles.step75}>
    <div className={styles.top}>
      <p className={styles.process}>
        Before proceeding to the next step, here’s an irresistible offer for
        you:
      </p>
      <h2 className={styles.step7_title}>Get Your Website for Free!</h2>

      <p className={styles.step7_description}>
        When you authorize a corresponding 12-month marketing agreement, your
        chosen website package is included at no extra cost.
      </p>

      <p className={styles.step7_sub_description}>
        Why pay for a website separately when you can get it for free as part of
        an integrated marketing plan? Click below to explore our marketing
        packages and start your journey towards accelerated business growth
        today!
      </p>
    </div>
    <div className={styles.buttons}>
      <Button
        variant="contained"
        onClick={() => {
          setStep(8);
          setFormData((prevData) => ({
            ...prevData,
            websiteFree: "I Agree",
          }));
        }}
        type="button"
        className={styles.agree_btn}
      >
        I Agree
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          setStep(8);
          setFormData((prevData) => ({
            ...prevData,
            websiteFree: "Skip",
          }));
        }}
        type="button"
      >
        Skip
      </Button>
    </div>
  </div>
);
