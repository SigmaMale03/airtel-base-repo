import React, { useState } from "react";
import "./index.css";

const Form_top = () => {
    const [account, setAccount] = useState("");
    
    const [amount, setAmount] = useState("");
    
    const accountText = (event) => {
      const inValue = event.target.value;
      setAccount(inValue);
    };
    const amountText = (event) => {
      const inValue = event.target.value;
      setAmount(inValue);
    };



    return (
        <>
            <div className="form_top">
                  <div className="section_grid account">
                    <label className="label">Account No.</label>
                    <input
                      type="text"
                      onChange={accountText}
                      value={account}
                      className="input_account"
                    />
                  </div>
                  <div className="section_grid amount">
                    <label className="label">Enter Amount</label>
                    <input
                      type="text"
                      onChange={amountText}
                      value={amount}
                      className="input_amount"
                    />
                  </div>
            </div>  
        </>
    );
};

export default Form_top;