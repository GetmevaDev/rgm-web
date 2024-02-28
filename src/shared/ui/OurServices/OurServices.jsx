import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import { OurService } from "./Item/OurService";

import styles from "./OurServices.module.scss";

const OurServices = ({ title, description, items }) => (
  <FadeInWhenVisible>
    <div className={styles.our_services} id="our_services">
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
  </FadeInWhenVisible>
);

export default OurServices;
