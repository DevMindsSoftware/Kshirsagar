import React, { useEffect, useState } from "react";
import images from "../../images/chashivajimaharajnamskar.jpg";
import balasahebh from "../../images/balasaheb-thackeray-image.jpg";
import "./slider.css";
import image1 from "../../images/fb icon.png";
import image2 from "../../images/twitter icon.png";
import image3 from "../../images/instagram icon.png";
import image4 from "../../images/youtube icon.png";
import image5 from "../../images/linkedin icon.png";
import "animate.css";
import {
  BannerdetailTitleGetByApi,
  bannerslidershowByApi,
} from "../Helper/bannerslider";

const Slider = () => {
  const [loading, setloading] = useState(false);
  const [dataapiside, setDataapiside] = useState([]);
  const imgURL = "http://localhost:3000/api/fileuploads/banner/download/";
  useEffect(() => {
    onfunslider();
  }, []);
  const onfunslider = () => {
    setloading(true);
    BannerdetailTitleGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("res==>", res.data);
        setDataapiside(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };
  return (
    <div className="container-fuild " id="main">
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="0"
            className="active linedott"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="linedott"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="linedott"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="3"
            aria-label="Slide 3"
            className="linedott"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="4"
            aria-label="Slide 3"
            className="linedott"
          ></button>
        </div>

        <div className="carousel-inner">
          {dataapiside.length > 0 ? (
            dataapiside.map((e, index) => {
              return (
                <div
                  className={
                    index == 0 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img
                    // src={images}
                    src={imgURL + e.imageupload}
                    className="d-block w-100 carausal-dev"
                    alt="..."
                  />
                  <div className="text-carausal  maintitletext">
                    <br />

                    <h4
                      className="text-danger animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                      style={{
                        marginRight: "10px",
                        marginTop: "30px ",
                        padding: "2px",
                      }}
                    >
                      {e.BannerLable}
                      {/* "महाराष्ट्र ला महान राष्ट्र म्‍हणून बगू शकनारा एक युवक..." */}
                    </h4>
                    <br />
                    <h1 className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                      <b className="styajeettambetitle">
                        {/*राजेश क्षीरसागर */}
                        {e.bannerHeading}
                      </b>
                    </h1>
                    {/* <br /> */}
                    <p className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                      {/* महाराष्ट्र विधान परिषद सदस्य */}
                      {e.bannerInfo}
                    </p>
                    <button
                      type="button"
                      className="btn mt-4 rounded-pill text-white butthover animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                      style={{ background: "rgb(255, 130, 63)" }}
                    >
                      <b style={{ color: "rgb(109, 62, 54)" }}> सभासद बना</b>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div className="carousel-item active">
                <img
                  src={balasahebh}
                  className="d-block w-100 carausal-dev"
                  alt="..."
                />
                <div className="text-carausal  maintitletext">
                  <br />

                  <h4
                    className="text-danger animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                    style={{
                      marginRight: "10px",
                      marginTop: "30px ",
                      padding: "2px",
                      // textShadow: "-2px 0px 1px #000000bd",
                      textShadow: "rgb(219 216 216 / 79%) -1px -1px",
                      fontSize: "34px",
                    }}
                  >
                    {/* {lable} */}
                    शिवसेना प्रमुख
                  </h4>
                  <br />
                  <h1 className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    <b className="styajeettambetitle">
                     बाळासाहेब ठाकरे
                      {/* {heading} */}
                    </b>
                  </h1>
                  {/* <br /> */}
                  <p className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    {/*बाळासाहेब ठाकरे */}
                  </p>
                  <button
                    type="button"
                    className="btn mt-4 rounded-pill text-white butthover animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                    style={{ background: "rgb(255, 130, 63)" }}
                  >
                    <b style={{ color: "rgb(109, 62, 54)" }}> सभासद बना</b>
                  </button>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src={images}
                  className="d-blinkiconlock w-100 carausal-dev"
                  alt="..."
                />
                <div className="text-carausal ">
                  <br />

                  <h4
                    className="text-danger animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                    style={{
                      marginRight: "10px",
                      marginTop: "30px ",
                      padding: "2px",
                    }}
                  >
                    "महाराष्ट्र ला महान राष्ट्र म्‍हणून बगू शकनारा एक युवक..."
                  </h4>
                  <br />
                  <h1 className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    <b className="styajeettambetitle">राजेश क्षीरसागर</b>
                  </h1>

                  <p className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    कार्यकारी अध्यक्ष, महाराष्ट्र राज्यनियोजन मंडळ, कॅबिनेट
                    मंत्री दर्जा
                  </p>
                  <button
                    type="button"
                    className="btn mt-4 rounded-pill text-white butthover animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                    style={{ background: "rgb(255, 130, 63)" }}
                  >
                    <b style={{ color: "rgb(109, 62, 54)" }}> सभासद बना</b>
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={images}
                  className="d-block w-100 carausal-dev"
                  alt="..."
                />
                <div className="text-carausal ">
                  <br />

                  <h4
                    className="text-danger animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s "
                    style={{
                      marginRight: "10px",
                      marginTop: "30px ",
                      padding: "2px",
                    }}
                  >
                    "महाराष्ट्र ला महान राष्ट्र म्‍हणून बगू शकनारा एक युवक..."
                  </h4>
                  <br />
                  <h1 className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    {" "}
                    <b className="styajeettambetitle">राजेश क्षीरसागर</b>
                  </h1>

                  <p className="animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s">
                    महाराष्ट्र विधान परिषद सदस्य
                  </p>
                  <button
                    type="button"
                    className="btn mt-4 rounded-pill text-white butthover animate__animated animate__fadeInUp animate-duration', '800ms' animate-delay: 1s animate__slower	5s"
                    style={{ background: "rgb(255, 130, 63)" }}
                  >
                    <b style={{ color: "rgb(109, 62, 54)" }}> सभासद बना</b>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="iconsslider">
            <img
              src={image1}
              alt=""
              height="30px"
              width="30x"
              className="facbookicon"
              style={{ marginLeft: "4px" }}
            />
            <img
              src={image2}
              className="ms-1 twttericon "
              alt=""
              height="30px"
              width="30x"
            />
            <img
              src={image3}
              className="ms-1 instaicon"
              alt=""
              height="30px"
              width="30x"
            />
            <img
              src={image4}
              className="ms-1 youticon"
              alt=""
              height="30px"
              width="30x"
            />
            <img
              src={image5}
              className="ms-1 linkicon"
              alt=""
              height="30px"
              width="30x"
            />
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
      </div>
    </div>
  );
};

export default Slider;
