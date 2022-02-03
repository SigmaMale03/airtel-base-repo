import React from "react";
import logo from "./images/airtel-logo.png";
import slide1 from "./images/slider_1.jpg";
// import slide2 from "./images/slider_2.jpg";
// import slide3 from "./images/slider_3.jpg";
import playstore from "./images/gplay.png";
import applestore from "./images/applelogo.png";
import sponcer1 from "./images/bsi-assurance-iso.png";
import sponcer2 from "./images/norton-certificate.png";
import { AutomaticCarousel } from "react-automatic-carousel";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="navbar">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="airtel logo" />
              </a>
            </div>
            <div className="nav">
              <ol className="nav_list">
                <li className="nav_list_item">
                  <a href="#">PERSONAL</a>
                </li>
                <li className="nav_list_item">
                  <a href="#">BUSINESS</a>
                </li>
                <li className="nav_list_item">
                  <a href="#">INVESTORS</a>
                </li>
              </ol>
            </div>
          </div>
          <div className="nav_heading">
              <p>Merchant Account</p>
          </div>
          <div className="main">
            <div className="aside">
              <div><img src={slide1}/></div>
              {/* <div><img src={slide2}/></div>
              <div><img src={slide3}/></div> */}
            </div>
            <div className="section">
              <form className="form">
                <div className="form_top">
                  <div className="section_grid account">
                    <label className="label">Account No.</label>
                    <input
                      type="text"
                      // onChange={}
                      // value={}
                      className="input_account"
                    />
                  </div>
                  <div className="section_grid amount">
                    <label className="label">Enter Amount</label>
                    <input
                      type="text"
                      // onChange={}
                      // value={}
                      className="input_amount"
                    />
                  </div>
                </div>
                <div className="form_bottom">
                  <label className=" label">Payment Mode</label>
                  <div className="radio_input">
                    <div className="section_flex credit">
                      <input
                        type="radio"
                        // onChange={}
                        // value={}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">Visa/Master Credit Card</label>
                    </div>
                    <div className="section_flex debit">
                      <input
                        type="radio"
                        // onChange={}
                        // value={}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">Visa/Master Debit Card</label>
                    </div>
                    <div className="section_flex ">
                      <input
                        type="radio"
                        // onChange={}
                        // value={}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">SBI Netbanking</label>
                    </div>
                    <button className="pay_btn">Proceed to Pay</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="footer">
            <div className="footer_top">
              <div className="top top_apple">
                <img src={applestore} alt="applestore_logo" />
              </div>
              <div className="top top_playstore">
                <img src={playstore} alt="playstore_logo" />
              </div>
            </div>
            <div className="footer_middle">
              <div className="middle_list">
                <ol className="footer_list first">
                  <li className="first_item"><a href="#"> Media</a></li>
                  <li className="first_item"><a href="#">Carrier</a></li>
                  <li className="first_item"><a href="#">About Airtel</a></li>
                  <li className="first_item"><a href="#">Brand</a></li>
                </ol>
                <ol className="footer_list third">
                  <li className=" heading">
                    <p>Quick Access</p>
                  </li>
                  <li className="item"><a href="#">Switch To Airtel</a></li>
                  <li className="item"><a href="#">My Airtel App</a></li>
                  <li className="item"><a href="#">Wynk</a></li>
                </ol>
                <ol className="footer_list second">
                  <li className="heading">
                    <p>Help at Hand</p>
                  </li>
                  <li className="item"><a href="#">Check Coverage</a></li>
                  <li className="item"><a href="#">find A Store</a></li>
                  <li className="item"><a href="#">Give Us Your Feedback</a></li>
                </ol>
                <ol className="footer_list forth">
                  <li className="heading">
                    <p>New Connections</p>
                  </li>
                  <li className="item"><a href="#">Postpaid</a></li>
                  <li className="item"><a href="#">Prepaid</a></li>
                  <li className="item"><a href="#">Broadband & Fixed line</a></li>
                  <li className="item"><a href="#">Digital TV</a></li>
                </ol>
              </div>
              <div className="middle_bottom">
                <a href="#" className="bottom_heading">
                  <span>BACK TO TOP</span>
                </a>
                <div className="social">
                  <ol className="social_list">
                    <li className="social_li">
                      <a className="social_facebook" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social_li">
                      <a className="social_twitter" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social_li">
                      <a className="social_linkedin" href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="social_li">
                      <a className="social_youtube" href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="para">
                <p className="bottom_para">
                  <a href="#">IMPORTANT ALERTS</a>
                </p>
                <p className="bottom_para">
                  <a href="#">PRIVACY POLICY</a>
                </p>
                <p className="bottom_para tele">
                  <a href="#">TELEMARKETER REGISTRATION</a>
                </p>
                <p className="bottom_para site">
                  <a href="#">SITE INDEX</a>
                </p>
                <p className="bottom_para disturb">
                  <a href="#">DO NOT DISTURB LIST</a>
                </p>
              </div>

              <div className="copyright">
                <p className="copyright_para">
                  &copy; 2018 Airtel India. All Rights Reserved.
                </p>
              </div>
              <div className="bottom_img">
                <div  className="sponcer1">
                <img src={sponcer1} alt="sponser" />
                </div>
               <div>
               <img src={sponcer2} alt="sponser" />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
