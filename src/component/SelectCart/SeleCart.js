import React from 'react';
import './SelectCart.css'
import { AiFillDelete } from 'react-icons/ai';

const SeleCart = (props) => {
    const {cart}=props;
    const{name,id,picture} = cart;

    

    

    return (
        <div className='select-box'>
         
           <div className='pb-3'>
      <img className='img-box rounded-circle' src={picture} alt="" /> 
      </div>
      <div className=''>
       <h6>{name} <AiFillDelete></AiFillDelete>  </h6>
       

         
            
        </div>
        </div>
    );
};

export default SeleCart;