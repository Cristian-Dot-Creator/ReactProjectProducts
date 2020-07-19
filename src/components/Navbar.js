import React from 'react';
import style from '../scss/main.module.scss';
import Logo from "./ToolsLogo.png"
import { Link } from 'react-router-dom';


export default function Navbar() {
const divStyle = {
    height: '5rem',
  };

    return (
             <div className={style.main_header} id="backTop">
                    <div>
                     <img src={Logo} style={divStyle}></img>
                    </div>
                    

                    <input type="checkbox" className={style.menu_btn} id="menu-btn"/>
                    <label for="menu-btn" className={style.menu_icon}>
                        <span className={style.menu_icon__line}></span>
                    </label>

                    <ul className={style.nav_links}>
                        <li className={style.nav_link}>
                            <a><Link to="/">Home</Link></a>
                        </li>
                        <li className={style.nav_link}>
                            <a><Link to="/Products">Products</Link></a>
                        </li>
                        <li className={style.nav_link}>
                            <a><Link to="/Contact">Contact</Link></a>
                        </li>
                    </ul>
                </div>
           
    );
}
