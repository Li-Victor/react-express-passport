import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Welcome! Please <Link to="/login">log in</Link></p>
      </div>
    );
  }
}

export default HomePage;
