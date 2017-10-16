import { Mongo } from 'meteor/mongo';

const Suppliers = new Mongo.Collection('Suppliers');
export default Suppliers;

Suppliers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Suppliers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

