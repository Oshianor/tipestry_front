import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken } from "../../actions/data";
import Router from 'next/router';

import green from '@material-ui/core/colors/green';
import Axios from 'axios';

import { config } from '../../../config';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: "url('/static/login/phone.svg')",
      backgroundColor: "transparent",
      // width: "100%",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    },
    [theme.breakpoints.only('md')]: {
      backgroundImage: "url('/static/login/tablet.svg')",
      backgroundColor: "transparent",
      // width: "100%",
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    },
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
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class LoginPath extends Component {
  state = {
    loading: false,
    email: "",
    emailHelper: {
      msg: "",
      err: false
    },
    password: "",
    passwordHelper: {
      msg: "",
      err: false
    },
    res: {
      error: false,
      msg: ''
    }
  }

  async handleLogin() {
    const { email, password, emailHelper, passwordHelper } = this.state;
    if (!this.handleEmail() || !this.handlePassword()) {
      return false;
    }
    this.setState({
      loading: true
    });
    let data = {
      email, password
    };
    
    console.log(data);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(data),
      url: config.api + "/auth",
    };
    

    try {
      let login = await Axios(options);
      console.log("LOGIN", login);
      
      if (login.data.error) {
        this.setState({
          res: login.data,
          password: ''
        });
      } else {
        this.setState({
          res: {
            error: false,
            msg: ''
          },
          password: ""
        });
        localStorage.setItem('token', login.headers['x-auth-token']);
        this.props.getToken(login.headers['x-auth-token']);
        Router.push('/');
        
      }
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false,
      password: ''
    });
    
  }

  handleEmail = () => {
    const { email } = this.state;
    if (!isEmail(email)) {
      this.setState({
        emailHelper: {
          msg: "A valid email is required!",
          err: true
        }
      });
      return false;
    }
    if (isEmpty(email)) {
      this.setState({
        emailHelper: {
          msg: "Email is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      emailHelper: {
        msg: "",
        err: false
      }
    });
    return true
  }

  handlePassword = () => {
    const { password } = this.state;
    if (isEmpty(password)) {
      this.setState({
        passwordHelper: {
          msg: "Password is required",
          err: true
        }
      });
      return false;
    }
    if (password.length <= 4) {
      this.setState({
        passwordHelper: {
          msg: "A minimum of 4 characters are required for your password",
          err: true
        }
      });
      return false;
    }
    this.setState({
      passwordHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  }

  onchnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    
    const { classes } = this.props;
    const { password, passwordHelper, email, emailHelper, loading, res } = this.state;
    return (
      <div className={classes.root}>
        {/* <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} >Tipestry</Typography> */}
        <Link href="/" prefetch>
          <a>
            <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} >
              <img src="/static/login/newlogo.png" style={{ width: 200, height: 60 }} />
            </Typography>
          </a>
        </Link>

        <Typography variant="overline" gutterBottom style={{ margin: '2% 8%', marginTop: "15%", fontSize: 20 }}> 
          Welcome, Login to your Account
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          {
            res.error &&
              <Typography variant="caption" gutterBottom style={{ margin: '0 8%', fontSize: 12, color: 'red' }}> 
                *{res.msg}
              </Typography>
          }
          <TextField
            error={emailHelper.err}
            name="email"
            value={email}
            label="Email"
            type="email"
            required
            style={{ margin: '2% 8%' }}
            onBlur={this.handleEmail}
            onChange={this.onchnage}
            helperText={emailHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={passwordHelper.err}
            required
            name="password"
            label="Password"
            style={{ margin: '2% 8%' }}
            value={password}
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            type="password"
            helperText={passwordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Grid container spacing={24} style={{ margin: '0 8%' }} >
            <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
                <Button variant="outlined" color="secondary" 
                disabled={loading}
                onClick={this.handleLogin.bind(this)}
                className={classes.button}>
                {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : "Log In"}
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
              

          {/* <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
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
         */}
        </form>
      </div>
    );
  }
}

LoginPath.propTypes = {
  classes: PropTypes.object.isRequired,
};

const LoginPaths = withStyles(styles)(LoginPath);
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPaths);

// export default compose(
//   withStyles(styles),
//   withWidth(),
// )(LoginPath);