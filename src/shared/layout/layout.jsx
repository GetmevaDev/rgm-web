import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { PulseLoader } from "react-spinners";
import useSWR from "swr";

import { ETheme } from "@/providers";
import { Footer, Header } from "@/widgets";

import { useTheme } from "../hooks";
import Meta from "../seo/Meta";

import styles from "./layout.module.scss";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};

export const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Layout = ({
  children,
  title,
  description,
  size = "layout",
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  image,
}) => {
  const { theme } = useTheme();

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
    return (
      <div className={styles.loader}>
        <PulseLoader
          color="#bda76a"
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  if (isError) return <div>Error...</div>;

  return (
    <Meta
      title={title}
      description={description}
      twitterCard={twitterCard}
      twitterDescription={twitterDescription}
      twitterDomain={twitterDomain}
      twitterImage={twitterImage}
      twitterTitle={twitterTitle}
      twitterUrl={twitterUrl}
      image={image}
    >
      <div className="overlay">
        <Image
          className={styles.image}
          width={1170}
          height={1120}
          src={
            theme === ETheme.Light
              ? "/images/layout.svg"
              : "/images/layout-dark.svg"
          }
          alt="layout"
        />
      </div>
      <div className={classNames("app", {}, [theme])}>
        <div className={classNames(styles.layout, sizes[size])}>
          <Header navigation={navigation?.data?.attributes} />

          {children}
          <Footer footer={navigation?.data?.attributes?.Footer} />
        </div>
      </div>
    </Meta>
  );
};
