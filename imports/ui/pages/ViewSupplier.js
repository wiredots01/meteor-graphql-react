import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { Bert } from 'meteor/themeteorchef:bert';
import StarRating from 'react-bootstrap-star-rating';

const handleEdit = (_id) => {
  browserHistory.push(`/suppliers/${_id}/edit`);
};

const handleRemove = (deleteMutation, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    deleteMutation({ _id })
    .then(() => {
      browserHistory.push('/suppliers');
      Bert.alert('Supplier deleted!', 'success');
    }).catch((error) => {
      Bert.alert(error, 'danger');
    });
  }
};

const handleRatingChange = (ratingMutation, _id, rating) => {
  ratingMutation({
    variables: { _id, rating },
  }).then(() => {
    Bert.alert(`${rating} stars!`, 'success');
  });
};

const ViewSupplier = ({ data, deleteMutation, ratingMutation }) => {
  const { loading } = data;
  const doc = data.suppliers && data.suppliers[0];

  return !loading ? (
    <div className="ViewSupplier">
      <div className="page-header clearfix">

        <h4 className="pull-left">{ doc && doc.name }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(deleteMutation, doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <p>{ doc && doc.description }</p>
      <StarRating
        defaultValue={(doc && doc.rating) || 0}
        min={0}
        max={10}
        step={1}
        onRatingChange={ (event, newRating) => handleRatingChange(ratingMutation, doc._id, newRating)}
      />
      <br />
      <Link to="/suppliers">back</Link>
    </div>
  ) : <div></div>;
};

ViewSupplier.propTypes = {
  data: React.PropTypes.object,
  deleteMutation: React.PropTypes.func,
  ratingMutation: React.PropTypes.func,
};

export default ViewSupplier;
