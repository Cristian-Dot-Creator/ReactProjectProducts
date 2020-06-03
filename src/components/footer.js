import React from 'react'
import Style from "../scss/main.module.scss";

export default function footer() {
    return (
        <div>

<footer>
            <div className={Style.foot}>
                 <div className="col span-1-of-2">
                 </div>
                    <div className="col span-1-of-2"> 
                            <ul className={Style.footer_nav}>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Tools</a></li>
                                    <li><a href="#">Contact</a></li>
                            </ul>
                    </div>
            <div className="col span-1-of-2">
                        <ul className={Style.social_links}>
                            <li><a href="#"><ion-icon name="logo-facebook" className="facebook"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-twitter" className="twitter"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-instagram" className="instagram"></ion-icon></a></li>
                            <li><a href="#"><ion-icon name="logo-octocat" className="octocat"></ion-icon></a></li>
                        </ul>
            </div>
            </div>
            <div className={Style.foot}><p>CopyRight &copy; 2020 by Tools. All rights reserved.</p>
            </div> 
</footer>      
        </div>
    );
}
