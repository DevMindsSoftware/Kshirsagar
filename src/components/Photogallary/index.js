import React, { useEffect, useState } from "react";
import Header from "../Header/index";
import Smallheader from "../Smallheader/index";
import Footer from "../Footer/index";
import { Col, Row, Menu, Input, Button } from "antd";
import "./photo.css";
import { DatePicker, Space } from "antd";
import kshirsagarimage1 from "../../images/gallaryhome-image.jpg";
import kshirsagarimage2 from "../../images/kamegalleary-image.jpg";
import kshirsagarimage3 from "../../images/wokingkshirsagar-gallery.jpg";
import kshirsagarimage4 from "../../images/yatrameeting-gallery.jpg";
import { Image } from "antd";
import { Avatar, Card } from "antd";
import logo1 from "../../images/facebook icon filled.png";
import logo2 from "../../images/twitter icon filled.png";
import logo3 from "../../images/share icon filled.png";
import { photoGallaryesTitleGetByApi } from "../Helper/photogallary";
import { Link } from "react-router-dom";
import photosdata from "../ServerData/photosdata";
const { Meta } = Card;
const { RangePicker } = DatePicker;

const Photogallary = () => {
  const [loading, setloading] = useState(false);
  const [datakaryphotogallary, setDatakaryphotogallary] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(photosdata);

  const URLidimage =
    "http://localhost:3000/api/fileuploads/karyakramimageFolder/download/";
  useEffect(() => {
    onfunGallary();
  }, []);
  const onfunGallary = () => {
    setloading(true);
    photoGallaryesTitleGetByApi().then(
      (res) => {
        console.log("res", res);
        console.log("Gallaryphoto==>", res.data);
        setDatakaryphotogallary(res.data);
      },
      (err) => {
        console.log(err);
        // swal("err", "Enqury Types ", "error");
      }
    );
  };

 const handleSearch = () => {
  const result = photosdata.filter((item) =>
    item.textlabel.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredData(result);
};

const onchangesetfun = (e) => {
  setSearchQuery(e.target.value);
  setFilteredData(photosdata);
}
  return (
    <>
      {/* <div className="headerposition">
        <Header />
      </div>
      <div className="mainposion">
        <div className="smallheaderfix ">
          <Smallheader />
        </div>
      </div> */}
      <div className="photodive  container">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}
          >
            <h3>Photo Gallery</h3>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}
          >
            <div className="inputsizes">
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  md={{ span: 11 }}
                  lg={{ span: 12 }}
                  xl={{ span: 8 }}
                  xxl={{ span: 11 }}
                >
                  <Input placeholder="search Photo" className="searchinput "  onChange={onchangesetfun} />
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 11 }}
                  md={{ span: 11 }}
                  lg={{ span: 8 }}
                  xl={{ span: 10 }}
                  xxl={{ span: 11 }}
                >
                  <div className="datpicksiz">
                    <Space direction="vertical" size={12}>
                      <RangePicker className="maindipickers" />
                    </Space>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 3 }}
                  md={{ span: 2 }}
                  lg={{ span: 4 }}
                  xl={{ span: 6 }}
                  xxl={{ span: 2 }}
                >
                  <Button type="primary" className="buttvideo" onClick={handleSearch} danger size={3}>
                    <span className="buttext">Search</span>
                  </Button>
                </Col>
              </Row>
            </div>
            {/* <div className="inputsizes">
              <Input placeholder="search video" className="searchinput" />
              <div className="datpicksiz">
                <Space direction="vertical" size={12}>
                  <RangePicker className="maindipickers" />
                </Space>
              </div>
              <Button type="primary" className="buttvideo" danger size={3}>
                <span className="buttext">Search</span>
              </Button>
            </div> */}
          </Col>
        </Row>
      </div>
      <div className="imgbagroundvideo pb-5">
        <div div className="container">
          <div className="pt-5">
            <Row>
              <Col
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 3 }}
                xl={{ span: 3 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <Link to="/Photogallary">
                    <span className=""  style={{color:"#4a3c97"}}>Photos</span>
                  </Link>
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 3 }}
                xl={{ span: 3 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <Link to="/video">
                    <span className="eventcolo"> Video</span>
                  </Link>
                </div>
              </Col>
              {/* <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 4 }}
                xl={{ span: 3 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <span>Founders</span>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 5 }}
                xl={{ span: 4 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <span>Infographics</span>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 3 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <span>Cartoons</span>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
              >
                <div className="listulmain">
                  <span> HD Images</span>
                </div>
              </Col> */}
            </Row>
          </div>
          {/* cards========================================= */}
          <div className="pt-5 animate__animated animate__fadeInUp animate__delay-0s">
            <Row>
              {photosdata.length > 0 ? (
                filteredData.map((e, index) => {
                  return (
                    <>
                      <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 6 }}
                        xl={{ span: 6 }}
                        xxl={{ span: 6 }}
                      >
                        <div className="imagegallarysize">
                          <div className="cardmainimagsizese ">
                            <Image
                              src={e.src}
                              style={{ height: "200px", width: "100%" }}
                            />
                            <div className="imgPosition">
                              <p
                                class="text-white fw-bolder  mb-2"
                                style={{ padding: "10px" }}
                              >
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
                          </div>
                        </div>
                      </Col>
                    </>
                  );
                })
              ) : (
                <>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                  >
                    <div className="cardmainimagsizese">
                      <Image src={kshirsagarimage1}/>
                      <div className="imgPosition">
                        <p
                          class="text-white fw-bolder  mb-2"
                          style={{ padding: "10px" }}
                        >
                          राज्याचे मुख्यमंत्री मा. ना. एकनाथ शिंदे साहेब यांचे कोल्हापूर जिल्हा दौ-यावर स्वागत केले.
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
                    </div>
                  </Col>

                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                  >
                    <div className="cardmainimagsizese">
                      <Image src={kshirsagarimage2} />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                        कोल्हापूर मनपा उत्पन्न वाढीसाठी शहरातील भूखंडांचा विकास करा
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
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                  >
                    <div className="cardmainimagsizese">
                      <Image src={kshirsagarimage3} />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
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
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                  >
                    <div className="cardmainimagsizese">
                      <Image src={kshirsagarimage4} />
                      <div className="imgPosition">
                        <p class="text-white fw-bolder ms-2 mb-2">
                        सौंदत्ती यात्रेच्या खोळंबा आकाराचा प्रश्न निकाली.
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
                    </div>
                  </Col>
                </>
              )}
            </Row>
            {/* second Row==========================================================> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Photogallary;
