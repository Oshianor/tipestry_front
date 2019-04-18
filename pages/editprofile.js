import React from 'react';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from "../src/actions/data";
import EditProfileComponent from '../src/containers/editprofile';
import Router from "next/router";




class Editprofile extends React.Component {
  state = {
    loading: true
  }
  
  async componentDidMount() {
    const { getUser } = this.props;
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
        this.setState({
          loading: false
        });
      } else {
        Router.push("/");
      }
    } catch (error) {
      if (error.response.data.error) {
        localStorage.removeItem("token");
        Router.push("/login?sE=true");
      }
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
           <EditProfileComponent />
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
    getUser: getUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editprofile);