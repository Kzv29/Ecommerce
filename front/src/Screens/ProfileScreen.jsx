import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';
import { UpdateProfile } from '../components/Profilecomp';

export default function ProfileScreen() {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCounty] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [e, sete] = useState(0);
 
  let i = 0;
  
  useEffect(() => {
    async function fetchData() {
      try {
        
        const userData = JSON.parse(localStorage.getItem('users'));
        const response = await axios.get(`http://localhost:8080/user/userprofile/${userData._id}`);
        const { city, state, phone, zipcode, country, street} = response.data.userdetail;
    
        setStreet(street);
        setCity(city);
        setState(state);
        setPhone(phone);
        setCounty(country);
        setAddress(address);
        setZipcode(zipcode);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    fetchData();
  }, [e]);

  function flag(e) {
    i = i + 1;
    console.log(e);
    sete(i);
  }

  return (
    <>
      <Row>
        <Col>
          <ListGroup>
            <h3 className="mb-4">Profile Information</h3>
            <ListGroup.Item>
        
              <p>Address: {`${street}, ${city}, ${state}, ${country}`}</p>
              <p>Postal Code: {zipcode}</p>
              <p>Phone Number: {phone}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <UpdateProfile func={flag} data={e}></UpdateProfile>
        </Col>
      </Row>
    </>
  );
}
