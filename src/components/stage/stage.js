import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Lang } from '../../../lang';
import Progress from "../reuseable/progress";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
	root: {
		flexGrow: 1,
		minWidth: 300,
		maxWidth: 400

	},
	tab: {
		alignItems: 'baseline',
		padding: 10,
	},
	pos: {
		// position: "absolute"
	},
	progress: {
		margin: theme.spacing.unit * 2,
	},
});


class Stages extends Component {
	displayCoin = (coin) => {
		const sty = {
			marginBottom: -5
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
		const { data, classes } = this.props;
		return (
			<div className={classes.root} >
				<Typography variant="button" style={{ fontSize: 25, borderBottom: "1px solid darkgray" }}>
					{Lang.b3}
				</Typography>
				<span>
						{/*Level {the level}  */}
					<Typography style={{ marginTop: 15 }} >
						{Lang.z2}&nbsp;
						<strong>{data.user.stage}</strong>
					</Typography>
					<Progress percent={(data.user.stage / 10) * 100}  />
				</span>

				<br />
				{/* REward for level {the level} */}
				<Typography>
					{Lang.a3}&nbsp;{Lang.z2}&nbsp;
					<strong>{data.user.stage + 1}:</strong>
					&nbsp;
					{this.displayCoin(data.user.levels.reward.coin)}
					{data.user.levels.reward.amt}
				</Typography>

				<br />
				{
					data.user.levels.data.map((stage, index) => (
						<Grid container spacing={8} key={index} >
							<Grid item xs={7} >
								<Typography>{stage.text}</Typography>
							</Grid>
							<Grid item xs={5} >
								<Progress percent={stage.val} />
							</Grid>
						</Grid>
					))
				}

				<Typography variant='caption' style={{ margin: '10% 2% 0%', color: 'gray' }} >
					<strong>Warning: </strong>
					Using multiple accounts to give yourself upvotes or tips can result in a ban and the 
					loss of all coins in the account.
				</Typography>
			</div>
		);
	}
}

Stages.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}
export default connect(mapStateToProps,)(withStyles(styles)(Stages));
