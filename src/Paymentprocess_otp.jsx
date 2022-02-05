import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Paymentprocess_otp = ({}) => {
  const css_style = { color:" #808080",
                      display:"flex",
                      alignContent:"center", padding: "0px", marginBottom: "2px"
                     };

  return (
    <>
      <div className="wraper">
        <div className="box">
          <div className="visa_logo">
            <div className="visa">
              <img
                src="https://www.3dsecure.icicibank.com/ACSWeb/EnrollWeb/ICICIBank/images/vbv_logo.jpg"
                alt="visa pic"
              />
            </div>
            <div className="mas_card" style={{justifySelf: "center"}}>
              <img
                src="https://images.all-free-download.com/images/graphicthumb/mastercard_1_82737.jpg"
                alt="mastercard pic"
              />
            </div>
          </div>
          <div className="line">
            <span>Internet I PIN</span>
            <p>
            &nbsp;Please enter your Verified by Visa® 3D Secure PIN in the space <br/> 
            provided below, to confirm your identity for this purchase. This <br/>
            information will not be shared with the merchant.
            </p>
          </div>
          <div className="card_form">
            <form  className="form-contact" style={{gridTemplateRows: "1fr 1fr 1fr"}}>
              <div className="card merchant_detail">
                <p className="card_p">Merchant Name : </p>
                <p> Airtel Money_BD</p>
              </div>
              <div className="card transaction_detail">
                <p className="card_p">Card Number :</p>
                <p>XXXX XXXX XXXX XXXX</p>
              </div>
              <div className="card number">
                <h4 style={{justifySelf: "right", alignSelf:"center"}}>One Time Password:	 </h4>
                <div style={{display:"flex" }}>
                <input
                  type="text"
                  // onChange={}
                  // value={}
                  className="form_input"
                  maxLength="8"
                  style={{padding: "0px",  alignSelf:"end"}}
                />
                <label style={{css_style}} size="1">&nbsp; [?]</label>
                </div>
              </div>
              <div className="card_btn">
                <button type="submit" className="submit_btn">
                  <Link to="/tran_failed">SUBMIT</Link>
                </button>
              </div>
            </form>
          </div>
          <div style={{marginTop: "3em"}} className="card_footer">
            <p>
              This page will automatically timeout after <span>180</span> second
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paymentprocess_otp;
