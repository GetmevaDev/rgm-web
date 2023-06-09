import Image from "next/image";
import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Map } from "..";

import styles from "./Contact.module.scss";

const Contact = ({ title, address, phoneLeft, phoneRight }) => (
  <FadeInWhenVisible>
    <div className={styles.contact}>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.list}>
          <div className={styles.description}>
            <Image
              width={37}
              height={50}
              src="/svg/location.svg"
              alt="location"
            />
            <div className={styles.address}>{address}</div>
          </div>

          <div className={styles.description}>
            <Image width={37} height={50} src="/svg/call.svg" alt="location" />
            <div>
              <a
                href={`tel: ${phoneRight} ${phoneLeft}`}
                className={styles.tel}
              >
                {phoneLeft} <span> {phoneRight}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <Map />
      </div>
    </div>
  </FadeInWhenVisible>
);

export default Contact;
