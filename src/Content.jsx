import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Navhead from "./Navhead";
import Main from "./Main";
import Footer from "./Footer";


const Content = ({Visa , SBI  , setSBI , setVisa}) => {
    return (
        <>
            <div className="content">
                <Navbar />
                <Navhead />
                <Main Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />
                <Footer />
            </div>
        </>
    );
};

export default Content;