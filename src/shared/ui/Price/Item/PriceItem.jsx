import React from "react";

import styles from "./PriceItem.module.scss";

export const PriceItem = ({ title, description, price, PricingItemsList }) => (
  <div className={styles.item}>
    <div className={styles.title}>{title}</div>
    <p className={styles.description}>{description}</p>
    <div className={styles.price_inner}>
      <span className={styles.dollar}>$</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.mouth}>/Month</span>
    </div>

    <ul className={styles.list}>
      {PricingItemsList?.map(({ Item, id }) => (
        <li key={id}>{Item}</li>
      ))}
    </ul>
  </div>
);
