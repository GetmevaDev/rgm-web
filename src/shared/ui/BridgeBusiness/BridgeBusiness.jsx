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
    <div className={styles.right}>
      <div className={styles.item}>
        <div className={styles.number}>2008</div>
        <div className={styles.right_description}>
          EXADEL ESTABLISHED IN NEW YORK, NY
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.number}>6</div>
        <div className={styles.right_description}>
          COUNTRIES ACROSS 3 CONTINENTS, AND GROWING
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.number}>25+</div>
        <div className={styles.right_description}>
          SERVICE ACCELERATORS THAT REDUCE TIME TO MARKET AND INCREASE SOFTWARE
          QUALITY
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.number}>ISO 27001</div>
        <div className={styles.right_description}>
          GUARANTEEING ALL OUR SECURITY PRACTICES MEET THE HIGHEST INTERNATIONAL
          STANDARDS
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.number}>10/10</div>
        <div className={styles.right_description}>
          CUSTOMER SATISFACTION SCORE BASED ON OUR MOST RECENT CUSTOMER SURVEY
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.number}>25+</div>
        <div className={styles.right_description}>
          CURRENT EMPLOYEES IN OUR RAPIDLY EXPANDING COMPANY*
        </div>
      </div>
      <div className={styles.data}>*Data for Q4, 2022</div>
    </div>
  </section>
);
