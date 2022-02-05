import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/airtel-logo2.webp";
import banner from "./images/banner.jpg";
import "./index.css";
import "./trans_failed.css";

const Trans_failed = () => {
  return (
    <>
      <div className="trans_container">
        <div className="trans_box">
          <div className="trans_navbar">
            <img src={logo} alt="logo" />
            <p>Reach Us : 121(airtel) and 880-001-2121 (non-airtel user)</p>
          </div>
          <div className="trans_bannertext" >
            <div className="teans_grid"></div>
            <div className="trans_grid2">
            <div className="trans_poster">
              <img src={banner} alt="poster" />
            </div>
            <div className="trans_text">
              <p className="text_small">Transaction Failure!</p>
              <div className="trans_para">
                <p>Reference No: 137016198879</p>
                <p>
                  Sorry, it appears that your bank has declined the transaction.
                  Please
                  contact your bank for clarifications. If <br />th eamount was
                  debited from 
                  your bank account, it will be refound within 5 working days.
                  <br />
                  Please quote reference number in all interaction / queries
                  regarding
                  this request.
                </p>
                <p className="trans_response">
                  <span className="response">Bank Response </span>:{" "}
                  <span>Do Not Honor</span>
                </p>
                <p>
                  Click <Link to="/">here</Link> to retiurn to your account
                  details
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trans_failed;
