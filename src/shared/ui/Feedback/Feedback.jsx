import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Feedback.module.scss";

export const Feedback = () => (
  <div className={styles.feedback}>
    <div className={styles.feedback_inner}>
      <div className={styles.sub_title}>Testimonials</div>
      <Typography tag="h2" size="title">
        Feedback
      </Typography>

      <div className={styles.info}>
        <div className={styles.quotes}>
          <Image width={122} height={100} src="/images/quotes.svg" />

          <div>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: `
			“RGM is without a doubt the absolute best choice when looking to hire a professional company for all of your Web design, media and marketing needs. Robert Gerov treated me like family from day one. I had a clear vision of what I wanted to see on my website and Robert and his incredible team went above and beyond my wildest expectations. They guided me every single minor and major step of the way. Consulted and handled all of my questions, and never for one second did I feel like my requests were being ignored. It’s not just another project with RGM, they truly care about the clients’ vision, goals, big picture. Nothing is a hassle for them. They are incredibly dedicated to creating an amazing work product. What I loved most was their creative approach to everything. From designing my business logo to developing my business cards and website, Robert did not permit me to remain “basic”, he honestly gave me so much creative freedom and took all of my opinions to heart. The entire team makes you feel so respected and are considerate of everything from timing to attention, I’ve never worked with a more in sync operating team. My website is purely incredible, the prices are generously fair, I am thrilled to have found such a powerful and dedicated team. They work hard and they work FOR the client. This team absolutely knows how to design for the modern age and with the notion that it’s not just a design but rather a distinct marketing tool, that’s what sets them apart. Finally, I’d just like to express my gratitude to RGM, your team deserves the highest praises and I can’t wait to continue working together!”
			`,
              }}
            />
            <div className={styles.bottom}>
              <p className={styles.name}>
                Yulianna Yagoudaeva - <span>Yagoudaeva Law Group. PC</span>
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
);
