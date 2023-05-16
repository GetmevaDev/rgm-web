import React from "react";

import { InfoItem } from "./Item/InfoItem";

import styles from "./Info.module.scss";

const slides = [
  {
    id: 1,
    title: "BUSINESS ANALYSIS & INTERPRETATION",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },

  {
    id: 2,
    title: "Content Strategy",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },

  {
    id: 3,
    title: "Creative Strategy",
    description: `
	Many businesses give customers a way to make a purchase. What’s harder to deliver is a great experience across the entire digital journey, from discovery to purchasing decision. <a> Learn More!</a>
	`,
    image: "/images/slide.jpg",
  },
];

export const Info = () => (
  <div className={styles.info}>
    <div className={styles.info_inner}>
      {slides?.map((item) => (
        <InfoItem {...item} />
      ))}
    </div>
  </div>
);
