/* eslint-disable jsx-a11y/anchor-is-valid */
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/shared/ui";

import styles from "./Footer.module.scss";

const FooterTop = dynamic(() => import("../../shared/ui/FooterTop/FooterTop"), {
  loading: () => <p>Loading...</p>,
});

const Footer = ({ footer }) => (
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

          <Link href="/accessibility">
            <span>Accessibility Policy Commitment Statement</span>
          </Link>
          <a href="https://pay.quickfee.com/P-ELRMC">
            <span>Pay with Installments</span>
          </a>
          <a href="https://app.meliopayments.com/meliome/pay/RGM">
            <span>Make a Payment</span>
          </a>
        </div>

        <div className={styles.buttons}>
          <a href={`tel: ${footer?.Buttons?.phone}`}>
            <Button variant="contained" className={styles.call}>
              Call Us
            </Button>
          </a>

          <Link href={footer?.Buttons?.link}>
            <Button variant="outline" className={styles.book}>
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
