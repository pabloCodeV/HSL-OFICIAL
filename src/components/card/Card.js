import React, {useEffect, useState} from 'react';
import { NavLink  } from "react-router-dom";
import {IoIosTime} from 'react-icons/io';
import './card.css';


function Card(){
    const [data, setData] = useState ([]);

    // const url = 'https://hospitalsiriolibanes.ar/inscripciones/cms/api/novedades/'
    // const local = 'http://localhost/admin/api/novedades/'
    const prod = 'https://hospitalsiriolibanes.org/cms/api/novedades/'

    const fetchData = (prod) =>{
    fetch(prod)
    .then(response => response.json())
    .then(data => setData(data.slice(0, 4)))
    .catch(error => console.log(error))
    };

    useEffect(()=>{
        fetchData(prod)
    },[])

    return(

<div className='card-container-home'>
        {/* NOTICIA 1 */}
        {data.map((item, index)=>

            <article key={index} className='card-container'>
                <NavLink to={`/noticia?id=${item.id}`}>
                <img className='image-container' src={'https://hospitalsiriolibanes.org/cms/images/'+item.imagen} alt="banner"/>
                <h3 className='fech-nov'><IoIosTime className='icon-fe-not'/>{item.create_at}</h3>
                    <h2>{item.titulo}</h2>
                    <div>
                        <p className='vermas-card-home'><span>Ver más</span></p>
                    </div>
                </NavLink>
            </article>
            )}
        </div>
    )
}

export default Card;