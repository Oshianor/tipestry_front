import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BasicHeader from "../src/components/header/basicheader"
import { config } from "../config";
import Router from "next/router";
import axios from "axios";



const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  actions: {
    // display: 'flex',
    borderTop: ".5px solid gray"
  }
});


class Verification extends Component {
  static async getInitialProps({ query }) {
			const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify({
          token: query.token
        }),
        url: config.api + "/auth/complete/registration"
      };
			let user = await axios(options);
      let dataTopics = JSON.stringify(user.headers);

    return {
      dataTopics
    };
  }

  componentDidMount() {
    let head = JSON.parse(this.props.dataTopics);
    let token = head["x-auth-token"];
    localStorage.setItem("token", token);
    Router.push("/");		
  }
  

  render() {
    // const { classes } = this.props;
    return null;
  }
}

export default withStyles(styles)(Verification);