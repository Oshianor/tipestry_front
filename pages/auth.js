import React from 'react';
import { config } from '../config';
import Router from "next/router"
import axios from 'axios';

class Auth extends React.Component {
  static async getInitialProps({ query, param }) {
		// console.log(query, param);
		
    let contacts = await axios.get(config.api + '/users/google/token?code=' + query.code)

    return contacts;
  }
  

  render() {
		return null;
	}
}

export default Auth;