import React from 'react'
import banner_hemodinamia from './images-page/banner_hemodinamia.jpg'
import hemo from './images-page/hemo.png'
import neuro from './images-page/neuro.png'
import terapia from './images-page/tratamiento.png'
import equipos from './images-page/equipohemodinamia.jpg'
import inter from './images-page/banner_preintervencion.jpg'
import hemo1 from './images-page/hemo1.mp4'
import hemo2 from './images-page/hemo2.mp4'
import intervencion1 from './images-page/intervencion1.png'
import intervencion2 from './images-page/intervencion2.png'
import { AiOutlineRight } from 'react-icons/ai';
import { BsCalendarCheck } from 'react-icons/bs';
import Slider from '../components/slider/SliderHemodinamia';
import SliderHemodi from '../components/slider/SliderHemodi';
import BingMap from '../components/maps/BingMap';
import { NavLink  } from "react-router-dom";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton } from 'video-react';


function hemodinamia() {
    const sep = { bottom: 50,
                position: 'relative'}
    const top = { top: 20}
    const top1 = { top: 17}
    const imgchild2 = {    
        width: '50%',
        position: 'relative',
        float: 'right'
    }
 
  return (
    <div>
        {/* <div className='banner-sector'>
            <img className='banner-sector' src={banner_hemodinamia} alt="banner"/>
            <h2 className='h2-content'>HEMODINAMIA</h2>
        </div> */}
        <SliderHemodi />
        <div>
            <section className='section1Hemo'>
                <div>
                    <div>
                        <h2>Servicio de Hemodinamia del Hospital Sirio Libanés</h2>
                    </div>
                    <div>
                        <p>Un equipo médico de especialistas en intervención vascular con experiencia asistencial, en docencia e investigación clínica. 
                            Contamos con especialistas en Intervencionismo en áreas de Cardiología,
                             Radiología, Pediatría, Electrofisiología, Neurología y Cirugía Cardiovascular, Cardiología Clínica, Ecodoppler Cardíaco y Vascular.</p>
                    </div>
                    <div className='servicioHemo1'>
                        <div>
                            <h3>Intervencionismo coronario</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastía simple y compleja</li>
                                <li><AiOutlineRight className='icono-equipo'/>IVUS</li>
                                <li><AiOutlineRight className='icono-equipo'/>FR</li>
                                <li><AiOutlineRight className='icono-equipo'/>Litotricia coronaria</li>
                                <li><AiOutlineRight className='icono-equipo'/>Aterectomía</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Cardiopatías congénitas del adulto</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Cierre CIA</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cierre CIV</li>
                                <li><AiOutlineRight className='icono-equipo'/>Endo válvula pulmonar</li>
                                <li><AiOutlineRight className='icono-equipo'/>Coartación aórtica</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Cardiopatías estructurales</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>TAVI</li>
                                <li><AiOutlineRight className='icono-equipo'/>Valvuloplastia</li>
                                <li><AiOutlineRight className='icono-equipo'/>Vascular periférico</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia compleja</li>
                                <li><AiOutlineRight className='icono-equipo'/>Endoprótesis</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='sectionmed' >
                    <img src={hemo}/>
                </div> */}
            </section>

            <section className='hemodinamia-videos'>
                <div>
                <Player
                    fluid={false}
                    width={"100%"}
                    height={350}
                    muted
                    playsInline
                    poster={intervencion1}
                    src={hemo2}
                    ><BigPlayButton position="center" /></Player>
                    <p><b>Oclusión de arteria ilíaca con angiografía por crossover con posterior re canalización y Angioplastia por vía retrograda. Excelente resultado final.</b></p>
                </div>
                 <div>
                 <Player
                    fluid={false}
                    width={"100%"}
                    height={350}
                    muted
                    playsInline
                    src={hemo1}
                    poster={intervencion2}
                    
                    ><BigPlayButton position="center" /></Player>
                    <p><b>Reemplazo de válvula aórtica por vía percutánea.</b></p>
                </div>
            </section>
            
            <div className='posimghemo'>
                <h2><BsCalendarCheck className='iconhemo'/>Formulario de Pre Intervencionismo</h2>
                <div className='btn-prein'>
                        <NavLink className="bttn" to='/pre-intervencionismo'>Completar</NavLink>
                    </div>
            </div>
            
            <section className='section1Hemo backgroundimgresponsive' style={sep}>
            <div className='sectionmed2 imchild1'>
                    <img src={equipos}/>
                </div>

                <div>
                    <div>
                        <h2>Contamos con equipamiento de última generación</h2>
                    </div>
                    <div className='servicioHemo1'>
                        <div>
                            <h3>Intervencionismo coronario</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Monitores multiparamétricos</li>
                                <li><AiOutlineRight className='icono-equipo'/>Agiógrafo Phillips Integris 5000 con sistema de angiografía digital</li>
                                <li><AiOutlineRight className='icono-equipo'/>Mesa de anestesia marca Drager. Modelo Fabius Plus XL</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cardio desfibrilador Phillips Smart</li>
                                <li><AiOutlineRight className='icono-equipo'/>Electro bisturí bipolar </li>
                                <li><AiOutlineRight className='icono-equipo'/>Ecografía Mindray M7 Premium, zonda vascular y convexa</li>
                                <li><AiOutlineRight className='icono-equipo'/>Nueva unidad coronaria</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </section>

            <section className='section1Hemo ' style={top} >
                <div className=''>
                    <div>
                        <h2>Terapias y Tratamientos</h2>
                    </div>
                    <div className='servicioHemo1'>
                        <div>
                            <h3>Cinecoronariografía c/s Ventriculograma</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia coronaria compleja (2 – 3 vasos) - Tronco coronario Izquierdo</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia coronaria simple y compleja con aterectomía rotacional</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia coronaria con onda de choque Shockwave -IVL</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia coronaria con apoyoo por FFR, iFR y IVUS.</li>
                                <li><AiOutlineRight className='icono-equipo'/>Implante de válvula Aórtica transcateter (TAVI)</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia de coartación de aorta</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia periférica carótida</li>
                                <li><AiOutlineRight className='icono-equipo'/>Biopsia endomiocárdica adulto</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia periférica carótida</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Cateterismo diagnóstico complejo / patologías congénitas</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cierre de comunicación interauricular por vía endovascular con dispositivo</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cierre de ductos por vía endovascular con dispositivo</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cierre de foramen oval por vía endovascular con dispositivo</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cinecoronariografía</li>
                                <li><AiOutlineRight className='icono-equipo'/>Colocación de balón de contra pulsación</li>
                                <li><AiOutlineRight className='icono-equipo'/>Colocación de catéter de swan ganz</li>
                                <li><AiOutlineRight className='icono-equipo'/>Embolización de colaterales aortapulmonares (cardiopatías congénitas)</li>
                                <li><AiOutlineRight className='icono-equipo'/>Implante de válvula aórtica percutánea por cateterismo (TAVI)</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Oclusión de fístulas arterio-venosas pulmonares o sistémicas</li>
                                <li><AiOutlineRight className='icono-equipo'/>Septostomía auricular con catéter balón de Rashkind</li>
                                <li><AiOutlineRight className='icono-equipo'/>Septostomía auricular con catéter cuchilla de Park</li>
                                <li><AiOutlineRight className='icono-equipo'/>Valvuloplastia aórtica</li>
                                <li><AiOutlineRight className='icono-equipo'/>Valvuloplastia mitral</li>
                                <li><AiOutlineRight className='icono-equipo'/>Valvuloplastia pulmonar</li>
                                <li><AiOutlineRight className='icono-equipo'/>Valvuloplastia pulmonar de estenosis pulmonar en recién nacido</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className='sectionmed2 imgchild2' >
                    <img src={terapia}/>
                </div> */}
            </section>


            <section className='section1Hemo backgroundimgresponsive' style={top1} >
                <div className='sectionmedfin'>
                    <div className='servicioHemo1 infoNeuro'>
                        <div className='infoNeuro'>
                            <h3>Área neurológica</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Aneurismas cerebrales</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angiografía digital intracerebral con reconstrucción 3D</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angiografía digital medular/cerebral</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia intracraneal</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cateterismo diagnóstico pediátrico</li>
                                <li><AiOutlineRight className='icono-equipo'/>Cifoplastia </li>
                                <li><AiOutlineRight className='icono-equipo'/>Dosaje de senos petrosos</li>
                                <li><AiOutlineRight className='icono-equipo'/>Embolización cerebral de malformaciones arteriovenosas</li>

                                <li><AiOutlineRight className='icono-equipo'/>Embolización de aneurisma con balones desprendibles</li>
                                <li><AiOutlineRight className='icono-equipo'/>Umbilicación de carótida externa, cara o cuello (tumores/meningiomas/pre-quirúrgicos/sangrados)</li>
                                <li><AiOutlineRight className='icono-equipo'/>Fístulas arterio-venosas cerebrales</li>
                                <li><AiOutlineRight className='icono-equipo'/>Test de oclusión con balones transitorios </li>
                                <li><AiOutlineRight className='icono-equipo'/>Trombólisis en Stroke o Vasoespasmo / ACV</li>
                                <li><AiOutlineRight className='icono-equipo'/>Vertebroplastia</li>

                            </ul>
                        </div>
                        <div className='infoNeuro'>
                            <h3>Área periférica</h3>
                            <ul>
                                <li><AiOutlineRight className='icono-equipo'/>Angiografía digital</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia en riñón nativo y trasplantado</li>
                                <li><AiOutlineRight className='icono-equipo'/>Angioplastia periférica simple</li>
                                <li><AiOutlineRight className='icono-equipo'/>Biopsia transyugular hepática</li>
                                <li><AiOutlineRight className='icono-equipo'/>Colocación de catéter venoso central</li>
                                <li><AiOutlineRight className='icono-equipo'/>Colocación de catéteres por vía no convencional y/o pacientes complejos</li>
                                <li><AiOutlineRight className='icono-equipo'/>Colocación filtro vena Cava</li>
                                <li><AiOutlineRight className='icono-equipo'/>Retiro de Filtro de Vena Cava</li>
                                <li><AiOutlineRight className='icono-equipo'/>Embolización de malformación arterio venosa – fístula arterio venosa periférica de bajo flujo (escleroembolización)</li>
                                <li><AiOutlineRight className='icono-equipo'/>Embolización de malformaciones arterio-venosas – fístula arteriovenosa periférica alto flujo</li>
                                <li><AiOutlineRight className='icono-equipo'/>Estudio completo de acceso Vascular / Fistulografía</li>
                                <li><AiOutlineRight className='icono-equipo'/>Flebografía de MMSS</li>
                                <li><AiOutlineRight className='icono-equipo'/>Flebografía en MMII</li>

                                <li><AiOutlineRight className='icono-equipo'/>Hemodinamia hepática para hipertensión portal</li>
                                <li><AiOutlineRight className='icono-equipo'/>Quimioembolización de lesiones tumorales</li>
                                <li><AiOutlineRight className='icono-equipo'/>Recambio de botón de gastrostomía</li>
                                <li><AiOutlineRight className='icono-equipo'/>Reposicionamiento de Filtro Vena Cava</li>
                                <li><AiOutlineRight className='icono-equipo'/>Tratamiento de acretismo placentario intraquirúrgico</li>
                                <li><AiOutlineRight className='icono-equipo'/>Tratamiento endovascular del aneurisma de aorta abdominal</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </section>



            <section className='section1Hemo' style={top1}>
                <div className='sectionmedfin'>
                    <div className='servicioHemo1 infoNeuro'>
                        <div className='infoNeuro staff'>
                            <h3>Staff</h3>
                            <ul>
                                <li>Jefe De Servicio</li>
                                <li><AiOutlineRight className='icono-equipo'/>Dr. Aldo Perusso</li>
                            </ul>
                            <ul>
                                <li>Subjefe</li>
                                <li><AiOutlineRight className='icono-equipo'/>Dr. Barrera Eduardo</li>
                            </ul>
                            <ul>
                                <li>Senior</li>
                                <li><AiOutlineRight className='icono-equipo'/>Dr. Martín Rodrigo</li>
                            </ul>
                        </div>
                        <div className='infoNeuro staff'>
                            <ul>
                                <li>Fellow</li>
                                <li><AiOutlineRight className='icono-equipo'/>Dr. Picone Demis</li>
                            </ul>
                            <ul>
                                <li>Gerente General</li>
                                <li><AiOutlineRight className='icono-equipo'/>Dra. Picone Noelia</li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </section>

        </div>

        <BingMap/>
    </div>
  )
}

export default hemodinamia