import classNames from "classnames";
import React from "react";

import { Footer, Header } from "@/widgets";

import { useTheme } from "../hooks";
import Meta from "../seo/Meta";

import styles from "./layout.module.scss";

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};

export const Layout = ({ children, title, description, size = "layout" }) => {
  const { theme } = useTheme();

  return (
    <Meta title={title} description={description}>
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
