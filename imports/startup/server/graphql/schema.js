import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import suppliers from '../../../api/suppliers/resolvers';
import SupplierMutations from '../../../api/suppliers/mutations';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  description: 'RootQuery for the application.',
  fields: {
    suppliers,
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Mutations for the application.',
  fields: {
    ...SupplierMutations,
  },
});

export default new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
});
