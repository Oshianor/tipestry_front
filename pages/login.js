import React, { Component } from 'react'
import LoginContainer from '../src/containers/login';
import Router from "next/router";

class Login extends Component {
  componentDidMount = () => {
    let token = localStorage.getItem('token');
    if (token) {
      Router.push("/")
    }
  }
  
  render() {
    return (
      <div>
        <LoginContainer />
      </div>
    )
  }
}
export default Login;