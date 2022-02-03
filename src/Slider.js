import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "./images/slider_1.jpg"
import img2 from "./images/slider_2.jpg"
import img3 from "./images/slider_3.jpg"


function Carousel() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <div className="container">
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
        </Slider>
      </div>
    )
    }

export default Carousel
