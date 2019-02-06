import React, { Component } from 'react'
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopicList, getUser } from "../src/actions/data";
import SiteContainer from '../src/containers/sites';

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
    // console.log(data);
    let token = localStorage.getItem('token');

    if (token) {
      // get me 
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/me'
      }
      let user = await axios(options);
      getUser(user.data[0]);
    }
    // console.log('dataTopic', dataTopic);
    
    if (dataTopic) {
      getSiteTopicList(JSON.parse(dataTopic));

      this.setState({
        loading: false
      })
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