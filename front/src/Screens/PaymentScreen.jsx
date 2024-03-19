import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, ListGroup, ListGroupItem, FormCheck, Form } from 'react-bootstrap';
import Carddetails from '../components/Carddetails';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const PaymentScreen = () => {
  const [payment, setPayment] = useState([]);
  const [total, setTotal] = useState(0);
  const [tab, setTab] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('CreditCard');
  const navigate = useNavigate();

  function cd() {
    if (paymentMethod === 'Cash On Delivery') {
      swal(" Sucess!", "Order Placed!", "success");
      navigate('/order');

    } else {
     
      setTab(1);
    }
  }

  useEffect(() => {
    async function fetchPayment() {
      try {
        const userData = JSON.parse(localStorage.getItem('users'));
        const response = await axios.get(`http://localhost:8080/cart/find/${userData._id}`);

        setPayment(response.data);

        let subTotal = 0;
        response.data.forEach((item) => {
          subTotal += item.price * item.quantity;
        });
        setTotal(subTotal);
      } catch (error) {
        console.error('Error fetching payment information:', error);
      }
    }

    fetchPayment();
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center py-3">Payment Information</h1>
        <Row>
          <Col>
            <h3>Your Order Summary</h3>
            <ListGroup>
              {payment.map((item, index) => (
                <ListGroup.Item key={index}>
                   {item.name} -₹ {item.price * item.quantity}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h4>Total:₹ {total}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check
              className='my-2'
              type='radio'
              label='Credit Card'
              id='CreditCard'
              name='paymentMethod'
              value='CreditCard'
              checked={paymentMethod === 'CreditCard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            
            <Form.Check
              className='my-2'
              type='radio'
              label='Cash On Delivery'
              id='CashOnDelivery'
              name='paymentMethod'
              value='Cash On Delivery'
              checked={paymentMethod === 'Cash On Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Button onClick={cd}>Confirm Payment</Button>
          </Col>
        </Row>
      </Container>
      {tab === 1 && <Carddetails paymentMethod={paymentMethod} />}
    </>
  );
};

export default PaymentScreen;
