import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    flex: 1,
    justifyContent: 'center',

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    // margin: theme.spacing.unit,
    margin: '-1% 0px',
    borderRadius: 30,
    width: 150
    // padding: "10px 55px"

  },
  forgot: { 
    margin: '1% 0px', 
    cursor: 'pointer', 
    textDecoration: 'underline', 
    textDecorationColor: 'blue', 
    textAlign: "right" 
  },
  bottom: {
    borderRightWidth: 1,
    borderRightStyle: "solid",
    padding: 5,
    textDecoration: "none",
    borderRightColor: 'gray',
    color: 'gray'
  },
  bottomend: {
    padding: 5,
    textDecoration: "none",
    color: 'gray'
  }
});

class LoginPath extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} > Tipestry</Typography>

        <Typography variant="overline" gutterBottom style={{ margin: '2% 8%', marginTop: "15%", fontSize: 20 }}> 
          Welcome, Login to your Account
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label="Email"
            style={{ margin: '2% 8%' }}
            placeholder="Enter email"
            helperText=""
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="standard-full-width"
            label="Password"
            style={{ margin: '2% 8%' }}
            type="password"
            placeholder="password"
            helperText=""
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Grid container spacing={24} style={{ margin: '0 8%' }} >
            <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
              <Button variant="outlined" color="secondary" className={classes.button}>
                Log In
              </Button>
            </Grid>
            <Grid item xs={6} sm={6} style={{ paddingRight: 0 }} >
              <Typography variant="overline" gutterBottom className={classes.forgot}> 
                <Link href="/forgotPassword">
                  <a>Forgot Password</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="overline" gutterBottom style={{ margin: '0 8%' }} > 
            Don't have and account? &nbsp;
            <Link href="/register">
              <a>Sign Up</a>
            </Link>
          </Typography>
              

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Typography variant="caption" gutterBottom style={{ margin: '0 8%' }} > 
            <Link href="/register">
              <a className={classes.bottom}>Terms and Conditions</a>
            </Link>
            <Link href="/register">
              <a className={classes.bottom}>Support</a>
            </Link>
            <Link href="/register">
              <a className={classes.bottom}>FAQ</a>
            </Link>
            <Link href="/register">
              <a className={classes.bottomend}>Privacy Policy</a>
            </Link>
          </Typography>
          </div>
        
        </form>
      </div>
    );
  }
}

LoginPath.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPath);
