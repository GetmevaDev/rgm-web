import React, { useState } from "react";

import { Steps } from "@/shared/ui/Steps/Steps";

import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

import styles from "./ModalForm.module.scss";

export const ModalForm = ({
  reviews,
  addons,
  items,
  list,
  packageItems,
  packageList,
  style,
}) => {
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    brought: "",
    increase: "",
    rating: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    strategy: "",
    consequences: "",
    businessName: "",
    domainName: "",
    decisionMakers: "",
    attempts: "",
    services: "",
    selectedPlanPrice: null,
    selectedPlanPackage: null,
    websiteFree: "",
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
      websiteFree: "",

      selectedAddons: [],
    });
  };

  return (
    <div>
      <button
        type="button"
        className={styles.button}
        style={style}
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
