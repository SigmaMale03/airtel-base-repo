import React from "react";
import "./index.css";
import playstore from "./images/gplay.png";
import applestore from "./images/applelogo.png";


const Foot_top = () => {
    return (
        <>
            <div className="footer_top">
              <div className="top top_apple">
                <img src={applestore} alt="applestore_logo" />
              </div>
              <div className="top top_playstore">
                <img src={playstore} alt="playstore_logo" />
              </div>
            </div>
        </>
    );
};

export default Foot_top;