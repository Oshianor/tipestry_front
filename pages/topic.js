import React, { Component } from 'react'
import TopicContainer from '../src/containers/topic';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopic, getUser } from "../src/actions/data";

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
    const { dataTopic, getSiteTopic } = this.props;
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
      this.props.getUser(user.data);
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
    // console.log("SITE TOPIC", this.props);
    
		return (
			<div>
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