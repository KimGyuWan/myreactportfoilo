import React, { useState, useRef } from "react";
import "./mainswiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Pagination, Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination]);

function Mainswiper() {
  const [swiper, setSwiper] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null);

  const togglePlay = () => {
    const buttonToggle = document.querySelector(".toggle");
    const swiperInstance = swiperRef.current.swiper;

    if (isPlaying) {
      swiperInstance.autoplay.stop();
      buttonToggle.classList.remove("on");
    } else {
      swiperInstance.autoplay.start();
      buttonToggle.classList.add("on");
    }
    setIsPlaying(!isPlaying);
  };

  const data = [
    {
      src: "/img/menu.jpeg",
      alt: "메뉴1",
    },
    {
      src: "/img/menu2.jpeg",
      alt: "메뉴2",
    },
    {
      src: "/img/menu.jpeg",
      alt: "메뉴1",
    },
    {
      src: "/img/menu2.jpeg",
      alt: "메뉴2",
    },
    {
      src: "/img/menu.jpeg",
      alt: "메뉴1",
    },
    {
      src: "/img/menu2.jpeg",
      alt: "메뉴2",
    },
  ];
  const speed = 1000;
  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    2000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  return (
    <>
      <section className="main">
        <h2>메뉴추천가이드</h2>
        <Swiper
          ref={swiperRef}
          className="mainswiper swiper"
          centeredSlides
          modules={[Autoplay, Pagination]}
          pagination={{ type: "fraction", clickable: true }}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={speed}
          breakpoints={breakpoints}
          spaceBetween={10}
          slidesPerView={2.5}
          // onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {data.map((el, idx) => {
            return (
              <SwiperSlide className={`slide${idx}`}>
                <img src={el.src} alt={el.alt} key={idx} />
              </SwiperSlide>
            );
          })}
          <div className="swiperlength">
            <p>+ {data.length - 1}</p>
          </div>
          <div className="line"></div>
          <div className="button-wrapper">
            {/* <button
              className="button"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              Prev Slide
            </button> */}
            <button
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="btns">
            <button className="toggle" onClick={togglePlay}>stop</button>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default Mainswiper;