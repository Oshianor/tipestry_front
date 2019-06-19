/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Homepage from "../src/containers/homepage";
import axios from "axios";
import Preloader from "../src/components/preloader/preloader";
import { config } from "../config";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getTopics,
  getUser,
  getToken,
  setPageNumber
} from "../src/actions/data";
// import Bottom from '../src/components/reuseable/bottom';
import BottomScrollListerer from "react-bottom-scroll-listener";
// import CircularProgress from '@material-ui/core/CircularProgress';
import CookieConsent from "react-cookie-consent";
import { Lang } from "../lang";
import Router from "next/router";
import Hashtag from "../src/containers/hashtag";

class Index extends React.Component {
  state = {
    loading: true,
    more: false
  };

  static async getInitialProps({ query }) {
    // console.log('req', req);

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    let topics = await axios.get(
      config.api + "/topic/get/hashtag?pageNumber=1&search=" + query.search
    );
    let dataTopics = JSON.stringify(topics.data.content);

    return {
      search: query.search,
      dataTopics
    };
  }

  async componentDidMount() {
    const { dataTopics, getTopics, getUser, getToken } = this.props;

    let token = localStorage.getItem("token");

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

      if (dataTopics) {
        getTopics(JSON.parse(dataTopics));

        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response.data.error) {
        localStorage.removeItem("token");
        Router.push("/login?sE=true");
      }
    }
  }

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT2JqSWQiOiI1Y2I0N2E4NTdhMTlkNjMzNDdmODAyZWUiLCJpZCI6NDUxOCwiaXNfYWRtaW4iOjAsImlhdCI6MTU1NTMzMTc0MX0.ve3dVAyXsFQEjEaanod4BxQp5RjUntuNb67Xrlkc-YM

  handleFetchMoreTopics = async () => {
    // const { pageNumber } = this.state;
		const { data, getTopics, setPageNumber, search } = this.props;
		
		
    let topicsCont = await axios.get(
      config.api +
        "/topic/get/hashtag?pageNumber=" +
        data.pageNumber +
        "&search=" +
        search
		);
		
		console.log("searcsearchsearchsearchsearchsearchh", topicsCont);

    if (!topicsCont.data.error) {
      topicsCont.data.content.topic.forEach(obj => {
        data.topics.topic.push(obj);
      });
      getTopics({
        topic: data.topics.topic,
        total: topicsCont.data.content.total
      });
      let num = Number(data.pageNumber) + 1;
      setPageNumber(num);
    }
  };

  render() {
    const { loading, more } = this.state;
		console.log("router", this.props);

    return (
      <div>
        {loading ? (
          <Preloader />
        ) : (
          <BottomScrollListerer onBottom={this.handleFetchMoreTopics}>
            <Hashtag />
            <CookieConsent
              style={{ zIndex: 99999, background: "rgb(146, 95, 126)" }}
              buttonStyle={{ background: "rgb(255, 255, 255)" }}
            >
              {Lang.m3}
              {/* This website uses cookies to enhance the user experience.It is your responsibility to keep the coins you earn safe by withdrawing them to your own wallet. */}
            </CookieConsent>
          </BottomScrollListerer>
        )}
      </div>
    );
  }
}

// { email: "1904303852@qq.com" }

// export default Index;
function mapStateToProps(state) {
  return {
    data: state.data
  };
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
)(Index);
