/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import { Reviews } from "../Reviews/Reviews";
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

  const onClose = () => {
    setIsActive(!isActive);
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
          <Steps
            reviews={reviews}
            addons={addons}
            items={items}
            list={list}
            packageItems={packageItems}
            packageList={packageList}
          />
        </Modal>
      )}
    </div>
  );
};
