import React from "react";

import { ROUTES } from "@/shared/constants";

import { CaseItem } from "./Item/CaseItem";

import styles from "./Cases.module.scss";

export const Cases = ({ data }) => (
  <div className={styles.cases}>
    <div className={styles.cases_inner}>
      {data.map((item) => (
        <CaseItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
