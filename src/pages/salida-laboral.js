import React, {useEffect, useState} from 'react';
import './pages-css/home.css';
import noticias from './images-page/noticias.jpg';
import salida_laboral from './images-page/salida-laboral.jpg';
import dubai from './images-page/dubai.jpg';
import requisitos from './images-page/Requisitos-.jpg';
import BingMap from '../components/maps/BingMap';
import { salidaLaboraltxt } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import { NavLink  } from "react-router-dom";
var imagen;

function salidaLaboral() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    console.log(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'SALIDA LABORAL')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])

  return (
  <div>
      <div style={{ backgroundImage: imagen }} className='portada background-salida-laboral'>
        <h2>SALIDA LABORAL</h2>
      </div>
     
      <section className=' sectsalida bgnone'>
                <div>
                    <div>
                        <h2>Trabajar en el extranjero</h2>
                    </div>
                    <div>
                            {salidaLaboraltxt.map((value)=>
                        <p className='textEspacio'>{value}</p>
                        )}
                        <p className='textEspacio'>Consulta en nuestra escuela sobre el programa de capacitación de la carrera de enfermería, orientada a trabajar en medio oriente.</p>
                        <ul>
                          <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Potencia tu carrera</li>
                          <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Excelentes condiciones laborales</li>
                          <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Obtene experiencia en las mas modernas instituciones de salud</li>
                          <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Muy buena remuneracion economica</li>
                        </ul>
                    </div>
                </div>

            </section>

            <section className='sectsalida'>
                <div>
                    <div>
                        <h2>Requisitos para aplicar a un contrato en Dubai</h2>
                    </div>
                    <div>
                    <ul>
                      <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Haber concluido la tecnicatura en enfermería y contar con la documentación que los certifique.</li>
                      <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Idioma árabe.</li>
                      <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Idioma inglés fluido.</li>
                      <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Conocimientos de cultura general de medio oriente.</li>
                      <li className='lisalida'><AiOutlineRight className='icono-equipo'/>Ser menor de 40 años.</li>
                    </ul>
                    </div>
                </div>
                <div className='img-salida' >
                    <img src={dubai}/>
                </div>
            </section>

            <div className='div-info'>
            <div className='info'>
                <img className='info-inscripcion' src={requisitos} alt="banner"/>
                <h3 className='posicion-info-inscripcion'>Requisitos</h3>
                <p>Consultá los requerimientos y descarga los formularios para empezar ya tu carrera.</p>
                <div className='vermas-info-btn'> <NavLink to='/inscripcion-enfermeria' >VER MÁS</NavLink></div>
              </div>
              <div className='info'>
                <img className='info-inscripcion' src={salida_laboral} alt="banner"/>
                <h3>Salida Laboral</h3>
                <p>Consultá los requerimientos y descarga los formularios para empezar ya tu carrera.</p>
                <div className='vermas-info-btn'> <NavLink to='/salida-laboral' >VER MÁS</NavLink></div>
              </div>
              <div className='info'>
                <img className='info-inscripcion' src={noticias} alt="banner"/>
                <h3>Noticias</h3>
                <p>En Argentina se necesitan más enfermeros/a</p>
                <div className='vermas-info-btn'> <NavLink to='/salida-laboral' >VER MÁS</NavLink></div>
              </div>
          </div>

      
      <BingMap/>
    </div>
  )
}

export default salidaLaboral