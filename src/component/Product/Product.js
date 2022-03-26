import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

import './Product.css'
import { Button, Card } from 'react-bootstrap';


const Product = ({product}) => {
console.log(product);
const{name,id,price,picture} = product;



 
 
    return (
        <div className='col-lg-3 col-12 card-box p-0'>
            
            <Card.Img variant="top" src={picture} />
  <Card.Body>
  <h4 className='mt-3'>{name}</h4>
      <h5 className='text-danger mt-3'>  Price: {price} KD</h5>
    <Button className='mt-5 mb1' variant="danger">ADD TO CART <BsFillCartFill></BsFillCartFill>  </Button>
  </Card.Body>
 





        </div>
    );
};

export default Product;