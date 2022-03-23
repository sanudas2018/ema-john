import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
   return (
      <div>
         <nav>
            <div className="container-fluid header">
               <div className="row">
                  <div className="col-md-4">
                     <div className="logo">
                        <img src={logo}></img>
                     </div>
                  </div>
                  <div className="col-md-8 d-flex justify-content-end menu">
                     <a href='#'>Home</a>
                     <a href='#'>Order</a>
                     <a href='#'>Inventory</a>
                     <a href='#'>Manage</a>
                  </div>
               </div>
            </div>
         </nav>
         
      </div>
   );
};

export default Header;