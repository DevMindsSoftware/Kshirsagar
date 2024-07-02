import React, { useRef, useEffect, useState } from "react";
import image from "../../images/kshirsagar-parichy.png";
import roundcircal from "../../images/round-circal.png";
import "animate.css";
import "./thodkaytprichy.css";
import { Slide } from "react-awesome-reveal";
import introductionData from "../ServerData/introduction";

const Thodkayatparichy = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold value based on your needs
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationTriggered) {
          // Add the desired animation class when the component is in view
          animatedRef.current.classList.add(
            "animate__animated",
            "animate__fadeInUp"
          );
          setAnimationTriggered(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, [animationTriggered]);
  return (
    <div
      id="परिचय"
      className="pt-4 backimagepublic"
      //  style={{backgroundColor: "rgb(255 130 63)" }}
    >
      <div className="container  ">
        <div className=" box-we">
          <div className=" ">
            <div className="row ">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
                <div className="alimenttext" ref={animatedRef}>
                  <h4
                    style={{
                      fontSize: "30px",
                      paddingLeft: "35PX",
                      color: "#fd7601",
                      textShadow: "1px 2px #200000",
                      // fontWeight: "1700px",
                      // marginTop: "40px",
                    }}
                  >
                    <b>थोडक्यात परिचय</b>
                  </h4>
                  <Slide cascade damping={0.1} direction="up" triggerOnce>
                    {/* <p className="text-p text-white textparichy animate__animated animate__fadeInUp">
                  मा.श्री.राजेश क्षीरसागर हे कार्यकारी अध्यक्ष, महाराष्ट्र राज्यनियोजन मंडळ, कॅबिनेट मंत्री दर्जा आहेत. 
                 अगदी तळापासून आपल्या सुरुवात करून ते 36 वर्षापासून आणि निवणुकीच्या राजकारणात सक्रिय आहेत.

                  </p>
                  <p className="text-p text-white textparichy animate__animated animate__fadeInUp">
                  राजेश क्षीरसागर हे सध्या कार्यकारी अध्यक्ष, राज्य नियोजन मंडळ, महाराष्ट्र राज्य (कॅबिनेट मंत्री दर्जा) 
                  या पदावर दि.१९ जून २०१९ रोजी पासून कार्यरत आहेत. या पदावर कार्यरत असताना त्यांनी महाराष्ट्राचा दौरा करत
                   विभागीय स्तरावर नियोजन मंडळाच्या बैठका घेतल्या. या माध्यमातून त्यांचा लोकोपयोगी विकासकामे व जिल्हा नियोजन समितीचा 
                   कारभार सुधारण्यावर त्यांचा भर राहिला. त्यांच्या कामाची दखल त्यांच्याकडे या कामासोबत नवी जबाबदारी शासनाने सोपवली आहे.
                  </p> */}
                    {introductionData.map((data) => (
                      <div key={data.key}>
                        <p className="text-p text-white textparichy animate__animated animate__fadeInUp">
                          {data.paragraph1}
                        </p>
                        <p className="text-p text-white textparichy animate__animated animate__fadeInUp">
                          {data.paragraph2}
                        </p>
                      </div>
                    ))}
                  </Slide>
                  <div className="text-start mx-4">
                    <button
                      type="button"
                      className="btn mt-4 text-dark rounded-pill prichhover"
                      style={{ background: "white", cursor: "pointer" }}
                    >
                      <b style={{ color: "rgb(109, 62, 54)" }}>अधिक माहिती</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
                {/* <div>
                  <img src={roundcircal} alt="kshirsagar" />
                </div> */}
                <div className="maincircaldiv">
                  {introductionData.map((data) => (
                    <div key={data.key}>
                      <div className="devminds-imgshape1">
                        <img src={data.roundcircalimage} alt="#" />
                      </div>
                      <div className="devminds-imgshape2">
                        <img src={data.roundcircalimage} alt="#" />
                      </div>
                      <div>
                        <img
                          src={data.src}
                          alt="kshirsagar"
                          className="kshirsagar"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="row mainparichydiv" style={{ background: "coral" }} id="परिचय">
    //   <div className=" col-lg-6 col-md-6 col-sm-12 col-xl-6">
    //     <div className="alimenttext">
    //       <h3
    //         style={{
    //           fontSize: "40px",
    //           paddingLeft: "35PX",
    //           fontWeight: "1700px",
    //           marginTop: "40px",
    //         }}
    //       >
    //         थोडक्यात परिचय
    //       </h3>
    //       <p className="text-p">
    //         सत्यजीत तांबे हे महाराष्ट्र विधान परिषदेचे सदस्य आहेत. नाशिक पदवीधर
    //         मतदारसंघाचे प्रतिनिधित्व करतात. अगदी तळापासून आपल्या सुरुवात करून ते
    //         23 वर्षापासून आणि निवणुकीच्या राजकारणात सक्रिय आहेत.
    //       </p>
    //       <p className="text-p">
    //         यापूर्वी त्यानी प्रदेश युवकध्यक्षपद भूषवले असून ते दोनदा अहमदनगर
    //         जिल्हा परिषदेचे सदस्य निवडून आले होते. शहर विकास युवा समस्या आणि
    //         महिला करणार त्यांचा विशेष भर असून आणि दर्जेदार शिक्षण सेवा आणि
    //         उद्योजका देतात. लोकप्रतिनिधींच्या जनतेप्रती असलेल्या उतारा असून
    //         लोकप्रतिनिधी म्हणून आपल्या कामाची जास्तीत जास्त माहिती सर्व
    //         घटकापर्यंत पोहचविण्याचा त्यांचा प्रयत्न असतो.
    //       </p>
    //       <button
    //                 type="button"
    //                 className="btn mt-4 text-dark rounded-pill"
    //                 style={{ background: "white" }}
    //               >
    //                 अधिक माहिती
    //               </button>
    //     </div>
    //   </div>
    //   <div className="col-sm-12 col-lg-6 col-md-6 col-xl-6">
    //     <div className="imgesizeset">
    //       <img src={image} alt="satyajeet" className="kshirsagar" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Thodkayatparichy;
