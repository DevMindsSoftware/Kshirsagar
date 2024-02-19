import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import "./scrolling.css";
import Reveal from "react-reveal/Reveal";
import Smallheader from "../Smallheader";

const ScrollingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = () => {
    console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    listenScrollEvent();
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className={`app ${isScrolled ? "devminds-visible" : "devminds-hidden"}`}>
      <Reveal effect="fadeInDown" duration={3000}>
        <Header />
        <Smallheader />
      </Reveal>
    </div>
  );
};

export default ScrollingHeader;
