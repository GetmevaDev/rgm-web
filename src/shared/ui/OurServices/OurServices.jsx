import React from "react";

import { Typography } from "..";

import { OurService } from "./Item/OurService";

import styles from "./OurServices.module.scss";

export const OurServices = ({ title, description, items }) => (
  <div className={styles.our_services}>
    <div className={styles.our_services_inner}>
      <Typography tag="h3" size="small">
        {title}
      </Typography>
      <p className={styles.description}> {description}</p>

      <div className={styles.services}>
        {items?.map((item) => (
          <OurService key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
);
