import React from "react";
import "./index.css";

const Foot_middle = () => {
    return (
        <>
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
        </>
    );
};

export default Foot_middle;