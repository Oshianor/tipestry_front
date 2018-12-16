import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';
import Thumbnails from '../reuseable/thumbnails';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '5%'
  },
  demo: {
    // width: '100%',
    position: 'relative',
    [theme.breakpoints.up("lg")]: {
      width: 1170
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Large extends React.Component {
  render() {
    const { classes, handleOpen } = this.props;
    return (
      <Hidden only={['xs', 'sm']}>
        <AppBar position = "fixed"
        style = {
          {
            backgroundImage: "url('/static/homepage/headerBackground.svg')",
            backgroundColor: "transparent",
            width: "100%",
            height: 210,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            boxShadow: "0 0 0 0"
          }
          }>
          <Toolbar>
            <Typography  variant="h6" color="inherit" noWrap>
              Tipestry
            </Typography>
            <div className={classes.grow} />
              <Link href="/about">
                <Button color="inherit">About</Button>
              </Link>
              <Link href="/faq">
                <Button color="inherit">Faq</Button>
              </Link>
              <Link href="/login" prefetch>
                <Button color="inherit">Login</Button>
              </Link>
              <Link href="/register" prefetch >
                <Button color="inherit">
                  Register
                </Button>
              </Link>
              <Button variant="outlined" size="small" onClick={() => handleOpen()} color="secondary" className={classes.button}>
                Upload Url
              </Button>
          </Toolbar>
          <Grid container spacing={24} style={{ position: 'absolute', width: '100%', marginTop: 110 }} >
            <Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
            <div style={{ flexGrow: 1 }} />
            <div style={{ marginTop: 30 }}>
              <Thumbnails size="xl" borderWidth={4} borderColor="white" name="abundance" />
            </div>
            <div style={{ flexGrow: 1 }} />
            <Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
          </Grid>
        </AppBar>
      </Hidden>
    );
  }
}

Large.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
};

export default compose(
	withStyles(styles),
	withWidth(),
)(Large);
