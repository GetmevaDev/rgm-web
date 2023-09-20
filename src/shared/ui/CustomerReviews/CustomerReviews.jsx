import React, { useEffect, useState } from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Typography } from "..";

import { CustomerReview } from "./CustomerReview/CustomerReview";

import styles from "./CustomerReviews.module.scss";

export const CustomerReviews = ({ data, setData }) => (
  <div className={styles.reviews_inner}>
    <div className={styles.top}>
      <Typography tag="h2" className={styles.title} size="small">
        {data?.title}
      </Typography>
      <div className={styles.description}>{data?.description}</div>
    </div>
    <div className={styles.reviews}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1280: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.CustomerReview?.map((item) => (
          <SwiperSlide key={item.id}>
            <CustomerReview
              {...item}
              buttonLink={item.button_link}
              buttonView={item.button_view}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
