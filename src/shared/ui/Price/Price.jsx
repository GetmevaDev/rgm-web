import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Table } from "../Table/Table";

import styles from "./Price.module.scss";

export const Price = ({ items, list }) => (
  <FadeInWhenVisible>
    <div className={styles.price}>
      <Table items={items} list={list} />
    </div>
  </FadeInWhenVisible>
);
