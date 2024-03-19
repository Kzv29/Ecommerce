import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useLocation } from 'react-router-dom';
import products from '../products';

function HomeScreen() {
  const location = useLocation();
  const [filtered, setFiltered] = useState(products);
  const searchQuery = location.state && location.state.searchQuery;

  const filterProducts = (searchQuery) => {
    let filteredResults = [];
  
    if (searchQuery) {
      filteredResults = products.filter((product) => {
        
        return product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      
      filteredResults = products;
    }
  
    console.log(filteredResults);
    setFiltered(filteredResults);
  };

  useEffect(() => {
   
    filterProducts(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {console.log(searchQuery)}
      <h1>Latest Products</h1>
      <Row>
        {filtered.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
