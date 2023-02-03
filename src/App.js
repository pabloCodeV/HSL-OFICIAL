import React from 'react'
import { useEffect } from 'react';
import './App.css';
import './components/nav.css';
import Navbar from './components/Navbar';
import logo from './components/images/logohsl.png';
import { Route, Routes, useLocation  } from "react-router-dom";
import Home from './home';
import Historia from './pages/historiaHSL';
import Autoridades from './pages/autoridades';
import CuerpoMedico from './pages/cuerpoMedico';
import ServiciosMedicos from './pages/servicios-medicos';
import DiagnosticoPorImagenes from './pages/diagnostico-por-imagenes';
import Laboratorio from './pages/laboratorio';
import Residencia from './pages/residencia';
import Telemedicina from './pages/telemedicina';
import Coberturas from './pages/coberturas';
import Tecnicatura from './pages/tecnicatura';
import Inscripciones from './pages/inscripcion-enfermeria';
import SalidaLaboral from './pages/salida-laboral';
import Novedades from './pages/novedades';
import Vdevoto from './pages/consultorio-externo-vdevoto';
import Altopalermo from './pages/consultorio-externo-alto-palermo';
import ConsultorioRioGrande from './pages/consultorio-externo-rio-grande';
import Turnos from './pages/seleccion-de-pais';
import Turnos1 from './pages/seleccion-de-ciudad';
import Consultorios from './pages/consultorios';
import Consultoriosarg from './pages/consultorios-argentina';
import Hemodinamia from './pages/hemodinamia';
import Contacto from './pages/contacto';
import Noticia from './pages/noticia';
import PreIntervencionismo from './pages/pre-intervencionismo';
import Footer from './components/footer/Footer';
import Network from './components/networks/network';
import { NavLink  } from "react-router-dom";


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <header className="app-header">
      <div className="nav-area">
          <a href="/" ><img className="logo" src={logo} /><h1 className="hidde">Hospital sirio libanes</h1></a>
          <div className='btn-turno-header'>
            <NavLink to='/seleccion-de-pais'>Solicitar Turno</NavLink>
          </div>
      </div>
        <Navbar />
        <ScrollToTop />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="historiaHSL" element={<Historia />} />
            <Route exact path="autoridades" element={<Autoridades />} />
            <Route exact path="cuerpoMedico" element={<CuerpoMedico />} />
            <Route exact path="servicios-medicos" element={<ServiciosMedicos />} />
            <Route exact path="diagnostico-por-imagenes" element={<DiagnosticoPorImagenes />} />
            <Route exact path="laboratorio" element={<Laboratorio />} />
            <Route exact path="telemedicina" element={<Telemedicina />} />
            <Route exact path="coberturas" element={<Coberturas />} />
            <Route exact path="paraguay" element={<Paraguay/>} />
            <Route exact path="residencia" element={<Residencia/>} />
            <Route exact path="campus-virtual" element={<Campus/>} />
            <Route exact path="tecnicatura-en-enfermeria" element={<Tecnicatura/>} />
            <Route exact path="inscripcion-enfermeria" element={<Inscripciones/>} />
            <Route exact path="salida-laboral" element={<SalidaLaboral/>} />
            <Route exact path="Portal-Financiadores" element={<Financiadores/>} />
            <Route exact path="consultorio-externo-vdevoto" element={<Vdevoto/>} />
            <Route exact path="consultorio-externo-alto-palermo" element={<Altopalermo/>} />
            <Route exact path="consultorio-externo-rio-grande" element={<ConsultorioRioGrande/>} />
            <Route exact path="contacto" element={<Contacto/>} />
            <Route exact path="novedades" element={<Novedades/>} />
            <Route exact path="seleccion-de-pais" element={<Turnos/>} />
            <Route exact path="seleccion-de-ciudad" element={<Turnos1/>} />
            <Route exact path="consultorios" element={<Consultorios/>} />
            <Route exact path="consultorios-argentina" element={<Consultoriosarg/>} />
            <Route exact path="hemodinamia" element={<Hemodinamia/>} />
            <Route exact path="webmail" element={<WebMail/>} />
            <Route exact path="noticia" element={<Noticia/>} />
            <Route exact path="pre-intervencionismo" element={<PreIntervencionismo/>} />
        </Routes>
        <Network />
        <Footer />
    </header>
  );
}
function Paraguay() {
  // 👇️ redirect to external URL
  window.location.replace('http://hospitalsiriolibanes.com.py/');

  return null;
}

function Financiadores() {
  // 👇️ redirect to external URL
  window.open('https://hospitalsiriolibanes.com.ar/hslprestadores/app_Login/');

  return null;
}

function Campus() {
  // 👇️ redirect to external URL
  window.open('https://mail.hospitalsiriolibanes.org/httpdocs/moodle/');

  return null;
}

function WebMail() {
  // 👇️ redirect to external URL
  window.open('https://mail.hospitalsiriolibanes.org/');

  return null;
}

export default App;
