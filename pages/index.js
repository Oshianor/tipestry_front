/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Homepage from '../src/containers/homepage';
import axios from 'axios';
import Preloader from '../src/components/preloader/preloader';
import { config } from '../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics, getUser, getToken, setPageNumber } from "../src/actions/data";
// import Bottom from '../src/components/reuseable/bottom';
// import BottomScrollListerer from 'react-bottom-scroll-listener';
// import CircularProgress from '@material-ui/core/CircularProgress';
import CookieConsent from "react-cookie-consent";
import { Lang } from '../lang';
import Router from "next/router";
import Head from "next/head";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    minHeight: 45
  },
  tab: {
    alignItems: "baseline",
    padding: 10
  },
  pos: {
    // position: "absolute"
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;

    this.state = {
      loading: true,
      loadingMore: false
    };
  }
  
  

  static async getInitialProps({ req }) {
    // console.log('req', req);

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    let topics = await axios.get(
      config.api + "/topic?pageNumber=1&dataType=hot&pageSize=5"
    );
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      // userAgent,
      dataTopics
    };
  }

  

  async componentDidMount() {
    const { dataTopics, getTopics, getUser, getToken } = this.props;

    let token = localStorage.getItem("token");
    let user = sessionStorage.getItem("user");

    this.setState({
      loading: false
    });

    getTopics(JSON.parse(dataTopics));

    try {
      if (token) {
        if (!user) {
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
          sessionStorage.setItem(
            "user",
            JSON.stringify(user.data[0])
          );
          getToken(token);
        } else {
          // check if the user details is already saved and stop the loading
          getUser(JSON.parse(user));
          this.setState({
            loading: false
          });
          getTopics(JSON.parse(dataTopics));
          return;
        }
      }


      this.setState({
        loading: false
      });

      // this.timer = setInterval(() => {
      //   this.handleFetchMoreTopics();
      // }, 10000);
    } catch (error) {
      // console.log("error", error.response);
      if (error.response.data.error) {
        localStorage.removeItem("token");
        Router.push("/login?sE=true");
      }
    }
  }


  render() {
    const { loading, loadingMore } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Homepage />
        <CookieConsent
          style={{ zIndex: 99999, background: "rgb(146, 95, 126)" }}
          buttonStyle={{ background: "rgb(255, 255, 255)" }}
        >
          {Lang.m3}
          {/* This website uses cookies to enhance the user experience.It is your responsibility to keep the coins you earn safe by withdrawing them to your own wallet. */}
        </CookieConsent>
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
  return bindActionCreators(
    {
      getTopics: getTopics,
      getUser: getUser,
      getToken: getToken,
      setPageNumber: setPageNumber
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Index));