import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import {
  withRouter
} from 'next/router'


import Small from "./small";
import Large from "./large";
import UploadUrl from "../uploadurl/uploadurl";



const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '5%'
  },
  demo: {
    // width: '100%',
    position: 'relative',
    [theme.breakpoints.up("lg")]: {
      width: 1170,
      margin: '0px 10%'
    }
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class Header extends React.Component {
  state = {
    uploadStatus: false,
  };

  handleClickOpen = () => {
    this.setState({
      uploadStatus: true
    });
  };

  handleClose = () => {
    this.setState({
      uploadStatus: false
    });
  };

  render() {
    // console.log("Props:", this.props);
    const { classes, router } = this.props;
    const {
      uploadStatus
    } = this.state;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            container
            className={classes.demo}
            alignItems="center"
            justify="center"
          >
            <Large uploadStatus={uploadStatus} handleOpen={this.handleClickOpen} router={router} />
            <Small uploadStatus={uploadStatus} handleOpen={this.handleClickOpen} router={router} />
          </Grid>
        </Grid>
        <UploadUrl uploadStatus={uploadStatus} handleClose={this.handleClose} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Headers = withStyles(styles)(Header);
export default withRouter(Headers);