import React, { useState } from 'react'
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import BurguerButton from './BurguerButton';


function Navbar() {
    const handleClick = () => {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var active = document.getElementById("validate");
        var bodyscroll = document.getElementById("header");
        var open = document.getElementById("open");
        if(!active.classList.contains( 'active' )){
            active.classList.add( 'active' )
            open.classList.add( 'open' )
            b1.classList.add( 'b1' )
            b2.classList.add( 'b2' )
            b3.classList.add( 'b3' )
            bodyscroll.classList.add( 'scroll' )
        }else{
                active.classList.remove( 'active' )
                b1.classList.remove( 'b1' )
                b2.classList.remove( 'b2' )
                b3.classList.remove( 'b3' )
                bodyscroll.classList.remove( 'scroll' )
        }
    }
    
  return (
    <nav className="menusn">
        <ul id="validate" className={`menus`}>
            {
                menuItems.map((menu, index)=>{
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                })
            }
        </ul>
        <div className='burguer'>
            <BurguerButton handleClick={handleClick}/>
        </div>
    </nav>
  )
}

export default Navbar