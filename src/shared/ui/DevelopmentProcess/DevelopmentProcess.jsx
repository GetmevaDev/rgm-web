import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./DevelopmentProcess.module.scss";

const svgs = [
  {
    id: 1,
    color: "khaki",

    image: "/svg/briefing.svg",
    text: "Requirements & User Stories",
  },

  {
    id: 2,
    color: "black",

    image: "/svg/briefing.svg",
    text: "Initial UI Design &Wireframes",
  },

  {
    id: 3,
    color: "black",

    image: "/svg/briefing.svg",
    text: "Spint Planing & Execution",
  },

  {
    id: 4,
    color: "khaki",

    image: "/svg/briefing.svg",
    text: "Incremental Release",
  },

  {
    id: 5,
    color: "khaki",
    image: "/svg/briefing.svg",
    text: "Beta Testing",
  },

  {
    id: 6,
    color: "black",

    image: "/svg/briefing.svg",
    text: "Final Release",
  },
];

const colors = {
  khaki: styles.khaki,
  black: styles.black,
};

export const DevelopmentProcess = () => (
  <div className={styles.process}>
    <div className={styles.process_inner}>
      <Typography tag="h2" size="title" className={styles.title}>
        Your Development Process
      </Typography>

      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.items}>
            {svgs.map((svg) => (
              <div className={styles.item} key={svg.id}>
                <div className={classNames(styles.image, colors[svg.color])}>
                  <Image
                    width={50}
                    height={50}
                    src={svg.image}
                    alt={svg.text}
                  />
                </div>
                <p className={styles.item_description}>{svg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.right}
          dangerouslySetInnerHTML={{
            __html: `
				Our expert account executives and project managers work closely with you to identify the desired functionality of your products and prepare a detailed estimate. We use a streamlined and efficient production cycle (agile development) to produce high-quality software precisely tailored to your specifications:
				We help make the development journey as simple as possible. Our expert account executives and project managers work closely with you to identify the desired functionality of your software and prepare a detailed estimate. We use a streamlined and efficient production cycle (agile development) to produce high-quality software precisely tailored to your specifications:

					<ul>
						<li>An NDA is signed, guaranteeing that you and you alone own the project’s intellectual property</li>
						<li>Your feedback is encouraged throughout the development process.</li>
						<li>All of the project’s assets, including source code, are yours at the end of the project.</li>
					</ul>
	
				`,
          }}
        />
      </div>
    </div>
  </div>
);
