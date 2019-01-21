import React from 'react';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser, getProfile, getTipHistory } from "../src/actions/data";
import CheckoutContainer from "../src/containers/checkout";
import Router from "next/router"

class Checkout extends React.Component {
  state = {
    loading: true
  }

    static async getInitialProps({ query }) {

    let profile = await axios.get(config.api + '/users/tipreport/' + query.userObjId)
    let userProfile = JSON.stringify(profile.data.user)
    let history = JSON.stringify(profile.data.history);

    return {
      userProfile,
      history
    }
  }
  
  async componentDidMount() {
    const { getUser, getProfile, userProfile, getTipHistory, history } = this.props;
    let token = localStorage.getItem('token');

    if (token) {
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
      if (user.data[0]._id !== JSON.parse(userProfile)._id) {
        // console.log(user.data[0]._id, "why cn", JSON.parse(userProfile)._id);
        
        // if the current profile is not the logged in user then redirect the user
        Router.push('/');
      }else{
        getUser(user.data[0]);
        getProfile(JSON.parse(userProfile));
        getTipHistory(JSON.parse(history))
        this.setState({
          loading: false
        })
      }
    } else {
			Router.push('/');
		}
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {
          loading ? 
            <Preloader />
          :
           <CheckoutContainer />
        }
      </div>
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
    getProfile: getProfile,
    getTipHistory: getTipHistory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);