import React from "react";
import Agamisarvjanik from "../Agamisarvjanik";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Smallheader from "../Smallheader";
import "./karykram.css"

const Karykram = () => {
  return (
    <div>
      {/* <Header />
      <Smallheader /> */}
      <div className="karykramdiv">
        <Agamisarvjanik />
      </div>
      <Footer />
    </div>
  );
};

export default Karykram;
