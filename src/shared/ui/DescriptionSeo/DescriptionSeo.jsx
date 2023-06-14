import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import styles from "./DescriptionSeo.module.scss";

export const DescriptionSeo = ({
  title,
  description,
  sub,
  image,
  alt,
  text,
}) => {
  const md = new MarkdownIt({
    html: true,
  });
  const htmlContentDescription = md.render(description);
  const htmlContentText = md.render(text);
  return (
    <div className={styles.bg}>
      <div className={styles.bg_inner}>
        <div className={styles.title_inner}>
          <div className={styles.rgm}>
            <Image width={40} height={18} alt="rgm" src="/images/rgm.svg" />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div>
          <div
            className={styles.description_text}
            dangerouslySetInnerHTML={{ __html: htmlContentText }}
          />
          <div className={styles.description}>
            <div
              className={styles.description_inner}
              dangerouslySetInnerHTML={{ __html: htmlContentDescription }}
            />
            <Image
              width={429}
              height={605}
              src={image}
              alt={alt}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.border} />
      </div>

      <div className={styles.sub}>{sub}</div>
    </div>
  );
};
