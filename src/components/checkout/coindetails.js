import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from "next/link";
import RefreshRounded from '@material-ui/icons/RefreshRounded';
import IconButton from '@material-ui/core/IconButton';
import History from './history';
import { connect } from 'react-redux';

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
		open: false
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
	
	render() {
		const { open } = this.state;
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
									<Typography variant="button" >0.0000</Typography>
								</div>
								<div className={classes.sec}>
									<Typography variant="button" className={classes.address} >
										{data.user.btc[0].address}
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
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
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
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
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
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
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
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
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
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
									</Typography>
									<div style={{ flexGrow: 1 }} />
									<IconButton>
										<RefreshRounded />
									</IconButton>
								</div>
							</Paper>
						</Grid>
					</Grid>
					
					<Typography onClick={this.handleOpen} className={classes.rooty} variant="subtitle2" style={{ fontSize: 12, textAlign: "left", marginTop: 5, cursor: "pointer" }} >
						View Tips History
					</Typography>
				</div>


				<Button variant="contained" color="primary">Withdraw</Button>
				<History open={open} handleClose={this.handleClose} />
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

export default connect(mapStateToProps, )(withStyles(styles)(CoinDetails));