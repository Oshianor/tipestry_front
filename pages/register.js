import React, { Component } from 'react'
import RegisterContainer from "../src/containers/register";
import Router from "next/router";

class Register extends Component {
  componentDidMount = () => {
    let token = localStorage.getItem('token');
    if (token) {
      Router.push("/")
    }
  }
  render() {
    return (
      <div>
        <RegisterContainer />
      </div>
    )
  }
}

export default Register;