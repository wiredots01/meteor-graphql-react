import { GraphQLList, GraphQLString } from 'graphql';
import Suppliers from './suppliers';
import Supplier from './types';

export default {
  type: new GraphQLList(Supplier),
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
  },
  resolve(parent, args) {
    return Suppliers.find(args).fetch();
  },
};
