import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./CustomerReview.module.scss";

export const CustomerReview = ({ title, description, buttonView, logo }) => {
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] =
    useState(false);

  const descriptionStyle = {
    maxHeight: isFullDescriptionVisible ? "500px" : "auto",
    overflow: isFullDescriptionVisible ? "auto" : "hidden",
  };
  return (
    <div className={styles.review} style={descriptionStyle}>
      <div className={styles.image_inner}>
        <Image
          src={logo?.data?.attributes?.url}
          width={150}
          className={styles.image}
          height={102}
          alt={logo?.data?.attributes?.name}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.border} />
      <div className={styles.description}>
        {isFullDescriptionVisible ? description : description.slice(0, 100)}
      </div>
      <div className={styles.buttons}>
        <div>
          {!isFullDescriptionVisible && description.length > 100 && (
            <div
              className={styles.link}
              onClick={() => setIsFullDescriptionVisible(true)}
            >
              Read more
            </div>
          )}
        </div>
        <div>
          <Link className={styles.buttonView} href={buttonView}>
            view project
          </Link>
        </div>
      </div>
    </div>
  );
};
