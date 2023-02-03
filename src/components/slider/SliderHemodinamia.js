import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

import img1 from './imagesSlider/banner_hemodinamia1.png';
import img2 from './imagesSlider/banner_hemodinamia2.PNG';


function Slider() {
  return (
    <>
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='main-slide'>
                <div>
                    <img src={img1} width="100%" />
                </div>
                <div>
                    <img src={img2} width="100%"/>
                </div>
            </Carousel>
    </>
  )
}

export default Slider

