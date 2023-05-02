import React from "react";

import { Typography } from "..";

import styles from "./BridgeBusiness.module.scss";

export const BridgeBusiness = () => (
  <section className={styles.bridge}>
    <div className={styles.left}>
      <Typography tag="h3" size="mini">
        We Bridge Business Necessity
        <span className={styles.color}> With Web Development</span>
      </Typography>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: `Robert Gerov Media, is an experience-design and digital marketing agency that provides strategy to design, marketing, integration and automation services for large and small businesses.
					<br/>
					<br/>

					We are experts in reimagining a businesses relationship with its consumer and in guiding them through the complexities of todays’ digital economy.
					<br/>
					<br/>

					Today, people embrace companies with the customer experiences that best meet their needs. We grow businesses by creating experiences people love.`,
        }}
      />
    </div>
    <div className={styles.right}>block</div>
  </section>
);
