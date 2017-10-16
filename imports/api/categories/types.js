import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Categories',
  description: 'GraphQL Type for a categories.',
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});
