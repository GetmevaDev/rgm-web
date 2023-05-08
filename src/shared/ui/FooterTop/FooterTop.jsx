/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useTheme } from "@/shared/hooks";
import {
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
} from "@/shared/icons";

import { items } from "..";

import styles from "./FooterTop.module.scss";

const connects = [
  { svg: <FacebookSvg />, text: "Facebook", id: 1 },
  { svg: <TwitterSvg />, text: "Twitter", id: 2 },
  { svg: <InstagramSvg />, text: "Instagram", id: 3 },
  { svg: <LinkedInSvg />, text: "Linkedin", id: 4 },
];

const locations = [
  {
    description: "1501 Broadway, 12th Floor, New York, NY 10036",
    text: "Times Square",
    id: 1,
  },
  {
    description: "1979 Marcus Ave, Ste 210, Lake Success, NY 11042",
    text: "Lake Success",
    id: 2,
  },
  {
    description: "1 Garvies Pt Rd, Glen Cove, NY 11542",
    text: "Glen Cove",
    id: 3,
  },
];

export const FooterTop = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className={styles.footer_top}>
      <div className={styles.navigation}>
        <h5 className={styles.title}>Navigation</h5>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link href={item.path} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.connect}>
        <h5 className={styles.title}>Connect</h5>
        <ul className={styles.list}>
          {connects.map((item) => (
            <li key={item.id} className={styles.connect_item}>
              <div className={styles.svg}>{item.svg}</div>
              <p className={styles.connect_text}>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.phone}>
          <div className={styles.title_phone}>Phone</div>
          <div className={styles.tel}>
            <a href="tel: (888) 982-1410">
              (888) <span>982-1410</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.connect}>
        <h5 className={styles.title}>Locations</h5>
        <ul className={styles.list}>
          {locations.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.location_text}> {item.text}</div>
              <div className={styles.location_description}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.connect}>
        <h5 className={styles.title} />
        <ul className={styles.list_image}>
          <li className={styles.item}>
            {theme === "app_light_theme" ? (
              <Image
                width={167}
                height={168}
                src="/svg/madein.svg"
                alt="madein"
              />
            ) : (
              <Image
                width={167}
                height={168}
                src="/svg/madein-dark.svg"
                alt="madein"
              />
            )}
          </li>
          <li className={styles.item}>
            <div className={styles.number}>5.0</div>
          </li>
          <li className={styles.item}>
            <div className={styles.stars}>
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.rating}>1,938 Rating</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
