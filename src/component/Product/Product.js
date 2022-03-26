import React from 'react';
import './Product.css'
import { Button, Card } from 'react-bootstrap';


const Product = ({product}) => {
console.log(product);
const{name,id,price,picture} = product;



 
 
    return (
        <div className='col-lg-3 col-12 card-box p-0'>
            
            <Card.Img variant="top" src={picture} />
  <Card.Body>
  <h4>{name}</h4>
      <h5 className='text-danger'>  Price: {price} KD</h5>
    <Button variant="primary">ADD TO CART  </Button>
  </Card.Body>
 





        </div>
    );
};

export default Product;