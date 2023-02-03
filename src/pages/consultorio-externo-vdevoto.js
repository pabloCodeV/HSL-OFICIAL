import React from 'react'
import servMed from './images-page/banner-devoto.jpg';
import { MdPhonelink }  from'react-icons/md';
import { HiOutlineMail }  from'react-icons/hi';
import { AiOutlinePhone }  from'react-icons/ai';
import { especialidadesConsultorioEx } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import Slider from '../components/slider/SliderVdev';


function consultorioExternoVdevoto() {
  return (
    <div>
         <div className='portada background-vdevoto'>
            {/* <img className='banner-sector' src={servMed} alt="banner"/> */}
            <h2>VILLA DEVOTO C.A.B.A</h2>
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
                    <h3 className='h3ex'>PAMI</h3>
                    <p className='telex'>0810-888-0063</p>
                    <h3 className='h3ex'>Turnos Imágenes Obras Sociales</h3>
                    <p className='telex'>(011) 15-6219-4903</p>
                    <h3 className='h3ex'>Turnos Imágenes PAMI</h3>
                    <p className='telex'>011 2277-7727</p>

                </div>

                <div className='section-columna-ext'>
                    <div className='icon-access-content'><HiOutlineMail /></div>
                    <h3 className='h3externo'>Escribinos</h3>
                    <div className='correoex'>consultorios@hospitalsiriolibanes.org</div>
                </div>

                <div className='section-columna-ext'>
                    <h3 className='h3externo'>Horarios</h3>
                    <div>
                        <table className='tablex'>
                            <tr>
                                <td>Lunes a Viernes</td>
                                <td>8:00 – 19:00</td>
                            </tr>
                            <tr>
                                <td>Sábados</td>
                                <td>8:00 – 13:00</td>
                            </tr>
                            </table>
                        </div>
                </div>
             
            </div>
            <div className='columna-externo2'>
            <Slider /> 
                <div>
                    <h2 className='h2externo'>MEDICINA DE EXCELENCIA, Y CALIDAD DE ATENCIÓN</h2>
                    <p className='pextrno'>
                    Nuestros modernos consultorios en Villa Devoto, brindan servicio en todas las especialidades médicas poniendo a su disposición 
                    profesionales de primera línea. Están equipados tecnología de punta, diagnóstico por imágenes de alta precisión, laboratorios 
                    propios y gabinetes de extracción para estudios y sala de diálisis. Además esta integrado a la red de Telemedicina, 
                    posibilitando realizar interconsultas en casos complejos, con diferentes y destacados profesionales de la red.
                    </p>

                    <h2 className='h2externo'>ESPECIALIDADES</h2>
                    <ul className='ulEx'>
                    {especialidadesConsultorioEx.map((value)=>
                            <li><AiOutlineRight className='icono-equipo'/>{value}</li>
                            )}
                    </ul>
                </div>

                <div>
                <h2 className='h2externoC'>CONTACTO</h2>
                <p className='pextrno'>Av. Fernández de Enciso 4616, CABA. (1419)</p>
                <p className='pextrno'>Escribinos</p>
                <p><div className='correoex'>consultorios@hospitalsiriolibanes.org</div></p>
                <iframe className='iframeExterno' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.904331650606!2d-58.51123100000001!3d-34.592726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x777712a64c27afa6!2sConsultorios%20Externos%20Hospital%20Sirio%20Libanes!5e0!3m2!1ses!2sar!4v1663363500268!5m2!1ses!2sar" ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default consultorioExternoVdevoto