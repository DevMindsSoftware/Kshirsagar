import React from "react";
import "./Common.css";
// import Home from "./components/Content/Home/index";
import Footer from "./components/Footer";
import Scrollingheader from "./components/Scrollingheader/index";
import Mainheaderone from "./components/Mainheaderone/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Videogallary from "./components/Videogallary";
import Photogallary from "./components/Photogallary";
import Karykram from "./components/Karykram";
import Sampark from "./components/Sampark";
import { Button } from "antd";
import Home from "./components/Home";
import Smallheader from "./components/Smallheader";
import { Route, Routes } from "react-router-dom";

function App() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      // scrolls to 20px above element
      // window.scrollTo(position.left, position.top + window.scrollY - 70);
      window.scrollTo(position.left, position.top + window.scrollY - 120);
    }
  };
  return (
    <div className="">
      {/* <Header /> */}
      <Scrollingheader />
      <Mainheaderone />
      {/* <Smallheader /> */}
      {/* <Home /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/video" element={<Videogallary />} />
        <Route path="/Photogallary" element={<Photogallary />} />
        <Route path="/Karykram" element={<Karykram />} />
        <Route path="/Sampark" element={<Sampark />} />
      </Routes>

      <div className="whatsappmaindiv">
        <div className="bottom-whatsapp">
          <a href="https://wa.me/8483841029" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsappicon" />
            <i
              // className="fa fa-whatsapp text-white"
              style={{ fontSize: "25px" }}
            ></i>
          </a>
          <span class="on-hover-text">
            <div className="arrow"></div>
            <a href="https://wa.me/8483841029" rel="noreferrer" target="_blank">
              Contact us
            </a>
          </span>
          {/* <Link to="#"> */}

          {/* </Link> */}
        </div>
      </div>
      <div
        onClick={() => {
          handleClickScroll("main");
        }}
        // className="devminds-uperarrowscroll"
      >
        {/* <FontAwesomeIcon icon={faArrowUp} /> */}
        <Button
          className="devminds-uperarrowscroll"
          type=""
          shape="circle"
          icon={<FontAwesomeIcon icon={faArrowUp} />}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
