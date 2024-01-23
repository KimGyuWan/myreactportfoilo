import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.scss';

const Header = () => {
  const [isSiteVisible, setSiteVisible] = useState(false);
  const [showUl, setShowUl] = useState(false);
  const [showListIcon, setShowListIcon] = useState(true);
  const siteMenuRef = useRef(null);
  let chevron = true;

  const toggleSiteVisibility = () => {
    setSiteVisible(!isSiteVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 992;
      setShowUl(window.innerWidth >= breakpoint);
      setShowListIcon(window.innerWidth < breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let iconstyle = "bi bi-chevron-up";

  const toggleSiteMenu = () => {
    const siteMenu = siteMenuRef.current;
    if (siteMenu) {
      siteMenu.style.display = siteMenu.style.display === 'none' ? 'block' : 'none';
    }
    // setCheck(!check)
    chevron = !chevron;
    iconstyle = chevron ? "bi bi-chevron-up" : "bi bi-chevron-down"
    document.querySelector(".login_gnb span i").classList = iconstyle;
  };

  return (
    <>
      {showListIcon && (
        <div className='site' style={{ display: isSiteVisible ? 'block' : 'none' }}>
          <a href="#none">
            <div className='login d-flex justify-content-between'>
              <span>로그인이 필요합니다.</span>
              <button>로그인</button>
            </div>
          </a>
          <ul className='login_gnb'>
            <li><a href="#none"><span>메뉴추천가이드</span></a></li>
            <li><div className='d-flex justify-content-between'><a href="#none"><span>메뉴안내</span></a>
              <span onClick={toggleSiteMenu}><i className='bi bi-chevron-up' style={{ transform: "rotateY(180)" }}></i></span></div>
              <ul ref={siteMenuRef} className='site_menu'>
                <li><a className='d2a' href="#none">1리터 대용량</a></li>
                <li><a className='d2a' href="#none">1.1리터 보틀</a></li>
                <li><a className='d2a' href="#none">COFFEE</a></li>
                <li><a className='d2a' href="#none">NON COFFEE</a></li>
                <li><a className='d2a' href="#none">디카페인</a></li>
                <li><a className='d2a' href="#none">생과일 주스&티</a></li>
                <li><a className='d2a' href="#none">스무디&프라페</a></li>
                <li><a className='d2a' href="#none">디저트</a></li>
                <li><a className='d2a' href="#none">디저트(배달전용메뉴)</a></li>
              </ul>
            </li>
            <li><a href="#none"><span>매장찾기</span></a></li>
          </ul>
          {isSiteVisible && (
            <div className='closebtn'>
              <button onClick={toggleSiteVisibility}><i className="bi bi-x-lg"></i></button>
            </div>
          )}
        </div >
      )}
      <Navbar id='hd' className='py-3 border-bottom'>
        <div className='mycontainer justify-content-between d-flex align-items-center'>
          <h1><a href="/"></a></h1>
          {showUl && (
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center d-flex align-items-center'>
              <Nav className="d-flex justify-content-center align-items-center" defaultActiveKey="#home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="#content1">메뉴추천가이드</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#content2">베스트메뉴</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#content3">매장찾기</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          )}
          <div className=' headericon'>
            <span><i className="bi bi-search"></i></span>
            {showListIcon && (
              // <div>
              <span onClick={toggleSiteVisibility}><i className="bi bi-list"></i></span>
              // </div>
            )}
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;

<Navbar bg="light" expand="lg" fixed="top">
  <Navbar.Brand href="#home">Brand</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" defaultActiveKey="#home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#section1">Section 1</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#section2">Section 2</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#section3">Section 3</Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

