import React, { createContext, useState} from "react";
import { Link } from "react-router-dom";
import "./index.css";

const CheckValue = createContext({});

const Form_top = ({Visa , SBI , setSBI , setVisa}) => {
    const [check , setCheck] = useState();
    // Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa}

    const radioVal = (val) => {
      setCheck(val);
      if(val === "sbi"){
        setSBI(true)
      }else if(val === "visa"){
        setVisa(true)
      }
    };
    const Fake = () => {
    }
    const checkfun = () => {
    };
    
    return (
        <> 
          <div className="form_bottom">
                  <label className=" label">Payment Mode</label>
                  <div className="radio_input">
                    <div className="section_flex credit">
                      <input
                        type="radio"
                        onChange={() => radioVal("visa")}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">Visa/Master Credit Card</label>
                    </div>
                    <div className="section_flex debit">
                      <input
                        type="radio"
                        onChange={() => radioVal("visa")}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">Visa/Master Debit Card</label>
                    </div>
                    <div className="section_flex ">
                      <input
                        type="radio"
                        onChange={() => radioVal("sbi")}
                        name="payment"
                        className="input_amount"
                        required
                      />
                      <label className="label">SBI Netbanking</label>
                    </div>
                    <Link to="/processing-payment"
                            className="pay_btn"
                    >
                    Proceed to Pay
                    </Link>
                  </div>
            </div>
        </>
    );
};

export default Form_top;
