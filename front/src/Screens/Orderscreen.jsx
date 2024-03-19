import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Badge, Col, Row } from 'react-bootstrap';

export default function Orderscreen() {
  const [order, setOrder] = useState([]);
  const [paymentMode, setPaymentMode] = useState('');

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('users'));
        const response = await axios.get(`http://localhost:8080/cart/find/${userData._id}`);
        console.log(response.data);
        setOrder(response.data);

        const cardDetails = JSON.parse(localStorage.getItem('cardDetails'));
        if (cardDetails) {
          console.log(cardDetails);
          setPaymentMode('Online');
        } else {
          setPaymentMode('Cash on Delivery');
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <>
      <Container style={{ backgroundColor: '#222831' }}>
        <Row>
          <Col style={{padding:'20px'}} >
            <Table  striped bordered hover variant="light">
              <thead  >
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price per item</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {order.map((order) => (
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.quantity}</td>
                    <td>₹{order.price}.00</td>
                    <td>₹{(order.price * order.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6} style={{padding:'20px'}}>
            <Table striped bordered hover variant="light"  >
              <thead>
                <tr>
                  <th>Order Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment Mode</td>
                  <td>{paymentMode}</td>
                </tr>
                <tr>
                  <td>Delivered Status</td>
                  <td>
                    <Badge variant="warning">Not Delivered</Badge>
                  </td>
                </tr>
              </tbody>
              
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}









