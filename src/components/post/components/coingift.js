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
// import Axios from 'axios';
// import { config } from "../../../../config";

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
		error: ""
	};

	ha


	handleChange = prop => event => {
		const { currentCoin } = this.props;
		if (currentCoin > event.target.value) {
			this.setState({
				[prop]: event.target.value,
				error: ""
			});
		} else {
			this.setState({
				error: "You have insuficient balance to handle this transaction"
			});
		}
	};


  render() {
		const { classes, open, image, handleClose, currentCoin } = this.props;
		const { error, amount } = this.state;
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
						onClick={this.handleClose} 
						color="primary"
					>
						Gift
					</Button>
				</DialogActions>
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

export default connect(mapStateToProps, )(withStyles(styles)(CoinGift));



// getBalance = () => {
// 	const { type, data } = this.props;
// 	const { btc } = this.state;
// 	if (type === "btc") {
// 		return (<React.Fragment>{btc}</React.Fragment>);
// 	} else if(type === 'doge') {
// 		return (<React.Fragment>{data.user.doge[0].doge_balance}</React.Fragment>);		
// 	} else if(type === 'eth') {
// 		return (<React.Fragment>{data.user.eth[0].ethapibalance}</React.Fragment>);		
// 	} else if (type === 'tipc') {
// 		return (<React.Fragment>{data.user.eth[0].tipcapibalance}</React.Fragment>);		
// 	} else if(type === 'tip') {
// 		return (<React.Fragment>{data.user.eth[0].tipapibalance}</React.Fragment>);		
// 	} else if(type === 'xth') {
// 		return (<React.Fragment>{data.user.eth[0].xrtapibalance}</React.Fragment>);		
// 	}
// }




	// async componentDidMount() {
	// 	const { type, data } = this.props;
	// 	this.setState({
	// 		doge: data.user.doge[0].doge_balance,
	// 		eth: data.user.eth[0].ethapibalance,
	// 		tipc: data.user.eth[0].tipcapibalance,
	// 		tip: data.user.eth[0].tipapibalance,
	// 		xth: data.user.eth[0].xrtapibalance
	// 	})

	// 	let token = localStorage.getItem('token');

	//   if (token) {
	//     const options = {
	//       method: 'GET',
	//       headers: {
	//         'content-type': 'application/json',
	//         'Access-Control-Allow-Origin': '*',
	//         'x-auth-token': token
	//       },
	//       url: config.api + "/crypto/btc/balance",
	//     };
	// 		let btc = await Axios(options);
	// 		console.log(btc);

	//     this.setState({
	// 			btc: btc.data.result
	// 		})
	//   }
	// }