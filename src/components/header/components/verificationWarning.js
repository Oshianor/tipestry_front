import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import axios from "axios";
import { config } from "../../../../config";


const styles = theme => ({
  root: {
    height: "auto",
    // margin: "auto 5px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
		// padding: "2px 10px",
		zIndex: 99999,
    alignItems: "center",
    boxShadow: theme.shadows[2],
    "&:hover": {
      boxShadow: theme.shadows[5]
    }
  },
  warning: {
    backgroundColor: "#ebc063",
    borderColor: "#e8b64c",
    color: "#a07415"
  },
  danger: {
    backgroundColor: "#e27c79",
    borderColor: "#dd6864",
    color: "#9f2723"
  },
  info: {
    backgroundColor: "#91cf91",
    borderColor: "#80c780",
    color: "#3d8b3d"
  },
  text: {
		fontSize: 15,
		color: "white",
    padding: "2px 10px"
  }
});

class Verification extends Component {
  state = {
    sent: false
  }

  handleResendToken = async () => {
    let token = await axios.get(config.api + "/resend/registration/token");
    this.setState({
      sent: true
    })
  }
  render() {
    const { classes } = this.props;
    // console.log(this.props);

    return (
      // <Paper square className={classNames(classes.root, classes.danger)}>
        <AppBar
          position="fixed"
          className={classNames(classes.root, classes.danger)}
        >
          {!this.state.sent ? (
            <Toolbar>
              <Typography className={classes.text}>
                Please verify your email address to like or comment on a post.
                Visit the link in your mailbox and complete the process.
              </Typography>
              <Button onClick={this.handleResendToken}>Resend Email</Button>
          </Toolbar>
          ) : (
            <Toolbar>
              <Typography className={classes.text}>
                A new token registration token as been generated and sent to your email.
              </Typography>
          </Toolbar>
          )}
        </AppBar>
      // {/* </Paper> */}
    );
  }
}

Verification.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Verification);