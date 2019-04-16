import React, { Component } from 'react';
import ValidateWithdrawal from '../src/containers/admins/validWithdrawal';
import axios from "axios";
import { config } from "../config";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics } from "../src/actions/data";
import Router from "next/router"



class Controlpanel extends Component {
  static async getInitialProps({ query }) {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-auth-token": query.token
      },
      url: config.api + "/crypto/pending/withdrawals"
    };
    let data = await axios(options);
    let dataTopics = JSON.stringify(data.data.content);
		let token = query.token;
    return {
			token,
      dataTopics
    };
	}
	
	componentDidMount() {
		const { dataTopics, getTopics, token } = this.props;
		let localToken = localStorage.getItem('token')
		if (token !== localToken) {
			Router.push('/');
		}
		getTopics(JSON.parse(dataTopics));
	}
	
  render() {
    return (
      <div>
        <ValidateWithdrawal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTopics: getTopics
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controlpanel);