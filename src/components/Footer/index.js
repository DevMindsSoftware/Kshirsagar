import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../../images/facebook icon filled.png";
import image2 from "../../images/twitter icon filled.png";
import image3 from "../../images/share icon filled.png";
import image4 from "../../images/youtube icon filled.png";
import image5 from "../../images/linkedin icon filled.png";
import {
  faPhoneVolume,
  faLocationDot,
  faEnvelope,
  faSchool,
  faBars,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footerbgcolor">
      <div className="container">
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-sm-12 col-md-1 col-1"></div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-3 col-11">
            <div className="address-contact-div ">
              {/* <label className="contact-Address">Address</label>  */}
              {/* <AnimationOnScroll animateIn="animate__bounceIn">
                      <h3 className="contactus-style "> Contact Us </h3>
                    </AnimationOnScroll>
                    <hr className="contact-hr" /> */}
              <br />
              <br />
              <div className="address-text text-white ">
                <div className="main-adrres-div">
                  <p></p>
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="icon-contact mx-3"
                    />
                    <div>
                      सी वॉर्ड, शुक्रवार पेठ,
                      <br />
                      कोल्हापूर, महाराष्ट्र
                      <br />
                      416002
                    </div>
                  </div>
                </div>
                <br />
                <div className="main-adrres-div">
                  <p className="adrress-pin-text">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon-contact mx-3"
                    />
                    office@rajeshkshirsagar.com
                  </p>
                </div>
                {/* <p className="contact-text-email"> <FontAwesomeIcon icon={faEnvelope} className="icon-contact" /> pangurusystems@gmail.com </p> */}
                <br />
                <div className=" d-flex  main-adrres-div">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="icon-contact mx-3"
                  />
                  <div>
                    <span className="">
                      02425-254786
                      <br />
                      87874-74586
                    </span>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-sm-12 col-md-1 col-3"></div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-3 col-9">
            <div className="text-white hovrtext">
              <br /> <br />
              <h3 className="texcolorfoter">Quick Links</h3>
              <br />
              <div>
                <span>Home</span>
                <br />
                <span>New and Artical</span>
                <br />
                <span>Events</span>
                <br />
                <span>photos</span>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 col-sm-12 col-md-1 col-3"></div>
          <div className="col-xl-3 col-lg-3 col-sm-12 col-md-3 col-9">
            <div className="text-white hovrtext">
              <br /> <br />
              <h3 className="texcolorfoter">Useful Links</h3>
              <br />
              <span>Privacy Policy</span>
              <br />
              <span>FAQ</span>
            </div>
          </div>
        </div>
        <br />
        <div className="row  ">
          {/* <div className="col-xl-4 col-lg-4 col-sm-4 col-md-12 col-12"></div> */}
          <div
            className="col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12"
            style={{ textAlign: "center" }}
          >
            <div className="text-center">
              <h4 className="text-white  pt-3" style={{ marginRight: "13px" }}>
                आमच्याशी कनेक्ट व्हा
              </h4>
              <div className="text-center pb-5  ">
                <img
                  src={image1}
                  className=" iconsfooter "
                  alt=""
                  height="30px"
                  width="30x"
                />
                <img
                  src={image2}
                  className="ms-1 iconsfooter"
                  alt=""
                  height="30px"
                  width="30x"
                />
                <img
                  src={image3}
                  className="ms-1 iconsfooter"
                  alt=""
                  height="30px"
                  width="30x"
                />
                <img
                  src={image4}
                  className="ms-1 iconsfooter"
                  alt=""
                  height="30px"
                  width="30x"
                />
                <img
                  src={image5}
                  className="ms-1 iconsfooter"
                  alt=""
                  height="30px"
                  width="30x"
                />
              </div>
            </div>
          </div>
          {/* <div className="col-xl-4 col-lg-4 col-sm-4 col-md-12 col-12"></div> */}
        </div>
      </div>
      <div className="container-fuild lastfooter   ">
        <small>
          Copyright © 2024 Rajesh Kshirsagar All Rights Reserved. Designed &
          Maintained by{" "}
          <a
            href="https://devminds.co.in/"
            target="_blank"
            className="text-white footertext"
          >
            DevMinds Software
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
