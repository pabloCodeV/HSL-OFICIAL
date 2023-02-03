import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import banner_ciudad from './images-page/banner-ciudad.jpg';
import noticias from './images-page/noticias.jpg';
import salida_laboral from './images-page/salida-laboral.jpg';
import requisitos from './images-page/Requisitos-.jpg';
import styled from 'styled-components';
import BingMap from '../components/maps/BingMap';
import { techn,liTechn } from '../historiaP';
import { AiOutlineRight } from 'react-icons/ai';
import { NavLink  } from "react-router-dom";
var imagen;

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

const tecnicatura = () => {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'ESCUELA DE ENFERMERIA')imagen = "https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])

  const [showPrimerAnio, setShowPrimerAnio] = React.useState(false)
  const [showSegundoAnio, setShowSegundoAnio] = React.useState(false)
  const [showTercerAnio, setShowTercerAnio] = React.useState(false)

  const primerAnio = () => setShowPrimerAnio(!showPrimerAnio)
  const segundoAnio = () => setShowSegundoAnio(!showSegundoAnio)
  const tercerAnio = () => setShowTercerAnio(!showTercerAnio)
  const inputProps = useInput();
  
  return (
  <>
   <div className='banner-sector correction'>
      <img className='banner-sector' src={imagen} alt="banner"/>
    </div>

    <div className='section-general'>
      <h2 className='fixh2content temporal'>Tecnicatura en enferméria</h2>
    <br/>
      {techn.map((value)=>
            <p className='peticionesParrafo'>{value}</p>
        )}

      {liTechn.map((value)=>
            <li className='peticionesParrafo'><AiOutlineRight className='icono-equipo'/>{value}</li>
        )}

        <div className='inscripcion-tecnicatura'><NavLink to='/inscripcion-enfermeria' >QUIERO INSCRIBIRME</NavLink></div>
        <div className='descargar-programa'><a href="/" >DESCARGAR PROGRAMA</a></div>
    </div>
      <div className='barras'>
          <input type="submit" value="Primer Año" onClick={primerAnio} />
          { showPrimerAnio ? <Primer /> : null }
    </div>
    <div className='barras'>
          <input type="submit" value="Segundo Año" onClick={segundoAnio} />
          { showSegundoAnio ? <Segundo /> : null }
    </div>
    <div className='barras'>
          <input type="submit" value="Tercer Año" onClick={tercerAnio} />
          { showTercerAnio ? <Tercero /> : null }
    </div>

    <div>
      <img className='banner-sector' src={banner_ciudad} alt="banner"/>
    </div>

    <div className='div-info'>
      <div className='info'>
        <img className='info-inscripcion' src={requisitos} alt="banner"/>
        <h3 className='posicion-info-inscripcion'>Requisitos</h3>
        <p>Consultá los requerimientos y descarga los formularios para empezar ya tu carrera.</p>
        <div className='vermas-info-btn'> <NavLink to='/inscripcion-enfermeria' >VER MÁS</NavLink></div>
      </div>
      <div className='info'>
        <img className='info-inscripcion' src={salida_laboral} alt="banner"/>
        <h3>Salida Laboral</h3>
        <p>Consultá los requerimientos y descarga los formularios para empezar ya tu carrera.</p>
        <div className='vermas-info-btn'> <NavLink to='/salida-laboral' >VER MÁS</NavLink></div>
      </div>
      <div className='info'>
        <img className='info-inscripcion' src={noticias} alt="banner"/>
        <h3>Noticias</h3>
        <p>En Argentina se necesitan más enfermeros/a</p>
        <div className='vermas-info-btn'> <NavLink to='/salida-laboral' >VER MÁS</NavLink></div>
      </div>
    </div>

    <div className='inscripcion-correo'>
      <p>Suscribite a la Escuela de Enfermería del HSL. Mantenete informado de las carreras y cursos para seguir capacitándote. </p>
      <div>
        <div>
        <form>
              <input type="text" name="name" placeholder='Ingrese su Email' />
              <br/>
            <input type="submit"  className='submitbtn' value="Enviar" />
          </form>
        </div>
      </div>
    </div>
    <BingMap/>
</>
  )
}

const Primer = () => (
  <div id="results" >
    <div>
      <h2>PRIMER CUATRIMESTRE</h2>
      <Table striped bordered hover size="sm" className='styled-table'>
        <thead>
          <tr>
            <th>ASIGNATURAS</th>
            <th>DURACION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salud Publica</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Cuidados y modelos de atención de Enfermería</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Biología</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Sujeto de atención</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Introducción a la Tica</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Metodología de estudio de nivel superior</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Practica Profesional I</td>
            <td>Cuatrimestral</td>
          </tr>
        </tbody>
      </Table>
    </div>

    <div>
      <h2>SEGUNDO CUATRIMESTRE</h2>
      <Table striped bordered hover size="sm" className='styled-table'>
        <thead>
          <tr>
            <th>ASIGNATURAS</th>
            <th>DURACION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enfermería Comunitaria</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Epidemiología</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Anatomia y fisiologia</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Nutrición y dietoterapia</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Comunicación y Relaciones interpersonales</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Farmacología</td>
            <td>Cuatrimestral</td>
          </tr>
          <tr>
            <td>Practica Profesionalizante II</td>
            <td>Cuatrimestral</td>
          </tr>
        </tbody>
      </Table>
    </div>
    
  </div>
)

const Segundo = () => (
  <div id="results" >
  <div>
    <h2>PRIMER CUATRIMESTRE</h2>
    <Table striped bordered hover size="sm" className='styled-table'>
      <thead>
        <tr>
          <th>ASIGNATURAS</th>
          <th>DURACION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Condiciones y medio de ambiente de trabajo</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Informática en Salud</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Enfermería del Adulto y anciano</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Fundamentos socioculturales de la Enfermería</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Salud, Desarrollo social y economico</td>
          <td>Cuatrimestral</td>
        </tr>
      </tbody>
    </Table>
  </div>

  <div>
    <h2>SEGUNDO CUATRIMESTRE</h2>
    <Table striped bordered hover size="sm" className='styled-table'>
      <thead>
        <tr>
          <th>ASIGNATURAS</th>
          <th>DURACION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gestión de Servicios de Enfermería</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Inglés</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Proceso de atención en adulto y ancian</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Aspecto Psicosociales del cuidado</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Principio de Bioética</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Cuidado del Adulto Mayor I</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Cuidado del Adulto Mayor I</td>
          <td>Cuatrimestral</td>
        </tr>
      </tbody>
    </Table>
  </div>
  
</div>
)

const Tercero = () => (
  <div id="results" >
  <div>
    <h2>PRIMER CUATRIMESTRE</h2>
    <Table striped bordered hover size="sm" className='styled-table'>
      <thead>
        <tr>
          <th>ASIGNATURAS</th>
          <th>DURACION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Enfermería Materno Infantil y del Adolescente</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Desarrollo Profesional de Enfermería</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Bioética aplicada</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Cuidado del adulto mayor II</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Práctica Profesionalizante V</td>
          <td>Cuatrimestral</td>
        </tr>
      </tbody>
    </Table>
  </div>

  <div>
    <h2>SEGUNDO CUATRIMESTRE</h2>
    <Table striped bordered hover size="sm" className='styled-table'>
      <thead>
        <tr>
          <th>ASIGNATURAS</th>
          <th>DURACION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Conocimiento científico</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Deontología y Legislación</td>
          <td>Cuatrimestral</td>
        </tr>
        <tr>
          <td>Deontología y Legislación</td>
          <td>Cuatrimestral</td>
        </tr>
      </tbody>
    </Table>
  </div>
</div>
)

export default tecnicatura