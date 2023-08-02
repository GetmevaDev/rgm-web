/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
    selectedAddons: [],
  });

  const onSubmit = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData }));
  };

  const onClose = () => {
    setIsActive(!isActive);
    setFormData(formData);
  };

  return (
    <div className={styles.build}>
      <Typography tag="h2" size="small" color="white" className={styles.title}>
        Lorem ipsum dolor sit amet
      </Typography>

      <button
        className={styles.button}
        type="button"
        onClick={() => setIsActive(true)}
      >
        Let's Craft Your Success Strategy!
      </button>
      {isActive && (
        <Modal isActive={isActive} onClose={onClose}>
          <form>
            <Steps
              reviews={reviews}
              addons={addons}
              items={items}
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              list={list}
              packageItems={packageItems}
              packageList={packageList}
            />
          </form>
        </Modal>
      )}
    </div>
  );
};

//  robert@robertgerov.com
