import './Productscreen.css';

import { json, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Form, Row,Col,Image,ListGroup,Card,Button, ListGroupItem, CloseButton } from 'react-bootstrap'
import products  from '../products'

import Rating from '../components/Rating'
import axios from 'axios'
import mongoose from 'mongoose'
import swal from 'sweetalert';

export default function ProductScreen() {
 const userDetail = localStorage.getItem('users');
  const parse = JSON.parse(userDetail);

  

  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  const [quantity, setQuantity] = useState(1); 
  console.log(product);

  async function addToCart() {
    const userDetail = localStorage.getItem('users');
    const parse = JSON.parse(userDetail);
    console.log(parse);

    console.log(parse._id);
    const response = await axios.post('http://localhost:8080/cart/create', {
      uid: parse._id,
      name: product.name,
      image: product.image,
      brand: product.brand,
      price: product.price,
      quantity: quantity,
    });
    swal('',"Item Added to cart!","success");

    console.log(response);
  }

  return (
    <>
      <Link className='btn btn-dark my-3 btn-go-back' to='/'>
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid className='product-image' />
        </Col>

        <Col md={4} className='product-details'>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3 className='product-name'>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item className='product-price'>Price: ₹{product.price}</ListGroup.Item>
          </ListGroup>
          <ListGroupItem className='product-description'>
            <h4>Description</h4>
            <p>{product.description}</p>
          </ListGroupItem>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup>
            <ListGroupItem>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Select
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                      >
                        {[...Array(product.countInStock).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
              <ListGroupItem>
                <Button
                  
                  className='btn-block add-to-cart-btn'
                  type='button'

                  disabled={product.countInStock === 0}
                  onClick={addToCart}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
