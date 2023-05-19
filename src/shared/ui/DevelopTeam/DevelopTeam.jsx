import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./DevelopTeam.module.scss";

export const DevelopTeam = ({ items, title, description }) => (
  <div className={styles.develop}>
    <Typography tag="h2" className={styles.title}>
      {title}
    </Typography>

    <div className={styles.main}>
      <div
        className={styles.left}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />

      <div className={styles.right}>
        <ul className={styles.list}>
          {items?.map((item) => (
            <li className={styles.item} key={item.id}>
              <Image
                width={42}
                height={49}
                src={item?.svg?.data?.attributes?.url}
                alt={item.text}
              />
              <div className={styles.text}>
                <span>-</span>
                <div>{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
