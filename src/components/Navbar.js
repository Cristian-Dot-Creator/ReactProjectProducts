import React from 'react';
import style from '../scss/main.module.scss';
import Logo from "./ToolsLogo.png"


export default function Navbar() {
    
    
const divStyle = {
    height: '5rem',
  };

    // const head = document.querySelector('.main_header');

    // window.addEventListener('scroll', () => {
    //     const scrollPos = window.scrollY;
    //     if(scrollPos > 10) {
    //         head.classList.add('scrolled');
    //     } else {
    //         head.classList.remove('scrolled');
    //     }
    // });
   

//this is broke ASF#

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
                            <a href="#">About</a>
                        </li>
                        <li className={style.nav_link}>
                            <a href="#">Tools</a>
                        </li>
                        <li className={style.nav_link}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
           
    );
}
