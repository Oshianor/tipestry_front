import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshRounded from '@material-ui/icons/RefreshRounded';
import IconButton from '@material-ui/core/IconButton';
import History from './history';
import { connect } from 'react-redux';
import { config } from "../../../config";
import Axios from 'axios';
import { getUser } from "../../actions/data";
import { bindActionCreators } from 'redux';
import Withdrawal from './withdrawal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopy from '@material-ui/icons/FileCopyOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  root: {
		flexGrow: 1,
		textAlign: 'center',
		justify: 'center', 
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%",
			marginTop: 300,
		},
		[theme.breakpoints.only('md')]: {
			margin: "0px 5%",
			marginTop: 300,
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 10%",
			marginTop: 300,
		},
	},
	rooty: {
		flexGrow: 1,
		textAlign: 'center',
		justify: 'center',
	},
	paperRoot: {
		padding: theme.spacing.unit * 2,
		
	},
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
		color: theme.palette.text.secondary,
		
	},
	sec: {
		display: "flex", alignItems: "center"
	},
	img: {
		borderRight: "1px solid gray",
		[theme.breakpoints.down('sm')]: {
			width: 60,
			height: 60,
			paddingRight: "1%",
		},
		[theme.breakpoints.only('md')]: {
			width: 80,
			height: 80,
		},
		[theme.breakpoints.up('lg')]: {
			width: 100,
			paddingRight: "10%",
			height: 100,
		},
	},
	address: {
		fontSize: 11,
		[theme.breakpoints.down('sm')]: {
			fontSize: 9
		},
	}
});

class CoinDetails extends React.Component{
	state = {
		open: false,
		btc: 0.00,
		withdraw: false,
		copied: false
	}

	async componentDidMount() {
		let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/crypto/btc/balance",
      };
			let btc = await Axios(options);
			console.log(btc);
      this.setState({
				btc: btc.data.result
			})
    }
	}

	handleGenerateBtc = async () => {
		const { getUser } = this.props;
		let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/crypto/generate/btc",
      };
			let user = await Axios(options);
			getUser(user.data[0])
    }
	}

	handleGenerateDoge = async () => {
		const { getUser } = this.props;
		let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/crypto/generate/doge",
      };
			let user = await Axios(options);
			getUser(user.data[0])
    }
	}

	handleGenerateEth = async () => {
		const { getUser } = this.props;
		let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/crypto/generate/eth",
      };
			let user = await Axios(options);
			getUser(user.data[0])
    }
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	handleClose = () => {
		this.setState({
			open: false
		})
	}


	handleSnackbarClose = () => {
		this.setState({
			copied: false
		})
	}

	handleOpenWithdraw = () => {
		this.setState({
			withdraw: true
		})
	}

	handleCloseWithdraw = () => {
		this.setState({
			withdraw: false
		})
	}

	
	render() {
		const { open, btc, withdraw, copied } = this.state;
		const { classes, data } = this.props;
		return (
			<div className={classes.root} >
				<div className={classes.paperRoot}>
					<Typography className={classes.rooty} variant="subtitle2" style={{ fontSize: 12, textAlign: "left", marginTop: -13 }} >
						COIN DETAILS
					</Typography>

					<Grid container className={classes.rooty} spacing={8}>
						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/bit.svg" alt="btc"className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >{btc}</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.btc[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.btc[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateBtc} >
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/doge.svg" alt="doge" className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{data.user.doge[0].doge_balance}
									</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.doge[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.doge[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateDoge} >
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/eth.svg" alt="eth" className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{data.user.eth[0].ethapibalance}
									</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.eth[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.eth[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateEth} > 
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/Tip-1.png" alt="tipc" className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{data.user.eth[0].tipcapibalance}
									</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.eth[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.eth[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateEth}>
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/Tip-2.png" alt="tip" className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{data.user.eth[0].tipapibalance}
									</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.eth[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.eth[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateEth}>
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
							<Paper className={classes.paper} >
								<div className={classes.sec} >
									<img src="/static/tipcoins/Tip-3.png" alt="xth" className={classes.img} />
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{data.user.eth[0].xrtapibalance}
									</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.eth[0].address}
										&nbsp;&nbsp;
										<CopyToClipboard
											text={data.user.eth[0].address}
											onCopy={() => this.setState({ copied: true })}
										>
											<FileCopy style={{ cursor: 'pointer', fontSize: 12, marginBottom: -3 }} />
										</CopyToClipboard>
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton onClick={this.handleGenerateEth}>
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>
					</Grid>
					
					<Typography 
						onClick={this.handleOpen} 
						className={classes.rooty} 
						variant="subtitle2" 
						style={{ fontSize: 12, textDecoration: 'underline', textAlign: "left", marginTop: 5, cursor: "pointer", color: '#1F7BD8' }} 
					>
						View Tips History
					</Typography>
				</div>


				<Button 
					variant="contained"
					onClick={this.handleOpenWithdraw} 
					color="primary"
				>
					Withdraw
				</Button>

				<Withdrawal open={withdraw} handleClose={this.handleCloseWithdraw} />

				<History open={open} handleClose={this.handleClose} history={data.history} />

				<Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={copied}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
					message={<span id="message-id">Successfully copied!</span>}
					action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

			</div>
		);
	}
}

CoinDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getUser: getUser,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CoinDetails));