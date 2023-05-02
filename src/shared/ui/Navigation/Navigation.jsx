import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { Switch, ThemeSwitcher } from "..";

import styles from "./Navigation.module.scss";

export const items = [
  { label: "Home", path: "/", id: 1 },
  {
    label: "Services",
    path: "/services",
    id: 3,
  },
  {
    label: "Case Studies",
    path: "/case-studies",
    id: 4,
  },
  {
    label: "Works",
    path: "/works",
    id: 5,
  },

  {
    label: "About",
    path: "/about",
    id: 6,
  },

  {
    label: "Clients",
    path: "/clients",
    id: 7,
  },
  {
    label: "Blog",
    path: "/blog",
    id: 8,
  },
  {
    label: "Contact",
    path: "/contact",
    id: 9,
  },
];

export const Navigation = ({ className }) => {
  const [nav, setNav] = useState(false);
  const [value, setValue] = useState(false);

  const router = useRouter();
  return (
    <nav className={styles.navigation}>
      <div className={styles.theme}>
        <div>
          <ThemeSwitcher />
        </div>
        <div>en</div>
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
              onClick={() => setNav(!nav)}
              className={
                router.pathname === item.path ? styles.active : styles.link
              }
            >
              {item.label}
            </Link>
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
