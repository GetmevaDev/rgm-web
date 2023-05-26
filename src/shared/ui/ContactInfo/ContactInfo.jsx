import React from "react";
import { PulseLoader } from "react-spinners";
import useSWR from "swr";

import { fetcher, override } from "@/shared";

import styles from "./ContactInfo.module.scss";
//

export const ContactInfo = () => {
  const { data, isError, isLoading } = useSWR(
    "https://cms-rgm.herokuapp.com/api/contact-info?populate=deep",

    fetcher
  );
  if (isError) return <div>Error...</div>;

  return (
    <div className={styles.info}>
      <h4 className={styles.title}>We are here!</h4>

      {!isLoading ? (
        <div className={styles.description}>
          <span>{data?.data?.attributes?.address}</span>
          <span>{data?.data?.attributes?.email}</span>
          <span>{data?.data?.attributes?.phone}</span>
        </div>
      ) : (
        <PulseLoader
          color="#bda76a"
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
        />
      )}
    </div>
  );
};
