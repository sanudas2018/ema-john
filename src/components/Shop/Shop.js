
import { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([])
   const [cart, setCart] = useState([])
   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
   },[])
// লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে 
useEffect(() => {
   const storedCart = getStoredCart();
   const savedCart = [];
   for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
         const quantity = storedCart[id];
         addedProduct.quantity = quantity;
         savedCart.push(addedProduct);
      }
   }
   setCart(savedCart);
},[products])
   const handleAddToCart = (selectedProduct) =>{
      // লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে 
      let newCart = [];
      const exists = cart.find(product => product.id === selectedProduct.id);
      if(!exists){
         selectedProduct.quantity = 1;
         newCart = [...cart, selectedProduct];
      }else{
         const rest = cart.filter(product => product.id !== selectedProduct.id);
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, exists];
      }

      setCart(newCart);
      // লোকাল স্টোরেজ থেকে ডাটা গুলা নিয়ে দেখতে হবে 
      addToDb(selectedProduct.id)
   }
  
   return (
      <div>
         <div className='container-fluid'>
            <div className='row'>
               <div className='col-md-10 col-sm-8'>
                  <div className='row'>
                     {
                        products.map(product => <SingleProduct key={product.id} product={product} handleAddToCart={handleAddToCart}></SingleProduct>)
                     } 
                  </div>            

               </div>
               <div className='col-md-2 col-sm-4 bg-info '>
                  <div className='my-sticky'>
                     <Cart cart= {cart}></Cart>
                  </div>
                  

               </div>
            </div>

         </div>
         
      </div>
   );
};

export default Shop;