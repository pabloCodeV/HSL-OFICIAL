import React, {useEffect, useState} from 'react';
import "./pages-css/novedades.css";
import {NavLink} from "react-router-dom";
import {IoIosTime} from 'react-icons/io';
import BingMap from '../components/maps/BingMap';
var imagen;

function novedades() {
    const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/novedades/'
    const local = 'http://localhost/admin/api/novedades/'
    const [data, setData] = useState ([]);

    const fetchData = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
    };

    useEffect(()=>{
        fetchData(url)
    },[])

    const [data1, setData1] = useState ([]);
    // const url1 = 'http://localhost/admin/api/banner_section/'
    const url1 = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData1 = (url1) =>{
  fetch(url1)
  .then(response => response.json())
  .then(data => {setData1(data)
    console.log(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'NOVEDADES')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData1(url1)},[])

  return (
    <div>
        <div style={{ backgroundImage: imagen }} className='portada background-novedades'>
            <h2>NOVEDADES</h2>
        </div>

        <section className='con-not'>
        {/* NOTICIA 1 */}
        {data.map((item, index)=>
            <article key={index} className='nov'>
                <NavLink to={`/noticia?id=${item.id}`}>
                <div className='contenedor-sec-novedades'>
                  <div>
                    <img className='' src={'https://hospitalsiriolibanes.ar/comunicacion/images/'+item.imagen} alt="banner"/>
                  </div>
                  <div>
                      <h2>{item.titulo}</h2>
                      <h3 className='fech-nov'><IoIosTime className='icon-fe-not'/>{item.create_at}</h3>
                      <p className='p-text-nov' dangerouslySetInnerHTML={{__html: item.short_description}}></p>
                      <p className='vermas'><span>Ver más</span></p>
                  </div>
                </div>
                </NavLink>
            </article>
            )}
        </section>
        <BingMap/>
    </div>
  )
}

export default novedades