import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RegisterPath from '../components/register/registerpath';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
});

class Login extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <RegisterPath />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <img src="/static/images/signup.jpg" width="100%" height="100%" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
