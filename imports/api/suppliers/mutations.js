import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';
import Supplier from './types';
import Suppliers from './suppliers';

export default {
  createSupplier: {
    type: Supplier,
    args: {
      owner: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, args) {
      const _id = Suppliers.insert(args);
      return { _id };
    },
  },
  updateSupplier: {
    type: Supplier,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id, name, description }) {
      Suppliers.update(_id, { $set: { name, description } });
      return { _id };
    },
  },
  deleteSupplier: {
    type: Supplier,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id }) {
      Supplier.remove(_id);
      return { _id };
    },
  },
  updateSupplierRating: {
    type: Supplier,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      rating: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(source, { _id, rating }) {
      Suppliers.update(_id, { $set: { rating } });
      return { _id };
    },
  },
};
