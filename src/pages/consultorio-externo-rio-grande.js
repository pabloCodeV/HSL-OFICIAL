import React from 'react'
import servMed from './images-page/banner-rio.jpg';
import { MdPhonelink }  from'react-icons/md';
import { HiOutlineMail }  from'react-icons/hi';
import { AiOutlinePhone }  from'react-icons/ai';
import { consultorioRioGrande } from '../historiaP'
import { AiOutlineRight } from 'react-icons/ai';
import Slider from '../components/slider/SliderRio';

function consultorioexternoriogrande() {
  return (
    <div>
    <div className='portada background-rio-grande'>
       {/* <img className='banner-sector' src={servMed} alt="banner"/> */}
       <h2>RIO GRANDE / TIERRA DEL FUEGO</h2>
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
               <p className='telex'>(02954) 425-017</p>
               <p className='telex'>(02954) 477-076</p>
           </div>

           <div className='section-columna-ext'>
               <div className='icon-access-content'><HiOutlineMail /></div>
               <h3 className='h3externo'>Escribinos</h3>
               <div className='correoex'>info@cmimedici.com</div>
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
                        <td>8:00 – 12:00</td>
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
                 El Centro Médico Integral Médici de Rio Grande, Brinda atención en Tierra del Fuego, y está integrando a la Red de Teleconsultas para pacientes y 
                 de interconsulta para profesionales por Telemedicina del Hospital Sirio Libanés de Buenos Aires.
                Se encuentra al servicio de los habitantes de dicha ciudad dando a acceso a todas las especialidades médicas en forma presencial o por medio de la Teleconsulta médica.
                Ofrece a sus pacientes más de 20 especialidades , entre las que se encuentran: Clínica médica, Traumatología, Ginecología, Gastroenterología, Otorrinolaringología, 
                Fonoaudiología, Oftalmología, Cardiología, Diagnóstico por Imagen, Cirugía plástica, Pediatría, entre otras.
                Los consultorios cuentan con servicio especializado en medicina laboral, laboratorio, ecografías con la última generación en equipos y alta calidad de imagen, 
                vacunatorio y enfermería profesional. El equipo médico ha sido seleccionado pensando en ofrecer la mejor calidad médica y profesional, atendiendo integralmente a sus pacientes.
                Además la posibilidad de realizar en el lugar cirugías de baja y mediana complejidad, y contar así con dos quirófanos equipados con tecnología de vanguardia y 
                tres salas de internación.
               </p>

               <h2 className='h2externo'>ESPECIALIDADES</h2>
               <ul className='ulEx'>
               {consultorioRioGrande.map((value)=>
                       <li><AiOutlineRight className='icono-equipo'/>{value}</li>
                       )}
               </ul>
           </div>

           <div>
           <h2 className='h2externoC'>CONTACTO</h2>
           <p className='pextrno'>Borges 372, Río Grande Tierra del fuego</p>
           <p className='pextrno'>Escribinos</p>
           <p><div className='correoex'>info@cmimedici.com</div></p>
           <iframe className='iframeExterno' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2358.083603261449!2d-67.708659!3d-53.770199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d14fa92a34cca63!2sCentro%20M%C3%A9dico%20Integral%20MEDICI!5e0!3m2!1ses!2sar!4v1663555623732!5m2!1ses!2sar" ></iframe>
           </div>
       </div>
   </div>
</div>
  )
}

export default consultorioexternoriogrande