import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideItem } from "./SlideItem/SlideItem";

import styles from "./Slider.module.scss";

const slides = [
  {
    id: 1,
    title: "BUSINESS ANALYSIS & INTERPRETATION",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },

  {
    id: 2,
    title: "Content Strategy",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },

  {
    id: 3,
    title: "Creative Strategy",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },
  {
    id: 4,
    title: "BUSINESS ANALYSIS & INTERPRETATION",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },

  {
    id: 5,
    title: "BUSINESS ANALYSIS & INTERPRETATION",
    description: `
		I comb through your analytic data to better grasp the psychological factors that will familiarize you with your visitors’ needs and preferences.
	`,
    image: "/images/slide.jpg",
  },
];

export const Slider = () => (
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
        {slides?.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
