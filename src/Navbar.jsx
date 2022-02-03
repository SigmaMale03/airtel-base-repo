import React from "react";
import "./index.css";
import logo from "./images/airtel-logo.png";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                <a href="#">
                    <img src={logo} alt="airtel logo" />
                </a>
                </div>
                <div className="nav">
                <ol className="nav_list">
                    <li className="nav_list_item">
                    <a href="#">PERSONAL</a>
                    </li>
                    <li className="nav_list_item">
                    <a href="#">BUSINESS</a>
                    </li>
                    <li className="nav_list_item">
                    <a href="#">INVESTORS</a>
                    </li>
                </ol>
                </div>
            </div>
        </>
    );
};

export default Navbar;