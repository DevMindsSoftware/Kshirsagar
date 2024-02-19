import React from "react";
import "./mainheaderone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../../components/Header/index";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
const MainHeaderOne = () => {
  return (
    <header className="main-header main-header-one" id="#">
      {/* Main Header One Top */}
      <div className="Devmindsmain-first-header">
        <div className="main-container">
          <div className="Devmindsmain-inerheader">
            {/* Main Header One Top Left */}
            <div className="Devmindsmain-leftside-header">
              {/* Top Left Menu */}
              <ul className="Devmindsmain-leftsidemenu devminds-ullist">
                <li className="devminds-list">
                  <a href="/" rel="noreferrer" alt="">Rajesh</a>   
                </li >
                <li className="devminds-list">
                  <a href="/"  rel="noreferrer" alt="">Vinayakrao</a>
                </li >
                <li className="devminds-list">
                  <a href="/"  rel="noreferrer" alt="">Kshirsagar</a>
                </li>
              </ul>

              {/* Top Left Social Links */}
              <ul className="Devmindsmain-leftheader devminds-ullist">
                <li className="devminds-list mx-2">
                  <a href="/"  rel="noreferrer" alt="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="devminds-list mx-2">
                  <a href="/" rel="noreferrer" alt="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="mt-1 devminds-list mx-2">
                  <a href="/" rel="noreferrer" alt="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Main Header One Top Right */}
            <div className="DDevmindsmain-rightheader">
              <ul>
                <li>
                  <div className="icon">
                    <span className="mail-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:sachinjambhale999.sj@gmail.com">Kshirsagar@gmail.com</a>
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="clock-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                  </div>
                  <div className="text">
                    {/* <p>Open Hours: Mon - Fri 10.00 am - 7.00 pm</p> */}
                    <p>Open Hours: 24 Hours</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Header One Top */}

      <Header />
      {/* End Main Header One Bottom */}
    </header>
  );
};

export default MainHeaderOne;
