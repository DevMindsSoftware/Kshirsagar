import React, { useEffect, useState } from "react";
import image1 from "../../images/gallaryhome-image.jpg";
import image2 from "../../images/kamegalleary-image.jpg";
import image3 from "../../images/wokingkshirsagar-gallery.jpg";
import image4 from "../../images/yatrameeting-gallery.jpg";
import image5 from "../../images/dasramelavagalleary-image.jpg";
import image6 from "../../images/pahanigallery-image.jpg";
import logo1 from "../../images/facebook icon filled.png";
import logo2 from "../../images/twitter icon filled.png";
import { Image } from "antd";
import logo3 from "../../images/share icon filled.png";
import "animate.css";
import "./shanchitry.css";
import { Slide } from "react-awesome-reveal";
import { ShanchitryTitleGetByApi } from "../Helper/shanchitr";

const Shanchitry = () => {
  const [loading, setloading] = useState(false);
  const [datashanchitry, setDatashanchitry] = useState([]);

  const imgURL2 = "http://localhost:3000/api/fileuploads/Shanchitre/download/";
  useEffect(() => {
    onfunbatmaya();
  }, []);
  const onfunbatmaya = () => {
    setloading(true);
    ShanchitryTitleGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("res==>", res.data);
        setDatashanchitry(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };
  return (
    <div id="गैलरी">
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "80px",
          backgroundColor: "white",
        }}
      >
        <div className="container " style={{ paddingTop: "60px" }}>
          <div className=" ">
            <div className="row ">
              <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                <div className="inner">
                  <span style={{ float: "left" }}>
                    <h2>
                      <b style={{ color: "#6d3e36" }}>क्षणचित्रे</b>
                    </h2>
                  </span>
                </div>
                <button
                  type="button"
                  className=" btn bttunbatm rounded-pill shanchitryhovr buttsizlingh "
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "#f8f9fc" }}
                  >
                    <b style={{ color: "rgb(109, 62, 54)" }}>सर्व पहा</b>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="container pt-4"> */}

          <div className="row  pt-4">
            {datashanchitry.length > 0 ? (
              datashanchitry.map((e, index) => {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="img1 mt-1">
                      <img
                        src={imgURL2 + e.shanchitryimage}
                        //  src={image1}
                        alt="a"
                        className="w-100  mb-2 "
                      />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          {/* लोकमत अवॉर्ड 2022 */}
                          {e.textlabel}
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            // cursor: 'pointer'
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>

                    {/* <div className="img1 mt-1">
                <img
                  src={image3}
                  alt="a"
                  className="w-100  mb-2 "
                  style={{ height: "553px" }}
                />
                <div className="imgPosition">
                  <p class="text-white fw-bolder ms-2 mb-2">विठ्ठल दिंडी</p>
                  <div class="d-flex px-2">
                    <img src={logo1} alt="" height="30px" width="30x" className="meaniconhoveropineter"/>
                    <img
                      src={logo2}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                    <img
                      src={logo3}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                  </div>
                </div>
                <div className="content-overlay-shanchitre"></div>
              </div> */}
                  </div>
                );
              })
            ) : (
              <>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                  <Slide cascade damping={0.1} direction="up" triggerOnce>
                    <div className="img1">
                      <img src={image1} alt="a" className="w-100  mb-2 " />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          राज्याचे मुख्यमंत्री मा. ना. एकनाथ शिंदे साहेब यांचे
                          कोल्हापूर जिल्हा दौ-यावर स्वागत केले.
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            // cursor: 'pointer'
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>

                    <div className="img1 mt-1">
                      <img
                        src={image3}
                        alt="a"
                        className="w-100  mb-2 "
                        style={{ height: "553px" }}
                      />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          {" "}
                          रंकाळा प्रेमी नागरिकांच्या समस्या जाणून घेतले
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>
                  </Slide>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                  <Slide cascade damping={0.1} direction="up" triggerOnce>
                    <div className="img1 mt-1">
                      <img
                        src={image5}
                        alt="a"
                        className="w-100  mb-2 "
                        style={{ height: "511px" }}
                      />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          शिवसेनेच्या दसरा मेळाव्यासाठी शिवसैनिकांसह मुंबईला
                          रवाना.
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>
                    <div className="img1 mt-1">
                      <img src={image4} alt="a" className="w-100  mb-2 " />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          सौंदत्ती यात्रेच्या खोळंबा आकाराचा प्रश्न निकाली.{" "}
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>
                  </Slide>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
                  <Slide cascade damping={0.1} direction="up" triggerOnce>
                    <div className="img1 mt-1">
                      <img src={image2} alt="a" className="w-100  mb-2 " />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          कोल्हापूर मनपा उत्पन्न वाढीसाठी शहरातील भूखंडांचा
                          विकास करा
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>
                    <div className="img1 mt-1">
                      <img
                        src={image6}
                        alt="a"
                        className="w-100  mb-2 "
                        style={{ height: "556px" }}
                      />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                          हुतात्मा पार्क उद्यानास मंजूर निधीतून सुरु असलेल्या
                          कामाची पाहणी.
                        </p>
                        <div class="d-flex px-2">
                          <img
                            src={logo1}
                            alt=""
                            height="30px"
                            width="30x"
                            className="meaniconhoveropineter"
                          />
                          <img
                            src={logo2}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                          <img
                            src={logo3}
                            className="ms-1 meaniconhoveropineter"
                            alt=""
                            height="30px"
                            width="30x"
                          />
                        </div>
                      </div>
                      <div className="content-overlay-shanchitre"></div>
                    </div>
                  </Slide>
                </div>
              </>
            )}
            {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="img1 mt-1">
                <img
                  src={image5}
                  alt="a"
                  className="w-100  mb-2 "
                  style={{ height: "511px" }}
                />
                <div className="imgPosition">
                  <p class="text-white fw-bolder ms-2 mb-2">सर्वधार्मिक सामुदायिक </p>
                  <div class="d-flex px-2">
                    <img src={logo1} alt="" height="30px" width="30x" className="meaniconhoveropineter" />
                    <img
                      src={logo2}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                    <img
                      src={logo3}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                  </div>
                </div>
                <div className="content-overlay-shanchitre"></div>
              </div>
              <div className="img1 mt-1">
                <img src={image4} alt="a" className="w-100  mb-2 " />
                <div className="imgPosition">
                  <p class="text-white fw-bolder ms-2 mb-2">शपथ  विधी </p>
                  <div class="d-flex px-2">
                    <img src={logo1} alt="" height="30px" width="30x" className="meaniconhoveropineter" />
                    <img
                      src={logo2}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                    <img
                      src={logo3}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                  </div>
                </div>
                <div className="content-overlay-shanchitre"></div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="img1 mt-1">
              <img src={image2} alt="a" className="w-100  mb-2 " />
              <div className="imgPosition">
                  <p class="text-white fw-bolder ms-2 mb-2">सर्वधार्मिक सामुदायिक विवाह सोहळा</p>
                  <div class="d-flex px-2">
                    <img src={logo1} alt="" height="30px" width="30x" className="meaniconhoveropineter" />
                    <img
                      src={logo2}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                    <img
                      src={logo3}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                  </div>
                </div>
                <div className="content-overlay-shanchitre"></div>
              </div>
              <div className="img1 mt-1">
              <img
                src={image6}
                alt="a"
                className="w-100  mb-2 "
                style={{ height: "556px" }}
              />
               <div className="imgPosition">
                  <p class="text-white fw-bolder ms-2 mb-2">नागरिकांसोबत सवांद </p>
                  <div class="d-flex px-2">
                    <img src={logo1} alt="" height="30px" width="30x" className="meaniconhoveropineter" />
                    <img
                      src={logo2}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                    <img
                      src={logo3}
                      className="ms-1 meaniconhoveropineter"
                      alt=""
                      height="30px"
                      width="30x"
                    />
                  </div>
                </div>
                <div className="content-overlay-shanchitre"></div>
              </div>
            </div> */}
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Shanchitry;
