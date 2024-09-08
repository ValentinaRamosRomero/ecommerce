import React from 'react';
import Slider from 'react-slick';
import "../Styles/HomeBanner.css";
import banner5 from "../Images/banner5.webp";
import banner6 from "../Images/banner6.webp";

export const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className='container mt-3'>
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src={banner5} className="w-100" />
                    </div>
                    <div className="item">
                        <img src={banner6} className="w-100" />
                    </div>
                </Slider>
            </div>

        </div>

    )
}
