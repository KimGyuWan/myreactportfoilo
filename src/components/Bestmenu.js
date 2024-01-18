import React, { useRef, useState } from 'react'
import { H2, Menucontentsub, Menucontenthead, Menucontenthash, LeftButton, RightButton, MarginY } from './style/Commonui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './bestmenu.scss';

function Bestmenu() {
  const menuswiperRef = useRef(null);
  const [tabNum, settabNum] = useState("liter");

  const handleClick = (e, href) => {
    e.preventDefault();
    settabNum(href);
  };

  const data = {
    list: [
      {
        nm: "1리터 대용량",
        href: "liter"
      },
      {
        nm: "COFFEE",
        href: "coffee"
      },
      {
        nm: "NON COFFEE",
        href: "non"
      },
      {
        nm: "생과일 주스&티",
        href: "fruit"
      },
      {
        nm: "스무디&프라페",
        href: "smoothie"
      },
      {
        nm: "디저트",
        href: "dessert"
      },
    ],
    menu: [
      {
        nm: "리터1",
        src: "/img/menu/liter/liter1.jpeg",
        href: "liter",
        sub: "1리터 대용량",
        hash: "#1리터"
      },
      {
        nm: "리터1",
        src: "/img/menu/liter/liter1.jpeg",
        href: "liter",
        sub: "1리터 대용량",
        hash: "#1리터"
      },
      {
        nm: "리터1",
        src: "/img/menu/liter/liter1.jpeg",
        href: "liter",
        sub: "1리터 대용량",
        hash: "#1리터"
      },
      {
        nm: "리터1",
        src: "/img/menu/liter/liter1.jpeg",
        href: "liter",
        sub: "1리터 대용량",
        hash: "#1리터"
      },
      {
        nm: "커피1",
        src: "/img/menu/coffee/coffee1.jpeg",
        href: "coffee",
        sub: "커피",
        hash: "#커피"
      },
      {
        nm: "커피1",
        src: "/img/menu/coffee/coffee1.jpeg",
        href: "coffee",
        sub: "커피",
        hash: "#커피"
      },
      {
        nm: "커피1",
        src: "/img/menu/coffee/coffee1.jpeg",
        href: "coffee",
        sub: "커피",
        hash: "#커피"
      },
      {
        nm: "커피1",
        src: "/img/menu/coffee/coffee1.jpeg",
        href: "coffee",
        sub: "커피",
        hash: "#커피"
      },
      {
        nm: "논1",
        src: "/img/menu/noncoffee/non1.jpeg",
        href: "non",
        sub: "논커피",
        hash: "#논커피"
      },
      {
        nm: "논1",
        src: "/img/menu/noncoffee/non1.jpeg",
        href: "non",
        sub: "논커피",
        hash: "#논커피"
      },
      {
        nm: "논1",
        src: "/img/menu/noncoffee/non1.jpeg",
        href: "non",
        sub: "논커피",
        hash: "#논커피"
      },
      {
        nm: "논1",
        src: "/img/menu/noncoffee/non1.jpeg",
        href: "non",
        sub: "논커피",
        hash: "#논커피"
      },
      {
        nm: "프룻1",
        src: "/img/menu/fruit/fruit1.jpeg",
        href: "fruit",
        sub: "생과일주스&티",
        hash: "#프룻"
      },
      {
        nm: "프룻1",
        src: "/img/menu/fruit/fruit1.jpeg",
        href: "fruit",
        sub: "생과일주스&티",
        hash: "#프룻"
      },
      {
        nm: "프룻1",
        src: "/img/menu/fruit/fruit1.jpeg",
        href: "fruit",
        sub: "생과일주스&티",
        hash: "#프룻"
      },
      {
        nm: "프룻1",
        src: "/img/menu/fruit/fruit1.jpeg",
        href: "fruit",
        sub: "생과일주스&티",
        hash: "#프룻"
      },
      {
        nm: "스무디1",
        src: "/img/menu/smoothie/smoothie1.jpeg",
        href: "smoothie",
        sub: "스무디&프라페",
        hash: "#스무디&프라페"
      },
      {
        nm: "스무디1",
        src: "/img/menu/smoothie/smoothie1.jpeg",
        href: "smoothie",
        sub: "스무디&프라페",
        hash: "#스무디&프라페"
      },
      {
        nm: "스무디1",
        src: "/img/menu/smoothie/smoothie1.jpeg",
        href: "smoothie",
        sub: "스무디&프라페",
        hash: "#스무디&프라페"
      },
      {
        nm: "스무디1",
        src: "/img/menu/smoothie/smoothie1.jpeg",
        href: "smoothie",
        sub: "스무디&프라페",
        hash: "#스무디&프라페"
      },
      {
        nm: "디저트1",
        src: "/img/menu/dessert/dessert1.jpeg",
        href: "dessert",
        sub: "디저트",
        hash: "#디저트"
      },
      {
        nm: "디저트1",
        src: "/img/menu/dessert/dessert1.jpeg",
        href: "dessert",
        sub: "디저트",
        hash: "#디저트"
      },
      {
        nm: "디저트1",
        src: "/img/menu/dessert/dessert1.jpeg",
        href: "dessert",
        sub: "디저트",
        hash: "#디저트"
      },
      {
        nm: "디저트1",
        src: "/img/menu/dessert/dessert1.jpeg",
        href: "dessert",
        sub: "디저트",
        hash: "#디저트"
      }
    ]
  }

  const breakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  }
  return (
    <MarginY>
      <section className='bestmenu mycontainer'>
        <H2>메뉴안내</H2>
        <ul className='menugnb row'>
          {
            data.list.map((el, idx) => {
              return (
                <li className='col-4 mb-2' key={idx} onClick={(e) => { handleClick(e, el.href) }}>{el.nm}
                </li>
              )
            })
          }
        </ul>
        <div style={{ height: "70vh" }}>
          <Swiper
            ref={menuswiperRef}
            className="mainswiper swiper"
            breakpoints={breakpoints}
          >
            {
              data.menu.map((el, idx) => {
                return (
                  <React.Fragment key={`list${idx}`}>
                    {tabNum === el.href ?
                      <SwiperSlide key={idx} >
                        <img src={el.src} alt='카페메뉴사진' />
                        <p className='menulist'><Menucontentsub>{el.sub}</Menucontentsub></p>
                        <p className='menulist'><Menucontenthead>{el.nm}</Menucontenthead></p>
                        <p className='menulist'><Menucontenthash>{el.hash}</Menucontenthash></p>
                      </SwiperSlide>
                      : null}
                  </React.Fragment>
                )
              })
            }
            <div className="bestmenubtns d-flex align-items-center">
              <LeftButton onClick={() => menuswiperRef.current.swiper.slidePrev()}><i className="bi bi-arrow-left"></i></LeftButton>
              <RightButton onClick={() => menuswiperRef.current.swiper.slideNext()}><i className="bi bi-arrow-right"></i></RightButton>
            </div>
          </Swiper>
        </div >
      </section >
    </MarginY>
  )
}

export default Bestmenu