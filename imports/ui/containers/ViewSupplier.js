import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ViewSupplier from '../pages/ViewSupplier.js';

const supplierQuery = gql`
  query ($_id: String!){
    suppliers(_id: $_id) {
      _id
      name
      description
      rating
    }
  }
`;

const supplierMutation = gql`
  mutation deleteSupplier($_id: String!){
    deleteSupplier(_id: $_id) {
      _id
    }
  }
`;

const supplierMutationRating = gql`
  mutation updateSupplierRating($_id: String!, $rating: Int!){
    updateSupplierRating(_id: $_id, rating: $rating) {
      _id
    }
  }
`;


export default compose(
  graphql(supplierQuery, {
    options: ({ params }) => ({
      variables: {
        _id: params._id,
      },
      pollInterval: 10000,
    }),
  }),
  graphql(supplierMutation, {
    name: 'deleteMutation',
    options: ({ params }) => ({
      variables: {
        _id: params._id,
      },
    }),
  }),
  graphql(supplierMutationRating, {
    name: 'ratingMutation',
  }),
)(ViewSupplier);
