import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Block.module.scss";

export const Block = ({ title, description }) => (
  <div className={styles.block}>
    <div className={styles.left}>
      <Typography tag="h2" size="small">
        Our Development Process
      </Typography>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: `
			As soon as you get in touch with us, we’ll shortly connect with you to hear all about your business, needs, and what your goals are. Once our customer service team has shared a brief with you, we’ll pass it on to the analytics team who’ll assess what solutions we can come up with for you before the real work happens.

			<br/>
			<br/>

			Working closely together, our award-winning team of UX/UX designers, software developers, and marketing strategists will proceed to creating your custom product. Before its final release, we’ll go through rounds of beta testing to get your feedback & refine everything to perfection. 

			<br/>
			<br/>

			But even when it’s ready—we don’t just leave it at that. From analytics to maintenance, we’re just as committed to supporting after to make sure you’re seeing the results & evolving your systems as you continue to grow.
		`,
        }}
      />
    </div>

    <div className={styles.right}>
      <Image
        width={475}
        height={650}
        src="images/hacker.jpg"
        className={styles.image}
      />

      <Image
        width={176}
        height={191}
        src="svg/dots.svg"
        alt="dots"
        className={styles.dots}
      />
    </div>
  </div>
);
