import React, { useState } from 'react';
import {Card, FormControl} from'react-bootstrap'
import { Link } from 'react-router-dom';
import Rating from './Rating'
import './Product.css';


export default function Product({product}) {


  return (
<>


<Card className='my-3 p-3 rounded'  style={{backgroundColor:'rgb(34, 40, 49)'}}>
    

      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body style={{backgroundColor:'white'}}>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
</>
  )
}




