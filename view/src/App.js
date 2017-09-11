import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
