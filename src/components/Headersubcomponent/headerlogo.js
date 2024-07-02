import React from "react";
import { Link } from "react-router-dom";
import logomain from "../../images/mainlogo.png";

const Appheaderlogo = () => {
  return (
    <div className="devmindslogo main-header-devmainds ">
      <div className="devmaindslogo_content">
        <h4>
          {/* <b className="Devmindslogo">Kshirsagar</b>  */}
          <Link to="/">
            <img src={logomain} alt="maindevminds" className="Devmindslogo" />
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Appheaderlogo;
