import React from 'react';

const LoginPage = () => (
  <form action="/auth/login" method="post">
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" /><br />
    </div>

    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

export default LoginPage;
