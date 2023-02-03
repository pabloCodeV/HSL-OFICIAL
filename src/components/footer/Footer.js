import React from 'react';
import './footer.css';
import { NavLink  } from "react-router-dom";
import itae from '../images/itaes.png';
import fiscal from '../images/DATAWEB.jpg';

function Footer() {
  return (
    <footer className='footer-container'>
        <div className='space-footer'>
            <img className="fiscal" src={fiscal} />
        </div>
        <div className='space-footer'>
            <ul>
                <li><h3>EL HOSPITAL</h3></li>
                <NavLink to='/historiaHSL' className="active li " >Historia</NavLink>
                <NavLink to='/historiaHSL' className="active li">Autoridades</NavLink>
            </ul>
        </div>

        <div className='space-footer'>
            <ul>
                <li><h3>ESPECIALIDADES</h3></li>
                <NavLink to='/cuerpoMedico' className="li active">Cuerpo médico</NavLink>
                <NavLink to='/servicios-medicos' className="li active">Servicios médicos</NavLink>
                <NavLink to='/diagnostico-por-imagenes' className="li active">Diagnóstico por imágenes</NavLink>
                <NavLink to='/laboratorio' className="li active">Servicio de laboratorio</NavLink>
                <NavLink to='/telemedicina' className="li active">Telemedicina</NavLink>
            </ul>
        </div>

        <div className='space-footer'>
            <ul>
                <li><h3>OBRAS SOCIALES Y PREPAGAS</h3></li>
                <NavLink to='/coberturas' className="li active">Prepagas</NavLink>
                <NavLink to='/coberturas' className="li active">Obras sociales</NavLink>

            </ul>
        </div>

        <div className='space-footer'>
            <ul>
                <li><h3>DOCENCIA E INVESTIGACION</h3></li>
                <NavLink to='/residencia' className="li active">Residencias</NavLink>
                <NavLink to='/tecnicatura-en-enfermeria' className="li active">Escuela de enfermería</NavLink>
                <NavLink  to='/inscripcion-enfermeria' className="li active" >Inscripción</NavLink>
            </ul>
        </div>

        <div className='space-footer'>
            <ul>
                <li><h3>CONTACTO</h3></li> 
                <NavLink  to='/contacto' className="li active" >Contacto</NavLink>
                <li className="itaeli ">Bajo el asesoramiento de:</li>
                <img className="itae" src={itae} />
            </ul>
        </div>

    </footer>
  )
}

export default Footer