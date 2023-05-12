import React from "react";

import styles from "./PriceItem.module.scss";

export const PriceItem = ({ title, description, price, list }) => (
  <div className={styles.item}>
    <div className={styles.title}>{title}</div>
    <p className={styles.description}>{description}</p>
    <div className={styles.price_inner}>
      <span className={styles.dollar}>$</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.mouth}>/Month</span>
    </div>

    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
);
