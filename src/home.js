import React from 'react'
import Slider from './components/slider/Slider';
import Card from './components/card/Card';
import btn_telemedicina from './pages/images-page/btn_telemedicina.jpg';
import btn_especialidades from './pages/images-page/btn_especialidades.jpg';
import btn_imagenes from './pages/images-page/btn_imagenes.jpg';
import btn_residencia from './pages/images-page/btn_residencia.jpg';
import btn_novedades from './pages/images-page/btn_novedades.jpg';
import btn_enfermeria from './pages/images-page/btn_enfermeria.jpg';
import banner_obra from './pages/images-page/banner_obra.jpg';

import telemedicina from './components/images/telemedicina.png';
import hospital from './components/images/hospital.png';
import imagenes from './components/images/imagenes.png';
import laboratorio from './components/images/laboratorio.png';
import './pages/pages-css/home.css';
import BingMap from './components/maps/BingMap';
import { NavLink  } from "react-router-dom";


function home() {
  return (
    <div className='container-home'>
     
      <Slider /> {/* slider de imagenes */}

{/* CONTENEDOR PRINCIPAL DE ACCESOS DIRECTOS */} 
      <div className='container-access'>
        <div className='container-segundocubo'>
            <NavLink to='/consultorios' >
                <p className='comunity'><img src={hospital}/></p>
                <h2>CONSULTORIOS</h2>
            </NavLink> 
          </div> 
          <div className='container-segundocubo'>
            <NavLink to='/seleccion-de-pais' >
              <p className='comunity'><img src={telemedicina}/></p>
              <h2>TURNOS</h2>
            </NavLink>
          </div>
          <div className='container-segundocubo'>
            <NavLink to='/laboratorio' >
              <p className='comunity'><img src={laboratorio}/></p>
              <h2>LABORATORIO</h2>
            </NavLink>
          </div>
          <div className='container-segundocubo'>
            <NavLink to='/salida-laboral' >
              <p className='comunity'><img src={imagenes}/></p>
              <h2>DIAGNÓSTICO POR IMAGINES</h2>
            </NavLink>  
          </div>
      </div>

{/* CONTENEDOR ACCESOS DIRECTO CON IMAGENES */}
<h2 className='introduction-Home'>La salud <span>Muy cerca tuyo</span></h2>
<div className='container-access access'>
        <div className='container-primercubo'>
            <NavLink to='/telemedicina' >
            <img className="btn_img" src={btn_telemedicina} />
                <h2>Telemedicina</h2>
            </NavLink> 
          </div> 
          <div className='container-primercubo'>
            <NavLink to='/servicios-medicos' >
            <img className="btn_img" src={btn_especialidades} />
              <h2>Especialidades Médicas</h2>
            </NavLink>
          </div>
          <div className='container-primercubo'>
            <NavLink to='/diagnostico-por-imagenes' >
            <img className="btn_img" src={btn_imagenes} />
              <h2>Imágenes</h2>
            </NavLink>
          </div>
          <div className='container-primercubo '>
            <h2 className='h2-access'>ACCESO RÁPIDO</h2>
            <div className='cont-access'>
              <div className='fast-access'><NavLink to='/diagnostico-por-imagenes'>Diagnóstico por imágenes</NavLink></div>
              <div className='general-access'></div>
              <div className='fast-access'><NavLink to='/laboratorio'>Laboratorio</NavLink></div>
              <div className='general-access'></div>
              <div className='fast-access'><NavLink to='/tecnicatura-en-enfermeria'>Escuela de Enfermería</NavLink></div>
            </div>
          </div>
      </div>

{/* BANNER */}
<div className='banner_obra'>
  <img src={banner_obra}/>
  <h2 className='text-banner'><span>Consultá por tu cobertura</span>
    <br/>
    Obras sociales y Prepagas</h2>
  <div className='btn_obras'>
    <NavLink to='/coberturas'>Click aquí</NavLink>
  </div>
</div>

{/* CONTADOR */}
  {/* <div className='container-contador'>
    <div className='container-recercubo'>
      <p className='accountant'>+ 10,000</p>
      <h2>Pacientes Mensuales</h2>
    </div>
    <div className='container-recercubo'>
      <p className='accountant'>+ 200</p>
      <h2>Camas de Internación</h2>
    </div>
    <div className='container-recercubo'>
      <p className='accountant'>+ 200</p>
      <h2>Especialidades Médicas</h2>
    </div>
    <div className='container-recercubo'>
      <p className='accountant'>+ 40</p>
      <h2>Consultorios Externos</h2>
    </div>
  </div> */}

          
{/* ACCESOS DIRECTOS */}

      <h2 className='nodevades-Home'><span>Capacita</span>ción y Comunidad</h2>
      {/* CONTENEDOR ACCESOS DIRECTO CON IMAGENES */}

      <div className='container-access access'>
          <div className='container-primercubo'>
              <NavLink to='/tecnicatura-en-enfermeria' >
              <img className="btn_img" src={btn_enfermeria} />
                  <h2>Escuela de Enfermería</h2>
              </NavLink> 
            </div> 
            <div className='container-primercubo'>
              <NavLink to='/residencia' >
              <img className="btn_img" src={btn_residencia} />
                <h2>Residencias</h2>
              </NavLink>
            </div>
            <div className='container-primercubo'>
              <NavLink to='/novedades' >
              <img className="btn_img" src={btn_novedades} />
                <h2>Novedades</h2>
              </NavLink>
            </div>
            <div className='container-primercubo '>
              <h2 className='h2-access'>ACCESO RÁPIDO</h2>
              <div className='cont-access'>
                <div className='fast-access'><NavLink to='/inscripcion-enfermeria'>Inscripciones</NavLink></div>
                <div className='general-access'></div>
                <div className='fast-access'><NavLink to='/novedades'>Novedades</NavLink></div>
                <div className='general-access'></div>
                <div className='fast-access'><NavLink to='/novedades'>Investigación</NavLink></div>
              </div>
          </div>
      </div>

      <h2 className='nodevades-Home'><span>Nove</span>dades</h2>
        <Card />

      <BingMap/>
    </div>
  )
}

export default home