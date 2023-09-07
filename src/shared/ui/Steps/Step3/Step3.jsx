import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step3 = ({ onBack, onNext, reviews, formData, setFormData }) => {
  const { control, handleSubmit, formState, setValue } = useForm({
    defaultValues: formData,
  });

  const { isNextButtonDisabled } = formState;

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  return (
    <div className={styles.step3_inner}>
      <div className={styles.title}>Step 3: Considering Changes</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.answers_end}>
          <div className={classNames(styles.answer, styles.answer_step3)}>
            <Controller
              name="attempts"
              control={control}
              rules={{ required: "Complete the field" }}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="Have you made attempts to make this change in the past? If so, please elaborate. If not, what prevented you from doing so?"
                  error={formState.errors.attempts?.message}
                />
              )}
            />
          </div>
          <div className={classNames(styles.answer, styles.answer_step3)}>
            <Controller
              name="consequences"
              control={control}
              rules={{ required: "Complete the field" }}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="If you do not make this change now, what do you believe the consequences would be?"
                  error={formState.errors.consequences?.message}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="outline" onClick={onBack} type="button">
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={isNextButtonDisabled}
          >
            Next
          </Button>
        </div>
      </form>

      <Reviews reviews={reviews} />
    </div>
  );
};
