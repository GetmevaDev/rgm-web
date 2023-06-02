import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FadeInWhenVisible } from "@/widgets";

import { SlideItem } from "./SlideItem/SlideItem";

import styles from "./Slider.module.scss";

export const Slider = ({ items }) => (
  <FadeInWhenVisible>
    <div className={styles.slider}>
      <div className={styles.slider_inner}>
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
              slidesPerGroup: 2,
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
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              <SlideItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </FadeInWhenVisible>
);
