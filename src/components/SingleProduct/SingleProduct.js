import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
   const {id, name, img, price, ratings, quantity} = props.product;
   const {handleAddToCart} = props;
   
   return (
      
         <div className='col-md-3 col-sm-6 my-card'>
            <div className='card mt-4'>
               <img className='img-fluid' src={img} alt='sanu' />
               <div className='card-body'>
                  <p className='product-id'>ID: {id}</p>
                  <h5 className='card-title'>P-Name: {name.slice(0, 10)}</h5>
                  <p>Price: {price}</p>
                  <p>Ratings: {ratings}</p>
                  <p>Quantity: {quantity}</p>
               </div>
               <div className='d-grid gap-2'>
                  <button onClick={() => handleAddToCart(props.product)} className='btn btn-primary my-btn' type='button'>Add To Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                  
               </div>
            </div>
         </div>
     
   );
};

export default SingleProduct;