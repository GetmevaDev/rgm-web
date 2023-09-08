import React from "react";
import { Controller, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

import { PhoneNumberInput } from "@/shared/common";

import { Button, TextArea } from "../..";
import { Reviews } from "../../Reviews/Reviews";

import styles from "../Steps.module.scss";

export const Step1 = ({ formData, setFormData, onNext, onBack, reviews }) => {
  const { control, handleSubmit, formState, setValue } = useForm({
    defaultValues: formData,
  });

  const { isNextButtonDisabled } = formState;

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onNext();
  };

  return (
    <div className={styles.step1}>
      <div className={styles.title}>Step 1: Preliminary Information</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.grid}>
          <Controller
            name="fullName"
            control={control}
            rules={{
              required: "Complete the field",
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Please enter only letters for full name",
              },
            }}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Full name"
                error={formState.errors.fullName?.message}
              />
            )}
          />

          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Complete the field",
              pattern: {
                message: "Invalid phone number format, must be 10 digits",
              },
            }}
            render={({ field }) => (
              <PhoneNumberInput
                value={field.value}
                placeholder="Phone number"
                error={formState.errors.phoneNumber?.message}
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Complete the field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            }}
            render={({ field }) => (
              <TextArea
                type="email"
                {...field}
                placeholder="Email"
                error={formState.errors.email?.message}
              />
            )}
          />
        </div>
        <div className={styles.answers}>
          <Controller
            name="brought"
            control={control}
            rules={{ required: "Complete the field" }}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="What brought you to us today?"
                error={formState.errors.brought?.message}
              />
            )}
          />
          <div className={styles.answer}>
            <Controller
              name="increase"
              control={control}
              rules={{ required: "Complete the field" }}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="How are you currently trying to increase your revenue?"
                  error={formState.errors.increase?.message}
                />
              )}
            />
          </div>
        </div>
        <div className={styles.grid}>
          <Controller
            name="businessName"
            control={control}
            rules={{ required: "Complete the field" }}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Business name"
                error={formState.errors.businessName?.message}
              />
            )}
          />

          <Controller
            name="domainName"
            control={control}
            rules={{ required: "Complete the field" }}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Domain name"
                error={formState.errors.domainName?.message}
              />
            )}
          />

          <Controller
            name="decision_makers"
            control={control}
            render={({ field }) => (
              <TextArea {...field} placeholder="Additional decision makers" />
            )}
          />
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
