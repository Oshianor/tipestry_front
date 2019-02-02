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
import Router from 'next/router';

import green from '@material-ui/core/colors/green';
import Axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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

class ForgotPath extends Component {
  state = {
		loading: false,
		open: false,
    email: "",
    emailHelper: {
      msg: "",
      err: false
    },
    res: {
      error: false,
      msg: ''
    }
  }

  async handleForgot() {
    const { email } = this.state;
    if (!this.handleEmail()) {
      return false;
    }
    this.setState({
      loading: true
    });
    let data = {
      email
    };
    
    // console.log(data);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(data),
      url: config.api + "/auth/reset",
    };
    

    try {
      let forgot = await Axios(options);
      // console.log("forgot", forgot);
      
      if (!forgot.data.error) {
      //   this.setState({
      //     res: { error: true, msg: forgot.data.msg },
      //   });
      // } else {
				this.setState({
					open: true
				})
        setTimeout(() => {
        	Router.push('/login');					
				}, 6000);        
      }
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false
    });
    
	}
	
	handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
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
    return true
  }

  onchnage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    
    const { classes } = this.props;
    const { email, emailHelper, loading, res } = this.state;
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
          Can't Sign into your Account?
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

          <Grid container spacing={24} style={{ margin: '0 8%' }} >
            <Grid item xs={6} sm={6} style={{ paddingLeft: 0 }}>
                <Button variant="outlined" color="secondary" 
                disabled={loading}
                onClick={this.handleForgot.bind(this)}
                className={classes.button}>
                {loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : "Reset"}
              </Button>
              
            </Grid>
            <Grid item xs={6} sm={6} style={{ paddingRight: 0 }} >
              <Typography variant="overline" gutterBottom className={classes.forgot}> 
                <Link href="/login">
                  <a>Log In</a>
                </Link>
              </Typography>
            </Grid>
          </Grid>

        </form>
				<Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Password Resetted. Check your email</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

ForgotPath.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPath);