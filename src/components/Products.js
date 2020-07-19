import React from 'react';
import data from "../data.json"
import Product from './card'
import style from "../scss/main.module.scss";


// we set equal our products
const initialState = {
  products: data
}
// this.state is our brain 
export default class Products extends React.Component {
  constructor() {
      super()
      this.state = initialState

}

filterProducts =(evt) => {
  let value = evt.target.value

  // makes a new array for product availability 
  const allProducts =  [...initialState.products] 
    if (value === "All"){
      this.setState({products: allProducts})
      return 
    }
    //filters by category
  const filterProducts = allProducts.filter(product => {
    return product.category === value
  })
  // only products that we filter
  this.setState({products: filterProducts})
};


filterPrice =(evt) => {
  let value = evt.target.value

  // makes a new array for product availability 
  const allProducts =  [...initialState.products] 
    if (value === "All"){
      this.setState({products: allProducts})
      return 
    }
    //filters by price
  const filterPrice = allProducts.filter(product => {
    return product.price === value
  })
  // only products that we filter
  this.setState({products: filterPrice})
};

render() {
  const mappedcards = this.state.products.map(product => {
    return <Product name={product.productname} price={product.price} description={product.description} image={product.image} /> })
   
    return(
      
        <div className={style.select__main__container}>
            <select className={style.select__btn} onChange={evt => this.filterProducts(evt)} >
              <option value="All">All Types</option>
              <option value="Drill">Drill</option>
               <option value="Hammer">Hammer</option>
               <option value="Wrench">Wrench</option>
               <option value="ScrewDriver">screwdriver</option>
      </select>
      <select className={style.select__btn} onChange={evt => this.filterPrice(evt)} >
              <option value="All">All Prices</option>
              <option value="low">Low</option>
              <option value="Mid">Medium</option>
              <option value="High">High</option>
              <option value="Highest">Highest</option>
      </select>
        
        <div>{mappedcards}</div>

        </div>
  );
}}