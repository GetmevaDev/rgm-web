import Image from "next/image";
import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import styles from "./Feedback.module.scss";

export const Feedback = ({ title, subTitle, description, user }) => (
  <FadeInWhenVisible>
    <div className={styles.feedback}>
      <div className={styles.feedback_inner}>
        <div className={styles.sub_title}>{title}</div>
        <Typography tag="h2" size="title">
          {subTitle}
        </Typography>

        <div className={styles.info}>
          <div className={styles.quotes}>
            <Image width={122} height={100} src="/images/quotes.svg" />

            <div>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <div className={styles.bottom}>
                <p className={styles.name}>
                  {user} - <span>Yagoudaeva Law Group. PC</span>
                </p>

                <div className={styles.stars}>
                  <Image width={19} height={19} src="/svg/star.svg" />
                  <Image width={19} height={19} src="/svg/star.svg" />
                  <Image width={19} height={19} src="/svg/star.svg" />
                  <Image width={19} height={19} src="/svg/star.svg" />
                  <Image width={19} height={19} src="/svg/star.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeInWhenVisible>
);
