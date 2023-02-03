import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./sliderRio.css";

import img1 from './imagesSlider/vdev1.jpg';
import img2 from './imagesSlider/vdev2.jpg';
import img3 from './imagesSlider/vdev3.jpg';
import img4 from './imagesSlider/vdev4.jpg';


function Slider() {
  return (
    <>
    <div className='vdev'>
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

