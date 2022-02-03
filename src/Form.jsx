import React from "react";
import "./index.css";
import Form_top from "./Form_top";
import Form_bottom from "./Form_bottom";

const Form = ({Visa , SBI , setVisa , setSBI}) => {
    return (
        <>
            <div className="form">
                <Form_top />
                <Form_bottom Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />
            </div>
        </>
    );
}

export default Form;