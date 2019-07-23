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
import {
  withRouter
} from 'next/router';
import { config } from '../../../config';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken } from "../../actions/data";
import { Lang } from '../../../lang';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MessageAlert from "../reuseable/message";
import ReCAPTCHA from "react-google-recaptcha";





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
  constructor(props) {
    super(props);

    this.recaptchaRef = React.createRef();
    this.state = {
      loading: false,
      username: "",
      usernameHelper: {
        msg: "",
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
      confirmPassword: "",
      confirmPasswordHelper: {
        msg: "",
        err: false
      },
      res: {
        error: false,
        msg: "",
        status: 'w'
      },
      checked: null
    };
  }

  handleRegister = async () => {
    const recaptchaValue = this.recaptchaRef.current.getValue();

    if (recaptchaValue !== "") {
      const { email, password, username } = this.state;
      const { router, getToken } = this.props;

      if (
        !this.handleEmail() ||
        !this.handlePassword() ||
        !this.handleConfirmPassword() ||
        !this.handleUsername()
      ) {
        return false;
      }
      this.setState({
        loading: true
      });
      let refId = typeof router.query.i === "undefined" ? "" : router.query.i;
      let data = {
        email,
        password,
        username,
        refId
      };

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify(data),
        url: config.api + "/users"
      };

      try {
        let register = await Axios(options);
        console.log("register  ===>>>> ", register);
        if (register.data.error) {
          this.setState({
            res: {
              err: register.data.error,
              msg: register.data.msg,
              status: "d"
            }
          });
        } else {
          localStorage.setItem("token", register.headers["x-auth-token"]);
          getToken(register.headers["x-auth-token"]);
          router.push("/");
        }
      } catch (error) {
        // console.log("ERROR : ", error);
      }
      this.setState({
        loading: false
      });
    }
  };

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
    return true;
  };

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
  };

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
  };

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
  };

  onchnage = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleMessageAlertClose = () => {
    this.setState({
      res: {
        err: false,
        msg: "",
        status: ""
      }
    });
  };

  render() {
    // console.log(this.state);

    const {
      res,
      password,
      passwordHelper,
      email,
      emailHelper,
      loading,
      username,
      usernameHelper,
      confirmPassword,
      confirmPasswordHelper,
      checked
    } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <Typography variant="h2" gutterBottom style={{ margin: '4% 8%' }} > Tipestry</Typography> */}
        <Link href="/" prefetch>
          <a>
            <Typography
              variant="h2"
              gutterBottom
              style={{ margin: "4% 8%" }}
            >
              <img
                src="/static/login/newlogo.png"
                style={{ width: 200, height: 60 }}
              />
            </Typography>
          </a>
        </Link>

        {res.err && (
          <MessageAlert
            msg={res.msg}
            status={res.status}
            handleClose={this.handleMessageAlertClose}
          />
        )}

        <Typography
          variant="overline"
          gutterBottom
          style={{ margin: "2% 8%", marginTop: "10%", fontSize: 20 }}
        >
          {/* New Here? Create an Account... */}
          {Lang.m1}
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          {/* {res.error && (
            <Typography
              variant="caption"
              gutterBottom
              style={{ margin: "0 8%", fontSize: 12, color: "red" }}
            >
              *{res.msg}
            </Typography>
          )} */}
          <TextField
            error={usernameHelper.err}
            name="username"
            value={username}
            // label="Username" // 用户名
            label={Lang.g1}
            style={{ margin: "2% 8%" }}
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
            label={Lang.h1} //"Email"
            style={{ margin: "2% 8%" }}
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
            label={Lang.i1} //"Password" //   //密码
            style={{ margin: "2% 8%" }}
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
            label={Lang.j1} //"Confirm Password" 确认密码
            style={{ margin: "2% 8%" }}
            value={confirmPassword}
            onChange={this.onchnage}
            onBlur={this.handleConfirmPassword}
            type="password"
            helperText={confirmPasswordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <FormControlLabel
            style={{ marginLeft: "5%" }}
            control={
              <Checkbox
                checked={checked}
                onChange={this.handleChange("checked")}
                value="checked"
              />
            }
            label={
              <Link href="/privacypolicy">
                <a>
                  {/* I agree to the Terms and Conditions. */}
                  {Lang.l3}
                </a>
              </Link>
            }
          />

          <div style={{ margin: "0 8%" }}>
            <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LfC9q4UAAAAAMbyFnaZtaQyEOuiBKb1gI8QMZKx"
              onChange={this.onChange}
            />
          </div>

          <Grid container spacing={24} style={{ margin: "0 8%" }}>
            <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
              <Button
                variant="outlined"
                disabled={!checked}
                color="secondary"
                onClick={this.handleRegister}
                className={classes.button}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                ) : (
                  Lang.f1
                )}
              </Button>
            </Grid>
            <Grid item xs={6} sm={6} style={{ paddingRight: 0 }}>
              <Typography
                variant="overline"
                gutterBottom
                className={classes.forgot}
              >
                {/* Have an account? &nbsp; // 有一个账户？ */}
                {Lang.l1} &nbsp;
                <Link href="/login">
                  <a>
                    {Lang.k1}
                    {/* Log In */}
                  </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(RegisterPath)));