import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

import img1 from '../slider/imagesSlider/hemodi1.jpg';
import img2 from '../slider/imagesSlider/hemodi2.jpg';
import img3 from '../slider/imagesSlider/hemodi3.jpg';
import img4 from '../slider/imagesSlider/hemodi4.jpg';



function SliderHemodi() {
  return (
    <>
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000} className='main-slide'>
                <div>
                    <img src={img1} width="100%" height="500px"/>
                </div>
                <div>
                    <img src={img2} width="100%"/>
                </div>
                <div>
                    <img src={img3} width="100%"/>
                </div>
                <div>
                    <img src={img4} width="100%" height="500px"/>
                </div>

            </Carousel>

    </>
  )
}

export default SliderHemodi

