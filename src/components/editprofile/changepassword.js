import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import { Typography } from '@material-ui/core';
import isEmpty from 'validator/lib/isEmpty';
import Router from "next/router"
import { config } from '../../../config';
import Axios from 'axios';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80
  },
  textField: {
    width: 400
  },
  button: {
    margin: theme.spacing.unit,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
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


class Changepassword extends React.Component {
  state = {
    loading: false,
    password: "",
    passwordHelper: {
      msg: "",
      err: false
    },
    newPassword: "",
    newPasswordHelper: {
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
  

  handlePasswordChange = async () => {
    const { password, newPassword } = this.state;
    const { router } = this.props;
    // console.log('router', router);
    
    if (!this.handleCurrentPassword() || !this.handleNewPassword() || !this.handleConfirmPassword()) {
      return false;
    }
    this.setState({
      loading: true
		});
		
    let data = {
      password, newPassword
    };
		let token = localStorage.getItem("token");
		if (token) {
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'x-auth-token': token
				},
				data: JSON.stringify(data),
				url: config.api + "/auth/changepassword",
			};
			

			try {
				let register = await Axios(options);
				// console.log("register  ===>>>> ", register);
				if (register.data.error) {
					this.setState({
						res: register.data
					});
				} else {
					localStorage.removeItem('token');
					Router.push('/');
				}
				
			} catch (error) {
				console.log("ERROR : ", error);
				
			}
		}
    this.setState({
      loading: false
    });
    
  }

  handleCurrentPassword = () => {
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
	
	handleNewPassword = () => {
    const { newPassword } = this.state;
    if (isEmpty(newPassword)) {
      this.setState({
        newPasswordHelper: {
          msg: "Password is required",
          err: true
        }
      });
      return false;
    }
    if (newPassword.length <= 4) {
      this.setState({
        newPasswordHelper: {
          msg: "A minimum of 4 characters are required for your password",
          err: true
        }
      });
      return false;
    }
    this.setState({
      newPasswordHelper: {
        msg: "",
        err: false
      }
    });
    return true;
  }

  handleConfirmPassword = () => {
    const { confirmPassword, newPassword } = this.state;
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
    if (confirmPassword !== newPassword) {
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

  onchnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { classes } = this.props;
    const { newPassword, res, newPasswordHelper, password, passwordHelper, confirmPassword, confirmPasswordHelper, loading } = this.state;
    // console.log(this.state);
    
    return (
      <div className={classes.root}>
        <Typography style={{ textAlign: 'center' }} variant="h6" >Change Password</Typography>
        <Grid container justify="center" spacing={8}>
          <form className={classes.container} autoComplete="off">
						{
            res.error &&
              <Typography variant="caption" gutterBottom style={{ margin: '0 8%', fontSize: 12, color: 'red' }}> 
                *{res.msg}
              </Typography>
          	}
            <Grid item md={12}>
              <TextField
								error={passwordHelper.err}
								name="password"
								label="Current Password"
								className={classes.textField}
								value={password}
								type="password"
								onBlur={this.handleCurrentPassword}
								onChange={this.onchnage}
								helperText={passwordHelper.msg}
								fullWidth
								margin="normal"
								variant="outlined"
							/>
            </Grid>

            <Grid item md={12}>
              <TextField
								error={newPasswordHelper.err}
								name="newPassword"
								label="New Password"
								className={classes.textField}
								value={newPassword}
								type="password"
								onBlur={this.handleNewPassword}
								onChange={this.onchnage}
								helperText={newPasswordHelper.msg}
								fullWidth
								margin="normal"
								variant="outlined"
							/>
            </Grid>

            <Grid item md={12}>
              <TextField
								error={confirmPasswordHelper.err}
								name="confirmPassword"
								label="Confirm Password"
								className={classes.textField}
								value={confirmPassword}
								onChange={this.onchnage}
								onBlur={this.handleConfirmPassword}
								type="password"
								helperText={confirmPasswordHelper.msg}
								fullWidth
								margin="normal"
								variant="outlined"
							/>
            </Grid>

              <Button
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={this.handlePasswordChange.bind(this)}
              >
                {!loading ? "Change Password" : <CircularProgress size={24} className={classes.buttonProgress} />}
              </Button>


          </form>

        </Grid>
      </div>
    );
  }
}

Changepassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Changepassword);
