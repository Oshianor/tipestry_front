import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { config } from "../../../../config";
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import Refresh from "@material-ui/icons/Refresh";
import { connect } from 'react-redux';
import { getSiteTopicList } from "../../../actions/data";
import { bindActionCreators } from 'redux';
import Alert from '../../reuseable/alert';


const styles = theme => ({
  root: {
    width: '100%',
	},
	rootForm: {
		display: 'flex',
  },
  loss: {
    boxShadow: "0px 0px 0px 0px"
  },
  fab: {
    margin: '-6px 4px',
    width: 36,
    boxShadow: "0px 0px 0px 0px"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  token: {
    padding: 10,
    background: '#d5d5d5'
  }
});

function getSteps() {
  return ['Generate Token', 'Verify'];
}

class claimDiaglog extends React.Component {
  state = {
		activeStep: 0,
    option: 'add', // add,  upload
    token: null,
    open: false,
    msg: ''
  };

  handleNext = () => {
    const { activeStep } = this.state;
    const { handleClose } = this.props;
    if (activeStep == 2) {
      this.setState({
        activeStep: 0,
        option: null,
        token: null
      })
      handleClose();
    } else {
      this.setState(state => ({
        activeStep: state.activeStep + 1,
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
	};


  handleChange = event => {
    this.setState({ option: event.target.value });
  };

  removeWWW = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
  }

  verifyClaim = async () => {
    let userToken = localStorage.getItem('token');
    const { site, getSiteTopicList, handleClose } = this.props;
    const { token, option } = this.state;

    console.log(4444);
    

    let initiateUrl = new URL(site.url);
    let url = this.removeWWW(initiateUrl.host);

    if (userToken) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ 
          siteObjId: site._id,
          token,
          mode: option,
          url: url,
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': userToken
        },
        url: config.api + '/sites/verify/site'
      }
      let raw = await axios(options);
      console.log(raw);
      if (!raw.data.error) {
        getSiteTopicList(raw.data.content);
        this.setState({
          open: true,
          msg: raw.data.msg
        })
      } else {
        this.setState({
          open: true,
          msg: raw.data.msg
        })
        // handleClose();
      }
    }
  }

  handleAlertClose = () => {
    this.setState({
      open: false
    })
  }
  
  generateClaim = async () => {
    let userToken = localStorage.getItem('token');
    const { site } = this.props;
    const { option } = this.state;

    if (userToken) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ siteObjId: site._id, mode: option }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': userToken
        },
        url: config.api + '/sites/generate/token'
      }
      let user = await axios(options);
      this.setState({
        token: user.data
      })
    }
  }


  download = () => {
    const { option, token } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Typography variant="h6">Steps to verify a site</Typography>
          <ul>
            <li>Click on the button below to generate a one time token</li>
            <li>Copy and Paste the meta tag with the token to the {"<head>"} portion of your entry site</li>
            <li>Then upload the update to your server and maintain this current state.</li>
          </ul>
        </div>
        {
          token ?
            <div className={classes.token}>{`<meta name="author" content="${token}" />`}</div>
          :
            <div style={{ display: 'flex' }} >
              <Typography>Generate one time token &nbsp;</Typography>
              <Fab color="secondary" size="small" onClick={this.generateClaim} aria-label="Add" className={classes.fab}>
                <Refresh style={{ fontSize: 18 }} />
              </Fab>
            </div>
        }
        
      </div>
    )
  }

  verify = () => {
    return (
         <Typography variant='caption' style={{ fontSize: 13 }} >
          Click here to
            <Button 
              color="primary" 
              style={{ textDecoration: 'underline' }} 
              onClick={this.verifyClaim} 
            >
              verify
            </Button>
        </Typography>
    )
  }

	// getStepContent(step) {
	// 	switch (step) {
	// 		case 0:
	// 			return this.options();
	// 		case 1:
	// 			return this.download();
	// 		case 2:
	// 			return this.verify();
	// 		default:
	// 			return 'Unknown step';
	// 	}
  // }
  
  getStepContent(step) {
		switch (step) {
			case 0:
				return this.download();
			case 1:
				return this.verify();
			default:
				return 'Unknown step';
		}
	}

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, option, token, open, msg } = this.state;
    console.log(this.state);
    
    return (
      <div className={classes.root}>
				<Typography variant='h6' style={{ textAlign: 'center' }} >
					Claim This Website
				</Typography>
        {/* <Typography variant='h6' style={{ textAlign: 'center' }} >
					{msg}
				</Typography> */}
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{this.getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      size="small"
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      disabled={!token && activeStep === 0}
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "I'm Done" : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Alert open={open} message={msg} handleClose={this.handleAlertClose} />
      </div>
    );
  }
}

claimDiaglog.propTypes = {
  classes: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSiteTopicList: getSiteTopicList
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(claimDiaglog));
