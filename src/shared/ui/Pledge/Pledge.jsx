import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import { PledgeItem } from "./Item/PledgeItem";

import styles from "./Pledge.module.scss";

export const Pledge = ({ title, description, items }) => (
  <FadeInWhenVisible>
    <div className={styles.plegde}>
      <Typography tag="h2" size="small">
        {title}
      </Typography>

      <div className={styles.description}>{description}</div>

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
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            <PledgeItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </FadeInWhenVisible>
);
