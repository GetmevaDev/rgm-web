/* eslint-disable react/jsx-no-useless-fragment */
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";
import { CloseSvg, MenuDarkIcon, MenuLightIcon } from "@/shared/icons";

import { ThemeSwitcher } from "..";

import styles from "./Navigation.module.scss";

const Navigation = ({ className, items }) => {
  const { theme } = useTheme();
  const [nav, setNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenu = (subMenuItems) => (
    <ul className={styles.sub_menu}>
      {subMenuItems?.map((subMenuItem) => (
        <li key={subMenuItem.id} className={styles.sub_menu_item}>
          <Link href={subMenuItem.href} className={styles.sub_menu_link}>
            {subMenuItem.text}
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
      </div>
      <ul
        className={classNames(
          nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
          {},
          [className]
        )}
      >
        {items?.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link
              href={item.href}
              onClick={() => handleClick(item)}
              className={
                router.pathname === item?.href ? styles.active : styles.link
              }
            >
              {item.text}
            </Link>

            {item?.SubHeaderItems?.length > 0 &&
              renderSubMenu(item?.SubHeaderItems)}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <CloseSvg />
        ) : (
          <>{theme === ETheme.Light ? <MenuLightIcon /> : <MenuDarkIcon />}</>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
