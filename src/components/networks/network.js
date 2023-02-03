import React, { useState } from 'react'
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import styled from 'styled-components';


function network() {
  const[click, setClick] = useState(false);

    const network = () => {
      setClick(!click);
    }
  return (
    <Network>
        <div className='network'>
          <div className={click ? 'show' : ''}>
            <div>
              <a href="https://instagram.com/hospitalsiriolibanesorg?igshid=YmMyMTA2M2Y=" target="_blank"><img src={instagram} /></a>
            </div>
            <div>
              <a href="https://www.facebook.com/hsiriolibanesarg" target="_blank"> <img src={facebook} /></a>
            </div>
            {/* <div>
                <img src={whatsapp} />
            </div> */}
          </div>
            <div className={`icon nav-icon-5 ${click ? 'open' : '' }`} onClick={network}>
                <span ></span>
                <span ></span>
            </div>
        </div>
    </Network>
  )
}

export default network

const Network = styled.div`
  /* nav-icon-5 */
.nav-icon-5{
  background: #81BEF7;
  top: 4px;
  padding: 18px;
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  border: 10px solid #81BEF7;
  position: relative;
  left: 0px;
  cursor: pointer;
  display: inline-block;
  border-radius: 30px;
}
.nav-icon-5 span{
  background-color:#fff;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
  transition-duration: 500ms
}
.nav-icon-5 span:nth-child(1){
    transform: rotate(133deg) scaleY(1.1);
    right: 10px;
    top: 16px;
    
}
.nav-icon-5 span:nth-child(2){
    transform: rotate(49deg) scaleY(1.1);
    left: 11px;
    top: 16px;
    opacity: 1;
}

.nav-icon-5:not(.open):hover span:nth-child(1){
    right: 0;
    transition: width 2s
}
.nav-icon-5:not(.open):hover span:nth-child(2){
    left: 1px;
    transition: width 2s
}


.open span:nth-child(1){
  right: 0;
  transition: width 2s
}

.open span:nth-child(2){
  left: 1px;
  transition: width 2s
}

.show{
  display:none;
}

.b1{
  transform: rotate(45deg);
  top: 13px !important;
}
.b2{
  opacity:0 !important;
}
.b3{
  transform: rotate(-45deg);
  top: 13px !important;
}
`