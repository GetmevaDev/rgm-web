/* eslint-disable jsx-a11y/heading-has-content */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";

import styles from "./FooterTop.module.scss";

export const FooterTop = ({ footer }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.footer_top}>
      <div className={styles.navigation}>
        <h5 className={styles.title}>Navigation</h5>
        <ul className={styles.list}>
          {footer?.Navigation?.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link href={item.href} className={styles.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.who}>
        <h5 className={styles.title}>Who We Help</h5>
        <ul className={styles.list}>
          {footer?.WhoWeHelp?.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link href={item.description} className={styles.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.connect}>
        <h5 className={styles.title}>Connect</h5>
        <ul className={styles.list}>
          {footer?.Connect.map((item) => (
            <Link href={item.link}>
              <li key={item.id} className={styles.connect_item}>
                {theme === ETheme.Light ? (
                  <div className={styles.svg}>
                    <Image
                      width={15}
                      height={15}
                      alt={item.text}
                      src={item?.light_svg?.data?.attributes?.url}
                    />
                  </div>
                ) : (
                  <div className={styles.svg}>
                    <Image
                      width={15}
                      height={15}
                      alt={item.text}
                      src={item?.dark_svg?.data?.attributes?.url}
                    />
                  </div>
                )}
                <p className={styles.connect_text}>{item.text}</p>
              </li>
            </Link>
          ))}
        </ul>

        <div className={styles.phone}>
          <div className={styles.title_phone}>Phone</div>
          <div className={styles.tel}>
            <a
              href={`tel:${footer?.phone_number_left} ${footer?.phone_number_right}`}
              className={styles.description}
            >
              <p className={styles.tel}>{footer?.phone_number_left}</p>
              <span> {footer?.phone_number_right}</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.locations}>
        <h5 className={styles.title}>Locations</h5>
        <ul className={styles.list}>
          {footer?.Locations?.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.location_text}> {item.title}</div>
              <div className={styles.location_description}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.made}>
        <h5 className={styles.title} />
        <ul className={styles.list_image}>
          <li className={styles.item}>
            {theme === ETheme.Light ? (
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
        </ul>
      </div>
    </div>
  );
};
