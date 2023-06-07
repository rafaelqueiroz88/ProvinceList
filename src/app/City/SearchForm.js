import React from 'react';
import { Row, Col, Form as FormComponent, Button } from 'react-bootstrap';

export default function SearchForm(props) {
  const {action, value, submit} = props;

  return (
    <Row>
      <Col>
        <form onSubmit={submit}>
          <FormComponent.Group as={Row} controlId='search-string'>
            <FormComponent.Label column sm={1}>
              Buscar
            </FormComponent.Label>
            <Col sm={9}>
              <FormComponent.Control
                name={'search'}
                type={'text'}
                onChange={action}
                value={value === undefined ? '' : value}
                placeholder={'Digite um estado para ver as cidades disponíveis'}
              />
            </Col>
            <Col>
              <Button>Buscar</Button>
            </Col>
          </FormComponent.Group>
        </form>
      </Col>
    </Row>
  );
}
