import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomePage extends Component {
  renderContent() {
    const { user } = this.props;
    if (user === null) return <div>Something has gone terribly wrong</div>;
    else if (Object.keys(user).length === 0 && user.constructor === Object) { // empty object
      return <p>Welcome! Please <Link to="/login">log in</Link></p>;
    }
    return <a href="/auth/logout">Logout</a>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state,
  };
}

HomePage.propTypes = {
  /* eslint-disable */
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(HomePage);
