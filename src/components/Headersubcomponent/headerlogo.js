import React from "react";
import logomain from "../../images/mainlogo.png"

const Appheaderlogo = () => {
  return (
    <div className="devmindslogo main-header-devmainds ">
      <div className="devmaindslogo_content">
        <h4>
          {/* <b className="Devmindslogo">Kshirsagar</b>  */}
          <img src={logomain} alt="maindevminds" className="Devmindslogo" />
        </h4>
      </div>
    </div>
  );
};

export default Appheaderlogo;
