import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RegisterPath from '../components/register/registerpath';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  }
});

class Register extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6} lg={5} xl={4} >
            <RegisterPath />
          </Grid>
          <Hidden only={[ 'xs', 'sm' ]}>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={8} >
              <img src="/static/images/signup.jpg" width="100%" height="100%" />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Login);
export default compose(
  withStyles(styles),
  withWidth(),
)(Register);
