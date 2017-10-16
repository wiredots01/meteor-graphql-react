import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'Suppliers',
  description: 'GraphQL Type for suppliers',
  fields: {
    _id: { type: GraphQLString },
    owner: { type: GraphQLString },
    name: { type: GraphQLString },
    rating: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});
