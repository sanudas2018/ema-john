
import { useEffect, useState } from 'react';
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

   const handleAddToCart = (product) =>{
      const newCart = [...cart, product];
      setCart(newCart);
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
               <div className='col-md-2 col-sm-4 bg-info sticky-sm-top'>
                  <Cart cart= {cart}></Cart>

               </div>
            </div>

         </div>
         
      </div>
   );
};

export default Shop;