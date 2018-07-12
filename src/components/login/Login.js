import React from 'react';
import render from 'react-dom';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import Article from '../ui/Article';

const Login = ({username, password, onChange, onSubmit, submitted, disabled, busy }) => (
  <section className="login fixed container">
    <h1>Login</h1>
    <Article>
      <div className="segment">
        <form id="login">
          <TextInput
            label="Username:"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={username}
            disabled={disabled}
            onChange={onChange}
            message={submitted && !username &&  "Username is required"}
          />

          <TextInput
            label="password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            disabled={disabled}
            onChange={onChange}
            message={submitted && !password &&  "Password is required"}
          />

          <Button
            type="submit"
            label="Login"
            onClick={onSubmit}
            disabled={disabled}
            className = {busy && "loading"}
          />
        </form>
      </div>
    </Article>


  </section>
);

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitted: PropTypes.bool,
  disabled: PropTypes.bool,
  busy: PropTypes.bool
};

export default Login;
