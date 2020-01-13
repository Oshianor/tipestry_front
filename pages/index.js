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

      getTopics(JSON.parse(dataTopics));

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

  // componentWillUnmount() {
  //   console.log("this.timer)");
    
  //   clearInterval(this.timer);
  // }
  

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT2JqSWQiOiI1Y2I0N2E4NTdhMTlkNjMzNDdmODAyZWUiLCJpZCI6NDUxOCwiaXNfYWRtaW4iOjAsImlhdCI6MTU1NTMzMTc0MX0.ve3dVAyXsFQEjEaanod4BxQp5RjUntuNb67Xrlkc-YM

  // handleFetchMoreTopics = async () => {
  //   try {
  //     const { data, getTopics, setPageNumber } = this.props;
  //     const { loadingMore } = this.state;

  //     this.setState({
  //       loadingMore: true
  //     });
      

  //     if (!loadingMore) {
  //       let topicsCont = await axios.get(
  //         config.api +
  //           "/topic?pageNumber=" +
  //           data.pageNumber +
  //           "&dataType=" +
  //           data.type
  //       );
  //       if (!topicsCont.data.error) {
  //         topicsCont.data.content.topic.forEach(obj => {
  //           data.topics.topic.push(obj);
  //         });

  //         this.setState({
  //           loadingMore: false
  //         });
  //         getTopics({
  //           topic: data.topics.topic,
  //           total: topicsCont.data.content.total
  //         });
  //         let num = Number(data.pageNumber) + 1;          
  //         setPageNumber(num);
  //       }
  //     }
  //   } catch (error) {
  //     console.log("error", error);
      
  //   }
  // };




  render() {
    const { loading, loadingMore } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Head>
          {/* <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/containerStyle.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="/static/sliderStyle.css"
          /> */}
        </Head>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Homepage />
            <CookieConsent
              style={{ zIndex: 99999, background: "rgb(146, 95, 126)" }}
              buttonStyle={{ background: "rgb(255, 255, 255)" }}
            >
              {Lang.m3}
              {/* This website uses cookies to enhance the user experience.It is your responsibility to keep the coins you earn safe by withdrawing them to your own wallet. */}
            </CookieConsent>
          </>
        )}
        {// show a preloader sign for user post and user favourite post
        loadingMore && (
          <IconButton style={{ display: "contents" }}>
            {/* {loading ? ( */}
              <CircularProgress
                className={classes.progress}
                color="secondary"
              />
            {/* ) : (
              <ExpandMore />
            )} */}
          </IconButton>
        )}
      </div>
    );
  }
}

// { email: "1904303852@qq.com" }
 
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