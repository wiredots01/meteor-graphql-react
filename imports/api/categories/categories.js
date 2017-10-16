import { Mongo } from 'meteor/mongo';

const Categories = new Mongo.Collection('Categories');
export default Categories;

Categories.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Categories.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
