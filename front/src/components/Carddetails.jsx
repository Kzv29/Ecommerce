import React, { useState } from 'react';
import { Container, Form, FormControl, FormGroup, Row, Col, FormLabel, Button } from 'react-bootstrap';
import swal from 'sweetalert';


export default function Carddetails() {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  function orderplaced() {

    const cardDetails = {
      cardNumber: cardNumber,
      cvv: cvv,
      expiryDate: expiryDate,
    };

   
    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));

    swal("", "Payment Succesfull!", "success");
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <FormLabel>Enter Card Number</FormLabel>
                <FormControl
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <FormLabel>Enter CVV</FormLabel>
                <FormControl
                  type="text"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
                <FormLabel>Enter Expiry Date</FormLabel>
                <FormControl
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                <Button onClick={orderplaced}>Save & Pay</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
