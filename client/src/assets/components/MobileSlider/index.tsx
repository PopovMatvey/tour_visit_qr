import React from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./css/style.css";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        useCSS: true,
    };

    return (
        // <Slider {...settings}>
        //     <div className="slider">
        //         <div>
        //             ihbbib
        //             <h3>Slide 1</h3>
        //         </div>
        //     </div>
        //     <div className="slider">
        //         <div>
        //             <h3>Slide 2nkln</h3>
        //         </div>
        //     </div>
        //     <div className="slider">
        //         <div>
        //             326238
        //             <h3>Slide 3</h3>
        //         </div>
        //     </div>
        // </Slider>
        <></>
    );
};

export default SimpleSlider;
