import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from "../../../../config";
import { getSiteTopic } from "../../../actions/data";
import { bindActionCreators } from 'redux';
import Alert from '../../reuseable/alert';
import Router, { withRouter } from "next/router";



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing.unit,
	},
	textField: {
		flexBasis: 200,
	},
});

class CoinGift extends React.Component {
	state = {
		amount: "",
		error: "",
		msgOpen: false,
		msg: ''
	};

	handleMsgClose = () => {
		this.setState({
			msgOpen: true
		})
	}

	handleGift = async () => {
		const { amount } = this.state;
		const { commentUserId, router, type, handleClose, topicObjId, commentId, getSiteTopic } = this.props;
		let token = localStorage.getItem('token');
		
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	amount,
        	coinType: type,
        	userId: commentUserId,
					commentId,
					topicObjId
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/crypto/comment/gift'
      }

			let completed = await axios(options);
			// console.log('completed', completed);
			
			if (!completed.data.error) {
				getSiteTopic([]);
				getSiteTopic(completed.data.content);
				this.setState({
					error: '',
					msgOpen: true,
					msg: 'Successfully tipped post'
				})
			} else {
				this.setState({
					error: completed.data.message,
					msgOpen: true,
					msg: 'Something went wrong...'
				})
			}
			Router.reload();
			// Router.pushRoute('/')
			handleClose();
			// router.reload();
		}
	}


	handleChange = prop => event => {
		const { currentCoin } = this.props;
		let amt = Math.abs(parseFloat(event.target.value));
		if (currentCoin >= amt && amt !== 0) {
			this.setState({
				[prop]: amt,
				error: ""
			});
		} else {
			this.setState({
				[prop]: amt,
				error: "You have insuficient balance to handle this transaction"
			});
		}
	};


  render() {
		const { classes, open, image, handleClose, currentCoin } = this.props;
		const { error, amount, msgOpen, msg } = this.state;
    return (
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => handleClose()}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					<div style={{ display: 'flex' }} >
						<img src={image} width={50} height={50} />
						<div style={{ flexGrow: 1 }} />
						<Typography style={{ margin: 15 }} >Balance: {currentCoin}</Typography>
					</div>
					
				</DialogTitle>
				<DialogContent>
					<TextField
						error={error !== ""}
						id="outlined-adornment-amount"
						className={classNames(classes.margin, classes.textField)}
						variant="outlined"
						label="Amount"
						type='number'
						helperText={error}
						value={amount}
						onChange={this.handleChange('amount')}
						InputProps={{
							startAdornment: <InputAdornment position="start">$</InputAdornment>,
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleClose()} color='secondary' >
						Maybe later
					</Button>
					<Button 
						disabled={error !== ""} 
						onClick={this.handleGift} 
						color="primary"
					>
						Gift
					</Button>
				</DialogActions>
				<Alert 
					handleClose={this.handleMsgClose} 
					open={msgOpen} 
					message={msg} 
				/>
			</Dialog>
    );
  }
}

CoinGift.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getSiteTopic: getSiteTopic
	}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(CoinGift)));
