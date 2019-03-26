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


class Edit extends React.Component {
  state = {
    first: '',
    last: '',
    bio: '',
    email: '',
    firstHelper: {
      err: false,
      msg: ''
    },
    lastHelper: {
      err: false,
      msg: ''
    },
    loading: false
  }

  componentDidMount = () => {
    const { data } = this.props;
    this.setState({
      email: data.user.email ? data.user.email : "",
      first: data.user.name ? typeof data.user.name.split(" ")[0] !== "undefined" ? data.user.name.split(" ")[0] : "" : "",
      last: data.user.name ? typeof data.user.name.split(" ")[1] !== "undefined" ? data.user.name.split(" ")[1] : "" : "",
      bio: data.user.bio ? data.user.bio : '',
    })
  }
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFirst = () => {
    const { first } = this.state;
    if (isEmpty(first)) {
      this.setState({
        firstHelper: {
          msg: "First Name is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      firstHelper: {
        msg: "",
        err: false
      }
    });
    return true
  }

  handleLast = () => {
    const { last } = this.state;
    if (isEmpty(last)) {
      this.setState({
        lastHelper: {
          msg: "Last Name is required",
          err: true
        }
      });
      return false;
    }
    this.setState({
      lastHelper: {
        msg: "",
        err: false
      }
    });
    return true
  }

  async handleFormComplete() {
    const { first, last, bio } = this.state;
    const { data } = this.props;
    this.setState({
      loading: true
    })

    let token = localStorage.getItem('token');

    if (token) {
      // get me 
      let obj = {
        first,
        last,
        bio
      }
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        data: JSON.stringify(obj),
        url: config.api + '/users/edit'
      }
      let user = await Axios(options);
      if (!user.data.error) {
        // if update successfully then redirect to profile page
        Router.push('/profile/' + data.user._id + "/@" + data.user.username)
      }
    }
  }

  render() {
    const { classes } = this.props;
    const { first, firstHelper, last, lastHelper, bio, loading, email } = this.state;
    console.log(this.state);
    

    return (
      <div className={classes.root}>
        <Typography style={{ textAlign: 'center' }} variant="h6" >Personal Information</Typography>
        <Grid container justify="center" spacing={8}>
          <form className={classes.container} autoComplete="off">
            <Grid item md={12}>
              <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={email}
                readOnly
                disabled
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                required
                id="outlined-name"
                label="First Name"
                className={classes.textField}
                value={first}
                onChange={this.handleChange('first')}
                margin="normal"
                variant="outlined"
                onBlur={this.handleFirst}
                error={firstHelper.err}
                helperText={firstHelper.msg}
              />
            </Grid>

            <Grid item md={12}>
              <TextField
                required
                id="outlined-name"
                label="Last Name"
                className={classes.textField}
                value={last}
                onChange={this.handleChange('last')}
                margin="normal"
                variant="outlined"
                onBlur={this.handleLast}
                error={lastHelper.err}
                helperText={lastHelper.msg}
              />
            </Grid>

            <Grid item md={12}>
              <TextField
                id="outlined-name"
                label="Bio"
                multiline
                rows={3}
                className={classes.textField}
                value={bio}
                onChange={this.handleChange('bio')}
                margin="normal"
                variant="outlined"
              />
            </Grid>

              <Button
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={this.handleFormComplete.bind(this)}
              >
                {!loading ? "Update Profile" : <CircularProgress size={24} className={classes.buttonProgress} />}
              </Button>


          </form>

        </Grid>
      </div>
    );
  }
}

Edit.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Productform);
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(Edit));
