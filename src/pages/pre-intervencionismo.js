import React from 'react'
import './pages-css/preintervencionismo.css';
import BingMap from '../components/maps/BingMap';
import background from './images-page/background-circle-white.png'
import logo from './images-page/logo-black.svg'
import { NavLink  } from "react-router-dom";

function enviar(){
    // const url_local="http://localhost/admin/api/preintervencion/";
    const prod = 'https://hospitalsiriolibanes.org/cms/api/preintervencion/'

    var checkboxes = document.querySelectorAll('input[name="antecedentes"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    var pantecedentes = JSON.stringify(values);

    var pnombre = document.getElementById("nombre").value
    var pdni = document.getElementById("dni").value
    var pedad = document.getElementById("edad").value
    var pf_nacimiento = document.getElementById("f_nacimiento").value
    var ptelefono = document.getElementById("telefono").value
    var pcorreo = document.getElementById("correo").value
    var pcalle = document.getElementById("calle").value
    var paltura = document.getElementById("altura").value
    var ppiso = document.getElementById("piso").value
    var pdpto = document.getElementById("dpto").value
    var pobra_social = document.getElementById("obra_social").value
    var pn_beneficiario = document.getElementById("n_beneficiario").value
    var pcirugia_cardiaca_previa = document.getElementById("cirugia_cardiaca_previa").value
    var pcancer_previa = document.getElementById("cancer_previa").value
    var palergias = document.getElementById("alergias").value
    var pmedicamentos = document.getElementById("medicamentos").value
    
    const requestOptions = {
     
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre:pnombre,
        dni:pdni,
        edad:pedad,
        f_nacimiento:pf_nacimiento,
        telefono:ptelefono,
        correo:pcorreo,
        calle:pcalle,
        altura:paltura,
        piso:ppiso,
        dpto:pdpto,
        obra_social:pobra_social,
        n_beneficiario:pn_beneficiario,
        antecedentes:pantecedentes,
        cirugia_cardiaca_previa:pcirugia_cardiaca_previa,
        cancer_previa:pcancer_previa,
        alergias:palergias,
        medicamentos:pmedicamentos
    })
  };
  fetch(prod, requestOptions)
      .then(response => response.json())
    //   .then(data => this.setState({ data }).bind(this));
      document.getElementById("respuesta").style = `
      width: 330px;
      padding-left: 29px;
      position: relative;
      margin: 20px auto;
      padding-top: 6px;
      background: rgb(108 178 219);
      border-radius: 6px;
      color: white;
      top: 11px;`
      document.getElementById("respuesta").innerHTML = "Su consulta fue enviada correctamente.";
       pnombre = document.getElementById("nombre").value = ''
       pdni = document.getElementById("dni").value= ''
       pedad = document.getElementById("edad").value= ''
       pf_nacimiento = document.getElementById("f_nacimiento").value= ''
       ptelefono = document.getElementById("telefono").value= ''
       pcorreo = document.getElementById("correo").value= ''
       pcalle = document.getElementById("calle").value= ''
       paltura = document.getElementById("altura").value= ''
       ppiso = document.getElementById("piso").value= ''
       pdpto = document.getElementById("dpto").value= ''
       pobra_social = document.getElementById("obra_social").value= ''
       pn_beneficiario = document.getElementById("n_beneficiario").value= ''
       pcirugia_cardiaca_previa = document.getElementById("cirugia_cardiaca_previa").value= ''
       pcancer_previa = document.getElementById("cancer_previa").value= ''
       palergias = document.getElementById("alergias").value= ''
       pmedicamentos = document.getElementById("medicamentos").value= ''
}


function pre_intervencionismo() {
  return (
    <div>
      <div className='pre-banner'>
        <img  className='pre-logoback' src={logo}/>
        <h2>Portal de Pacientes</h2>
      </div>

      <section>
          <form id="consultaForm" className="pre-fieldset" >
            <fieldset >
            <legend>Datos Personales</legend>
                <div className="preInscripcionesForm">
                    <input type="text"  id="nombre" name="nombre" placeholder='Nombre'/>
                    <input type="text"  id="dni" name="dni" placeholder='Dni'/>
                </div>
                <div className="preInscripcionesForm">
                    <input type="text" className="" id="edad" name="edad" placeholder='Edad'/>
                    <input type="date"  className="" id="f_nacimiento" name="f_nacimiento" placeholder='Fecha de nacimiento'/>
                </div>
                <div className="preInscripcionesForm">
                    <input type="text"  id="telefono" name="telefono" placeholder='Fecha de nacimiento'/>
                    <input type="text"  id="correo" name="correo" placeholder='Correo'/>
                </div>
                <div className="preInscripcionesForm">
                    <input type="text"  id="calle" name="calle" placeholder='Calle'/>
                    <input type="text"  id="altura" name="altura" placeholder="Altura"/>
                </div>
                <div className="preInscripcionesForm">
                    <input type="text"  id="piso" name="piso" placeholder="Piso"/>
                    <input type="text"  id="dpto" name="dpto" placeholder="Departamento"/>
                </div>
                <div className="preInscripcionesForm">
                    <input type="text"  id="obra_social" name="obra_social" placeholder="Obra social"/>
                    <input type="text"  id="n_beneficiario" name="n_beneficiario" placeholder="Nº De beneficiario"/>
                </div>
            </fieldset>

            <fieldset className="pre-checkbox">
            <legend>Antecedentes</legend>
                <div className='pre-cont-check'>
                    <div>
                        <input type="checkbox" name="antecedentes" value="HTA" /> <label>HTA (hipertensión arterial)</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="TABAQUISMO / EX TABAQUISMO" /> <label>TABAQUISMO / EX TABAQUISMO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="DIABETES" /> <label>DIABETES</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="EPOC" /> <label>EPOC</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="ISUFICIENCIA RENAL" /> <label>ISUFICIENCIA RENAL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="INFARTO PREVIO" /> <label>INFARTO PREVIO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="ACV PREVIO" /> <label>ACV PREVIO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="CIRUGIA CARDIACA PREVIA" /> <label>CIRUGÍA CARDIACA PREVIA (EN CASO AFIRMATIVO ESPECIFICAR)</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="ANGIOPLASTIA PREVIA" /> <label>ANGIOPLASTIA PREVIA</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="DETERIORO NEUROLOGICO PREVIO" /> <label>DETERIORO NEUROLOGICO PREVIO</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="CANCER" /> <label>CANCER (EN CASO AFIRMATIVO ESPECIFICAR)</label>
                    </div>
                    <div>
                        <input type="checkbox" name="antecedentes" value="RADIOTERAPIA PREVIA" /> <label>RADIOTERAPIA PREVIA</label>
                    </div>
                </div>
                <div className='pre-content-textarea'>
                  <div> 
                    <textarea placeholder="¿Tuvo alguna cirugia cardiaca previa?..." id="cirugia_cardiaca_previa" name="cirugia_cardiaca_previa"/>
                  </div>
                  <div> 
                    <textarea placeholder="¿Tuvo cancer previamente? ..." id="cancer_previa" name="cancer_previa"/>
                  </div>
                  <div> 
                    <textarea placeholder="¿Es usted alergico? ¿A que? ..." id="alergias" name="alergias"/>
                  </div>
                  <div> 
                    <textarea  placeholder="¿Se encuentra usted tomando medicamento? ..." id="medicamentos" name="medicamentos"/>
                  </div>
                </div>
            </fieldset>

        </form>
        <div id="respuesta"></div>
        <div className='pre-btn-send'>
          <button type="button" onClick={enviar}>ENVIAR</button>
        </div>
      </section>

     


        <BingMap/>
    </div>
  )
}


export default pre_intervencionismo