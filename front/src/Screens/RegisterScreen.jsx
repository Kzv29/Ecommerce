import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        email: email,
        password: password,
        username: username,
      });

      console.log(response);
      const { message, userdetail } = response.data;

      if (message === 'failed') {
        swal('Warning!', 'Email already Exist!', 'warning');
      } else {
        console.log(response.data);
        localStorage.setItem('users', JSON.stringify(userdetail));
        navigate('/');
        swal('Success!', 'Account Created !', 'success');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container >
      <Row>
        <Col md={7} className="mx-auto" style={{ marginTop: "10%", boxShadow: "-5px 2px 46px 7px black",borderRadius:"10px" ,padding:"80px "}}>
          <h2 className="text-center mb-4">Register</h2>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Submit}>
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
