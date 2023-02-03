import React, {useEffect, useState} from 'react';
import './pages-css/home.css';
import { dpi, estudios } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import maquinaImagen from './images-page/macImg.jpg';
import secImg from './images-page/secImg.jpg';
import diagimg from './images-page/banner_diagnostico_imagen.jpg';
import BingMap from '../components/maps/BingMap';

var imagen;

function DiagnosticoPorImagenes() {
    const [data, setData] = useState ([]);

  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
//   const url = 'http://localhost/admin/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
        if(data[key].section === 'DIAGNOSTICO POR IMAGENES'){
          imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
        }
      })
    })
  .catch(error => console.log(error))
  };

  useEffect(()=>{
      fetchData(url)
  },[])

    const margin={"margin-bottom":30}
  return (
    <>
    <div style={{ backgroundImage: imagen }} className=' portada background-diagnostico-por-imagenes'>
        {/* <img className='bannr-sector' src={diagimg} alt="banner"/> */}
        <h2>DIAGNÓSTICO POR IMÁGENES</h2>
    </div>

    <section className='section-imagenes'>
            <div className='marginP'>
                <p>En nuestro Hospital contamos con Tecnología de punta y Profesionales altamente capacitados 
                    para poder lograr una alta calidad y precisión del diagnóstico de nuestros pacientes con el fin de: </p>
                    <ul>
                {dpi.map((value)=>
                        <li><AiOutlineRight className='icono-equipo' />{value}</li>
                        )}
                    </ul>
            </div>
            <div className=''>
                <img src={maquinaImagen} alt="img" />
            </div>
    </section>

    <section className='section-imagenes-servicio'>
        <div className=''>
            <img src={secImg} alt="img" />
        </div>
        <div className='servicio-diagnostico'>
            <div >
                <h2>Estudios</h2>
                <ul>
                {estudios.map((value)=>
                    <li><AiOutlineRight className='icono-equipo' />{value}</li>
                )}
                </ul>
            </div>
            <div>
            <h2>Equipamiento</h2>
                <ul>
                {estudios.map((value)=>
                    <li><AiOutlineRight className='icono-equipo' />{value}</li>
                )}
                </ul>
            </div>
        </div>
    </section>
    <BingMap/>
    </>
  )
}

export default DiagnosticoPorImagenes