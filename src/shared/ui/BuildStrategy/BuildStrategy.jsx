/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Steps } from "../Steps/Steps";
import { Modal, Typography } from "..";

import styles from "./BuildStrategy.module.scss";

export const BuildStrategy = ({
  reviews,
  addons,
  items,
  list,
  packageItems,
  packageList,
}) => {
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    brought: "",
    increase: "",
    rating: "",
    strategy: "",
    consequences: "",
    attempts: "",
    services: "",
    selectedPlan: null,
    isQuestion: null,
    isUpdating: null,
    selectedAddons: [],
  });

  const onSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData }));
  };

  const onClose = () => {
    setIsActive(!isActive);
    setStep(0);
    setFormData({
      brought: "",
      increase: "",
      rating: "",
      strategy: "",
      consequences: "",
      attempts: "",
      services: "",
      selectedPlan: null,
      selectedAddons: [],
    });
  };

  return (
    <div className={styles.build}>
      <Typography tag="h2" size="small" color="white" className={styles.title}>
        Ready To Out-Perform Your Competition?
      </Typography>

      <button
        className={styles.button}
        type="button"
        onClick={() => setIsActive(true)}
      >
        Let's Craft Your Success Strategy!
      </button>
      {isActive && (
        <Modal isActive={isActive} onClose={onClose} step={step}>
          <Steps
            reviews={reviews}
            addons={addons}
            items={items}
            onSubmit={onSubmit}
            formData={formData}
            step={step}
            onClose={onClose}
            setStep={setStep}
            setFormData={setFormData}
            list={list}
            packageItems={packageItems}
            packageList={packageList}
          />
        </Modal>
      )}
    </div>
  );
};

//  robert@robertgerov.com
