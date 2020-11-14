import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import './sign-up.styles.css';
//import { response } from '../../../../server/routes/authRoutes';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      //  mode: "cors",
      // withCredentials: true,
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password, confirmPassword: this.state.password, name: this.state.displayName })
    };
    try {
      //fetch('http://127.0.0.1:5000/signup')
      const res = await fetch('http://127.0.0.1:5000/signup', requestOptions)
        .then((response) => {
          console.log(response.headers['set-cookie'])
          console.log(response.headers['Content-Type'])
          console.log(response.headers)
          console.log(Object.keys(response.headers))

          return response.json();
        })//fetch('http://127.0.0.1:5000/signup')
        .then(data => localStorage.setItem('jwt-auth', data.token))
        .catch((err) => console.log(err));
      //const data = await response.json()
    }
    catch (error) {
      console.log(error)
    }
  }
  handleChange = event => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value
    })
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
