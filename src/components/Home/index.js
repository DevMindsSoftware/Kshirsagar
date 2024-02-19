import React from 'react'
import Header from "../Header/index";
import Smallheader from "../Smallheader/index";
import Slider from "../Slider/index";
import Thodkayatparichy from "../Thodkayatparichy/index";
import Batmyaanilekhan from "../Batmyaanilekhan/index";
import Agamisarvjanik from "../Agamisarvjanik/index";
import Shanchitry from "../Shanchitry/index";
import Contact from "../Contact/index";
import Footer from "../Footer/index";
import "./home.css"

const Home = () => {
  return ( 
  <>
    {/* <div className="headerposition">
        <Header />
       
      </div> */}
      <div className='homediv'>
      <div className="mainposion">
        {/* <div className="smallheaderfix">
        <Smallheader />
        </div> */}
      <Slider />
      </div>
      <Thodkayatparichy />
      <Batmyaanilekhan />
      <Agamisarvjanik />
      <Shanchitry />
      </div>
      {/* <Contact /> */}
      <Footer />
      </>
  )
}

export default Home