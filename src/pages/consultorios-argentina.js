import React from 'react'
import BingMap from '../components/maps/BingMap';
import background from './images-page/background-circle-white.png'
import logo from './images-page/logo-black.svg'
import { NavLink  } from "react-router-dom";

function consultoriosarg() {
  return (
    <div>

      <div className='container-sec'>
        <div className='marginSl'>
          <img  className='logoback' src={logo}/>
          <h2>Portal de Pacientes</h2>
          <img  className='bacgroundimg' src={background}/>
        </div>

        <div className='Tbox'>
            <h2 className='Tubi-h2'>CONSULTORIOS ARGENTINA</h2>
            <p>Seleccione Un Consultorio</p>
            <div className=''>
                <div className='Tbutton'><NavLink to="/consultorio-externo-alto-palermo" >Alto Palermo</NavLink></div>
                <div className='Tbutton'><NavLink to="/consultorio-externo-rio-grande" >Rio Grande</NavLink></div>
                <div className='Tbutton'><NavLink to="/consultorio-externo-vdevoto" >V.Devoto</NavLink></div>
                {/* <div className='Tbutton'><a href="https://hospitalsiriolibanes.ar/" >TIERRA DEL FUEGO / RIO GRANDE</a></div> */}
            </div>
        </div>
      </div>


        <BingMap/>
    </div>
  )
}

export default consultoriosarg