/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import ProfileContainer from '../src/containers/profile';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getTopics,
  getUser,
  getFavourite,
  getComment,
  getFollowers,
  getFollowing,
  getProfile,
  getToken
} from "../src/actions/data";
import Router from "next/router";



class Index extends React.Component {
  state = {
    loading: true
  }
  
  static async getInitialProps({ query }) {

    let profile = await axios.get(config.api + '/users/profile/' + query.userObjId)
    let userProfile = JSON.stringify(profile.data.user)
    let userTopic = JSON.stringify(profile.data.userTopics);
    let userComment = JSON.stringify(profile.data.comment);
    let userFavourite = JSON.stringify(profile.data.favourite);
    let userFollowers = JSON.stringify(profile.data.followers);
    let userFollowing = JSON.stringify(profile.data.following);
    let total = JSON.stringify(profile.data.total);

    return {
      userProfile,
      userTopic,
      userComment,
      userFavourite,
      userFollowers,
      userFollowing,
      total
    }
  }

  async componentDidMount() {
    const {
      getTopics,
      getComment,
      getProfile,
      getFollowing,
      getFollowers,
      getFavourite,
      userProfile,
      userTopic,
      userComment,
      userFavourite,
      userFollowers,
      userFollowing,
      getUser,
      getToken
    } = this.props;
    // console.log(data);
    let token = localStorage.getItem('token');

    try {
      if (token) {
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
        getToken(token);
      }

      getTopics(JSON.parse(userTopic));
      getFavourite(JSON.parse(userFavourite));
      getComment(JSON.parse(userComment));
      getFollowing(JSON.parse(userFollowing));
      getFollowers(JSON.parse(userFollowers));
      getProfile(JSON.parse(userProfile));

      this.setState({
        loading: false
      });
    } catch (error) {
      localStorage.removeItem("token");
      Router.push("/login?sE=true");
    }
  }

  render() {
    const { loading } = this.state;
    const { total } = this.props;
    return (
      <div>
        {
          loading ? 
            <Preloader />
          :
           <ProfileContainer userPostTotal={JSON.parse(total)} />
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
  return bindActionCreators(
    {
      getTopics: getTopics,
      getUser: getUser,
      getFavourite: getFavourite,
      getComment: getComment,
      getFollowers: getFollowers,
      getFollowing: getFollowing,
      getProfile: getProfile,
      getToken: getToken
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
// abundanceoshianor@gmail.com