import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

import * as Constants from './Constants';
import SearchForm from './City/SearchForm';

export default function Cities() {
  const effectRan = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (effectRan.current === true) {
      setIsLoading(true);
      fetchCities();
      setTimeout(() => setIsLoading(false), 2000);
    };

    return () => {
      effectRan.current = true;
    }
  }, []);

  function fetchCities(params = null) {
    const api = `${Constants.BASEAPI}/cities`;
    setCities([]);

    axios.get(params ? `${api}?${params}` : api).then((r) => {
        setCities([...r.data.cities]);
      }).catch((r) => {
        console.log(r);
      });
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = `q[name_or_slug_cont]=${query}`;
    
    setIsLoading(true);
    fetchCities(params);
    setTimeout(() => setIsLoading(false), 2000);
  };

  let citiesLi = [];
  if (!isLoading && cities.length > 0) {
    citiesLi = cities.map((city) => {
      return(<li key={city.slug}>{city.name}</li>);
    });
  }

  return (
      isLoading ?
        <Container>
          <div style={{marginTop: '25%', marginLeft: '50%'}}>
            <Spinner animation="border" variant="primary" />
          </div>
        </Container> :
      <Container className="pt-5">
        <Row>
          <Col className="pb-3">
            <h2>Cidades</h2>
          </Col>
        </Row>
        <SearchForm action={handleInputChange} value={query} submit={handleSearchSubmit} />
        <Row className="pt-3">
          <Col>
            <ul>
              {citiesLi}
            </ul>
          </Col>
        </Row>
      </Container>
  );
}
