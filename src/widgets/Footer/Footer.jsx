/* eslint-disable jsx-a11y/anchor-is-valid */
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

import { Button, FooterTop } from "@/shared/ui";

import { fetcher } from "../Header/Header";

import styles from "./Footer.module.scss";

const Footer = () => {
  const {
    data: navigation,
    isError,
    isLoading,
  } = useSWR(
    "https://cms-rgm.herokuapp.com/api/layout?populate=deep",
    // "http://localhost:1337/api/layout?populate=deep",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  if (isError) return <div>Error...</div>;

  return (
    <footer className={styles.footer}>
      <FooterTop footer={navigation?.data?.attributes?.Footer} />

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
            <a
              href={`tel: ${navigation?.data?.attributes?.Footer?.Buttons?.phone}`}
            >
              <Button variant="contained" className={styles.call}>
                Call Us
              </Button>
            </a>

            <Link href={navigation?.data?.attributes?.Footer?.Buttons?.link}>
              <Button variant="outline" className={styles.book}>
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
