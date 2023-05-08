import React from "react";

import { FooterTop } from "@/shared/ui";

import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <FooterTop />

    <div>
      <div className={styles.border} />
      <div className={styles.footer__inner}>
        <div className={styles.copyright}>
          <div> © 2013 - 2022 Robert Gerov Media.</div>
          <div className={styles.cities}>
            <span> New York </span>
            <span> London </span>
            <span> Tashkent </span>
          </div>
        </div>

        <div className={styles.right}>
          <span>Terms of use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  </footer>
);
