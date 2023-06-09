import { en, format } from "date-fns";
import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./Post.module.scss";

export const Post = ({ title, description, image, alt, id, date }) => {
  const md = new MarkdownIt({
    html: true,
  });
  const htmlContentDescription = md.render(description);
  const htmlContentTitle = md.render(title);
  const link = id.toString();
  const maxLength = 130;
  const inputDate = new Date(date);
  const formattedDate = format(inputDate, "d MMMM yyyy", { locale: en });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  }

  const iconColor = isHovered ? "white" : "black";

  return (
    <div className={styles.post}>
      <Image
        width={370}
        height={240}
        src={image}
        alt={alt}
        className={styles.image}
      />
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: htmlContentTitle,
        }}
      />
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: truncateText(htmlContentDescription, maxLength),
        }}
      />

      <div className={styles.bottom}>
        <div className={styles.date}>{formattedDate}</div>
        <Link href={`/blog/${link}`}>
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
  );
};
