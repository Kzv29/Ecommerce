import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, ListGroup, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';
export function UpdateProfile({ func }) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
const navigate=useNavigate
  async function handleUpdate() {
    try {
      const data = localStorage.getItem('users');
      const parse = JSON.parse(data);
      const userEmail = parse.email;

      const response = await axios.post('http://localhost:8080/user/update', {
      email: userEmail,
        address: address,
        city: city,
        state: states,
        country: country,
        zipcode: zipcode,
        phone: phone,
        street: street,
      });

      const { message, updatedUser } = response.data;

      if (message === 'success') {
    
        const updatedUserData = { ...parse, address: address };
        localStorage.setItem('users', JSON.stringify(updatedUserData));
        swal("Good job!", `Your profile has been successfully updated!`, "success");

        navigate('/');
        
        func('success');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

  return (
    <Container md={6}>
      <Row className="justify-content-md-center mt-5">
            <ListGroup md={10}>
        <Col md={6}>
          <h3 className="mb-4">Edit</h3>
          <Form>

         
        
            <FormGroup>
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>City/Town/Village</Form.Label>
              <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>State</Form.Label>
              <Form.Control type="text" value={states} onChange={(e) => setStates(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={street} onChange={(e) => setAddress(e.target.value)} />
            </FormGroup>
          
            <Button variant="primary" onClick={handleUpdate} className="mt-3">Update</Button>
          </Form>
        </Col>
        </ListGroup>
      </Row>
    </Container>
  );
}
