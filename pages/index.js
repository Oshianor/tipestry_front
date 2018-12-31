/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Homepage from '../src/containers/homepage';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics, getUser, getToken } from "../src/actions/data";

class Index extends React.Component {
  state = {
    loading: true
  }
  
  static async getInitialProps({ req }) {
    
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    let topics = await axios.get(config.api + '/topic?pageNumber=1')
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      userAgent,
      dataTopics
    }
  }

  async componentDidMount() {
    const { dataTopics, getTopics } = this.props;
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
      this.props.getToken(token)
    }
    
    if (dataTopics) {
      getTopics(JSON.parse(dataTopics));

      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { loading } = this.state;
    console.log("INDEX",this.props);
    
    return (
      <div>
        {
          loading ? 
            <Preloader />
          :
           <Homepage />
        }
      </div>
    );
  }
}

// export default Index;
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopics,
    getUser: getUser,
    getToken: getToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
// abundanceoshianor@gmail.com