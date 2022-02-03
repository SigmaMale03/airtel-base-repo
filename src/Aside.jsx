import React from "react";
import "./index.css";
import slide1 from "./images/slider_1.jpg";
import Carousel from "./Slider";
// import slide2 from "./images/slider_2.jpg";
// import slide3 from "./images/slider_3.jpg";

const Aside = () => {
    return (
        <>
            <div className="aside">

                <Carousel />
                {/* <div><img src={slide1}/></div>
                {/* <div><img src={slide2}/></div>
                <div><img src={slide3}/></div> */}
            </div>
        </>
    );
};

export default Aside;