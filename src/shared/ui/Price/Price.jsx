import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { PriceItem } from "./Item/PriceItem";

import styles from "./Price.module.scss";

export const Price = ({ items }) => (
  <FadeInWhenVisible>
    <div className={styles.price}>
      {items?.map((item) => (
        <PriceItem key={item.id} {...item} />
      ))}
    </div>
  </FadeInWhenVisible>
);
