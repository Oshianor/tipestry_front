import React, { Component } from "react";
import axios from "axios";
import Preloader from "../src/components/preloader/preloader";
import { config } from "../config";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getSiteTopicList, getUser } from "../src/actions/data";
import SiteVerificationContainer from "../src/containers/siteVerificationContainer";
import Router from "next/router";

class Sites extends Component {
  state = {
    loading: true
  }
  
  static async getInitialProps({ query }) {
		// console.log("QUERY", query);
		
    const options = {
      method: "post",
      headers: {
        "content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
				'x-auth-token': query.token
			},
			data: JSON.stringify({ siteObjId: query.siteObjId }),
      url: config.api + "/sites/verification"
    };

    let site = await axios(options);
		let dataTopic = JSON.stringify(site.data.content);
		
		let token = query.token;
    return {
			token,
      dataTopic
    }
  }

  async componentDidMount() {
    const { dataTopic, getSiteTopicList, getUser } = this.props;
    // let token = localStorage.getItem('token');

    // if (token) {
    //   // get me 
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'content-type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'x-auth-token': token
    //     },
    //     url: config.api + '/users/me'
    //   }
    //   let user = await axios(options);
    //   getUser(user.data[0]);
		// }
		
    if (dataTopic) {
      getSiteTopicList(JSON.parse(dataTopic));
      this.setState({
        loading: false
      })
    }
	}


	checkUrlTokenIsSameWithLocalstroge = () => {
		const { token } = this.props;
		let localToken = localStorage.getItem("token");
		if (token !== localToken) {
			Router.push('/');
		}
	}
	

	render() {
    const { loading } = this.state;
		return (
      <div>{loading ? <Preloader /> : <SiteVerificationContainer />}</div>
    );
	}
}
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    getUser: getUser,
		getSiteTopicList: getSiteTopicList
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sites);
