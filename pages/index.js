/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Homepage from '../src/containers/homepage';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics, getUser, getToken } from "../src/actions/data";
// import Bottom from '../src/components/reuseable/bottom';
import BottomScrollListerer from 'react-bottom-scroll-listener';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import CookieConsent from "react-cookie-consent";



class Index extends React.Component {
  state = {
    loading: true,
    pageNumber: 2,
    more: false
  }
  
  static async getInitialProps({ req }) {
    // console.log('req', req);
    
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    let topics = await axios.get(config.api + '/topic?pageNumber=1')
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      // userAgent,
      dataTopics
    }
  }

  async componentDidMount() {
    const { dataTopics, getTopics, getUser } = this.props;
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
      // this.props.getToken(token)
    }
    
    if (dataTopics) {
      getTopics(JSON.parse(dataTopics));

      this.setState({
        loading: false
      })
    }
  }


  handleFetchMoreTopics = async () => {
    const { pageNumber } = this.state;
    const { data, getTopics } = this.props;
    // this.setState({
    //   more: true
    // })
    let topicsCont = await axios.get(config.api + '/topic?pageNumber=' + pageNumber);
    if (!topicsCont.data.error) {
      topicsCont.data.content.topic.forEach(obj => {
        data.topics.topic.push(obj);
      })
      // console.log("topicsCont", topicsCont);
      
      // console.log("BEFORE", data.topics.topic);
      // data.topics.topic.concat(topicsCont.data.content.topic);
      // console.log(data.topics.topic);
      // console.log("AFTER", data.topics.topic);
      getTopics(
        {
          topic: data.topics.topic,
          total: topicsCont.data.content.total
        }
      );
      this.setState({
        // more: false,
        pageNumber: pageNumber + 1
      })
    }
  }

  render() {
    const { loading, more } = this.state;
    // console.log(this.state);
    
    return (
      <div>
        {
          loading ? 
            <Preloader />
          :
            <BottomScrollListerer onBottom={this.handleFetchMoreTopics} >
              <Homepage />
            </BottomScrollListerer>
        }
      </div>
    );
  }
}

{ email: "1904303852@qq.com" }
 
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
 {
   /* <CookieConsent
                   style={{ zIndex: 99999, background: 'rgb(146, 95, 126)' }}
                   buttonStyle={{ background: 'rgb(255, 255, 255)' }}
                 >
                     This website uses cookies to enhance the user 
                     experience and coins on tipestry not yours until you withdraw them.
                 </CookieConsent> */
 }


        {/* {
          more && 
            <div style={{
              marginTop: 30,
              left: "45%",
              right: "20%",
              bottom: 0,
              position: 'absolute',
              zIndex: 999999,
              height: 50
            }} >
              <CircularProgress color="secondary" />
            </div>
        } */}