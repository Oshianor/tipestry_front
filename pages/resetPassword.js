import React, { Component } from "react";
import ResetPassword from "../src/containers/resetpassword";
import axios from 'axios';
import { config } from '../config';
import Router from "next/router";

class ForgotPassword extends Component {
	static async getInitialProps({ query }) {
    let topics = await axios.get(config.api + "/auth/check/resettoken/" + query.token);
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      dataTopics
    };
	}

  componentDidMount = () => {
    let token = localStorage.getItem('token');
    if (token) {
      Router.push("/")
    }
	}
	
  render() {
		const { dataTopics } = this.props;
		let user = JSON.parse(dataTopics);
		console.log("user", user);
		
    return (
      <div>
        <ResetPassword user={user} />
      </div>
    );
  }
}

export default ForgotPassword;
