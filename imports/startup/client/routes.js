/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

import Suppliers from '../../ui/pages/Suppliers.js';
import NewSupplier from '../../ui/pages/NewSupplier.js';
import ViewSupplier from '../../ui/containers/ViewSupplier.js';
import EditSupplier from '../../ui/containers/EditSupplier.js';

import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql' }),
});

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <ApolloProvider client={ client }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute name="index" component={ Index } />
          <Route name="suppliers" path="/suppliers" component={ Suppliers } onEnter={ authenticate } />
          <Route name="newSupplier" path="/suppliers/new" component={ NewSupplier } onEnter={ authenticate } />
          <Route name="viewSupplier" path="/suppliers/:_id" component={ ViewSupplier } onEnter={ authenticate } />
          <Route name="editSupplier" path="/suppliers/:_id/edit" component={ EditSupplier } onEnter={ authenticate } />

          <Route name="login" path="/login" component={ Login } />
          <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
          <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
          <Route name="signup" path="/signup" component={ Signup } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    </ApolloProvider>,
    document.getElementById('react-root')
  );
});
