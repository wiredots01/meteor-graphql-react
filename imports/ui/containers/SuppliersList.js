import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SuppliersList from '../components/SuppliersList.js';

const suppliersQuery = gql`
  query {
    suppliers {
      _id
      name
      rating
    }
  }
`;

export default graphql(suppliersQuery, {
  options: {
    pollInterval: 10000,
  },
})(SuppliersList);
