import React from "react";
import Form from "./Form";
import "./index.css";

const Section = ({Visa , SBI , setSBI , setVisa}) => {
    return (
        <>
            <div className="section">
             <Form Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />
            </div>
        </>
    );
};

export default Section;