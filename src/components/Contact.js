import React from 'react'
import '../css/contact.css'


export default function Contact() {
    return (
        <div>
            
          
<div class="top__container">
</div>

<div class="top__container--video">
    
    <div class="video_content">
        <h1>Contact US Today !</h1>
        <p>Get the top rated most quality tools on the market!</p>
    </div>
</div>


<div class="RectangleDiv">
        <div class="RectDiv2">
            <div class="RectDiv2_content">
                <h1>Select your Tool</h1>
                <p>Everything you need in once place. Buy all the tools for the best prices. 
                You can find here all the needed tools from corded and cordless drills, hammers, screwdrivers, Wrenches!</p>
            </div>
            <div class="RectDiv2_img"></div>
        </div>
</div>



<div class="Rectangle2Div">
    <div class="Rect2Div2">
        <div class="Rect2Div2_content">
            <h1>Thank you for Shopping</h1>
            <p>Everything you need in once place. Buy all the tools for the best prices. 
            You can find here all the needed tools from corded and cordless drills, hammers, screwdrivers, Wrenches!</p>
        </div>
        <div class="Rect2Div2_img"></div>
    </div>
</div>








<div class="section">
    <div class="section-form-back">
    <div class="section-form">
    <div id="error"></div>
    <form id="form" action="#" method="GET">
        <div class="form-header">
            <h1>Contact Us</h1>
        </div>
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/>
    </div>

    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"/>
    </div>
    <div class="textarea">
    <p>Message</p>
    <textarea class="contact__form-textarea"></textarea>
    </div>
    <button type="submit" class="contact__button-style">Submit</button>
</form>
</div>
</div>

</div>


<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
<script defer src="./js/form.js"></script>
<script src="https://kit.fontawesome.com/f234aa23f7.js" crossorigin="anonymous"></script>
        </div>
    )
}
