import React, { useRef } from 'react'
// import { LeftButton, RightButton } from './style/Commonui';
import './storepic.scss';
import { H2 } from './style/Commonui';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Marginbottom } from './style/Commonui';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

function Storepic() {
  const storeswiperRef = useRef(null);


  const data = [
    {
      src: "/img/store/store1.jpeg"
    },
    {
      src: "/img/store/store2.jpeg"
    },
    {
      src: "/img/store/store3.jpeg"
    },
    {
      src: "/img/store/store4.jpeg"
    },
    {
      src: "/img/store/store5.jpeg"
    },
    {
      src: "/img/store/store6.jpeg"
    },
    {
      src: "/img/store/store7.jpeg"
    },
    {
      src: "/img/store/store8.jpeg"
    },
    {
      src: "/img/store/store9.jpeg"
    },
    {
      src: "/img/store/store10.jpeg"
    },
  ]

  return (
    <Marginbottom>
      <H2>매장사진</H2>
      <section className='store mycontainer'>
        <Swiper
          ref={storeswiperRef}
          className="swiper"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {
            data.map((el, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={el.src} alt={`가게사진${idx}`} />
                </SwiperSlide>
              )
            })
          }
          {/* <div className="storebtns d-flex align-items-center">
            <LeftButton onClick={() => storeswiperRef.current.swiper.slidePrev()}><i className="bi bi-arrow-left"></i></LeftButton>
            <RightButton onClick={() => storeswiperRef.current.swiper.slideNext()}><i className="bi bi-arrow-right"></i></RightButton>
          </div> */}

        </Swiper>
      </section >
    </Marginbottom>
  )
}

export default Storepic
