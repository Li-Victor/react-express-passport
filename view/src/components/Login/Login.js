import React from 'react';

export default function Login() {
  return (
    <form action="/login" method="post">
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" /><br />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}
