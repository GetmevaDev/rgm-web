import React from "react";

import { PriceItem } from "./Item/PriceItem";

import styles from "./Price.module.scss";

export const Price = ({ items }) => (
  <div className={styles.price}>
    {items?.map((item) => (
      <PriceItem key={item.id} {...item} />
    ))}
  </div>
);
