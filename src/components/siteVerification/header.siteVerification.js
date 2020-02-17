import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";



const styles = theme => ({
  root: {
    backgroundColor: "#476cba",
    height: 300,
    display: "flex",
    justifyContent: "center"
  },
  logo: {
		width: 300,
		height: 100
  },
  link: {
    display: "flex",
    alignItems: "center"
  }
});

class HeaderSiteVerification extends Component {
	render() {
		const { classes } = this.props;
		return (
      <div className={classes.root}>
        <Link href="/" >
          <a className={classes.link} >
            <img
              src="/static/login/newlogo.png"
              className={classes.logo}
            />
          </a>
        </Link>
      </div>
    );
	}
}
HeaderSiteVerification.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(HeaderSiteVerification);