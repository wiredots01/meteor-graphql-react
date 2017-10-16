import React from 'react';
import { browserHistory } from 'react-router';
import { Badge, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import Loading from './Loading';

const handleNav = (_id) => {
  browserHistory.push(`/suppliers/${_id}`);
};

const renderDocuments = ({ suppliers }) => (
suppliers.length > 0 ? <ListGroup className="DocumentsList">
  {suppliers.map(({ _id, name, rating }) => (
    <ListGroupItem key={ _id } onClick={ () => handleNav(_id) }>
      { name }
      <Badge className="pull-right">{ rating }</Badge>
    </ListGroupItem>
  ))}
</ListGroup> :
<Alert bsStyle="warning">No suppliers yet.</Alert>);

const SuppliersList = ({ data }) => (
  !data.loading ? (renderDocuments(data)) : <Loading />
);

SuppliersList.propTypes = {
  data: React.PropTypes.object,
};

export default SuppliersList;
