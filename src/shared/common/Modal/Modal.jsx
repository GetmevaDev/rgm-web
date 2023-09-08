/* eslint-disable react/button-has-type */
import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./Modal.module.scss";

export const Modal = ({ onClose, children, isActive, step }) => {
  React.useEffect(() => {
    if (isActive) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }

    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, [isActive]);

  const modalClasses = classNames(
    styles.overlay,
    styles.popup,
    styles[`step${step && step.toString().replace(".", "_")}`]
  );

  console.log(step, "step");

  return (
    <div className={styles.overlay}>
      <div className={modalClasses}>
        <div className={styles.closeButton} onClick={onClose}>
          <Image
            width={20}
            height={20}
            src="/svg/close-black.svg"
            alt="close"
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
