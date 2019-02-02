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
		maxWidth: 250,
		marginLeft: "5%",
		textAlign: 'center',
		maHheight: 250,
		// background: "linear-gradient(to right, rgba(8, 8, 8, 0.23), rgba(255, 255, 255, 0.24))"
	},
	tab: {
		padding: 5,
	},
	pos: {
		textAlign: 'center',
		color: "#406ac2",
		fontSize: 20
	}
};


class Userinfo extends Component {
		displayCoin = (coin) => {
		const sty = {
			marginBottom: -37,
    	marginLeft: -40
		}
		if (coin === "XRT") {
			return <img src="/static/tipcoins/Tip-3.png" alt="comments" width='25' height="25" style={sty} />;
		} else if (coin === "TIPC") {
			return <img src="/static/tipcoins/Tip-2.png" alt="comments" width='25' height="25" style={sty} />;
		} else if (coin === "DOGE") {
			return <img src="/static/tipcoins/Dogecoin-Icon.svg" alt="comments" width='25' height="25" style={sty} />;
		}
	}

	
	render() {
		const { classes, data } = this.props;
		return (
			<div className={classes.root} >
				<Grid container justify="center" style={{ margin: "0px 0px 30px 0px" }} >
					<Grid item className={classes.tab} >
						<Typography variant="h6" style={{ fontSize: 15 }} >
							{/* votes */}
							{Lang.v1}
						</Typography>
						<Typography variant="button" className={classes.pos} >
							{data.user.votes}
						</Typography>
					</Grid>
					<Grid item className={classes.tab} >
						<Typography variant="h6" style={{ fontSize: 15 }} >
							{/* TIPS */}
							{Lang.w1}
						</Typography>
						<Typography variant="button" className={classes.pos} >
							{data.user.tips}
						</Typography>
					</Grid>
					<Grid item className={classes.tab} >
						<Typography variant="h6" style={{ fontSize: 15 }} >
							{/* FOLLOWERS */}
							{Lang.x1}
						</Typography>
						<Typography variant="button" className={classes.pos} >
							{typeof data.user.followers !== "undefined" ? data.user.followers.length : 0}
						</Typography>
					</Grid>
				</Grid>

				<Grid container justify="center" style={{ margin: "0px 0px 30px 0px" }} >
					<Grid item lg={4} xl={4} >
						<div style={{ width: 75, height: 75 }} >
							<CircularProgressbar
								percentage={(data.user.stage / 10) * 100}
								text={`${(data.user.stage / 10) * 100}%`}
								styles={{
									path: { stroke: `rgba(62, 152, 199, 50)` },
									text: { fill: '#f88', fontSize: '16px' },
								}}
							/>
						</div>
					</Grid>
					<Grid item lg={3} xl={3} >
						<Typography variant="h6" style={{ fontSize: 15, padding: "10%" }} >
							 {/* NEXT REWARD: */}
							{Lang.y1}
						</Typography>
					</Grid>
					<Grid item lg={5} xl={5} >
						{this.displayCoin(data.user.levels.reward.coin)}
					</Grid>
				</Grid>
			</div>
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
