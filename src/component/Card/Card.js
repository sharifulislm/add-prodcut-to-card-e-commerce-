import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Card.css'

const Card = () => {
   const [product , setProduct]=useState([]);
   useEffect(() =>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setProduct(data));
   }, []);



    return (
        <div className='container box-contanier'>
            <div className='row'> 
            <div className='Product-container col-lg-9 '>
                <div className='row row-box '> 
              
                 <h3>Product</h3>
                 {
                     product.map(product=> <Product key={product.id} product={product}> </Product>)
                 }

          
            </div>
            </div>
          
            <div className='Card-contanier col-lg-3'>
                <h4> Selected Clothes</h4>

            </div>
            </div>
         
            

        </div>
    );
};

export default Card;