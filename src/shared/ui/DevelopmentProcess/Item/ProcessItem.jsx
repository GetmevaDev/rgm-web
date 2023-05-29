import classNames from "classnames";
import Image from "next/image";
import React from "react";

import styles from "./ProcessItem.module.scss";

const colors = {
  khaki: styles.khaki,
  black: styles.black,
};

export const ProcessItem = ({ items }) => (
  <div className={styles.items}>
    {items?.map((item) => (
      <div className={styles.item} key={item.id}>
        <div className={classNames(styles.image, colors[item.color])}>
          <Image
            width={50}
            height={50}
            src={item?.svg?.data?.attributes?.url}
            alt={item.text}
          />
        </div>
        <p className={styles.item_description}>{item.text}</p>
      </div>
    ))}
  </div>
);
