import React, { useEffect, useState, useRef } from "react";
import "./Batmyaanilekhan.css";
import image1 from "../../images/newspaper.png";
import image2 from "../../images/newspaper.png";
import image3 from "../../images/newspaper.png";
import calender from "../../images/calender icon.png";
import "animate.css";
import { BatmayadetalTitleGetByApi } from "../Helper/batmaya";
import { Slide } from "react-awesome-reveal";
import newsandarticlesdata from "../ServerData/newsandarticlesdata";

const Batmyaanilekhan = () => {
  const [loading, setloading] = useState(false);
  const [databatmaya, setDatabatmaya] = useState([]);
  const imgURL = "http://localhost:3000/api/fileuploads/batmaya/download/";
  const containerRef = useRef(null);

  useEffect(() => {
    onfunbatmaya();

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    });

    // Observe the container element
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  const onfunbatmaya = () => {
    setloading(true);
    BatmayadetalTitleGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("res==>", res.data);
        setDatabatmaya(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };
  return (
    <div id="मिडिया" className="backcoolor">
      <div className="container " ref={containerRef}>
        <div className="content">
          <div className="row ">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
              <div className=" ">
                <h2>
                  {" "}
                  <b style={{ color: "#6d3e36" }}>बातम्या आणि लेख</b>{" "}
                  <button
                    type="button"
                    className=" btn bttunbatm rounded-pill batmhover buttsizlingh"
                  >
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#f8f9fc" }}
                    >
                      <b style={{ color: "rgb(109, 62, 54)" }}>सर्व पहा</b>
                    </a>
                  </button>{" "}
                </h2>

                {/* */}
              </div>
            </div>
          </div>
        </div>

        <div className=" box-we">
          <div className="container"></div>
          <br />
          <div className=" ">
            <div className="row ">
              {newsandarticlesdata.length > 0 ? (
                newsandarticlesdata.map((e, index) => {
                  return (
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                      <div className="card cardaa " id="card1">
                        <img
                          className="sizeimg"
                          // src={image1}
                          src={e.src}
                          alt="Card image"
                        />
                        <div className="card-body text-center text-decoration-none">
                          <a href="dwd ">
                            <p className="card-text  textsize">
                              {/* गोड बोलू नका, कामे निकाली काढा <br />: सत्यजीत
                              तांबे */}
                              {e.textparagraph}
                            </p>
                            {/* <br /> */}
                          </a>
                          <i className="fa-solid fa-calendar-days fa-lg listtext"></i>
                          <span>
                            <img
                              src={calender}
                              class="image-fluid"
                              height="25px;"
                              width="25px"
                            />{" "}
                            {/* &nbsp; 13/06/2023 - लोकमत */}
                            {e.date} - {e.newspapername}
                            {/* <span style={{marginLeft: '60px'}}>लोकमत</span> */}
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                    <Slide cascade damping={0.1} direction="left" triggerOnce>
                      <div className="card cardaa " id="card1">
                        <img
                          className="sizeimg"
                          src={image1}
                          alt="Card image"
                        />
                        <div className="card-body text-center text-decoration-none">
                          <a href="dwd ">
                            <p className="card-text  textsize">
                              कोल्हापुरातील संस्थांसाठी दोन कोटी निधी
                              <br />: राजेश क्षीरसागर;
                            </p>
                          </a>
                          <i className="fa-solid fa-calendar-days fa-lg listtext"></i>
                          <span>
                            <img
                              src={calender}
                              class="image-fluid"
                              height="25px;"
                              width="25px"
                            />{" "}
                            &nbsp; 13/06/2023 - पुढारी
                            {/* <span style={{marginLeft: '60px'}}>लोकमत</span> */}
                          </span>
                          <br />
                        </div>
                      </div>
                    </Slide>
                  </div>

                  <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                    <Slide cascade damping={0.1} direction="up" triggerOnce>
                      <div className="card cardaa  " id="card1">
                        <img
                          className="sizeimg"
                          src={image2}
                          alt="Card image"
                        />
                        <div className="card-body text-center">
                          <a href="dwd">
                            <p className="card-text textsize">
                              कोल्हापुरातील संस्थांसाठी दोन
                              <br /> कोटी निधी : आ राजेश क्षीरसागर;
                            </p>
                          </a>
                          <i className="fa-solid fa-calendar-days fa-lg listtext"></i>
                          <span>
                            <img
                              src={calender}
                              class="image-fluid"
                              height="25px;"
                              width="25px"
                            />{" "}
                            &nbsp; 20/06/2023 - पुढारी
                            {/* <span style={{marginLeft: '60px'}}>लोकमत</span> */}
                          </span>
                          <br />
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
                    <Slide cascade damping={0.1} direction="right" triggerOnce>
                      <div className="card cardaa " id="card1">
                        <img
                          className="sizeimg"
                          src={image3}
                          alt="Card image"
                        />
                        <div className="card-body text-center">
                          <a href="t55yy">
                            <p className="card-text  textsize">
                              कोल्हापुरातील संस्थांसाठी दोन <br />
                              कोटी निधी : राजेश क्षीरसागर;
                            </p>
                          </a>
                          <i className="fa-solid fa-calendar-days fa-lg listtext"></i>
                          <span>
                            <img
                              src={calender}
                              class="image-fluid"
                              height="25px;"
                              width="25px"
                            />{" "}
                            &nbsp; 10/06/2023 - पुढारी
                          </span>
                          {/* <span className="card2span" >पुढारी</span> */}
                        </div>
                      </div>
                    </Slide>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batmyaanilekhan;
