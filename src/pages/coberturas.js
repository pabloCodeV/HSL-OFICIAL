import React, {useEffect, useState} from 'react';
import './pages-css/home.css';
import { obrasSociales, art } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import BingMap from '../components/maps/BingMap';
var imagen;

function coberturas() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'COBERTURA')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])

  return (
    <>
         <div style={{ backgroundImage: imagen }} className='portada background-coberturas'>
            <h2>COBERTURAS</h2>
        </div>
        
        <div className='background-cobertura'>
        <section className='section-general'>
          <h2 className='fixh2content temporal'>Obras sociales y prepagas</h2>
            <div>
              <ul className='grid-cover'>
                {obrasSociales.map((value)=>
                  <li className='li-cober'><AiOutlineRight className='icono-equipo'/>{value}</li>
                  )}
              </ul>
            </div>
       </section>

        </div>
        <div className='container-contador fix'>
                <div className='container-tercercubo'>
                <h2><b>Turnos Obras sociales Sociales, Prepagas y A.R.T</b></h2>
                <p className='tel'>0810-888-0062</p>
                <p>De 8 a 19 hs</p>
                </div>
                <div className='container-tercercubo'>
                <h2><b>Turnos PAMI</b></h2>
                <p className='tel'>0810-888-0063</p>
                <p>De 8 a 15 hs</p>
                </div>
                <div className='container-tercercubo'>
                <h2><b>Turnos de Imagenes</b> (PAMI)</h2>
                <p className='tel'>011 2277-7727</p>
                <p>Solo por Whatsapp de 8 a 15 hs</p>
                </div>
            </div>
        <BingMap/>
    </>
  )
}

export default coberturas