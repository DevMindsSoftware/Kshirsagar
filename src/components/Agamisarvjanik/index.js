import React, { useEffect, useState } from "react";
import image1 from "../../images/agamikarykrmcricket.jpg";
import image2 from "../../images/maharashtra-kesari_20171239804.jpg";
import image3 from "../../images/karykrmbombe-image.jpg";
import image4 from "../../images/rajeshkshirsagarspeech-image.jpg";
import { Carousel } from "antd";
import "./agamisarvjanik.css";
import {
  AgamikaryakrmGetByApi,
  karyakrmTitleGetByApi,
} from "../Helper/karyakram";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton } from "antd";

const Agamisarvjanik = () => {
  const [loading, setloading] = useState(false);
  const [datakarykrmphoto, setDatakarykrmphoto] = useState([]);
  const [dataAgamikaryakrm, setDataAgamikaryakrm] = useState([]);
  const [datakarykrmscorlling, setDatakarykrmscorlling] = useState([]);
  const contentStyle = {
    // height: "160px",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const imgURL =
    "http://localhost:3000/api/fileuploads/imagetwokarykramupload/download/";
    const URLidimage = 'http://localhost:3000/api/fileuploads/karyakramimageFolder/download/';
  useEffect(() => {
    onfunkaryakrm();
    onfunAgamikaryakrm();
    // onfunkaryakrmscorlling();
  }, []);
  const onfunkaryakrm = () => {
    setloading(true);
    karyakrmTitleGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("krmphoto==>", res.data);
        setDatakarykrmphoto(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };
  const onfunAgamikaryakrm = () => {
    setloading(true);
    AgamikaryakrmGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("krmagami==>", res.data);
        setDataAgamikaryakrm(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };

  // const onfunkaryakrmscorlling = () => {

  //   if (loading) {
  //     return;
  //   }
  //   setloading(true);
  //   fetch(
  //     "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
  //   )
  //     .then((res) => res.json())
  //     .then((body) => {
  //       setDatakarykrmscorlling([...datakarykrmscorlling, ...body.results]);
  //       setloading(false);
  //     })
  //     .catch(() => {
  //       setloading(false);
  //     });
  // };
  return (
    <div id="कार्यक्रम" className="backrisors">
      <div className="container  pb-5">
        <div className="content">
          <div className="row ">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
              <div className="pb-4 ">
                <h2>
                  <b style={{ color: "#6d3e36" }}>कार्यक्रम</b>
                  <button
                    type="button"
                    className=" btn bttunbatm rounded-pill agamihovr buttsizlingh"
                  >
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "#f8f9fc" }}
                    >
                      <b style={{ color: "rgb(109, 62, 54)" }}>सर्व पहा</b>
                    </a>
                  </button>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row ">
            <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12">
              <div className="mainsatejetimag">
                <Carousel autoplay>
                  {datakarykrmphoto.length > 0 ? (
                    datakarykrmphoto.map((e, index) => {
                      return (
                        <div style={contentStyle}>
                          <div className="mb-3">
                            <img
                              // src={image4}
                              src={imgURL + e.imagetokary}
                              alt=""
                              className="agamisimage"
                            />
                            <div className="content-overlay"></div>
                          </div>
                          <div className="textimgdatabase text-white">
                            <p> {e.karyakramTitle1}</p>

                            <h5> {e.karyakramText1}</h5>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                        <div className="mainsatejetimag">
                          <div className="mb-3">
                            <img src={image4} className="agamisimage" alt="" />
                            <div className="content-overlay"></div>
                          </div>
                          <div className="textimg text-white">
                            <p> नुकताच घडलेला कार्यक्रम</p>
                            <h5>सिटिझनविल प्रकाशन सोहळा</h5>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Carousel>
              </div>
            </div>
            {/* <==============================================> */}
            {/* <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-12">
            <div className="mt-2 ">
            <div className="">
                  {" "}
                  <span className="maintext">आगामी कार्यक्रम</span>{" "}
                </div>
                
            <div
              id="scrollableDiv"
              style={{
                height: 495,
                overflow: "auto",
                padding: "0 16px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
                backgroundColor: "white"
              }}
            >
              <InfiniteScroll
                dataLength={datakarykrmscorlling.length}
                next={onfunkaryakrmscorlling}
                hasMore={datakarykrmscorlling.length < 50}
                loader={
                  <Skeleton
                    avatar
                    paragraph={{
                      rows: 1,
                    }}
                    active
                  />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
              >
                 <List
                  dataSource={datakarykrmscorlling}
                  renderItem={(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <a href="https://ant.design">{item.name.last}</a>
                        }
                        description={item.email}
                      />
                      <div>Content</div>
                    </List.Item>
                  )}
                /> 
                <List >
                   <div className="bg-white p-4">
                  <div className=" row ">
                    <div className=" col-sm-3 col-md-3 col-lg-3">
                      <div>
                        <img
                          src={image1}
                          className="pt-4"
                          alt=""
                          style={{ height: "130px", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                      <div className="pt-4">
                        <h4 className="titleagami">
                          शिवाजी राजे उधाणनपूल उदघाटन
                        </h4>
                        <p>
                          पत्ता :अनुपम नाट्यगृह समोर, गोखले नगर ,नाशिक <br />
                          दिनांक :२० ऑगस्ट २०२३
                          <br />
                          वेळ :सकाळी ११ वाजता{" "}
                        </p>
                      </div>
                    </div>

                    <div className=" col-sm-3 col-md-3 col-lg-3">
                      <div>
                        <img
                          src={image2}
                          className="pt-4"
                          alt=""
                          style={{ height: "130px", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                      <div className="pt-4">
                        <h4 className="titleagami">संग्राम कुस्ती स्पर्धा</h4>
                        <p>
                          पत्ता शिंदे मैदान पंचरत्न होटल समोर जाधव वाडी नाशिक{" "}
                          <br />
                          दिनांक 23 ऑगस्ट 2023 <br /> वेळ सकाळी 11 वाजता
                        </p>
                      </div>
                    </div>

                    <div className=" col-sm-3 col-md-3 col-lg-3">
                      <div>
                        <img
                          src={image3}
                          className="pt-4"
                          alt=""
                          style={{ height: "130px", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                      <div className="pt-4">
                        <h4 className="titleagami">
                          मधुर अलंकार ज्वेलर्स उद्धघाटन
                        </h4>
                        <p>
                          पत्ता नाशिक महानगरपालिका बिल्डिंग समोर विट्ठल नगर
                          नाशिक
                          <br /> दिनांक 30 ऑगस्ट 2023 <br /> वेळ सकाळी 10 वाजता
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </List>
              </InfiniteScroll>
            </div>
            </div>
            </div> */}
            {/* <=================================================> */}
            <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-12">
              <div className="mt-2 ">
                <div className="">
                  {" "}
                  <span className="maintext">आगामी कार्यक्रम</span>{" "}
                </div>
                <div className="bg-white p-4 ">
                  <marquee
                    width="100%"
                    direction="up"
                    height="440px"
                    className="marqueetag"
                    behavior="scroll"
                    scrollamount="2"
                  >
                    <div className=" row maindivsetposition marquee-container">
                      {dataAgamikaryakrm.length > 0 ? (
                        dataAgamikaryakrm.map((e, index) => {
                          return (
                            <>
                              <div className=" col-sm-3 col-md-3 col-lg-3">
                                <div>
                                  <img
                                    // src={image1}
                                    src={URLidimage + e.karyakramImage}
                                    className="pt-4"
                                    alt=""
                                    style={{ height: "130px", width: "100%" }}
                                  />
                                </div>
                              </div>
                              <div className="col-sm-8 col-md-8 col-lg-8">
                                <div className="pt-4">
                                  <h4 className="titleagami">
                                    {/* शिवाजी राजे उधाणनपूल उदघाटन */}
                                    {e.AgamikaryakramTitle}
                                  </h4>
                                  <p>
                                    पत्ता : {e.AgamikaryakramAdrees}
                                    {/* अनुपम नाट्यगृह समोर, गोखले नगर ,नाशिक <br /> */}
                                    <br />
                                    दिनांक : {e.AgamikaryakramDate}
                                    {/* २० ऑगस्ट २०२३ */}
                                    <br />
                                    वेळ : {e.AgamikaryakramTime}
                                    {/* सकाळी ११ वाजता{" "} */}
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <div className=" col-sm-3 col-md-3 col-lg-3">
                            <div>
                              <img
                                src={image1}
                                className="pt-4"
                                alt=""
                                style={{ height: "130px", width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="pt-4">
                              <h4 className="titleagami">
                              राज्याचे मुख्यमंत्री एकनाथ शिंदे साहेब यांच्या वाढदिवसानिमित्त क्रिकेट स्पर्धा उत्साहा
                              </h4>
                              <p>
                                पत्ता :कसबा बावडा कोल्हापूर{" "}
                                <br />
                                दिनांक : ६ फेब्रुवारी 2023
                                <br />
                                वेळ :सकाळी 7 वाजता{" "}
                              </p>
                            </div>
                          </div>
                          <div className=" col-sm-3 col-md-3 col-lg-3">
                            <div>
                              <img
                                src={image2}
                                className="pt-4"
                                alt=""
                                style={{ height: "130px", width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="pt-4">
                              <h4 className="titleagami">
                                संग्राम कुस्ती स्पर्धा
                              </h4>
                              <p>
                                पत्ता: खासबाग केसरी कुस्ती मैदान कोल्हापूर <br />
                                दिनांक: 23 ऑगस्ट 2023 <br /> वेळ: सकाळी 11 वाजता
                              </p>
                            </div>
                          </div>
                          <div className=" col-sm-3 col-md-3 col-lg-3">
                            <div>
                              <img
                                src={image3}
                                className="pt-4"
                                alt=""
                                style={{ height: "130px", width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="pt-4">
                              <h4 className="titleagami">
                             बॉम्बे इंडस्ट्रीज एसोसिएशन (बीआईए) का 59वां स्थापना समारोह
                              </h4>
                              <p>
                                पत्ता: मुंबई 
                                <br /> दिनांक  जनवरी, 2023  <br /> वेळ: संध्याकाळी 5:30
                                
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4  txtend">
          <p>
            <b style={{ color: "rgb(109, 62, 54)" }}>
            मा.श्री.राजेश क्षीरसागर यांच्या आगामी कार्यक्रमपत्रिकेबद्दल अधिक
              माहितीसाठी संपर्क साधा <br />
              क्षीरसागर- +918483841029
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agamisarvjanik;
