import React, { Component } from 'react'
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopicList, getUser } from "../src/actions/data";
import SiteContainer from '../src/containers/sites';
import Router from "next/router";




class Sites extends Component {
	state = {
    loading: true
  }
  
  static async getInitialProps({ query }) {
		// console.log("QUERY", query);
		
    const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			data: JSON.stringify({ url: query.s }),
			url: config.api + "/sites/get",
		};

    let site = await axios(options);
    // console.log('site', site);
    
    let dataTopic = JSON.stringify(site.data.content);

    return {
      dataTopic
    }
  }

  async componentDidMount() {
    const { dataTopic, getSiteTopicList, getUser } = this.props;
    let token = localStorage.getItem('token');
    let user = sessionStorage.getItem("user");
    try {
      if (!user && token) {
        const options = {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-auth-token": token
          },
          url: config.api + "/users/me"
        };
        let user = await axios(options);
        getUser(user.data[0]);
        sessionStorage.setItem("user", JSON.stringify(user.data[0]));
      } else {
        console.log("NOWWWW");

        // check if the user details is already saved and stop the loading
        getUser(JSON.parse(user));
      }
      getSiteTopicList(JSON.parse(dataTopic));

      this.setState({
        loading: false
      });
    } catch (error) {
      if (error.response.data.error) {
        localStorage.removeItem("token");
        Router.push("/login?sE=true");
      }
    }
	}
	

	render() {
    const { loading } = this.state;

    // console.log("SITE TOPIC", this.props);
    
		return (
			<div>
        {
          loading ? 
            <Preloader />
          :
				    <SiteContainer />
        }
			</div>
		)
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