import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
   const {cart} = props;

   let total= 0;
   let shipping = 0
   // লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে 
   let quantity = 0;
   for(const product of cart){
      // লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে 
      quantity = quantity + product.quantity;

      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
   }
   const tax = (total * 10/100).toFixed(2);
   const grandTotal = total + shipping + parseFloat(tax);
   return (
      <div>
         <h4>Order Summary</h4>
         {/* // লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে  */}
         {/* <p>Selected Items: {cart.length}</p> */}
         <p>Selected Items: {quantity}</p>
         <p>Total Price: {total}</p>
         <p>Total Shipping: {shipping}</p>
         <p>Tax: {tax}</p>
         <p className='fw-bold'>Grand Total: {grandTotal.toFixed(2)}</p>
         
      </div>
   );
};

export default Cart;