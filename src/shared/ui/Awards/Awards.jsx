import Image from "next/image";
import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import styles from "./Awards.module.scss";

const Awards = ({ title, subTitle }) => (
  <FadeInWhenVisible>
    <div className={styles.awards}>
      <div className={styles.awards_inner}>
        <Typography tag="h2" size="title">
          {title} <span>{subTitle}</span>
        </Typography>
        <div className={styles.card}>
          <div className={styles.row}>
            <Image
              src="/images/CallRail.svg"
              alt="CallRail"
              width={204}
              height={47}
            />
            <Image
              src="/images/Avalara.svg"
              alt="Avalara"
              width={189}
              height={189}
            />
            <Image
              src="/images/AdRoll.svg"
              alt="AdRoll"
              width={251}
              height={47}
            />
          </div>
          <div className={styles.row}>
            <Image
              src="/images/Clutch2022.svg"
              alt="Clutch 2022"
              width={167}
              height={180}
            />
            <Image
              src="/images/Expertise2022.svg"
              alt="Expertise 2022"
              width={170}
              height={143}
            />
          </div>
          <div className={styles.row}>
            {" "}
            <Image
              src="/images/Clutch2023.svg"
              alt="Clutch 2023"
              width={167}
              height={180}
            />
            <Image
              src="/images/Expertise2023.svg"
              alt="Expertise 2023"
              width={170}
              height={143}
            />{" "}
          </div>
          <div className={styles.row}>
            {" "}
            <Image
              src="/images/Clutch2024.svg"
              alt="Clutch 2024"
              width={167}
              height={180}
            />
            <Image
              src="/images/Expertise2024.svg"
              alt="Expertise 2024"
              width={170}
              height={143}
            />
          </div>
          <div className={styles.row}>
            <Image
              src="/images/BestOf2022.svg"
              alt="Best of 2022"
              width={209}
              height={227}
            />

            <Image
              src="/images/GooglePartner.svg"
              alt="Google Partner"
              width={170}
              height={143}
            />
          </div>
        </div>
      </div>
    </div>
  </FadeInWhenVisible>
);

export default Awards;
