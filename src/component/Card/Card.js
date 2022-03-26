import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SeleCart from '../SelectCart/SeleCart';

import './Card.css'

const Card = () => {

    
   const [product , setProduct]=useState([]);
   
  const [cart , setCart]=useState([]);

   const ShowCart = (product)=> {
       const newCart = [...cart,product];
         setCart(newCart);

}
console.log(cart.length)


   useEffect(() =>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setProduct(data));
   }, []);



    return (
        <div className='container box-contanier'>
            <div className='row'> 
            <div className='Product-container col-lg-9 pe-0 me-0 m-auto'>
                <div className='row row-box '> 
              
                 <h3>Product</h3>
                 {
                     product.map(product=> <Product  key={product.id} product={product} ShowCart={ShowCart}> </Product>)
                 }

          
            </div>
            </div>
          
            <div className='Card-contanier mt-5 card-box-right col-lg-3'>
            <h4 className='mt-4'> Selected Clothes</h4>
       {
           cart.map((cart) => (<SeleCart key={cart.id} cart={cart}> </SeleCart> ))
       }
                
     
      
           <button className='mt-5 mb-1'> CHOOSE 1FOR ME</button>
           <button className='mb-4'> CHOOSE AGAIN </button>

            </div>
            </div>
         
            

        </div>
    );
};

export default Card;