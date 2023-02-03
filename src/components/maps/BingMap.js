import React from "react";
import { NavLink  } from "react-router-dom";
import { FiMap } from "react-icons/fi"
import { MdOutlineLocalHospital } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

function BingMap() {
  // document.getElementsByClassName("gmnoprint gm-bundled-control gm-bundled-control-on-bottom"){

  // }
  return (
    <div className="mapContainer">
      <div className="divMap he">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5635011360837!2d-58.50956588417536!3d-34.589909764275916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb72a9af93c47%3A0xa9d1a1363ce7c573!2sCampana%204658%2C%20C1419%20CABA!5e0!3m2!1ses-419!2sar!4v1663289187046!5m2!1ses-419!2sar" height="295" ></iframe>
      </div>
      <div className="map">
      </div>
      <div className="unopacity">
        <h2 className="title-footer">Asociación de Beneficencia Hospital Sirio Libanés</h2>
        <h3 className="desc-footer"><BsTelephone className="icon-map"/>Conmutador central: <span>(+54) 11 4574-4343</span></h3>
        <h3 className="desc-footer"><FiMap className="icon-map"/>Campana 4658 (C.A.B.A) Buenos Aires C.P. 1417</h3>
        <h3 className="desc-footer"><MdOutlineLocalHospital className="icon-map"/>Guardia las 24 hs.</h3>
      
        <div className="btnContactoFooter"><NavLink className="fixbtncontacto" to='/contacto' >Contáctanos</NavLink></div>
      </div>
    </div>
  );
}


export default BingMap