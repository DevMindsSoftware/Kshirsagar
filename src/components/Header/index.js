import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Col, Drawer, Row } from "antd";
import { Link as RouterLink } from "react-router-dom";
import Appheaderlogo from "../Headersubcomponent/headerlogo";
import Appimageheader from "../Headersubcomponent/imageheader";
import DataHeader from "../ServerData/dataheader";
import "./header.css";
import { MenuOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Functiontext from "../../Common/Functiontext";
import { Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    onClose();
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let position = element.getBoundingClientRect();
      window.scrollTo(position.left, position.top + window.scrollY - 145);
    }
    onClose();
  };
  const [isHovered, setIsHovered] = useState(false);
  // console.log("DataHeader", DataHeader);
  if (!DataHeader || DataHeader.length === 0) {
    return null;
  }

  const textArray = DataHeader.map((data) => data.calltitle);
  // console.log("aboutsData-textArray", textArray);
  return (
    <div className="devminds-maindivheader ">
      <div>
        <Grid container spacing={2}>
          <Grid item xs={9} sm={8} md={6} lg={4} xl={4}>
            <Container>
              <h3>
                <Appheaderlogo />
              </h3>
            </Container>
          </Grid>
          <Grid item xs={3} sm={4} md={6} lg={8} xl={8}>
            <Container>
              <div className="devminds-desktopview">
                {/* <div className="desktopheadercontact">
                  <div className="devminds-earphonesizeset">
                    <span className="devminds-iconsize">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                  </div>
                  <div className="text">
                    <p
                      className={`devminds-animated-button ${
                        isHovered ? "hovered" : ""
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="calllaanytime-text">
                        {textArray && textArray.length > 0 && (
                          <Functiontext textArray={textArray} />
                        )}
                      </div>
                      <div className="numbercall">
                        <a
                          href="tel:9423841374"
                          className="devminds-numberstyle"
                        >
                          {DataHeader[0].callnumber}
                        </a>
                      </div>
                    </p>
                  </div>
                </div> */}
                {DataHeader.map((val, ind) => (
                  <Appimageheader
                    key={ind}
                    src={val.src}
                    height={val.height}
                    width={val.width}
                    marginTop={val.marginTop}
                  />
                ))}
              </div>

              <div className="devminds-mobileVisible text-end">
                <div>
                  <MenuOutlined
                    onClick={showDrawer}
                    className="devminds-drawerbuttonmobile"
                  />
                </div>

                <Drawer
                  placement="right"
                  onClose={onClose}
                  open={open}
                  className="devminds-maindrawer"
                  //  className={`devminds-maindrawer ${
                  //   open ? "devminds-drawer-open" : ""
                  // }`}
                >
                  <div className="devminds-mobilehedermainallmenu">
                    <Link to="/">
                      <label
                        className="mobilehedermenu"
                        onClick={scrollToTop}
                      >
                        <b>मुखपृष्ठ</b>
                      </label>
                    </Link>
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("cardhoveslider")}
                    >
                      cards
                    </label> */}
                    <Link to="/Photogallary">
                      <label
                        className="mobilehedermenu"
                        onClick={scrollToTop}
                      >
                        <b>फोटो गॅलरी</b>
                      </label>
                    </Link>
                    <Link to="/Karykram">
                      <label
                        className="mobilehedermenu"
                        onClick={scrollToTop}
                      >
                        <b>कार्यक्रम</b>
                      </label>
                    </Link>
                    <Link to="/video">
                      <label
                        className="mobilehedermenu"
                        onClick={scrollToTop}
                      >
                        <b>व्हिडिओ गॅलरी</b>
                      </label>
                    </Link>
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("facilities")}
                    >
                      Other facilities
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("पुनरावलोकने")}
                    >
                      reviews
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("customer")}
                    >
                      customer
                    </label> */}
                    {/* <label
                      className="mobilehedermenu"
                      onClick={() => handleClickScroll("video")}
                    >
                      video
                    </label> */}
                    <Link to="/Sampark">
                      <label
                        className="mobilehedermenu"
                        onClick={scrollToTop}
                      >
                        <b>संपर्क</b>
                      </label>
                    </Link>
                  </div>
                </Drawer>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
