import React from "react";
import "./index.css";
import playstore from "./images/gplay.png";
import applestore from "./images/applelogo.png";


const Foot_top = () => {
    return (
        <>
            <div className="footer_top">
              <div className="top top_apple">
                <a href="https://play.google.com/store/apps/details?id=com.myairtelapp"><img src={applestore} alt="applestore_logo" /></a>
              </div>
              <div className="top top_playstore">
                <a href="https://apps.apple.com/us/app/airtel-thanks-recharge-upi/id543184334"><img src={playstore} alt="playstore_logo" /></a>
              </div>
            </div>
        </>
    );
};

export default Foot_top;