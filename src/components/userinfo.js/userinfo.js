import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Progress from "../reuseable/progress";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgressbar from 'react-circular-progressbar';
import { Lang } from '../../../lang';
import { connect } from 'react-redux';




const styles = {
	root: {
		flexGrow: 1,
		maxWidth: 300,
		margin: "5%",
		textAlign: 'center',
		marginTop: 10,
		boxShadow: '0px 0px 1px 0px',
		borderRadius: 0,
		color: '#c9c6c6',
		cursor: 'pointer'
		// maHheight: 250,
		// background: "linear-gradient(to right, rgba(8, 8, 8, 0.23), rgba(255, 255, 255, 0.24))"
	},
	tab: {
		padding: 5,
	},
	pos: {
		textAlign: 'center',
		color: "#406ac2",
		fontSize: 12
	}
};


class Userinfo extends Component {
	state = {
		token: null
	}

	displayCoin = (coin) => {
		const sty = {
			marginBottom: -37,
    	// marginLeft: -40
		}
		if (coin === "XRT") {
			return <img src="/static/tipcoins/Tip-3.png" alt="comments" width='25' height="25" style={sty} />;
		} else if (coin === "TIPC") {
			return <img src="/static/tipcoins/Tip-2.png" alt="comments" width='25' height="25" style={sty} />;
		} else if (coin === "DOGE") {
			return <img src="/static/tipcoins/Dogecoin-Icon.svg" alt="comments" width='25' height="25" style={sty} />;
		}
	}

	componentDidMount = () => {
		let token = localStorage.getItem('token');
		this.setState({
			token
		})
	}

	
	render() {
		// console.log('opppppppp', this.state);
		const { token } = this.state;
		const { classes, data, handleOpen } = this.props;
		
		return (
			<Paper className={classes.root} onClick={() => handleOpen()} >
				{
					token &&
						<React.Fragment>
							<Grid container justify="center" style={{ margin: "0px -12px 30px 0px" }} >
								<Grid item className={classes.tab} >
									<Typography variant="h6" style={{ fontSize: 12 }} >
										{/* votes */}
										{Lang.v1}
									</Typography>
									<Typography variant="button" className={classes.pos} >
										{data.user.votes}
									</Typography>
								</Grid>
								<Grid item className={classes.tab} >
									<Typography variant="h6" style={{ fontSize: 12 }} >
										{/* TIPS */}
										{Lang.w1}
									</Typography>
									<Typography variant="button" className={classes.pos} >
										{data.user.tips}
									</Typography>
								</Grid>
								<Grid item className={classes.tab} >
									<Typography variant="h6" style={{ fontSize: 12 }} >
										{/* FOLLOWERS */}
										{Lang.x1}
									</Typography>
									<Typography variant="button" className={classes.pos} >
										{typeof data.user.followers !== "undefined" ? data.user.followers.length : 0}
									</Typography>
								</Grid>
							</Grid>
							<Grid container justify="center" style={{ margin: "0px 0px 30px 0px" }} >
								<Grid item xl={4} >
									<div style={{ width: 75, height: 75 }} >
										<CircularProgressbar
											percentage={
												typeof data.user.stage !== "undefined" ? 
													(data.user.stage / 10) * 100
												:
													(1 / 10) * 100
											}
											text={
												typeof data.user.stage !== "undefined" ? 
													`${(data.user.stage / 10) * 100}%`
												:
													`${(1 / 10) * 100}%`
											}
											styles={{
												path: { stroke: `rgba(62, 152, 199, 50)` },
												text: { fill: '#f88', fontSize: '16px' },
											}}
										/>
									</div>
								</Grid>
								<Grid item xl={4} >
									<Typography variant="h6" style={{ fontSize: 12, padding: "10%" }} >
										{/* NEXT REWARD: */}
										{Lang.y1}
									</Typography>
								</Grid>
								<Grid item xl={4} >
									{this.displayCoin(data.user.levels.reward.coin)}
								</Grid>
							</Grid>
						</React.Fragment>
				}
			</Paper>
		);
	}
}

Userinfo.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(Userinfo));
