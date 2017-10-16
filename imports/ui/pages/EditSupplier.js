import React from 'react';
import { UpdateSupplier } from '../containers/SupplierEditor.js';
import { Link } from 'react-router';

const EditSupplier = ({ data }) => {
  const { loading } = data;
  const doc = data.suppliers && data.suppliers[0];
  return !loading ? (
    <div className="EditSupplier">
      <h4 className="page-header">Editing "{ doc.name }"</h4>
      <UpdateSupplier data={ data } doc={ doc } />
      <br />
      <Link to="/suppliers">back</Link>
    </div>
  ) : <div></div>;
};

EditSupplier.propTypes = {
  data: React.PropTypes.object,
};

export default EditSupplier;
