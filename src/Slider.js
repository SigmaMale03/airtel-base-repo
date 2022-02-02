import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



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
            <img src="https://airtelmerchants.co.in/payment/Self_careTopUp/self/pQMvrtyPayAmOuNt/img/slider_1.jpg" />
          </div>
          <div>
            <img src="	https://airtelmerchants.co.in/payment/Self_careTopUp/self/pQMvrtyPayAmOuNt/img/slider_2.jpg" />
          </div>
          <div>
            <img src="	https://airtelmerchants.co.in/payment/Self_careTopUp/self/pQMvrtyPayAmOuNt/img/slider_3.jpg" />
          </div>
        </Slider>
      </div>
    )
    }

export default Carousel
