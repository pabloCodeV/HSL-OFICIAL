import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./sliderRio.css";

import img1 from './imagesSlider/Consultoriosmed.jpg';
import img2 from './imagesSlider/ConsultoriosmediciB700x469.jpg';
import img3 from './imagesSlider/medici-2.jpg';
import img4 from './imagesSlider/medici.jpg';


function Slider() {
  return (
    <>
    <div className='rio'>
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='main-slide'>
                <div>
                    <img src={img1} width="100%" />
                </div>
                <div>
                    <img src={img2} width="100%"/>
                </div>
                <div>
                    <img src={img3} width="100%"/>
                </div>
                <div>
                    <img src={img4} width="100%" />
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Slider

