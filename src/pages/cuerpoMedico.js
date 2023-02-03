import React, {useEffect, useState} from 'react';
import './pages-css/cuerpo_medico.css';
import { FaSearch } from 'react-icons/fa';
import BingMap from '../components/maps/BingMap';

var imagen;
var profecionales;

function cuerpoMedico() {

    const [data, setData] = useState ([]);
    const url = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
    // const url = 'http://localhost/admin/api/banner_section/'

    const fetchData = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {setData(data)
      Object.keys(data).forEach(key=>{
        if(data[key].section === 'CUERPO MEDICO'){
          imagen = "url(https://hospitalsiriolibanes.ar/comunicacion/banners/"+data[key].imagen +")"
        }
      })
    })
    .catch(error => console.log(error))
    };

    useEffect(()=>{
        fetchData(url)
    },[])



    const [servicios, setServicios] = useState ([]);
    const [busqueda, setBusqueda] = useState ("");
    // const url1 = 'https://hospitalsiriolibanes.ar/comunicacion/api/banner_section/'
    const url1 = 'http://localhost/admin/api/servicioMedico/'

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
  <div style={{ backgroundImage: imagen }} className='portada background-cuerpo-medico'>
        <h2>CUERPO MÉDICO</h2>
  </div>

  <section className='cue-sector'>
  <div className='search-serv'>
    <input value={busqueda} onChange={buscador} type='text' name='nombre' placeholder='Buscar servicio medico...'/><FaSearch className='icon-search-serv'/>
  </div>
          <div>
            <ul className='ul-wrapped-cm'>
            {results.map((item, index)=>
            {if(item.tipo == 'S. Medico'){
              return (
              <li key={index}>
                <div>
                  {/* <img src={dubai}/> */}
                </div>
                <div className='w'>
                  <h3 className='naut'>{item.nombre}</h3>
                  
                  <h4 >{item.profecionales}</h4>
                  {/* <h4>{post.doctor2?<AiOutlineRight className='icono-equipo'/>:''}{post.doctor2?post.doctor2:''}</h4> */}
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

export default cuerpoMedico