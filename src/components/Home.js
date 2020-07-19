import React from 'react'
import '../css/main.css'


export default function Home() {
    const popImg = {
        height: '3.5rem'
    }

    return (
        <div>
    
    {/* <!-- Shop by Category --> */}
    <div class="previewSquares">
          <div class="heading">
              <h1>Shop by Category</h1>
          </div>  
    
          <div class="row">
    
              <div class="card">
                  <div class="card-header card__header-Drill">
                      <h1>Drills</h1>
                  </div>
                  <div class="card-body">
                      <p>YOU KNOW THE DRILL: Stay prepared for home and household DIY with a tool that can deliver that can deliver the power you need for screwing and drill driving tasks involved 
                      in keeping your home looking great! </p>
                        
                    <a href="#popup" class="btn">Price</a>
                  </div>
              </div>
    
    
    
              <div class="card">
                <div class="card-header card_header-Hammer">
                    <h1>Hammer</h1>
                </div>
                <div class="card-body">
                    <p>Drop forged and heated treated alloy steel head provides maximum striking strength
                        Sharpened </p>
                    
                    <a href="#popup" class="btn">Price</a>
                </div>
            </div>
    
    
            <div class="card">
                <div class="card-header card_header-Wrench">
                    <h1>Wrench</h1>
                </div>
                <div class="card-body">
                    <p>PREMIUM MATERIAL: constructed from high strength drop forged and heat treated chrome vanadium steel</p>
    
                    <a href="#popup" class="btn">Price</a>
                </div>
            </div>
    
    
    
    
            <div class="card">
                <div class="card-header card_header-ScrewDrivers">
                    <h1>Screw-drivers</h1>
                </div>
                <div class="card-body">
                    <p>ERGONOMIC DESIGN：Ergonomic non-slip and soft handle which is made of PP+TPR materials, let you feel soft and comfortable at work.</p>
    
                    <a href="#popup" class="btn">Price</a>
                </div>
            </div>
          </div>
    </div>
    
    {/* <!-- Shop by Category -->
     */}
    
    
    {/* <!-- On Sale Products --> */}
    <div class="previewSquares">
        <div class="heading">
            <h1> On Sale Products</h1>
        </div>  
    
        <div class="row">
    
            <div class="card">
                <div class="card-header card_header-PowerTool">
                    <h1>Power Tools</h1>
                </div>
                <div class="card-body">
                    <p>YOU KNOW THE DRILL: Stay prepared for home and household DIY with a tool that can deliver that can deliver the power you need for screwing and drill driving tasks involved in keeping your home looking great! </p>
                      
                  <a href="#popup" class="btn">Price</a>
                </div>
            </div>
    
    
    
            <div class="card">
              <div class="card-header card__header-CheapHammer">
                  <h1>Heavy Hitter</h1>
              </div>
              <div class="card-body">
                  <p>Drop forged and heated treated alloy steel head provides maximum striking strength
                    Sharpened </p>
                  
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
    
    
          <div class="card">
              <div class="card-header card__header-openWrench">
                  <h1>Fixer Upper</h1>
              </div>
              <div class="card-body">
                  <p>PREMIUM MATERIAL: constructed from high strength drop forged and heat treated chrome vanadium steel</p>
    
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
    
        </div>
    </div>
    
    {/* <!-- On Sale Products -->
    
    <!-- Top-rated Products --> */}
    <div class="previewSquares">
        <div class="heading">
            <h1>Top-rated Products</h1>
        </div>  
    
        <div class="row">
    
            <div class="card">
                <div class="card-header card__header-topRateDrill">
                    <h1>Drills</h1>
                </div>
                <div class="card-body">
                    <p>YOU KNOW THE DRILL: Stay prepared for home and household DIY with a tool that can deliver that can deliver the power you need for screwing and drill driving tasks involved in keeping your home looking great! </p>
                      
                  <a href="#popup" class="btn">Price</a>
                </div>
            </div>
    
    
    
            <div class="card">
              <div class="card-header card__header-TopRatedHammer">
                  <h1>Hammer</h1>
              </div>
              <div class="card-body">
                  <p>Drop forged and heated treated alloy steel head provides maximum striking strength
                    Sharpened</p>
                  
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
    
    
          <div class="card">
              <div class="card-header  card__header-TopRatedWrench">
                  <h1>Wrench</h1>
              </div>
              <div class="card-body">
                  <p>PREMIUM MATERIAL: constructed from high strength drop forged and heat treated chrome vanadium steel</p>
    
                  <a href="#popup" class="btn">Price</a>
              </div>d
          </div>
    
    
    
          <div class="card">
              <div class="card-header card__header-TopRatedScrewDriver">
                  <h1>Screw-drivers</h1>
              </div>
              <div class="card-body">
                  <p>ERGONOMIC DESIGN：Ergonomic non-slip and soft handle which is made of PP+TPR materials, let you feel soft and comfortable at work.</p>
    
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
        </div>
    </div>
    {/* <!-- Top-rated Products --> */}
    
    
    
    {/* <!-- Latest Products --> */}
    <div class="previewSquares">
        <div class="heading">
            <h1> Latest Products</h1>
        </div>  
    
        <div class="row">
    
            <div class="card" >
                <div class="card-header card__header-LatestDrill">
                    <h1>Power Tools</h1>
                </div>
                <div class="card-body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quam atque ratione?</p>
                      
                  <a href="#popup" class="btn">Price</a>
                </div>
            </div>
    
    
    
            <div class="card">
              <div class="card-header card__header-LatestScrewDriver">
                  <h1>ScrewDriver</h1>
              </div>
              <div class="card-body">
                  <p>ERGONOMIC DESIGN：Ergonomic non-slip and soft handle which is made of PP+TPR materials, let you feel soft and comfortable at work.</p>
                  
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
    
    
          <div class="card">
              <div class="card-header card__header-LatestWrench">
                  <h1>Wrench</h1>
              </div>
              <div class="card-body">
                  <p>PREMIUM MATERIAL: constructed from high strength drop forged and heat treated chrome vanadium steel</p>
    
                  <a href="#popup" class="btn">Price</a>
              </div>
          </div>
    
        </div>
    </div>
    {/* <!-- Latest Products --> */}

    {/* <!--  Below I'm using the id popup as an anchor, it is the target. do more research --> */}
    <div class="popup" id="popup"> 
            <div class="popup__content">
                <div class="popup__left">
                    <img class="popup_img_mechanic" alt="Mechanic" style={popImg}/>
                    <img class="popup_img_Carpenter"  alt="Carpenter" />
                </div>
    
                <div class="popup__right">
                    <a href="#backTop" class="popup__close">&times;</a>
                   <h2 class="heading-secondary">Start Shopping Now</h2>
                    <h3 class="heading-tertiary">&ndash; We have great selction of tools</h3>
                    <p class="popup__text">
                       Tools.com buys their top quality tools from the same factories that supply our competitors. We cut out the middleman and pass the savings to you! 
                    </p>
                    <a href="#" class="popup__btn">Shop Now</a>
                </div>
            </div>
        
    </div>
    
    
    
    
    
                </div>
    )
}
