import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { Switch, ThemeSwitcher } from "..";

import styles from "./Navigation.module.scss";

export const items = [
  { label: "Home", path: "/", id: 1, subMenu: [] },
  {
    label: "Services",
    path: "/services",
    id: 3,
    subMenu: [
      {
        label: "SEO COMPANY NYC",
        path: "/services/seo",
      },
      {
        label: "WEB DEVELOPMENT",
        path: "/services/web",
      },
      {
        label: "ECOMMERCE",
        path: "/services/ecommerce",
      },
      {
        label: "PUBLIC RELATIONS MANAGEMENT NYC",
        path: "/services/management",
      },
      {
        label: "VIDEO PRODUCTION STUDIO",
        path: "/services/video-production",
      },
      {
        label: "LAWYER WEBSITE DESIGN",
        path: "/services/lawyer",
      },
      {
        label: "DOCTOR WEBSITE DESIGN",
        path: "/services/doctor-website",
      },
      {
        label: "NON-PROFIT WEBSITE DESIGN",
        path: "/services/non-profit",
      },
      {
        label: "RESTAURANT WEBSITE DESIGN",
        path: "/services/restaurant-web",
      },
      {
        label: "BUSINESS WEBSITE DESIGN",
        path: "/services/business-website",
      },
    ],
    svg: <i className="bx bx-chevron-down" />,
  },
  {
    label: "Case Studies",
    path: "/cases",
    id: 4,
    subMenu: [],
  },
  {
    label: "Works",
    path: "/works",
    id: 5,
    subMenu: [],
  },

  {
    label: "About",
    path: "/about",
    id: 6,
    subMenu: [],
  },

  {
    label: "Clients",
    path: "/clients",
    id: 7,
    subMenu: [],
  },
  {
    label: "Blog",
    path: "/blog",
    id: 8,
    subMenu: [],
  },
  {
    label: "Contact",
    path: "/contact",
    id: 9,
    subMenu: [],
  },
];

export const Navigation = ({ className }) => {
  const [nav, setNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenu = (subMenuItems) => (
    <ul className={styles.sub_menu}>
      {subMenuItems.map((subMenuItem) => (
        <li key={subMenuItem.label} className={styles.sub_menu_item}>
          <Link href={subMenuItem.path} className={styles.sub_menu_link}>
            {subMenuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.navigation}>
      <div className={styles.theme}>
        <div>
          <ThemeSwitcher />
        </div>
        <div className={styles.lang}>En</div>
      </div>
      <ul
        className={classNames(
          nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
          {},
          [className]
        )}
      >
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link
              href={item.path}
              onClick={() => handleClick(item)}
              className={
                router.pathname === item.path ? styles.active : styles.link
              }
            >
              {item.label}
            </Link>
            <span>{item.svg && item.svg}</span>

            {item.subMenu.length > 0 && renderSubMenu(item.subMenu)}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i className="bx bx-window-close bx-rotate-180" />
        ) : (
          <i className="bx bx-menu-alt-right" />
        )}
      </div>
    </nav>
  );
};
