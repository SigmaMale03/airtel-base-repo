import React from "react";
import "./index.css";
import sponcer1 from "./images/bsi-assurance-iso.png";
import sponcer2 from "./images/norton-certificate.png";

const Foot_bottom = () => {
    return (
        <>
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
        </>
    );
};

export default Foot_bottom;