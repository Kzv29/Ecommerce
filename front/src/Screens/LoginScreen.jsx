import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBlackTie } from 'react-icons/fa';
import swal from 'sweetalert';


export default function RegisterScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const Submit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email: email,
        password: password,
      });

      console.log(response);
      const { message, userdetail } = response.data;

      if (message === 'failed') {
        
        swal("Wrong Password!", "Check the Password!", "error");
      } else {
        console.log(response.data);
        localStorage.setItem('users', JSON.stringify(userdetail));
        navigate('/');
        swal("Success!", " ", "success");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Row >
       
        <Col md={{ span: 6, offset: 3 }} style={{ marginTop: "10%", boxShadow: "-5px 2px 46px 7px rgba(0,0,0,0.87)",borderRadius:"10px" ,padding:"80px "}}> 
          <Form  onSubmit={Submit}>
          <h2 style={{fontFamily:'initial',fontSize:'50px',textAlign:'center'}}>Login</h2>
            <FormGroup >
              <Form.Label>Email address</Form.Label> 
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <br />
            <FormGroup>
              <Form.Label>Password</Form.Label><br />
              <InputGroup >
                <FormControl
                  required
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputGroup.Text id="basic-addon1">
                
                  <Button
                    variant="link"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : 'Show'} Password
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </FormGroup>
            <br /><br />
            <Button className="center" block  variant="primary" type="submit" >Login</Button>
          <p className="text-center">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>

          </Form>

          <br />
        </Col>
      </Row>
    </>
  );
}
