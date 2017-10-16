import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import EditSupplier from '../pages/EditSupplier';

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

export default graphql(supplierQuery, {
  options: ({ params }) => ({
    variables: {
      _id: params._id,
    },
    pollInterval: 10000,
  }),
})(EditSupplier);
