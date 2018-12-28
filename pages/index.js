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

    let topics = await axios.get(config.api + '/topic')
    let dataTopics = JSON.stringify(topics.data);
    let header = topics.headers;

    return {
      userAgent,
      dataTopics,
      header
    }
  }

  async componentDidMount() {
    const { data } = this.props;
    // console.log(data);
    let token = localStorage.getItem('token');

    if (token) {
      // get me 
      // console.log("DATA>TOKEN", data.token);
      
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
    
    if (this.props.dataTopics) {
      this.props.getTopics(JSON.parse(this.props.dataTopics));

      this.setState({
        loading: false
      })
    }
  }

  render() {
    // console.log("STR", JSON.parse(this.props.dataTopics));
    const { loading } = this.state;
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