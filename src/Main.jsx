import React from "react";
import "./index.css";
import Aside from "./Aside";
import Section from "./Section";


const Main = ({Visa , SBI , setVisa , setSBI}) => {
    return (
        <>
           <div className="main">
            <Aside />
            <Section Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />
           </div>
        </>
    );
};

export default Main;