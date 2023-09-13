import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ModalForm } from "@/shared/common";
import { fetchAPI } from "@/shared/lib";

import { Button } from "..";

import styles from "./OutPerfom.module.scss";

export const OutPerfom = () => {
  const [seoData, setSeoData] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchAPI("seo-service-page?populate=deep")
      .then((data) => {
        if (data) {
          setSeoData(data);
        } else {
          setError("Ошибка при загрузке данных с seo-service-page");
        }
      })
      .catch((error) => {
        setError("Ошибка при запросе данных с seo-service-page");
      })
      .finally(() => {
        setIsLoading(false);
      });

    fetchAPI("reviews?populate=deep")
      .then((data) => {
        if (data) {
          setReviewsData(data);
        } else {
          setError("Ошибка при загрузке данных с reviews");
        }
      })
      .catch((error) => {
        setError("Ошибка при запросе данных с reviews");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = (
      <ModalForm
        reviews={reviewsData?.data}
        addons={seoData?.data?.attributes?.addons}
        items={seoData?.data?.attributes?.PricingItemsss}
        packageItems={seoData?.data?.attributes?.packageItems}
        packageList={seoData?.data?.attributes?.PackageItemList}
        list={seoData?.data?.attributes?.PricingItemList}
      />
    );
  }

  return (
    <div className={styles.out}>
      <div className={styles.left}>
        <div className={styles.title}>
          READY TO OUT-PERFORM YOUR COMPETITION?
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        {content}
      </div>

      <div className={styles.right}>
        <Image
          src="/images/perfom.svg"
          width={396}
          height={344}
          alt="out-perfom"
        />
      </div>
    </div>
  );
};
