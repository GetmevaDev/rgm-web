import { en, format } from "date-fns";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Typography } from "../..";

import styles from "./LatestPost.module.scss";

export const LatestPost = ({ data }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconColor = isHovered ? "white" : "black";

  const latest = data.sort(
    (a, b) =>
      new Date(b.attributes?.createdAt) - new Date(a.attributes?.createdAt)
  );

  const inputDate = new Date(latest[0]?.attributes?.createdAt);
  const formattedDate = format(inputDate, "d MMMM yyyy", { locale: en });
  const htmlContentTitle = md.render(latest[0]?.attributes?.title);
  const htmlContentDescription = md.render(latest[0]?.attributes?.description);

  return (
    <div className={styles.latest}>
      <Typography tag="h2" size="small" className={styles.title}>
        Latest post
      </Typography>

      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            width={545}
            height={354}
            alt="latest"
            src={latest[0]?.attributes?.image?.data?.attributes?.url}
          />
        </div>

        <div className={styles.right}>
          <div
            className={styles.sub_title}
            dangerouslySetInnerHTML={{ __html: htmlContentTitle }}
          />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: htmlContentDescription }}
          />

          <div className={styles.bottom}>
            <div className={styles.date}>{formattedDate}</div>

            <div className={styles.arrow}>
              <Link href={`/blog/${latest[0]?.id}`}>
                <div
                  className={styles.arrow}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <svg
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.28795 11.4609L5.85937 6.31808L1.28795 1.17522"
                      stroke={iconColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.border} />
    </div>
  );
};
