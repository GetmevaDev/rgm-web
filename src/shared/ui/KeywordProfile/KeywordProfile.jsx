import classNames from "classnames";
import React, { useState } from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import styles from "./KeywordProfile.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

const KeywordProfile = ({ color = "white", items, grid }) => (
  <FadeInWhenVisible>
    <div className={classNames(styles.keyword, colors[color])}>
      <div className={styles.keyword_inner}>
        <Typography tag="h2" size="title">
          Keyword Profile
        </Typography>

        <ol
          className={classNames(styles.column_list, {
            [styles.column_list_two]: grid === "two",
            [styles.column_list_three]: grid === "three",
          })}
        >
          {items?.map((item) => (
            <li
              key={item.id}
              className={classNames(styles.column_item, {
                [styles.column_item_two]: grid === "two",
                [styles.column_item_three]: grid === "three",
              })}
            >
              {item.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </FadeInWhenVisible>
);

export default KeywordProfile;
