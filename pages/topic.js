import React, { Component } from 'react'
import TopicContainer from '../src/containers/topic';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopic, getUser } from "../src/actions/data";
// import Head from 'next/head';
import {Helmet} from "react-helmet";

class Topic extends Component {
	state = {
    loading: true
  }
  
  static async getInitialProps({ query }) {

    let topics = await axios.get(config.api + '/topic/' + query.topicObjId)
    let dataTopic = JSON.stringify(topics.data.content);

    return {
      dataTopic
    }
  }

  async componentDidMount() {
    const { dataTopic, getSiteTopic, getUser } = this.props;
    console.log(JSON.parse(dataTopic));
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
    
    if (dataTopic) {
      getSiteTopic(JSON.parse(dataTopic));

      this.setState({
        loading: false
      })
    }
	}
	

	render() {
    const { loading } = this.state;
    const { dataTopic } = this.state;
    // console.log("SITE TOPIC", this.props);
    
		return (
			<div>
        <Helmet>
          <title>Tipestry | Topics 
          </title>
        </Helmet>
        {
          loading ? 
            <Preloader />
          :
				    <TopicContainer />
        }
			</div>
		)
	}
}
// export default Topic;
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    getUser: getUser,
		getSiteTopic: getSiteTopic
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);