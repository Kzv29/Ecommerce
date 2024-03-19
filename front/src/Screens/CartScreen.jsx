import { Button, ListGroup, ListGroupItem, Stack } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

import { Container } from 'react-bootstrap';
import '../Screens/Cartscreen.css';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


export default function CartScreen() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()
 


function payment(){
  const data=localStorage.getItem('users')
  const userData = JSON.parse(data)
  const addressadata=userData.address
  if (!addressadata) {
    swal("Warning!", "Address not Found!", "error");
    navigate('/profile')
  } else {
  
   navigate('/payment')
  }
 
}

async function deletecart(itemId) {
  try {
    const response = await axios.delete(`http://localhost:8080/cart/cart/${itemId}`);
    if (response.status === 200) {
      swal("Warning!", "Deleted!", "warning");
      // You may want to refresh the cart here if needed
    }
  } catch (error) {
    console.error('Error deleting cart item:', error);
  }
}

  useEffect(() => {
    async function cartInfo() {
      const userData = JSON.parse(localStorage.getItem('users'));
      const response = await axios.get(`http://localhost:8080/cart/find/${userData._id}`);

      setCart(response.data);

     
      let subTotal = 0;
      response.data.forEach(item => {
        subTotal += item.price * item.quantity;
      });
      setTotal(subTotal);
    }
   

  
    cartInfo();

  }, [cart]);
 

;


  return (
    <>
      <Container>
<Stack gap={3}>
<ListGroup>
              {cart.map((item, index) => (
                <ListGroupItem key={index}>
                  <Row>
                    <Col>
                      <img src={item.image} alt={item.name} width='150px' />
                    </Col>
                    <Col>
                      <h6>{item.name}</h6>
                    </Col>
                    <Col>
                      <h6>Price: {item.price}</h6>
                    </Col>
                    <Col>
                      <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col>
                      <p>Sub Total: {item.price * item.quantity}</p>
                    </Col>
                    <Button onClick={() => deletecart(item._id)}>Delete</Button>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
</Stack>
        {/* <h1 className="text-center py-3">Your Shopping Cart</h1>
        <Row sm={10} md={5}  style={{ display: 'flex' }} >
          <Col  >
           
          </Col>
        </Row>
        <Row> */}
          <Col>
            <h4>Total: {total}</h4>
          </Col>
        
       {/* </Row> */}

  
 
    <Button onClick={payment} >Proceed To Pay</Button>
 

      </Container>
    </>
  );
}
