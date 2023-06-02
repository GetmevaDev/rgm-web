import classNames from "classnames";
import React, { useEffect, useState } from "react";

import { FadeInWhenVisible } from "@/widgets";

import styles from "./Description.module.scss";

const weights = {
  semi_bold: styles.semi_bold,
  medium: styles.medium,
};

export const Description = ({ description, sub, weight = "medium" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <FadeInWhenVisible>
      <div className={styles.description_inner}>
        <p
          className={classNames(styles.description, weights[weight])}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {sub && (
          <p className={styles.sub}>
            *All plans require a 6 month commitment.*
          </p>
        )}
      </div>
    </FadeInWhenVisible>
  );
};
