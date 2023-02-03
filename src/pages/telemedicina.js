import React, {useEffect, useState} from 'react';
import { MdPhonelink }  from'react-icons/md';
import { HiOutlineMail }  from'react-icons/hi';
import { MdOutlineEditCalendar }  from'react-icons/md';
import { especialidadesTelemedicina } from '../historiaP'
import { NavLink  } from "react-router-dom";
import './pages-css/home.css';
import BingMap from '../components/maps/BingMap';
var imagen;

function telemedicina() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'TELEMEDICINA')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])
  return (
  <>
    <div style={{ backgroundImage: imagen }} className='portada background-telemedicina'>
      {/* <img className='banner-sector fiximg' src={teleImg} alt="banner"/> */}
    </div>
    
    <div className='elements telemedicina-content'>
      <section>
       <h2 className='h2-content2 h2-content'>Reserva tu turno de forma <span>Rápida, Fácil y Segura</span> </h2>
        <div class="btn-turno-telemedicina">
         <NavLink to="/turnos">Click aquí!</NavLink>
        </div>
      </section>

      <section className='access-content-telemedicina'>
        <div className='section-access-content-telemedicina'>
          <div className='icon-access-content'><MdPhonelink /></div>
          <div>
            <p>Solicita tu turno haciendo <NavLink to="/seleccion-de-pais">Click aquí!</NavLink> para reservar tu consulta.</p> 
          </div>
        </div>
        <div className='section-access-content-telemedicina'>
        <div className='icon-access-content'><HiOutlineMail /></div>
          <div>
            <p>Te enviaremos un correo electrónico con un link para ingresar en la plataforma.</p> 
          </div>
        </div>
        <div className='section-access-content-telemedicina'>
          <div className='icon-access-content'><MdOutlineEditCalendar /></div>
          <div>
            <p>Ingresas en una sala de espera virtual y en instantes te atenderá un profesional.</p> 
          </div>
        </div>   
      </section> 
       <section className='section-espec'>
          <h2 className='h2-content2 h2-content '><span className='espcLN'>ESPECIALIDADES</span></h2>
            <div className='section-grid'>
              <ul className='grid-container'>
                {especialidadesTelemedicina.map((value)=>
                  <li className='li-espc'>{value}</li>
                  )}
              </ul>
            </div>
       </section>
    </div>
    <BingMap/>
  </>
  )
}

export default telemedicina