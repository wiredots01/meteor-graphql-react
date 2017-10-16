import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import SuppliersList from '../containers/SuppliersList.js';

const Suppliers = () => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Suppliers</h4>
          <Link to="/suppliers/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >New Supplier</Button>
          </Link>
        </div>
        <SuppliersList />
      </Col>
    </Row>
  </div>
);

export default Suppliers;
