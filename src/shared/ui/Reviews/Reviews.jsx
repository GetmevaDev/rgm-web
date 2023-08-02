import Image from "next/image";
import React from "react";

import styles from "./Reviews.module.scss";

const Card = ({ name, description }) => (
  <div className={styles.card}>
    <div className={styles.card_top}>
      <span className={styles.name}>{name}</span>
      <div>
        <Image width={19} height={19} src="/svg/star.svg" alt="start-1" />
        <Image width={19} height={19} src="/svg/star.svg" alt="start-2" />
        <Image width={19} height={19} src="/svg/star.svg" alt="start-3" />
        <Image width={19} height={19} src="/svg/star.svg" alt="start-4" />
        <Image width={19} height={19} src="/svg/star.svg" alt="start-5" />
      </div>
    </div>

    <div className={styles.description}>{description}</div>
  </div>
);

export const Reviews = ({ reviews }) => (
  <div className={styles.reviews}>
    <h4 className={styles.review_title}>Reviews</h4>

    <div className={styles.cards}>
      {reviews?.map((review) => (
        <Card
          key={review?.attributes?.createdAt}
          name={review?.attributes?.name}
          description={review?.attributes?.description}
        />
      ))}
    </div>
  </div>
);
