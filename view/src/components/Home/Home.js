import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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

export default Home;
