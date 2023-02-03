import React from 'react';
import styled from 'styled-components';

function BurguerButton(props) {
  return (
    <Burguer>
        <div id="open" onClick={props.handleClick} 
        className={`icon nav-icon-5 ${props.clicked ? 'open' : '' }`}>
            <span id="b1" ></span>
            <span id="b2" ></span>
            <span id="b3" ></span>
        </div>
    </Burguer>
  )
}

export default BurguerButton

const Burguer = styled.div`
  /* nav-icon-5 */
.nav-icon-5{
    top: 4px;
    width: 35px;
    height: 30px;
    margin: 10px 10px;
    position: relative;
    cursor: pointer;
    display: inline-block;
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
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon-5:not(.open):hover span:nth-child(1){
  transform: rotate(-3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(2){
  transform: rotate(3deg) scaleY(1.1);
}
.nav-icon-5:not(.open):hover span:nth-child(3){
  transform: rotate(-4deg) scaleY(1.1);
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