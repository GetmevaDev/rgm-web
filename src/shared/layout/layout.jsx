import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { ETheme } from "@/providers";
import { Footer, Header } from "@/widgets";

import { useTheme } from "../hooks";
import Meta from "../seo/Meta";

import styles from "./layout.module.scss";

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};

export const Layout = ({
  children,
  title,
  description,
  size = "layout",
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) => {
  const { theme } = useTheme();

  return (
    <Meta
      title={title}
      description={description}
      twitterCard={twitterCard}
      twitterDescription={twitterDescription}
      twitterDomain={twitterDomain}
      twitterImage={twitterImage}
      twitterTitle={twitterTitle}
      twitterUrl={twitterUrl}
      image={image}
    >
      <div className="overlay">
        <Image
          className={styles.image}
          width={1170}
          height={1120}
          src={
            theme === ETheme.Light
              ? "/images/layout.svg"
              : "/images/layout-dark.svg"
          }
          alt="layout"
        />
      </div>
      <div className={classNames("app", {}, [theme])}>
        <div className={classNames(styles.layout, sizes[size])}>
          <Header />

          {children}
          <Footer />
        </div>
      </div>
    </Meta>
  );
};
