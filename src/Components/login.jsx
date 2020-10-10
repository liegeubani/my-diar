import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import '../Css/login.css';

const formValid = ({ errors, ...rest}) => {
  let valid = true;

   // validate form errors being empty
  Object.values(errors).forEach( val => { val.length > 0 && (valid = false);
  }); 

  // validate the form was filled out
  Object.values(rest).forEach(val => {
      val === null && (valid = false)

  });

  return valid;
}


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
      break
      case 'password':
        errors.password = validator.isLength(password, { min: 6 })
          ? ''
          : `password shouldn't be less than 6 character`;
      break
    default:
    
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if(formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          Email: ${this.state.email}   
          Password: ${this.state.password}   
      `)
  }else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');            
  
};
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
            {/* <label htmlFor='email'>{errors.email}</label> */}
            <input
              type='text'
              className={errors.email.length > 0 ? "error" : null}
              value={email}
              onChange={this.handleInput}
              placeholder='email'
              name='email'
              required
            />
            {errors.email.length > 0 && (
                <span className="errorMessage">{errors.email}</span>
            )}
            {/* <label htmlFor='passord'>{errors.password}</label> */}
            <input
              type='password'
              className={errors.password.length > 0 ? "error" : null}
              value={password}
              onChange={this.handleInput}
              placeholder='password'
              name='password'
              required
            />
            {errors.password.length > 0 && (
                <span className="errorMessage">{errors.password}</span>
            )}
            <input type='submit' value='Login' />
            <div className='footer'>
              <small>
                Don`t have an account?{' '}
                <Link to='/sign-up' className='signuplink'>
                  {' '}
                  Signup{' '}
                </Link>
              </small>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
