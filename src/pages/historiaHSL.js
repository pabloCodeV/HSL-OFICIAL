import React, {useEffect, useState} from 'react';
import fotohospital from "./images-page/fotohospital.jpg"
import fotohospital2 from "./images-page/fotohospital2.jpg"
import './pages-css/home.css';
import { AiOutlineRight } from 'react-icons/ai';
import BingMap from '../components/maps/BingMap';

var imagen;

function historiaHSL() {
    const [data, setData] = useState ([]);

    const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
    // const url = 'http://localhost/admin/api/banner_section/'

    const fetchData = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {setData(data)
      Object.keys(data).forEach(key=>{
        if(data[key].section === 'EL HOSPITAL'){
          imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
        }
      })
    })
    .catch(error => console.log(error))
    };

    useEffect(()=>{
        fetchData(url)
    },[])

  return (
    <div>
       <div style={{ backgroundImage: imagen }} className='portada'>
         <h2>EL HOSPITAL</h2>
        </div>
        
      <div>
      <section className='section-historia'>
      <h2 className='fixh2content temporal'>Historia</h2>
      <div>
          <div className='parrafo'> 
                {/* <p >{JSON.stringify(historiaP)}</p> */}
            <p>
              En el año 1916, el Reverendo Padre Elías Maria Gorayeb, Superior del Colegio San Marón, considerando el aumento de inmigrantes de Medio Oriente que llegaban al país, 
              resolvió invitar a un grupo de Damas de Caridad para que se ocuparan de la asistencia de los recién llegados.
              <br/>
              Lo que empezó como el resto de los Hospitales de Comunidad,
              con la idea asistencial especialmente direccionada para atender la inmigración, terminó siendo una institución centenaria que brinda salud a todos los habitantes de la Argentina.
              <br/>
              Hoy contamos con doscientas camas de internación en sus distintos niveles, modernos quirófanos, Terapia Intensiva, Unidad Coronaria, Servicio de Hemodinamia, Imágenes y Laboratorio de última generación, 
              además de nuestros consultorios externos en los cuales se atienden miles de consultas mensuales de las distintas especialidades.
              <br/>
              La sofisticación de nuestros servicios nos pone en lugares de privilegio en varias de las especialidades médicas, contando con equipos de renombre nacional e internacional.        
              <br/>
              Contamos además con nuestra propia Escuela de Enfermería, donde anualmente se reciben numerosas profesionales especialmente requeridas en el ámbito de la salud por su excelente formación, como así también con sistema de Residencias Médicas, 
              para la formación de post grado en las distintas ramas de la medicina.          
              <br/>
              Siguiendo nuestro objetivo ético, buscamos en la ciencia y la educación contribuir a la salud en todos sus ámbitos.
            </p>
          </div>
          <div>
            <img src={fotohospital}/>
            <img src={fotohospital2}/>
          </div>
        </div>
      </section>

      <section className='section-autoridades'>
      <h2 className='fixh2content temporal'>Autoridades</h2>
      <div className='equipo-historia'>
          <div  className='equipo-sector'>
             <h2 className='fixh2content'>COMISIÓN DIRECTIVA</h2>
              <div>
                <h3>Presidente</h3>
                <p><AiOutlineRight className='icono-equipo' />Dr. Ricardo Fabián Simes</p>
              </div>
              <div>
                <h3>Vice-Presidente Primero</h3>
                <p><AiOutlineRight className='icono-equipo'/>Sra. Zarife Rosenda Allub</p>
              </div>
              <div>
                <h3>Secretario</h3>
                <p><AiOutlineRight className='icono-equipo'/>Dr. Victor Antonio Sede</p>
              </div>
              <div>
                <h3>Vocales titulares</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Sra. Salma Elgassi</p>
                <p> <AiOutlineRight className='icono-equipo'/>Sra. Patricia Viviana Majdalani</p>
              </div>
              <div>
                <h3>Vocales suplentes</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Sra. Ana María Sarquis</p>
                <p> <AiOutlineRight className='icono-equipo'/>Lic. Martha Elena Zarif</p>
              </div>
              <div>
                <h3>Revisor de Cuentas titular</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Crd. Eduardo Oscar Abdo</p>
              </div>
              <div>
                <h3>Tesorero</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Sr. Angel Farjat</p>
              </div>
          </div>

          <div className='equipo-sector'>
            <h2 className='fixh2content'>DIRECCIÓN MÉDICA</h2>
              <div>
                <h3>Director Médico</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Dr. Gustavo Velasco Cerviño</p>
              </div>
              <div>
                <h3>Sub Directora Médica</h3>
                <p> <AiOutlineRight className='icono-equipo'/>Dra. Liliana Aldao</p>
              </div>
              <div>
                <h3>Jefa de Departamento de Medicina Interna</h3>
                <p><AiOutlineRight className='icono-equipo'/>Dra. Isabel Victoria del Carmen Cavani</p>
              </div>
          </div>

          <div className='equipo-sector'>
            <h2 className='fixh2content'>GERENCIA</h2>
            <div>
                <h3>Gerencia Comercial</h3>
                <p><AiOutlineRight className='icono-equipo'/>Dr. Claudio R. Gallo</p>
              </div>
              <div>
                <h3>Gerencia Administrativa</h3>
                <p><AiOutlineRight className='icono-equipo'/>Cra. Elba Mabel Hermida</p>
              </div>
              <div>
                <h3>Gerencia de Recursos Humanos</h3>
                <p><AiOutlineRight className='icono-equipo'/>Dra. Susana Vázquez Otero</p>
              </div>
              <div>
                <h3>Gerencia Financiera</h3>
                <p><AiOutlineRight className='icono-equipo'/>Sra. Luisa Pallotti</p>
              </div>
              <div>
                <h3>Gerencia de Arquitectura e infraestructura</h3>
                <p><AiOutlineRight className='icono-equipo'/>Arq. Gerardo Bertuzzi</p>
              </div>
          </div>

          <div className='equipo-sector'>
            <h2 className='fixh2content'>AUDITORES MÉDICOS</h2>
              <ul>
                <li><AiOutlineRight className='icono-equipo'/>Dr. Walter Costaguta</li>
                <li><AiOutlineRight className='icono-equipo'/>Dra. Ana Bartoli</li>
              </ul>
          </div>
        </div>
      </section>
    </div>
    <BingMap/>
    </div>
  )
}

export default historiaHSL