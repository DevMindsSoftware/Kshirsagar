import React, { useState } from "react";
import "./contact.css";
import image1 from "../../images/conntact-image-kshirsagar.png";
// import imagecard from "../../image/contact card.png";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "xxx.png",
    //   status: "done",
    //   url: "http://www.baidu.com/xxx.png",
    // },
  ]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: false,
  };
  return (
    <div id="संपर्क" className="maincontactdiv">
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12">
              <div className="satyajeetimg">
                <img src={image1} className="contactimage" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="text-center">
                <div className="backimg">
                  <div className=" mt-2 card  full-background-card">
                    <Form
                      className="p-5"
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <h5 className="fw-bolder text-center pb-3">
                        आपल्या सूचना कळवा
                      </h5>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-6  col-lg-6 col-xl-6 mt-2">
                          <Form.Item
                            name="name"
                            type="text"
                            style={{ marginBottom: "0px" }}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Please input your name!",
                            //   },
                            // ]}
                          >
                            <Input
                              className="form-control inputbackcolor rounded-pill antitlteinpufont "
                              placeholder="नाव"
                            />
                          </Form.Item>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6  col-lg-6 col-xl-6 mt-2">
                          <Form.Item
                            name="email"
                            type="email"
                            style={{ marginBottom: "0px" }}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Please input your email!",
                            //   },
                            // { type: 'email', message: 'please enter a valid email' }
                            // ]}
                          >
                            <Input
                              className="form-control inputbackcolor rounded-pill antitlteinpufont"
                              placeholder="ई-मेल"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 mt-2">
                          <Form.Item
                            name="mobileno"
                            type="number"
                            style={{ marginBottom: "0px" }}
                            rules={[
                              {
                                required: true,
                                message: "कृपया तुमचा मोबाईल नंबर टाका !",
                              },
                              ({ getFieldValue }) => ({
                                validator(_, value) {
                                  console.log(
                                    "String(value).length",
                                    String(value).length
                                  );
                                  if (!value || String(value).length === 10) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    new Error(
                                      "कृपया 10 वर्णांचा मोबाईल नंबर प्रविष्ट करा !"
                                    )
                                  );
                                },
                              }),
                            ]}
                          >
                            <Input
                              className="form-control inputbackcolor rounded-pill antitlteinpufont"
                              placeholder="मोबाइल नंबर"
                              type="number"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 mt-2">
                          <Form.Item
                            name="Vishy"
                            type="text"
                            style={{ marginBottom: "0px" }}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Please input your Vishy!",
                            //   },
                            // ]}
                          >
                            <Input
                              className="form-control inputbackcolor rounded-pill antitlteinpufont"
                              placeholder="विषय"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 mt-2">
                          <Form.Item
                            name="massage"
                            type="text"
                            style={{ marginBottom: "2px" }}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Please input your sandesh!",
                            //   },
                            // ]}
                          >
                            <TextArea
                              rows={4}
                              className="form-control inputbackcolor antitlteinpufont"
                              placeholder="संदेश"
                              style={{ height: "100px", borderRadius: "15px" }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-12 col-sm-12 col-md-12  col-lg-12 col-xl-12 mt-2">
                        <Form.Item
                            name="img">
                          <div
                           
                            style={{ marginBottom: "-5px" }}
                          >
                            <div  className="d-flex">
                              <Upload {...props} fileList={fileList} className="">
                                <Button  label=" छायाचित्र अपलोड करा" className="photoupload">
                                  <div>
                                    <div>
                                    
                                      <label className="mt-1">
                                       
                                        छायाचित्र अपलोड करा
                                      </label>
                                    </div>
                                  </div>
                                </Button>
                              </Upload>
                              <label className="mt-2">
                                        No File Uploaded
                                      </label>
                            </div>

                            
                          </div>
                          </Form.Item>
                        </div>
                      </div> */}
                      <br />
                      <div className="text-start " style={{marginTop:'-30px'}}>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            className=" btn frombutton text-start rounded-pill mt-4 px-4 "
                          >
                            <b style={{ color: "rgb(109, 62, 54)" }}>पाठवा</b>
                          </Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
