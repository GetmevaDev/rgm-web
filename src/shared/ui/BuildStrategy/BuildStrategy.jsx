/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import { ModalForm } from "@/shared/common";

import { Steps } from "../Steps/Steps";
import { Modal, Typography } from "..";

import styles from "./BuildStrategy.module.scss";

export const BuildStrategy = ({
  reviews,
  addons,
  items,
  list,
  packageItems,
  packageList,
}) => (
  <div className={styles.build}>
    <Typography tag="h2" size="small" color="white" className={styles.title}>
      Ready To Out-Perform Your Competition?
    </Typography>

    <ModalForm
      reviews={reviews}
      style={{ margin: "20px auto ", display: "block" }}
      addons={addons}
      items={items}
      list={list}
      packageItems={packageItems}
      packageList={packageList}
    />
  </div>
);
