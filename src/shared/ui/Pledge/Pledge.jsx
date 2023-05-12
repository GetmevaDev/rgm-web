import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { slides, Typography } from "..";

import { PledgeItem } from "./Item/PledgeItem";

import styles from "./Pledge.module.scss";

export const Pledge = () => (
  <div className={styles.plegde}>
    <Typography tag="h2" size="small">
      MY PLEDGE TO YOU
    </Typography>

    <div className={styles.description}>
      I am forthcoming as to what my SEO services can accomplish and am upfront
      about my methods. For example, we will ONLY engage in white-hat tactics in
      pursuing your goals, in accordance with guidelines setforth by the search
      engines.
    </div>

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      slidesPerGroup={1}
      breakpoints={{
        // when window width is >= 576px
        576: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        1280: {
          slidesPerGroup: 1,
          slidesPerView: 1,
        },
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {slides?.map((item) => (
        <SwiperSlide key={item.id}>
          <PledgeItem />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
