import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return {};
      case false:
        return <p>Welcome! Please <Link to="/login">log in</Link></p>;
      default:
        return <a href="/auth/logout">Logout</a>;
    }
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

export default connect(mapStateToProps)(HomePage);
