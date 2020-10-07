import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import '../Css/login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    const { errors, email, password } = this.state;
    this.setState({ [name]: value });

    switch (name) {
      case 'email':
        errors.email = validator.isEmail(email) ? '' : 'please enter a valid email';
      case 'password':
        errors.password = validator.isLength(password, { min: 6 })
          ? ''
          : `password shouldn't be less than 6 character`;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password, errors } = this.state;
    console.log(this.state);

    return (
      <div className='main-container'>
        <header className='formHeader'>My Dairy</header>

        <form className='formbody' onSubmit={this.handleSubmit}>
          <header className='header-text'>Login</header>
          <div className='loginform'>
            <label htmlFor='email'>{errors.email}</label>
            <input
              type='text'
              value={email}
              onChange={this.handleInput}
              placeholder='email'
              name='email'
              required
            />
            <label htmlFor='passord'>{errors.password}</label>
            <input
              type='password'
              value={password}
              onChange={this.handleInput}
              placeholder='password'
              name='password'
              required
            />
            <input type='submit' value='Login' />
            <div className='footer'>
              <h5>
                Don`t have an account?{' '}
                <Link to='/sign-up' className='signuplink'>
                  {' '}
                  Signup{' '}
                </Link>
              </h5>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
