import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./sliderCaba.css";

import img1 from './imagesSlider/1.jpg';
import img2 from './imagesSlider/2.jpg';
import img3 from './imagesSlider/3.jpg';
import img4 from './imagesSlider/4.jpg';
import img5 from './imagesSlider/5.jpg';
import img6 from './imagesSlider/6.jpg';
import img7 from './imagesSlider/7.jpg';
import img8 from './imagesSlider/8.jpg';


function Slider() {
  return (
    <>
    <div className='caba'>
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
                <div>
                    <img src={img5} width="100%" />
                </div>
                <div>
                    <img src={img6} width="100%"/>
                </div>
                <div>
                    <img src={img7} width="100%"/>
                </div>
                <div>
                    <img src={img8} width="100%" />
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Slider

