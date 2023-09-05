import React from "react";
import useSWR from "swr";

import { Logo, Navigation } from "@/shared/ui";

import styles from "./Header.module.scss";

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
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
    <header className={`${styles.header} `}>
      <div className={styles.header_inner}>
        <Logo
          logo={
            navigation?.data?.attributes?.Header?.Logo?.data?.attributes?.url
          }
          text={navigation?.data?.attributes?.Header?.text}
        />

        <Navigation items={navigation?.data?.attributes?.HeaderItems} />
      </div>
    </header>
  );
};
export default Header;
