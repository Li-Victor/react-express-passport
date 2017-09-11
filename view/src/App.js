import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userAction';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Route location={location} path="/" exact component={HomePage} />
        <Route location={location} path="/login" exact component={LoginPage} />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
