import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./DevelopmentProcess.module.scss";

const colors = {
  khaki: styles.khaki,
  black: styles.black,
};

export const DevelopmentProcess = ({ items, title, description }) => (
  <div className={styles.process}>
    <div className={styles.process_inner}>
      <Typography tag="h2" size="title" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.items}>
            {items.map((item) => (
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
        </div>
        <div
          className={styles.right}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  </div>
);
