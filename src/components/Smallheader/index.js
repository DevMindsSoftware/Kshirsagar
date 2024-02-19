import React, { useState, useEffect } from "react";
import { Anchor, Button, Drawer, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Logo from '../../Image/Magic Study -logo.png';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// import {Link } from "react-router-dom";
import "./Smallheader.css";
// const { Link } = Anchor;

const Smallheader = () => {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  useEffect(() => {
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent);
  });
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      // scrolls to 20px above element
      // window.scrollTo(position.left, position.top + window.scrollY - 70);
      window.scrollTo(position.left, position.top + window.scrollY - 120);
    }
  };

  const items = [
    {
      key: "1",
      label: (
        // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" className='text-dark'>
        <Link to="/Photogallary">
          <b className="text-warning">फोटो गॅलरी </b>
        </Link>
        // </a>
      ),
    },
    {
      key: "2",
      label: (
        // <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" className='text-dark'>
        <Link to="/video">
          <b className="text-dark"> व्हिडिओ गॅलरी</b>
        </Link>
        // </a>
      ),
    },
  ];
  return (
    <div>
      {/* <div   id="#" className="mainsmallheader " style={ bgColor? {backgroundColor:'black', marginTop: '0' , paddingTop: '18px'}:{}}> */}
      <div
        id="#"
        className={
          bgColor ? "mainsmallheader colorchage" : "colorchage mainsmallheader"
        }
      >
        <div className="container-fluid desktopheard ">
          <div className="header">
            <div className="header-banner">
              {/* 
<Link href="#" 
 className="menu-text  manmukh"
 title= "मुखपृष्ठ" /> */}
              {/* <Link to="/">
 <label className="menu-text">
 <b>मुखपृष्ठ</b>
</label>
</Link> */}
              <label
                className="menu-text"
                onClick={() => handleClickScroll("#main")}
              >
                <Link to="/">
                  <b>मुखपृष्ठ</b>
                </Link>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("परिचय")}
              >
                <b>परिचय</b>
              </label>
              <label
                className="menu-text "
                onClick={() => handleClickScroll("मिडिया")}
              >
                {/* <b>मिडियारिसोर्सेस</b> */}
                <Dropdown
                  className="buttsiz"
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                  arrow
                >
                  <Button>
                    {" "}
                    <Link to="/">
                      <b>मिडियारिसोर्सेस</b>
                    </Link>
                  </Button>
                </Dropdown>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("गैलरी")}
              >
                <b>दौरा</b>
              </label>

              <label
                className="menu-text"
                onClick={() => handleClickScroll("गैलरी")}
              >
                <Link to="/Photogallary">
                  <b>गैलरी</b>
                </Link>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("कार्यक्रम")}
              >
                 <Link to="/Karykram">
                <b>कार्यक्रम</b>
                </Link>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("संपर्क")}
              >
                <b>सभासदनोंदणी </b>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("संपर्क")}
              >
                <Link to="/Sampark">
                  <b>संपर्क</b>
                </Link>
              </label>
              <label
                className="menu-text"
                onClick={() => handleClickScroll("संपर्क")}
              >
                <b>भाषा</b>
              </label>
            </div>
          </div>
        </div>
        {/* <div className='mobileVisible'>
 <div className='mobilehead-main'>
 <div className="logo-mobile" >
    <Link to='http://www.google.com'> {<img alt="example" src={Logo} className="logo-set" />}</Link>
    </div>
  <Button type="" className='mobilehead-right' onClick={showDrawer}>
  <i className="fa fa-bars bars" ></i> 
  <FontAwesomeIcon icon= {faBars}  className="header-bar" />
      </Button>
      </div>
      <Drawer  placement="right" onClose={onClose} open={open}>
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("#main");setOpen(false);}}>
    मुखपृष्ठ
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("परिचय");setOpen(false);}}>
    परिचय
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("मिडिया");setOpen(false);}}>
    मिडियारिसोर्सेस
    </label><br/><br/>
    <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("रिसोर्सेस");setOpen(false);}}>
    दौरा
    </label><br/><br/>
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("गैलरी");setOpen(false);}}>
    गैलरी
    </label>
    <br />
    <br />
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("संपर्क");setOpen(false);}}>
    संपर्क
    </label>
    <br />
    <br />
      <label className="ant-anchor-link-title-scroll" 
    onClick={() => {handleClickScroll("संपर्क");setOpen(false);}}>
    भाषा
    </label>
      
  </Anchor>
      </Drawer>

  </div> */}
      </div>
    </div>
  );
};

export default Smallheader;
