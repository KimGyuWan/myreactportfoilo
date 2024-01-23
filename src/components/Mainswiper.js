import React, { useState, useRef } from "react";
import "./mainswiper.scss";
import { H2, RightButton, Marginbottom } from './style/Commonui';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

function Mainswiper(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [realIndex, setRealIndex] = useState(0);
  const storeswiperRef = useRef(null);

  const togglePlay = () => {
    const buttonToggle = document.querySelector(".toggle");
    const swiperInstance = storeswiperRef.current.swiper;

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
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  };
  return (
    <>
      <div id={props.keyid}>
        <Marginbottom>
          <section className="main mycontainer">
            <H2>메뉴추천가이드</H2>
            <Swiper
              ref={storeswiperRef}
              className="mainswiper swiper"
              centeredSlides
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={speed}
              breakpoints={breakpoints}
              onActiveIndexChange={({ realIndex }) => {
                setRealIndex(realIndex)
              }}
            >
              {data.map((el, idx) => {
                return (
                  <SwiperSlide className={`slide${idx}`} key={idx}>
                    <img src={el.src} alt={el.alt} />
                    <div className="line"></div>
                  </SwiperSlide>
                );
              })}
              <div className="myname d-flex justify-content-center align-items-center">
                <div className="mainlenghtbtn">
                  <div className="swiperlength">
                    <p>+ {data.length - 1}</p>
                  </div>
                  <RightButton className="mainright" onClick={() => storeswiperRef.current.swiper.slideNext()}><i className="bi bi-arrow-right"></i></RightButton>
                </div>
              </div>
              <div className="mainswiperbtns d-flex align-items-center justify-content-center mt-4">
                <div>
                  {realIndex + 1} / {data.length}
                  <button className={`toggle ${isPlaying ? "bi bi-pause" : "bi bi-play"} mx-4`} onClick={togglePlay}></button>
                </div>
                <button className="more">
                  더보기 +
                </button>
              </div>

            </Swiper>
          </section>
        </Marginbottom>
      </div>
    </>
  );
}

export default Mainswiper;
