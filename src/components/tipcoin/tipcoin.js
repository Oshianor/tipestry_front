import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import axios from 'axios';
import { config } from '../../../config';
import NumberFormat from 'react-number-format';
import { Lang } from '../../../lang';
import Add from "@material-ui/icons/AddCircleOutlineRounded"
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
		flexGrow: 1,
		// [theme.breakpoints.up('xs')]: {
		// 	margin: "0px 1%",
		// 	marginTop: 320,
		// },
		// [theme.breakpoints.up('md')]: {
		// 	// margin: "0px 15%",
		// 	marginTop: 320,
		// },
		// [theme.breakpoints.up('lg')]: {
		// 	// margin: "0px 25%",
		// 	marginTop: 320,
		// },
	},
	paperRoot: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
		color: theme.palette.text.secondary,
		display: "flex", alignItems: "center"
  },
});

class TipCoin extends React.Component {
	state = {
		tip: {
			btc: [],
			doge: [],
			eth: [],
			tipc: [],
			tip: [],
			xth: []
		}
	}

	// when the component mounts get all the tips 
	async componentDidMount() {
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			url: config.api + '/topic/total/tips'
		}
		
		let user = await axios(options);
		// console.log("USER", user);
		
		this.setState({
			tip: user.data
		})
	}
	
	render() {
		console.log('tip', this.state)
		const { classes } = this.props;
		const { tip } = this.state;
		return (
			<div className={classes.root}>
				<Paper className={classes.paperRoot}>
				<Typography variant="subtitle2" style={{ fontSize: 18, textAlign: "left", marginTop: -13 }} >
					{/* Recent Tips */}
					{Lang.n}
				</Typography>
					<Grid container spacing={8}>
						<Grid item xs={6} sm={6} md={4} lg={6} xl={6}>
							<Paper className={classes.paper} >
								<img src="/static/tipcoins/bit.svg"
									alt="comments"
									width='50'
									height='50'
									style={{ borderRight: "1px solid gray", paddingRight: "10%" }} />
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.btc[0] !== "undefined" ? 
											// parseFloat(tip.btc[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.btc[0].amt).toFixed(2)} displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/eth.svg" alt="comments" width='50' height='50' 
									style={{ borderRight: "1px solid gray", paddingRight: "10%" }} />
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.eth[0] !== "undefined" ? 
											// parseFloat(tip.eth[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.eth[0].amt).toFixed(2)} displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<img 
									src="/static/tipcoins/doge.svg" 
									alt="comments"
									width='50' 
									height='50' 
									style={{ borderRight: "1px solid gray", paddingRight: "10%" } } 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.doge[0] !== "undefined" ? 
											// parseFloat(tip.doge[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.doge[0].amt).toFixed(2)} displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<img 
									src="/static/tipcoins/Tip-1.png" 
									alt="comments" 
									width='50' 
									height='50' 
									style={{ borderRight: "1px solid gray", paddingRight: "10%" }} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.tipc[0] !== "undefined" ? 
											// parseFloat(tip.tipc[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.tipc[0].amt).toFixed(2)} displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<img 
									src="/static/tipcoins/Tip-2.png" 
									alt="comments" 
									width='50' 
									height='50' 
									style={{ borderRight: "1px solid gray", paddingRight: "10%" }} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.tip[0] !== "undefined" ? 
											// parseFloat(tip.tip[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.tip[0].amt).toFixed(2) } displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<img 
									src="/static/tipcoins/Tip-3.png" 
									alt="comments" 
									width='50' 
									height='50' 
									style={{ borderRight: "1px solid gray", paddingRight: "10%" }} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{
										typeof tip.xth[0] !== "undefined" ? 
											// parseFloat(tip.xth[0].amt).toFixed(2) 
											<NumberFormat value={parseFloat(tip.xth[0].amt).toFixed(2)} displayType="text" thousandSeparator={true} />
										: 
											0.00
									}
								</Typography>
							</Paper>
						</Grid>

						{/* add coin  */}
						<Grid item xs={6} sm={3} md={4} lg={6} xl={4}>
							<Paper className={classes.paper}>
								<Button style={{ padding: 0 }} >
									<div style={{ borderRight: "1px solid gray", paddingRight: "10%" }}>
										<Add style={{ width: 50, height: 45 }} />
									</div>
									<div style={{ flexGrow: 1 }} />
									<Typography variant="button" >
										{Lang.t1}
									</Typography>
								</Button>
							</Paper>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}

TipCoin.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(TipCoin));