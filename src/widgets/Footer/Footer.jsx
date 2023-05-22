/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FooterTop } from "@/shared/ui";

import styles from "./Footer.module.scss";

export const Footer = ({ footer }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <footer className={styles.footer}>
      <FooterTop footer={footer} />

      <div>
        <div className={styles.border} />
        <div className={styles.footer__inner}>
          <div className={styles.copyright}>
            <div> © 2013 - {new Date().getFullYear()} Robert Gerov Media.</div>
            <div className={styles.cities}>
              <span> New York </span>
              <span> London </span>
              <span> Tashkent </span>
            </div>
          </div>

          <div className={styles.right}>
            <Link href="/terms-of-use">
              <span>Terms of use</span>
            </Link>

            <Link href="/privacy-policy">
              <span>Privacy Policy</span>
            </Link>

            <a>
              <span>Return Policy</span>
            </a>
            <a>
              <span>Pay with Installments</span>
            </a>
            <a>
              <span>Make a Payment</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
