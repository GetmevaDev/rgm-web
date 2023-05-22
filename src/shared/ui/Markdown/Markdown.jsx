import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import styles from "./Markdown.module.scss";

export const Markdown = ({ children }) => (
  <div className={styles.markdown}>
    <ReactMarkdown>{children}</ReactMarkdown>
  </div>
);
