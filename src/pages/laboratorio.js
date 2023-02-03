import React, {useEffect, useState} from 'react';
import maquinaLab3 from './images-page/maquina-lab3.jpg';
import './pages-css/home.css';
import { AiOutlineRight } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { lab } from '../historiaP'
import BingMap from '../components/maps/BingMap';
import banner_obra from './images-page/banner_obra.jpg';
import { NavLink  } from "react-router-dom";
var imagen;

function laboratorio() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'SERVICIO DE LABORATORIO')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])

  return (
    <>
    <div style={{ backgroundImage: imagen }} className='portada background-servicio-de-laboratorio'>
        <h2>SERVICIO DE LABORATORIO</h2>
    </div>

      <section className='section-laboratorio'>
        <div>
            <div>
              <h2>Laboratorio de análisis</h2>
              <p>
              Nuestro laboratorio, desarrollado en conjunto con CEMIC, cuenta con personal técnico altamente capacitado y con rigurosos estándares de calidad.
              <br/>
              Nuestros pacientes acceden así a un servicio destacado por la seguridad y la confiabilidad de los resultados obtenidos y la atención profesional.
              </p>
            </div> 
            <div >
              <h2>¿Qué debo consultar antes de solicitar un turno?</h2>
              <ul>
                    {lab.map((value)=>
                      <li><AiOutlineRight className='icono-equipo'/>{value}</li>
                    )}
                  </ul>
                  <p>
                  Para estudios que <b>NO</b> requieren ayuno y recepción de muestras: 
                  Presentarse de <b>lunes a viernes de 8 a 17 hs</b> en <b>los Consultorios externos</b>
                  del Hospital Sirio Libanés, Fernández de Enciso 4616, Villa Devoto CABA.
                  </p>
            </div>      
        </div>
        <div>
          <img  src={maquinaLab3} alt="banner"/>
        </div>
      </section>


      <section className='section-laboratorio3'>
      <div>
      <h2><BiCalendar className='turno-icon'/>TURNOS</h2>
      <div>
        <h3>Horario de atención</h3>
          <p>lunes a viernes
          de 8 a 17 hs. Sábados de 8 a 11hs ( exclusivamente para plan de salud).</p>
          <h3>Estamos ubicados en</h3>
          <p> Av. Fernández de Enciso 4616, Villa Devoto CABA.</p>
          <h3>Teléfono</h3>
          <p>4502-3344 / 4503-6363.</p>
          <h3>Importante</h3>
          <p>
          Es importante que previa a su atención se comunique con los consultorios externos del Hospital Sirio Libanés,
          para corroborar que el estudio que debe realizar está disponible y en qué condiciones debe llevar los materiales biológicos 
          ( orina, saliva, materia fecal, etc. ).
          </p>
      </div>
    </div>
    
        <div>
              <h2>Qué estudios podés realizarte en nuestro Hospital?</h2>
              <div className='flex-laboratorio3'>
                <div>
                  <div>
                      <h3>Hematología</h3>
                      <ul>
                          <li><AiOutlineRight className='icono-equipo'/>Hemograma Completo</li>
                          <li><AiOutlineRight className='icono-equipo'/>Plaquetas</li>
                          <li><AiOutlineRight className='icono-equipo'/>Eritrosedimentación</li>
                          <li><AiOutlineRight className='icono-equipo'/>Reticulocitos</li>
                        </ul> 
                  </div> 
                  <div>
                      <h3>Hemostasia</h3>
                      <ul>
                          <li><AiOutlineRight className='icono-equipo'/>TP</li>
                          <li><AiOutlineRight className='icono-equipo'/>KPTT</li>
                          <li><AiOutlineRight className='icono-equipo'/>Dimero D</li>
                        </ul> 
                  </div>
                  <div>
                      <h3>Endocrinología</h3>
                      <ul>
                          <li><AiOutlineRight className='icono-equipo'/>Troponina T</li>
                          <li><AiOutlineRight className='icono-equipo'/>ProBNP</li>
                          <li><AiOutlineRight className='icono-equipo'/>BHGG cualitativa</li>
                        </ul> 
                  </div>
                  <div>
                    <h3>Virología</h3>
                    <ul>
                      <li><AiOutlineRight className='icono-equipo'/>HIV test rápido</li>
                      <li><AiOutlineRight className='icono-equipo'/>COVID test rápido</li>
                    </ul>
                  </div>
                </div>

                <div className='list-style'>
                  <div>
                    <h3>Química</h3>
                    <ul>
                      <li><AiOutlineRight className='icono-equipo'/>Creatinina</li>
                      <li><AiOutlineRight className='icono-equipo'/>Urea</li>
                      <li><AiOutlineRight className='icono-equipo'/>Glucemia</li>
                      <li><AiOutlineRight className='icono-equipo'/>EAB</li>
                      <li><AiOutlineRight className='icono-equipo'/>Cooximetría</li>
                      <li><AiOutlineRight className='icono-equipo'/>Ionograma</li>
                      <li><AiOutlineRight className='icono-equipo'/>Calcio</li>
                      <li><AiOutlineRight className='icono-equipo'/>Calcio Iónico</li>
                      <li><AiOutlineRight className='icono-equipo'/>Fósforo</li>
                      <li><AiOutlineRight className='icono-equipo'/>Magnesio</li>
                      <li><AiOutlineRight className='icono-equipo'/>Hepatograma</li>
                      <li><AiOutlineRight className='icono-equipo'/>CK</li>
                      <li><AiOutlineRight className='icono-equipo'/>CKmb</li>
                      <li><AiOutlineRight className='icono-equipo'/>Amilasa</li>
                      <li><AiOutlineRight className='icono-equipo'/>LDL</li>
                      <li><AiOutlineRight className='icono-equipo'/>VLDL</li>
                      <li><AiOutlineRight className='icono-equipo'/>HDL</li>
                      <li><AiOutlineRight className='icono-equipo'/>Triglicéridos</li>
                      <li><AiOutlineRight className='icono-equipo'/>LDH</li>
                      <li><AiOutlineRight className='icono-equipo'/>PCR</li>
                    </ul>
                  </div>
                </div>         
            </div>
          </div>
      </section>     

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
    <BingMap/>
    </>
  )
}

export default laboratorio