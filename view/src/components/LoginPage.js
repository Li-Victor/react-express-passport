import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      username: '',
      password: ''
    });
    this.props.history.push('/');
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={username} onChange={this.onChange}/><br />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={this.onChange} />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default connect(null, { login })(LoginPage);
