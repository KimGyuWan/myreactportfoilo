import React, { useState, useEffect, useRef } from 'react'
import { H2, MarginY } from './style/Commonui';
import './storeposition.scss'




function Storeposition() {
  const [mapinfo, setMapInfo] = useState(0)

  // const [modalOpen, setModalOpen] = useState(false);
  // const [selectedMarker, setSelectedMarker] = useState(null);
  const mapElement = useRef(null);
  // const markerData = [
  //   { title: "포트캔커피 계양구청점", position: [37.53861255128007, 126.73558946924486], posi: "인천 계양구 계산새로 71 D동 1층 120, 121호" },
  //   { title: "포트캔커피 안성진사점", position: [36.992232800115346, 127.13794333462208], posi: "경기 안성시 공도읍 진사길 20 1층 105호" },
  //   { title: "포트캔커피 춘천석사점", position: [37.85252910020382, 127.74549773462198], posi: "강원 춘천시 영서로 2025 탑클리닉빌딩 1층 포트캔커피 춘천석사점" },
  //   { title: "포트캔커피 대전서구점", position: [37.85252910020382, 127.74549773462198], posi: "대전 서구 도솔로 367 1층" },
  //   { title: "포트캔커피 아산배방점", position: [36.76958426861356, 127.04689522696928], posi: "충남 아산시 배방읍 배방로 58-44 224동 1층 202호" },
  //   { title: "포트캔커피 부평삼산점", position: [37.508417550133835, 126.73270483462234], posi: "인천 부평구 체육관로 14 1층 104호" },
  //   { title: "포트캔커피 전주평화점", position: [35.79568295001999, 127.13842443462188], posi: "전북 전주시 완산구 덕적골1길 24 1층 포트캔커피 전주평화점" },
  //   { title: "포트캔커피 옥정행복점", position: [37.83896840029818, 127.08986928462181], posi: "경기 양주시 화합로 1657 1층 105호" },
  //   { title: "포트캔커피 부천중동점", position: [37.501550800253085, 126.76879308462219], posi: "경기 부천시 원미구 상동로 108" },
  //   { title: "포트캔커피 대전봉명점", position: [36.35888225025092, 127.34856458462261], posi: "대전 유성구 문화원로 117 1층 101호" },
  // ];
  const markerData = [
    { title: "포트캔커피 계양구청점", lat: 37.53861255128007, lng: 126.73558946924486, posi: "인천 계양구 계산새로 71 D동 1층 120, 121호" },
    { title: "포트캔커피 안성진사점", lat: 36.992232800115346, lng: 127.13794333462208, posi: "경기 안성시 공도읍 진사길 20 1층 105호" },
    { title: "포트캔커피 춘천석사점", lat: 37.85252910020382, lng: 127.74549773462198, posi: "강원 춘천시 영서로 2025 탑클리닉빌딩 1층 포트캔커피 춘천석사점" },
    { title: "포트캔커피 대전서구점", lat: 37.85252910020382, lng: 127.74549773462198, posi: "대전 서구 도솔로 367 1층" },
    { title: "포트캔커피 아산배방점", lat: 36.76958426861356, lng: 127.04689522696928, posi: "충남 아산시 배방읍 배방로 58-44 224동 1층 202호" },
    { title: "포트캔커피 부평삼산점", lat: 37.508417550133835, lng: 126.73270483462234, posi: "인천 부평구 체육관로 14 1층 104호" },
    { title: "포트캔커피 전주평화점", lat: 35.79568295001999, lng: 127.13842443462188, posi: "전북 전주시 완산구 덕적골1길 24 1층 포트캔커피 전주평화점" },
    { title: "포트캔커피 옥정행복점", lat: 37.83896840029818, lng: 127.08986928462181, posi: "경기 양주시 화합로 1657 1층 105호" },
    { title: "포트캔커피 부천중동점", lat: 37.501550800253085, lng: 126.76879308462219, posi: "경기 부천시 원미구 상동로 108" },
    { title: "포트캔커피 대전봉명점", lat: 36.35888225025092, lng: 127.34856458462261, posi: "대전 유성구 문화원로 117 1층 101호" },
  ];
  // useEffect(() => {
  //   const { kakao } = window;
  //   const container = document.querySelector("#map");
  //   const options = {
  //     center: new kakao.maps.LatLng(37.52423825015063, 126.85242813462514),
  //     level: 3
  //   }

  //   const map = new kakao.maps.Map(container, options);
  //   const markerPosition = new kakao.maps.LatLng(37.52423825015063, 126.85242813462514);
  //   const marker = new kakao.maps.Marker(({ position: markerPosition }))
  //   marker.setMap(map);
  // }, [])

  useEffect(() => {
    const { naver } = window;
    const location = new naver.maps.LatLng(markerData[mapinfo].lat, markerData[mapinfo].lng);
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map: map,
    });


    markerData.forEach((data) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(data.lat, data.lng),
        map: map,
        title: data.title
      });

      naver.maps.Event.addListener(marker, 'click', function (e) {
        // setSelectedMarker(data);
        // setModalOpen(true);
      });
    });

  }, [mapinfo])



  return (
    <MarginY>
      <H2>매장안내</H2>
      <section className='storeposi mycontainer'>
        {/* <div id="map" style={{ width: "90vw", height: "80vh" }}></div> */}
        <div ref={mapElement} style={{ width: "90vw", height: "80vh" }}>

          <div className='storediv'>
            <div className='storelist'>
              <input type="text" placeholder='매장안내' />
              <button>검색</button>
              {
                markerData.map((el, idx) => {
                  return (
                    <React.Fragment key={`list${idx}`}>
                      <div className={`d-flex imglist list${idx}`} onClick={() => { setMapInfo(idx) }}>
                        <img className='d-none d-lg-block' src="/img/store/positionpic.png" alt="가게사진" />
                        <div>
                          <h4>{el.title}</h4>
                          <p>{el.posi}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </div>

      </section>
    </MarginY>
  )
}

export default Storeposition
