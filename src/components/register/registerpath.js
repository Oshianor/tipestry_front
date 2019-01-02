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
import Router , {
  withRouter
} from 'next/router';
import { config } from '../../../config';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken } from "../../actions/data";


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
    // textDecoration: 'underline', 
    // textDecorationColor: 'blue', 
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

class RegisterPath extends Component {
  state = {
    loading: false,
    username: "",
    usernameHelper: {
      msg: '',
      err: false
    },
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
    confirmPassword: '',
    confirmPasswordHelper: {
      msg: '',
      err: false
    },
    res: {
      error: false,
      msg: ""
    }
  }
  

  handleRegister = async () => {
    const { email, password, username } = this.state;
    const { router } = this.props;
    console.log('router', router);
    
    if (!this.handleEmail() || !this.handlePassword() || !this.handleConfirmPassword() || !this.handleUsername()) {
      return false;
    }
    this.setState({
      loading: true
    });
    let refId = typeof router.query.i === "undefined" ? "" : router.query.i;
    let data = {
      email, password, username, refId
    };
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(data),
      url: config.api + "/users",
    };
    

    try {
      let register = await Axios(options);
      console.log("register  ===>>>> ", register);
      if (register.data.error) {
        this.setState({
          res: register.data
        })
      } else {
        localStorage.setItem('token', register.headers['x-auth-token']);
        this.props.getToken(register.headers['x-auth-token']);
        Router.push('/');
      }
      
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false
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

  handleConfirmPassword = () => {
    const { confirmPassword, password } = this.state;
    if (isEmpty(confirmPassword)) {
      this.setState({
        confirmPasswordHelper: {
          msg: "Confirm Password is required",
          err: true
        }
      });
      return false;
    }
    if (confirmPassword.length <= 4) {
      this.setState({
        confirmPasswordHelper: {
          msg: "A minimum of 4 characters are required for your password",
          err: true
        }
      });
      return false;
    }
    if (confirmPassword !== password) {
      this.setState({
        confirmPasswordHelper: {
          msg: "Confirm password isn't a match with your password",
          err: true
        }
      });
      return false;
    }
    this.setState({
      confirmPasswordHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  }

  handleUsername = () => {
    const { username } = this.state;
    if (isEmpty(username)) {
      this.setState({
        usernameHelper: {
          msg: "Username is required",
          err: true
        }
      });
      return false;
    }
    if (username.length > 15) {
      this.setState({
        usernameHelper: {
          msg: "Username characters can't be greater than 15",
          err: true
        }
      });
      return false;
    }
    this.setState({
      usernameHelper: {
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
    console.log(this.state);
    
    const { res, password, passwordHelper, email, emailHelper, loading, username, usernameHelper, confirmPassword, confirmPasswordHelper } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} > Tipestry</Typography> */}
        <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} >
          <img src="/static/login/newlogo.png" style={{ width: 200, height: 60 }} />
        </Typography>

        <Typography variant="overline" gutterBottom style={{ margin: '2% 8%', marginTop: "15%", fontSize: 20 }}> 
          New Here? Create an Account...
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          {
            res.error &&
              <Typography variant="caption" gutterBottom style={{ margin: '0 8%', fontSize: 12, color: 'red' }}> 
                *{res.msg}
              </Typography>
          }
          <TextField
            error={usernameHelper.err}
            name="username"
            value={username}
            label="Username"
            style={{ margin: '2% 8%' }}
            onBlur={this.handleUsername}
            onChange={this.onchnage}
            helperText={usernameHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={emailHelper.err}
            name="email"
            value={email}
            label="Email"
            style={{ margin: '2% 8%' }}
            onBlur={this.handleEmail}
            helperText={emailHelper.msg}
            onChange={this.onchnage}
            fullWidth
            margin="normal"
            variant="outlined"
          />

         <TextField
            error={passwordHelper.err}
            name="password"
            label="Password"
            style={{ margin: '2% 8%' }}
            value={password}
            type="password"
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            helperText={passwordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={confirmPasswordHelper.err}
            name="confirmPassword"
            label="Confirm Password"
            style={{ margin: '2% 8%' }}
            value={confirmPassword}
            onChange={this.onchnage}
            onBlur={this.handleConfirmPassword}
            type="password"
            helperText={confirmPasswordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Grid container spacing={24} style={{ margin: '0 8%' }} >
            <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
              <Button variant="outlined" color="secondary" onClick={this.handleRegister} className={classes.button}>
                {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : "Sign Up"}
              </Button>
            </Grid>
            <Grid item xs={6} sm={6} style={{ paddingRight: 0 }} >
              <Typography variant="overline" gutterBottom className={classes.forgot} > 
                Have an account? &nbsp;
                <Link href="/register">
                  <a>Log In</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>

          
              

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
          </div> */}
        
        </form>
      </div>
    );
  }
}

RegisterPath.propTypes = {
  classes: PropTypes.object.isRequired,
};

const RegisterPaths = withStyles(styles)(RegisterPath);
const RegisterPathes = withRouter(RegisterPaths);
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPathes);