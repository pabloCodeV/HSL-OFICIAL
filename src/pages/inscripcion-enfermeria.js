import React, {useEffect, useState} from 'react';
import BingMap from '../components/maps/BingMap';
import ficha_inscripcion from '../files/ficha-de-inscripcion.xls'
import ficha_psico from '../files/ficha-psico-fisica.doc'
import { AiOutlineRight } from 'react-icons/ai';
var imagen;

function enviar(){
  
  // const url_local="http://localhost/admin/api/correo/";
  const prod = 'https://hospitalsiriolibanes.ar/comunicacion/api/inscripciones/'
  var nombre = document.getElementById("nombre").value
  var apellido = document.getElementById("apellido").value
  var telefono = document.getElementById("telefono").value
  var correo = document.getElementById("correo").value
  var secundario = document.getElementById("secundario").value
  const requestOptions = {
   
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre:nombre,
      apellido:apellido,
      telefono:telefono,
      correo:correo,
      secundario:secundario,
    })
  };
fetch(prod, requestOptions)
    .then(response => response.json())
    // .then(data => this.setState({ data }));
    document.getElementById("respuesta").style = `
    background: #c7e6c7;
    border-radius: 5px;
    width: 330px;
    padding-left: 20px;
    position: relative;
    top: 10px;
    padding-top: 6px;
    color: #016701;`
    document.getElementById("respuesta").innerHTML = "Su consulta fue enviada correctamente.";
    var nombre = document.getElementById("nombre").value = ''
    var apellido = document.getElementById("apellido").value= ''
    var telefono = document.getElementById("telefono").value= ''
    var correo = document.getElementById("correo").value= ''
    var secundario = document.getElementById("secundario").value= ''
}

function inscripcion_enfermeria() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'INSCRIPCION DE ENFERMERIA')imagen = "https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])
  
  return (
    <div>
        <div className='banner-sector correction'>
         <img className='banner-sector' src={imagen} alt="banner"/>
        </div>

        <div className='elements'>
            <h1 className='inscripcionTilte'>FORMULARIO DE INSCRIPCIÓN A TECNICATURA EN ENFERMERÍA</h1>
          <div className='inscripcionDescription'>
            <p>La Carrera Profesional de Enfermería Título Oficial S.S.PI.In.Ed. 189/16, 
                con una duración de 3 años y una formación teórico-práctica avalada sólidamente por el Gobierno de la Ciudad de Buenos Aires a través de la DGEGP, 
                brinda a los alumnos todas las herramientas necesarias para desarrollarse 
                como Enfermero Profesional, e insertarse rápidamente en el ámbito laboral y de la salud de la mano de una institución de prestigio.
            </p>
          </div>
        </div>

        <form className="formInscripcion">
          <div className="Icampos">
            <label  className="">Nombre</label>
            <input type="text" class="" id="nombre" name="nombre"/>
          </div>
          <div className="Icampos">
            <label className="">Apellido</label>
            <input type="text" className="" id="apellido" name="apellido"/>
          </div>
          <div className="Icampos">
            <label className="">Telefono</label>
            <input type="text" class="" id="telefono" name="telefono"/>
          </div>
          <div className="Icampos">
            <label className="">Correo</label>
            <input type="text" class="" id="correo" name="correo"/>
          </div>
            <label className="">Tendra el secundario completo antes de la fecha de inicio de la cursada?</label>
          <div class="Iradio">
            <input className="" type="radio" name="secundario" id="secundario" />
            <label className="">
              Si
            </label>
          </div>
          <div className="Iradio">
            <input className="" type="radio" name="secundario" id="secundario" checked />
            <label className="" >
            No
            </label>
          </div>
          <div id="respuesta"></div>
          <div className='IbtnSubmit'>
            <button  onClick={enviar} type="button"  id="IbtnSubmit">Enviar</button>
          </div>
        </form>

    <div className='Irequisitos'>
      <h2>Requisitos de Inscripción</h2>
      <h3>Para inscribirte necesitas presentar:</h3>
      <ul>
        <li><AiOutlineRight className='icono-equipo'/>DNI</li>
        <li><AiOutlineRight className='icono-equipo'/>Titulo Secundario +4 fotos carnet 4x4</li>
        <li><AiOutlineRight className='icono-equipo'/>Examen Psicofisico</li>
        <li><AiOutlineRight className='icono-equipo'/>Vacunas Requeridas: Doble adulto / Antihepatitis B / Antihepatitis A / PPD</li>
      </ul>

      <h3> Descargá y completá los formularios obligatorios aquí.</h3>
      <div className='Ificha'>
        <a href={ficha_inscripcion} download="ficha-de-inscripcion.xls">Ficha de Inscripción</a>
      </div>
      <div className='Ificha'>
        <a href={ficha_psico} download="ficha-psico.doc" >Ficha de Psico Física</a>
      </div>
    </div>
    <BingMap/>
    </div>
    
  )
}

export default inscripcion_enfermeria