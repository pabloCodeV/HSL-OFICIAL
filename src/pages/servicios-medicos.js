import './pages-css/home.css';
import './pages-css/serviciosmedicos.css';
import React, {useEffect, useState} from 'react';
import BingMap from '../components/maps/BingMap';
import { especialidades, infraEstructura } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { NavLink  } from "react-router-dom";
var imagen;

function serviciosMedicos() {
  const [data, setData] = useState ([]);

  const [servicios, setServicios] = useState ([]);
  const [busqueda, setBusqueda] = useState ("");

  const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
  const url1 = 'http://localhost/admin/api/servicioMedico/'
  // const url = 'http://localhost/admin/api/banner_section/'

  const fetchData = (url) =>{
  fetch(url)
  .then(response => response.json())
  .then(data => {setData(data)
    Object.keys(data).forEach(key=>{
      if(data[key].section === 'SERVICIOS MEDICOS'){
        imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
      }
    })
  })
  .catch(error => console.log(error))
  };

  useEffect(()=>{
      fetchData(url)
  },[])




  const fetchData1 = (url1) =>{
    fetch(url1)
    .then(response => response.json())
    .then(servicios => {setServicios(servicios)
      console.log(servicios)
    })
    .catch(error => console.log(error))
  };
  const  buscador = (e) => {
    setBusqueda(e.target.value)
    console.log(e.target.value)
  }

  let results = []
  if(!busqueda){
    results = servicios
  }else{
    results = servicios.filter((dato) =>
    dato.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  }

  useEffect(()=>{
    fetchData1(url1)
  },[])




  return (
<div>
  <div style={{ backgroundImage: imagen }} className='portada background-servicios-medicos'>

      <h2>SERVICIOS MÉDICOS</h2>
  </div>
  <div className='search-serv'>
    <input value={busqueda} onChange={buscador} type='text' name='nombre' placeholder='Buscar servicio medico...'/><FaSearch className='icon-search-serv'/>
  </div>


    <div className='elements'>
        <div className='grid-espec-content'>
              <ul>
            {results.map((item,index)=>
                <li><AiOutlineRight className='icono-equipo'/>{item.nombre}</li>
                )}
              </ul>
          </div>
          <h2 className='fixh2content temporal'>Infraestructura</h2>
          <div className='grid-espec-content'>
              <ul>
            {infraEstructura.map((value)=>
                <li><AiOutlineRight className='icono-equipo'/>{value}</li>
                )}
              </ul>
          </div>
    </div>
      <div class="btr-turno-cover">
          <NavLink to='/seleccion-de-pais'>SOLICITAR TURNO</NavLink>
      </div>
    <BingMap/>
</div>

  )
}

export default serviciosMedicos