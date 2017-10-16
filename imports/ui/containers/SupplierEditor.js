import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SupplierEditor from '../components/SupplierEditor';

export const CreateSupplier = graphql(gql`
  mutation createSupplier($owner: String!, $name: String!, $description: String!) {
    createSupplier(owner: $owner, name: $name, description: $description) {
      _id
    }
  }
`)(SupplierEditor);

export const UpdateSupplier = graphql(gql`
  mutation updateSupplier($_id: String!, $name: String!, $description: String!) {
    updateSupplier(_id: $_id, name: $name, description: $description) {
      _id
    }
  }
`)(SupplierEditor);
