import React,{useState} from "react";
import Header from "../Header/index";
import Smallheader from "../Smallheader/index";
import Footer from "../Footer/index";
import { Col, Row, Menu, Input, Button } from "antd";
import "./video.css";
import { DatePicker, Space } from "antd";
import image1 from "../../images/mqdefault1.jpg";
import image2 from "../../images/mqdefault22.jpg";
import image3 from "../../images/mqdefault33.jpg";
import image4 from "../../images/mqdefault444.jpg";
import fb1 from "../../images/facebook icon filled.png";
import tw2 from "../../images/twitter icon filled.png";
import she3 from "../../images/share icon filled.png";
import modiim1 from "../../images/modi1.jpg";
import modiim2 from "../../images/modi 2.jpg";
import modiim3 from "../../images/modi3.jpg";
import modiim4 from "../../images/modi4.jpg";
import "animate.css";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import videodata from "../ServerData/videodata";
const { Meta } = Card;
const { RangePicker } = DatePicker;

const Videogallary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(videodata);

 const handleSearch = () => {
  const result = videodata.filter((item) =>
    item.descriptiontext.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredData(result);
};

const onchangesetfun = (e) => {
  setSearchQuery(e.target.value);
  setFilteredData(videodata);
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
      <div className="videoheader container">
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
            xxl={{ span: 12 }}
          >
            <h3>Video Gallery</h3>
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
                  <Input placeholder="search video" value={searchQuery}
              onChange={onchangesetfun} className="searchinput" />
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
                  <Button type="primary" className="buttvideo"  onClick={handleSearch} danger size={3}>
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
                  <Link to="/video">
                    <span className="" style={{ color: "#4a3c97" }}>
                      Video
                    </span>
                  </Link>
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
              >
                <div className="listulmain">
                  <Link to="/Photogallary">
                    <span className="eventcolo"> Photos</span>
                  </Link>
                </div>
              </Col>
              {/* <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 3 }}
                xl={{ span: 3 }}
                xxl={{ span: 3 }}
              >
                <div className="listulmain">
                  <span>Leaders</span>
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
                <div className="listulmain">
                  <span>Parspanamentary </span>
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
                  <span style={{ margin: "10px" }}>Mann Ki Baat</span>
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
                  <span> Short Videos</span>
                </div>
              </Col> */}
            </Row>
          </div>
          {/* cards========================================= */}
          <div className="pt-5 animate__animated animate__fadeInUp animate__delay-0s">
            <Row>
              {videodata.length > 0 ? (
                filteredData.map((e, index) => {
                  return (
                    <Col
                      key={index} // Add key prop with a unique value
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 12 }}
                      lg={{ span: 6 }}
                      xl={{ span: 6 }}
                      xxl={{ span: 6 }}
                    >
                      <Card
                        className="cardmainimagsizese"
                        cover={
                          <iframe
                            key={e.key} // Assuming you have a unique identifier like 'id' in your videodata
                            src={e.URL}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        }
                      >
                        <Meta
                          avatar={<small> 50:35</small>}
                          description={e.descriptiontext}
                        />
                        <br />
                        <img
                          src={fb1}
                          alt=""
                          height="30px"
                          width="30x"
                          className="iconsfooter"
                        />
                        <img
                          src={tw2}
                          className="ms-1 iconsfooter "
                          alt=""
                          height="30px"
                          width="30x"
                        />
                        <img
                          src={she3}
                          className="ms-1 iconsfooter"
                          alt=""
                          height="30px"
                          width="30x"
                        />
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <>
                  {" "}
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 6 }}
                  >
                    <div>
                      <Card
                        className="cardmainimagsizese"
                        cover={
                          // <a
                          //   href="https://www.youtube.com/watch?v=_Ln-v4h2GdI&amp;amp;t=1s"
                          //   class="video-popup video-play"
                          // >
                          //   <img alt="example" src={image2} className="imgmwid" />
                          // </a>

                          <iframe
                            src="https://www.youtube.com/embed/Kkfh31UH1-U?si=AshFlm1SLBok3Xyc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          >
                            <img
                              alt="example"
                              src={image2}
                              className="imgmwid"
                            />
                          </iframe>
                        }
                      >
                        <Meta
                          avatar={
                            // <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                            <small> 50:35</small>
                          }
                          //   title="Card title"
                          description="Kolhapur | कोल्हापूरात Rajesh Kshirsagar यांच्या कार्यकर्त्यांचं शक्तिप्रदर्शन"
                        />
                        <br />
                        <img
                          src={fb1}
                          alt=""
                          height="30px"
                          width="30x"
                          className="iconsfooter"
                        />
                        <img
                          src={tw2}
                          className="ms-1 iconsfooter "
                          alt=""
                          height="30px"
                          width="30x"
                        />
                        <img
                          src={she3}
                          className="ms-1 iconsfooter"
                          alt=""
                          height="30px"
                          width="30x"
                        />
                      </Card>
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
                    <div>
                      <Card
                        className="cardmainimagsizese"
                        cover={
                          // <a
                          //   href="https://www.youtube.com/watch?v=tyNIQd0rOGQ"
                          //   class="video-popup video-play"
                          // >
                          //   <img alt="example" src={image3} className="imgmwid" />
                          // </a>
                          <iframe
                            src="https://www.youtube.com/embed/0TFK6ePJEko?si=HO2CENTJOElyDyX8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          >
                            <img
                              alt="example"
                              src={image3}
                              className="imgmwid"
                            />
                          </iframe>
                        }
                      >
                        <Meta
                          avatar={
                            // <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                            <small> 50:35</small>
                          }
                          //   title="Card title"
                          description="Rajesh Kshirsagar | कोल्हापूर निवडणुकीत साम-दाम-दंड-भेदचा वापर करू : राजेश क्षीरसागर -Tv9"
                        />
                        <br />
                        <img
                          src={fb1}
                          alt=""
                          height="30px"
                          width="30x"
                          className="iconsfooter"
                        />
                        <img
                          src={tw2}
                          className="ms-1 iconsfooter "
                          alt=""
                          height="30px"
                          width="30x"
                        />
                        <img
                          src={she3}
                          className="ms-1 iconsfooter"
                          alt=""
                          height="30px"
                          width="30x"
                        />
                      </Card>
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
                    <div>
                      <Card
                        className="cardmainimagsizese"
                        cover={
                          // <a
                          //   href="https://www.youtube.com/watch?v=HXOoz1LAgOA"
                          //   class="video-popup video-play"
                          // >
                          //   <img alt="example" src={image4} className="imgmwid" />
                          // </a>
                          <iframe
                            src="https://www.youtube.com/embed/HH40LVHHYCk?si=FUT8V78CVlr6iS8K"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          >
                            <img
                              alt="example"
                              src={image1}
                              className="imgmwid"
                            />
                          </iframe>
                        }
                      >
                        <Meta
                          avatar={
                            // <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                            <small> 50:35</small>
                          }
                          //   title="Card title"
                          description="कोल्हापूर : मुलाच्या लग्नाच्या खर्चापैकी 10 टक्के रक्कम गरजूंना देणार - राजेश क्षीरसागर"
                        />
                        <br />
                        <img
                          src={fb1}
                          alt=""
                          height="30px"
                          width="30x"
                          className="iconsfooter"
                        />
                        <img
                          src={tw2}
                          className="ms-1 iconsfooter "
                          alt=""
                          height="30px"
                          width="30x"
                        />
                        <img
                          src={she3}
                          className="ms-1 iconsfooter"
                          alt=""
                          height="30px"
                          width="30x"
                        />
                      </Card>
                    </div>
                  </Col>{" "}
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

export default Videogallary;
