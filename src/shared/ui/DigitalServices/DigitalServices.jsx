import Link from "next/link";
import React from "react";

import { Typography } from "..";

import { DigitalService } from "./DigitalService/DigitalService";

import styles from "./DigitalServices.module.scss";

export const DigitalServices = ({ services }) => (
  <div className={styles.digital_services}>
    <div className="layout">
      <Typography tag="h2" size="small" className={styles.title}>
        {services?.title}
      </Typography>
      <div className={styles.grid_two}>
        {services?.DigitalService?.slice(0, 2).map((item) => (
          <Link className={styles.service} key={item.id} href={item.slug}>
            <DigitalService {...item} />
          </Link>
        ))}
      </div>
      {console.log(services, "services")}

      <div className={styles.grid_three}>
        {services?.DigitalService?.slice(2, 5).map((item) => (
          <Link className={styles.service} key={item.id} href={item.slug}>
            <DigitalService {...item} key={item.id} />
          </Link>
        ))}
      </div>

      <div className={styles.grid_two}>
        {services?.DigitalService?.slice(5, 7).map((item) => (
          <Link className={styles.service} key={item.id} href={item.slug}>
            <DigitalService {...item} key={item.id} />
          </Link>
        ))}
      </div>

      <div className={styles.grid_three}>
        {services?.DigitalService?.slice(7, 10).map((item) => (
          <Link className={styles.service} key={item.id} href={item.slug}>
            <DigitalService {...item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);
