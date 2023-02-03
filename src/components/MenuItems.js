import React from "react"; 
import {useState,useEffect,useRef} from "react";
import Dropdown from "./Dropdown";
import { NavLink  } from "react-router-dom";

var clicked = false;
var seg = true;

function validate() {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var bodyscroll = document.getElementById("header");
        var active = document.getElementById("validate");
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

const MenuItems = ({
    items,
    depthLevel
}) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return ( 
        <li 
        className = {items.cName}
        ref = {ref}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave} >
        {items.submenu ? (<>
                <button type = "button"
                aria-haspopup = "menu"
                aria-expanded = {dropdown ? "true" : "false"
                }
                onClick = {
                    () => setDropdown((prev) => !prev)
                } >
                {
                    items.title
                } {
                    " "
                } {
                    depthLevel > 0 ? <span></span> : <span className="arrow" />
                } </button> <Dropdown depthLevel = {
                    depthLevel
                }
                submenus = {
                    items.submenu
                }
                dropdown = {
                    dropdown
                }
                /> </>
            ) : ( <NavLink to={items.ruta} onClick={validate}> {
                    items.title
                } </NavLink>
            )
        }</li>
    );
};

export default MenuItems;