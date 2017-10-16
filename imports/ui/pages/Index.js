import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Meteor GraphQL React</h2>
      <p>FMClarity</p>
      <p><a className="btn btn-success" href="/suppliers" role="button">View Suppliers</a></p>
    </Jumbotron>
  </div>
);

export default Index;
