import React from 'react'
import { NavLink  } from "react-router-dom";
import BingMap from '../components/maps/BingMap';
import background from './images-page/background-circle-white.png'
import logo from './images-page/logo-black.svg'

function turnos() {
  return (
    <div>

    <div className='container-sec'>
      <div className='marginSl'>
        <img  className='logoback' src={logo}/>
        <h2>Portal de Pacientes</h2>
        <img  className='bacgroundimg' src={background}/>
      </div>

        <div className='Tbox'>
            <h2 className='Tubi-h2'>TURNOS ONLINE</h2>
            <p>Seleccione Pais</p>
            <div className=''>
                <div className='Tbutton'><NavLink to="/seleccion-de-ciudad" >Argentina</NavLink></div>
                <div className='Tbutton'><a  href="https://www.hospitalsiriolibanes.com/" >Paraguay</a></div>
                {/* <div className='Tbutton'><a href="https://hospitalsiriolibanes.ar/" >TIERRA DEL FUEGO / RIO GRANDE</a></div> */}
            </div>
        </div>
      </div>


        <BingMap/>
    </div>
  )
}

export default turnos