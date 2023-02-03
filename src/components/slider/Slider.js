import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

import img1 from '../slider/imagesSlider/new_slider1.jpg';
import img2 from '../slider/imagesSlider/new_slider2.jpg';
import img3 from '../slider/imagesSlider/new_slider3.jpg';
import img4 from '../slider/imagesSlider/new_slider4.jpg';
import img5 from '../slider/imagesSlider/new_slider5.jpg';
import img6 from '../slider/imagesSlider/new_slider6.jpg';
import img7 from '../slider/imagesSlider/new_slider7.jpg';
import img8 from '../slider/imagesSlider/new_slider8.jpg';
import img9 from '../slider/imagesSlider/Nwe_turnos online.jpg';
// import img10 from '../slider/imagesSlider/Slider consultorios.jpeg';
import img11 from '../slider/imagesSlider/Slider_telemedicina.jpg';
import img12 from '../slider/imagesSlider/Slider_consultorio2.jpg';
import img13 from '../slider/imagesSlider/Slider-remplazo-imagenes.jpg';
import img14 from '../slider/imagesSlider/Slider-residencias.jpg';


function Slider() {
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
                <div>
                    <img src={img5} width="100%"/>
                </div>
                <div>
                    <img src={img6} width="100%"/>
                </div>
                <div>
                    <img src={img7} width="100%" height="500px"/>
                </div>
                <div>
                    <img src={img8} width="100%"/>
                </div>
                <div>
                    <img src={img9} width="100%"/>
                </div>
                {/* <div>
                    <img src={img10} width="100%" height="500px"/>
                </div> */}
                <div>
                    <img src={img11} width="100%"/>
                </div>
                <div>
                    <img src={img12} width="100%"/>
                </div>
                <div>
                    <img src={img13} width="100%"/>
                </div>
                <div>
                    <img src={img14} width="100%"/>
                </div>
            </Carousel>

    </>
  )
}

export default Slider

