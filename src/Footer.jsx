import React from "react";
import "./index.css";
import Foot_top from "./Foot_top";
import Foot_middle from "./Foot_middle";
import Foot_bottom from "./Foot_bottom";


const Footer = () => {
    return (
        <>
            <div className="footer">
                <Foot_top />
                <Foot_middle />
                <Foot_bottom />
            </div>
        </>
    );
};

export default Footer;