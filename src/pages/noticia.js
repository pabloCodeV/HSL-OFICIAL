import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./pages-css/sliderNoticia.css";
import "./pages-css/noticia.css";
import React, {useEffect, useState} from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import {IoIosTime} from 'react-icons/io';
import { useLocation } from "react-router-dom";
import { NavLink  } from "react-router-dom";
import {Carousel} from 'react-responsive-carousel';
import BingMap from '../components/maps/BingMap';


var imagenes //se declara para luego formar un array de imagenes
var videos //se declara para luego formar un array de videos
var val = 1



function noticia() {
  
    const parametros = useLocation().search;
    const id = parametros.split("?id=", 2);

    const [data, setData] = useState ([]);
    const [data1, setData1] = useState ([]);

    const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/novedades/'
    // const url = 'http://localhost/admin/api/novedades/'
    const prod = 'https://hospitalsiriolibanes.org/cms/api/novedades/'

    const fetchData = (url) =>{
    fetch(url + id[1] + '/')
    .then(response => response.json())
    .then(data => {
      imagenes = [data[0].imagen]
      if(data[0].imagen1 != null || data[0].imagen1 == ''){
        imagenes.push(data[0].imagen1)
      } 
      if(data[0].imagen2 != null || data[0].imagen2 == ''){
        imagenes.push(data[0].imagen2)
      } 
      if(data[0].imagen3 != null || data[0].imagen3 == ''){
        imagenes.push(data[0].imagen3)
      } 

      if(data[0].video != null || data[0].video == ''){
        videos = [data[0].video]
      }
      if(data[0].video1 != null || data[0].video1 == ''){
        videos.push(data[0].video1)
      } 
      if(data[0].video2 != null || data[0].video2 == ''){
        videos.push(data[0].video2)
      } 
      if(data[0].video3 != null || data[0].video3 == ''){
        videos.push(data[0].video3)
      } 
      setData(data)

    })
    .catch(error => console.log(error))
    };

    useEffect(()=>{
        fetchData(url)
    },[])

    const fetchDataAll = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data1 => {setData1(data1)})
        .catch(error => console.log(error))
        };
    
        useEffect(()=>{
            fetchDataAll(url)
        },[])




  var count = 0
  function derecha(){
    const slides = document.querySelector(".inner");
      if(!slides.style.transform){     
        slides.style.transform = "translateX(-25%)";
      }
      else if(slides.style.transform == "translateX(-25%)"){
        slides.style.transform = "translateX(-50%)";
      }
      else if(slides.style.transform == "translateX(-50%)"){
        slides.style.transform = "translateX(-75%)";
      }
      else if(slides.style.transform == "translateX(-75%)"){
        slides.style.transform = "translateX(0%)";
        slides.style.transform = "";

      }
  }

  function izquierda(){
    const slides = document.querySelector(".inner");
      if(!slides.style.transform){     
        slides.style.transform = "translateX(-75%)";
      }
      else if(slides.style.transform == "translateX(-25%)"){
        slides.style.transform = "translateX(0%)";
        slides.style.transform = "";
      }
      else if(slides.style.transform == "translateX(-50%)"){
        slides.style.transform = "translateX(-25%)";
      }
      else if(slides.style.transform == "translateX(-75%)"){
        slides.style.transform = "translateX(-50%)";
        

      }
  }

    function redirect(item){
      window.assign('https://hospitalsiriolibanes.org/noticia?id=' + item.id);
      // window.location.reload();
    }

  return (
    <div>
        {data.map((item, index)=> 
        <div className='contenedor-noticia' key={index} >
            <div className='logo-novedades'>
              <h2>Novedades</h2>
            </div>
            <div className="cont-not">
            <div className='info-noticia'>
            <h2 className='titulo-noticia'>{item.titulo}</h2>
            <h3 className='fecha-noticia'><IoIosTime className='icon-fe-not'/>{item.create_at}</h3>
                <p  dangerouslySetInnerHTML={{__html: item.long_description}}></p>
            </div>
            <div className='portada-noticia'>
              {item.tipo == 0 ?
              (<Carousel autoPlay={true} infiniteLoop={true} interval={3000} className='main-slide'>
              {imagenes.map((imagenes, index)=>
                 <div key={index}>
                    <img src={'https://hospitalsiriolibanes.ar/comunicacion/images/'+imagenes} width="100%" />
                </div>
                )} 
            </Carousel>)
            :
            ( imagenes.map((imagenes, index)=>
                 <div key={index}>
                    <img src={'https://hospitalsiriolibanes.ar/comunicacion/images/'+imagenes} width="100%" />
                </div>
                ) )
              }
            {videos == null || videos == ''?
            (
              <div></div>
            ):(
              videos.map((videos, index)=>
              <video className='video-size' key={index} controls >
                <source src={'https://hospitalsiriolibanes.ar/comunicacion/images/'+videos} type="video/mp4"/>
            </video>
            ) 
            )}
            
            </div>
        </div>
        </div>
      
        )}

<div class="slider-center-not">
  <h3><hr className='linea-not'/>MAS NOVEDADES<hr className='linea-not'/></h3>
  <button onClick={derecha} id="uno" class="slider-active first"><AiOutlineRight className='slider-button-notice-first'/></button>
  <div class="wrapper">
    <div class="inner">
    {data1.map((item, index)=> 
        <div key={index} class="slider-card" >
          <NavLink to={`/noticia?id=${item.id}` } onClick={() => redirect(item)}>
                <img className='' src={'https://hospitalsiriolibanes.ar/comunicacion/images/'+item.imagen} alt="banner"/>
              <div class="slider-content">
              <h3 className='fecha-not-slider'><IoIosTime className='icon-fe-not'/>{item.create_at}</h3>
              <h2>{item.titulo}</h2>
              <p className='vermas-not'><span>Ver más</span></p>
          </div>
        </NavLink>
      </div>
      )}
    </div>
  </div>
  <button  onClick={izquierda} id="dos" class="second"><AiOutlineRight className='slider-button-notice-sec'/></button>

  {/* <div  class="slider-map">
    <button onClick={slidernoticias} id="tres" class="third"></button>
  </div> */}
</div> 

        <BingMap/>
    </div>
  )
}



export default noticia




