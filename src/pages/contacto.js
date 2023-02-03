import React, {useEffect, useState} from 'react';
import BingMap from '../components/maps/BingMap';
import './pages-css/contacto.css';
import call from './images-page/emergency-call.jpg';
import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
var imagen;

function enviar(){
  // const url_local="http://localhost/admin/api/correo/";
  const prod = 'https://hospitalsiriolibanes.org/cms/api/correo/'
  var nombre = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var telefono = document.getElementById("telefono").value
  var especialidad = document.getElementById("especialidad").value
  var mensaje = document.getElementById("mensaje").value
  console.log(nombre, correo, telefono, especialidad, mensaje)
  const requestOptions = {
   
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre:nombre,
      correo:correo,
      telefono:telefono,
      especialidad:especialidad,
      mensaje:mensaje
    })
  };
fetch(prod, requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ data }));
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
    var correo = document.getElementById("correo").value= ''
    var telefono = document.getElementById("telefono").value= ''
    var especialidad = document.getElementById("especialidad").value= ''
    var mensaje = document.getElementById("mensaje").value= ''
}

function contacto() {
  const [data, setData] = useState ([]);
  // const url = 'http://localhost/admin/api/banner_section/'
  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    console.log(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'CONTACTO')imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
    })
  })
  .catch(error => console.log(error))
  };
  useEffect(()=>{fetchData(url)},[])

  return (
    <div>
        <div style={{ backgroundImage: imagen }} className='portada background-contacto'>
            <h2 className='h2-content'>CONTACTO</h2>
        </div>

    <section className='cosect'>
      <div className='cosect-mid' >
        {/* <img src={call}/> */}
      </div>

      <div className='cosect-othermid'>
          <div className='cosect-ti'>
            <h2>Atención Al Paciente </h2>
            <p>24 hs. conectados</p>
          </div>
         <article className='cosect-art'>
            <div>
              <h2 className='cosect-sub-icon'><GiSmartphone  className='cosect-icon-ti'/>Obras Sociales y <span className='cosect-icon-ti-fix2'>Prepagas</span></h2>
                <p className='cosect-desct-icon'>0810-888-0062
                  <br/>
                  Lunes a Viernes
                  <br/>
                  de 9 a 16 hs.
                </p>
            </div>

            <div>
              <h2 className='cosect-sub-icon'><GiSmartphone className='cosect-icon-ti'/>Turnos Imágenes Obras <span className='cosect-icon-ti-fix1'>Sociales</span></h2>
              <p  className='cosect-desct-icon'>011 5409-5871</p>
            </div>

            <div>
              <h2 className='cosect-sub-icon'><GiSmartphone className='cosect-icon-ti'/>Turnos Imágenes PAMI</h2>
              <p className='cosect-desct-icon'>011 2277-7727</p>
            </div>

            <div>
              <h2 className='cosect-sub-icon'><GiSmartphone className='cosect-icon-ti'/>PAMI</h2>
              <p className='cosect-desct-icon'>0810-888-0063
                <br/>
                Lunes a Viernes
                <br/>
                de 8 a 15 hs.
              </p>
            </div>

            <div>
              <h2 className='cosect-sub-icon'><MdOutlineLocationOn className='cosect-icon-ti'/>Ubicación</h2>
              <p className='cosect-desct-icon'>Campana 4658
              </p>
            </div>

            <div >
              <h2 className='cosect-sub-icon'><AiOutlineMail className='cosect-icon-ti'/>Mail</h2>
              <p className='cosect-desct-icon'>Consultas: <span>info@hospitalsiriolibanes.org</span>
              <br/> 
              Turnos PAMI: <span>Turnos@hospitalsiriolibanes.org</span></p>
            </div>
          </article>
      </div>
    </section>

    <section className='cosect'>
      <div className='cosect-form'>
      <div className='cosect-ti'>
          <h2 className='cosect-ti-form' >Consultas</h2>
          <p className='cosect-info-form'>Su consulta será derivada al departamento que corresponda. <br/>Les responderemos a la brevedad.</p>
      </div>
        <form id="consultaForm">
          <div className="cosect-camp-input">
            <input type="text"  id="nombre" name="nombre" placeholder='nombre'/>
            <input type="email" className="" id="correo" name="correo" placeholder='correo'/>
            <input type="text"  id="telefono" name="telefono" placeholder='telefono'/>
            <input type="text"  id="especialidad" name="especialidad" placeholder='especialidad'/>
          </div>
          <div className="cosect-camp-input"> 
            <textarea  placeholder="Dejenos su mensaje..." id="mensaje" name="mensaje"/>
          </div>
          <div id="respuesta"></div>
        </form>
        <button type="button" className='cosect-btnEnviar' onClick={enviar}>ENVIAR</button>
      </div>

      <div className='cosect-othermid-suc'>
        <div className='cosect-ti'>
          <h2>Sucursales</h2>
        </div>
        <article className='cosect-art cosect-tisuc'>
          <div>
            <h3 >Villa Devoto</h3>
              <p >Av. Fernández de Enciso 4616
                <br/>
                CABA. (1419)
                <br/>
                info@hospitalsiriolibanes.org
                <br/>
                (+54) 11 4503 6363
                <br/>
                (011) 15 6219 4903
              </p>
          </div>
          <div>
            <h3 >Consultorios Telemedicina</h3>
              <p>Argentina
                <br/>
                Turnos telefónicos: 0810 888 0062
                <br/>
                Paraguay
                <br/>
                (+595) 992 290206
              </p>
          </div>
          <div>
            <h3>Alto Palermo</h3>
              <p>
                Av. Santa Fe 3253, 1 ° subsuelo 
                <br/>
                Alto Palermo Shopping/ CABA
              </p>
          </div>
          <div>
            <h3>Asunción del Paraguay</h3>
              <p>
                secretaria-asuncion@hospitalsiriolibanes.org
                <br/>
                (+595 21) 498 695
                <br/>
                (+54) 11 5323 - 5608
              </p>
          </div>
        </article>
      </div>

    </section>
  
  <BingMap/>
    </div>
    
  )
  
}


export default contacto