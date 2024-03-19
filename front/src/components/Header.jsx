
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import { ImProfile } from 'react-icons/im';
import { FaSignOutAlt, FaShoppingCart, FaUser, FaJediOrder, FaFirstOrder } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CiShop } from "react-icons/ci";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('users');
    navigate('/');
  };

  const handleSearch = () => {
   
    navigate('/', { state: { searchQuery: searchQuery} });
  };

  const searchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <Navbar style={{backgroundColor:'#00ADB5'}} variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand > <p style={{fontFamily:'cursive'}}>GIBI</p></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-2"
                  value={searchQuery}
                  onChange={searchInputChange} 
                />
                <Button variant="outline-dark" onClick={handleSearch}>Search</Button>
              </Form>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <NavItem>
                <LinkContainer to="/profile">
                  <Nav.Link>
                    <ImProfile /> Profile
                  </Nav.Link>
                </LinkContainer>
              </NavItem>
              <LinkContainer to="/order">
                <Nav.Link>
                  <CiShop />  Your Order
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign in
                </Nav.Link>
              </LinkContainer>
              <Nav.Link >
              <FaSignOutAlt  onClick={handleLogout} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

