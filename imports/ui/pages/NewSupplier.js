import React from 'react';
import { CreateSupplier } from '../containers/SupplierEditor.js';
import { Link } from 'react-router';

const NewSupplier = () => (
  <div className="NewSupplier">
    <h4 className="page-header">New Supplier</h4>
    <CreateSupplier />
    <br />
    <Link to="/suppliers">back</Link>
  </div>
);

export default NewSupplier;
