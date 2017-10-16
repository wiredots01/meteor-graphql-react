/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

export default class SupplierEditor extends React.Component {
  constructor(props) {
    super(props);
    const initialDocument = props.doc;
    this.state = { doc: initialDocument };
    this.handleMutation = this.handleMutation.bind(this);
  }

  handleMutation(event) {
    event.preventDefault();

    const isCreate = !this.props.doc;
    const successMessage = isCreate ? 'Supplier created!' : 'Supplier updated!';

    const variables = {
      name: this.name.value,
      description: this.description.value,
    };

    if (isCreate) variables.owner = Meteor.userId();
    if (!isCreate) variables._id = this.state.doc._id;

    this.props.mutate({
      variables,
    })
    .then(({ data }) => {
      const { createSupplier, updateSupplier } = data;
      const _id = createSupplier ? createSupplier._id : updateSupplier._id;
      browserHistory.push(`/suppliers/${_id}`);

      if (!isCreate) this.props.data.refetch();
      Bert.alert(successMessage, 'success');
    }).catch((error) => {
      Bert.alert(error, 'danger');
    });
  }

  componentDidMount() {
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.state;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ this.handleMutation }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <input
          ref={ name => (this.name = name)}
          type="text"
          className="form-control"
          name="name"
          defaultValue={ doc && doc.name }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <textarea
          ref={ description => (this.description = description)}
          className="form-control"
          name="description"
        >{ doc && doc.description }</textarea>
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Supplier' }
      </Button>
    </form>);
  }
}

SupplierEditor.propTypes = {
  data: React.PropTypes.object,
  doc: React.PropTypes.object,
  mutate: React.PropTypes.func,
};
