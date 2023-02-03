import React, {useEffect, useState} from 'react';
import BingMap from '../components/maps/BingMap';
import { carreras, inscripcion_parrafo, documentacion, } from '../historiaP';
import { AiOutlineRight } from 'react-icons/ai';
var imagen;

function residencia() {
  const [data, setData] = useState ([]);
//   const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    console.log(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'RESIDENCIA')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])
  return (
    <>
        <div style={{ backgroundImage: imagen }} className='portada background-residencia'>
            <h2>RESIDENCIA</h2>
        </div>

    <section className='residencia'>
        <h2>Carreras universitarias de especialización</h2>
            <ul className='carreras-sep'>
            {carreras.map((value)=> 
                <li><AiOutlineRight className='icono-equipo'/>{value}</li>
            )}
            </ul>
        <p className='peticionesParrafo'>Directora de docencia, dra isabel cavani</p>
    </section>
    
    <section className='residencia'>
        <h2>Inscripción</h2>
        {inscripcion_parrafo.map((value)=>
            <p className='peticionesParrafo'>{value}</p>
        )}
        <p className='peticionesParrafo'>Director departamento de docencia e investigación: DR. LUIS ALBERTO. COSTA</p>
        <div className='btn-inscrip'><a href='https://inscripcion.fmed.uba.ar/cgi-bin/residencias/infoBasicas.py#tab3' >VER MÁS</a></div>
    </section>
    
    <section className='residencia'>
        <h2>Requisitos</h2>
        <h3 className='peticiones'>Condiciones generales para aspirantes a las Residencias Básicas</h3>
        <h3 className='peticiones'>Documentación necesaria para rendir el examen</h3>
        {documentacion.map((value)=>
            <p className='peticionesParrafo'>{value}</p>
        )}
        <h3 className='peticiones'>Para acceder a la ENTREVISTA deberá presentar la siguiente documentación (de acuerdo al cronograma establecido)</h3>
        <p className='peticionesParrafo'>
            <ul>
                <li>Constancia de solicitud de Turno vía internet para la entrevista</li>
                <li>DNI válido y vigente (original y fotocopia - Extranjeros DNI Argentino)</li>
                <li>Título Universitario Original y fotocopia simple</li>
                <li>Certificado del promedio general de la carrera que incluya aplazos, expedido por la Universidad.<br/></li>
                <li> Matrícula Profesional y fotocopia simple o turno asignado.<br/></li>
                <li> Actividad docente: presentar el Acto Resolutivo/Dispositivo, de la Unidad Académica correspondiente, donde conste fecha de inicio como Auxiliar docente en cualquiera de las categorías previstas (Jefe de Trabajos Prácticos, Ayudante de 1ra y Ayudante 2da) y sustanciado a través del concurso correspondiente, de acuerdo con lo establecido por las resoluciones vigentes.<br/></li>
                <li>Investigación: documentar haber adjudicado Becas de Estímulo a las Vocaciones Científicas para estudiantes universitarios de grado, en el marco de Proyectos de Investigación acreditados que cuenten con financiamiento y se desarrollen en el ámbito de las Instituciones Universitarias. Esta certificación será a través del Acto Resolutivo/Dispositivo de la Universidad correspondiente o en su defecto, la Secretaría de Ciencia y Técnica o su equivalente de cada Unidad académica será la encargada de certificar la documentación a presentar.<br/></li>
                <li>Extensión universitaria: La documentación a presentar para su acreditación, deberá contar con el aval de la máxima Autoridad de la Unidad Académica que lo expida. Esta certificación será a través del Acto Resolutivo/Dispositivo de la Universidad correspondiente o en su defecto, la Secretaría de Extensión Universitaria o su equivalente de cada Unidad Académica será la encargada de certificar la documentación a presentar.<br/></li>
                <li>Currículum Vitae abreviado 2 copias.</li>
            </ul>
        </p>
        <h3 className='peticiones'> Para la ADJUDICACIÓN deberá exhibir</h3>
        <p className='peticionesParrafo'>DNI válido y vigente (original y fotocopia - Extranjeros DNI Argentino)
            Matrícula Profesional habilitante expedida por el Ministerio de Salud de la República Argentina
        </p>
    </section>

        <BingMap/>
    </>
  )
}

export default residencia