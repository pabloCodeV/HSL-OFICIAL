import React from 'react'
import servMed from './images-page/banner-palermo.jpg';
import { MdPhonelink }  from'react-icons/md';
import { HiOutlineMail }  from'react-icons/hi';
import { AiOutlinePhone }  from'react-icons/ai';
import { consulAltoPalermo } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import Slider from '../components/slider/SliderCaba';

function consultorioexternoaltopalermo() {
    return (
        <div>
             <div className='portada background-alto-palermo'>
                {/* <img className='banner-sector' src={servMed} alt="banner"/> */}
                <h2>ALTO PALERMO</h2>
                <h3>Consultorio Externo</h3>
            </div>
    
            <div className='externo-container'>
                <div className='columna-externo'>
                    <div className='section-columna-ext'>
                        <div className='icon-access-content'><MdPhonelink /></div>
                        <h3 className='h3externo'>Reservá tus Turnos Online</h3>
                        <div className="btnExterno"><a href="https://hospitalsiriolibanes.ar/" >Ingresar</a></div>
                    </div>
    
                    <div className='section-columna-ext'>
                        <div className='icon-access-content'><AiOutlinePhone /></div>
                        <h3 className='h3externo'>Turnos telefónicos</h3>
                        <h3 className='h3ex'>Obras Sociales, Prepagas y ART</h3>
                        <p className='telex'>0810-888-0062</p>
                    </div>
    
                    <div className='section-columna-ext'>
                        <div className='icon-access-content'><HiOutlineMail /></div>
                        <h3 className='h3externo'>Escribinos</h3>
                        <div className='correoex'>turnos@hospitalsiriolibanes.org</div>
                    </div>
    
                    <div className='section-columna-ext'>
                        <h3 className='h3externo'>Horarios</h3>
                        <div>
                            <table className='tablex'>
                                <tr>
                                    <td>Lunes a Viernes</td>
                                    <td>15:00 – 20:00</td>
                                </tr>
                                </table>
                            </div>
                    </div>
                 
                </div>
                <div className='columna-externo2'>
                    <Slider />
                    <div>
                        <h2 className='h2externo'>CONSULTORIOS SEDE ALTO PALERMO</h2>
                        <p className='pextrno'>
                        Los consultorios del Hospital Sirio Libanés en el Shopping ALTO PALERMO, brindan atención médica a nuestros pacientes de las diferentes Obras Sociales y Prepagas , 
                        con un equipo médico de primera línea, en un ámbito moderno y confortable. Están ubicados en una zona estratégica con fácil acceso y en ellos podés  atenderte en forma presencial o
                         por medio de la Teleconsulta médica.
                        Ofrece a sus pacientes las principales especialidades , entre las que se encuentran: Gastroenterología, Neurología, Infectología, Otorrinolaringología, Hepatología, Diabetología, Cardiología, Dermatología, 
                        Ortopedia, Traumatología General, Traumatología de Rodilla, Artroscopia.
                        Con la posibilidad de derivación a otras sedes si fuese necesario interconsultar con otras especialidades.
                        </p>
    
                        <h2 className='h2externo'>ESPECIALIDADES</h2>
                        <ul className='ulEx'>
                        {consulAltoPalermo.map((value)=>
                                <li><AiOutlineRight className='icono-equipo'/>{value}</li>
                                )}
                        </ul>
                    </div>
    
                    <div>
                    <h2 className='h2externoC'>CONTACTO</h2>
                    <p className='pextrno'>Avda. Santa Fe 3253, 1er. Subsuelo CABA</p>
                    <p className='pextrno'>Escribinos</p>
                    <p><div className='correoex'>turnos@hospitalsiriolibanes.org</div></p>
                    <iframe className='iframeExterno' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.5781648241867!2d-58.410688!3d-34.588346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50df652aa5fc90da!2sHealthy%20-%20Tu%20Centro%20M%C3%A9dico%20Cercano%20-%20Sede%20Alto%20Palermo!5e0!3m2!1sen!2sar!4v1663554865519!5m2!1sen!2sar" ></iframe>
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default consultorioexternoaltopalermo