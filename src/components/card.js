import React from 'react';
import Style from '../scss/main.module.scss';



const Product = ({ name, description, price, image }) => {

    return (
         <div className={Style.card__container}>
         <img src={image} alt="Image of product" className={Style.card__contatiner__image} />
            <div className={Style.card__container_2}>
                <h3 className="card__ProductName">{name}</h3>
                <p className="card__Description">{description}</p>
                <p className="card__price">{price}</p>
                <button className="ProductButton" type="button">Buy Now</button>
            </div>
            

        </div>
    );
}


export default Product
