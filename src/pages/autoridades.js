import React, {useEffect, useState} from 'react';
import './pages-css/autoridades.css';
import BingMap from '../components/maps/BingMap';
import dubai from './images-page/dubai.jpg';
var imagen;

function inscripcion_enfermeria() {
  const [data, setData] = useState ([]);
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'CUERPO MEDICO')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])


  const [data1, setData1] = useState ([]);
  const url1 = 'https://hospitalsiriolibanes.ar/comunicacion/api/autoridades/'
  const fetchData1 = (url1) =>{
  fetch(url1)
  .then(response => response.json())
  .then(data => {setData1(data)
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData1(url1)},[])


  return (
    <div>
      <div style={{ backgroundImage: imagen }} className='portada bacaut'>
         <h2>AUTORIDADES</h2>
        </div>

        <section className='aud-sector'>
          <div>
            <h2 className='taut'>Comisión directiva</h2>
          </div>
          <div>
            <ul className='ul-wrapped'>
            {data1.map((item, index)=>
            {if(item.sector == 'COMISIÓN DIRECTIVA'){
              return (
              <li key={index}>
                <div>
                  {/* <img src={dubai}/> */}
                </div>
                <div className='w'>
                  <h3 className='naut'>{item.puesto}</h3>
                  <h4>{item.nombre}</h4>
                </div>
              </li>
                )}
              }
            )}
            </ul>
          </div>
        </section>

        <section className='aud-sector'>
          <div>
            <h2 className='taut'>Dirección médica</h2>
          </div>
          <div>
            <ul className='ul-wrapped'>
            {data1.map((item, index)=>
            {if(item.sector == 'DIRECCIÓN MÉDICA'){
              return (
              <li key={index}>
                <div>
                  {/* <img src={dubai}/> */}
                </div>
                <div className='w'>
                  <h3 className='naut'>{item.puesto}</h3>
                  <h4>{item.nombre}</h4>
                </div>
              </li>
                )}
              }
            )}  
            </ul>
          </div>
        </section>

        <section className='aud-sector'>
          <div>
            <h2 className='taut'>Gerencia</h2>
          </div>
          <div>
            <ul className='ul-wrapped'>
            {data1.map((item, index)=>
            {if(item.sector == 'GERENCIA'){
              return (
              <li key={index}>
                <div>
                  {/* <img src={dubai}/> */}
                </div>
                <div className='w'>
                  <h3 className='naut'>{item.puesto}</h3>
                  <h4>{item.nombre}</h4>
                </div>
              </li>
                )}
              }
            )}
            </ul>
          </div>
        </section>

        <section className='aud-sector'>
          <div>
            <h2 className='taut'>Auditores médicos</h2>
          </div>
          <div>
            <ul className='ul-wrapped'>
            {data1.map((item, index)=>
            {if(item.sector == 'AUDITORES MÉDICOS'){
              return (
              <li key={index}>
                <div>
                  {/* <img src={dubai}/> */}
                </div>
                <div className='w'>
                  <h3 className='naut'>{item.puesto}</h3>
                  <h4>{item.nombre}</h4>
                </div>
              </li>
                )}
              }
            )}
            </ul>
          </div>
        </section>

    <BingMap/>
    </div>
  )
}

export default inscripcion_enfermeria