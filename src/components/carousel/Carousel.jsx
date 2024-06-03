import React from "react";
import "./Carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/bundle";

const carouselApiResponse = ["/Buddh.avif", "/Mountain.avif", "/Nature.avif"];

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        effect="fade"
      >
        {carouselApiResponse.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img className="carousel-image" src={imageSrc} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
