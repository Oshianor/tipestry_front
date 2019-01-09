import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
		flexGrow: 1,
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%",
			marginTop: 320,
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 15%",
			marginTop: 320,
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 25%",
			marginTop: 320,
		},
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
	render() {
		const { classes, data } = this.props;
		return (
			<div className={classes.root}>
				<Paper className={classes.paperRoot}>
				<Typography variant="subtitle2" style={{ fontSize: 18, textAlign: "left", marginTop: -13 }} >Total Tips for the Month</Typography>
					<Grid container spacing={24}>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper} >
								<img src="/static/tipcoins/bit.svg"
									alt="comments"
									width='50'
									height='50'
									style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									}
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.btc[0] !== "undefined" ? parseFloat(data.topics.tip.btc[0].amt).toFixed(2) : 0.01}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/eth.svg" alt="comments" width='50' height='50' 
									style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.eth[0] !== "undefined" ? parseFloat(data.topics.tip.eth[0].amt).toFixed(2) : 0.01}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/doge.svg" alt="comments" width='50' height='50' style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.doge[0] !== "undefined" ? parseFloat(data.topics.tip.doge[0].amt).toFixed(2) : 0.01}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/Tip-1.png" alt="comments" width='50' height='50' style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.tipc[0] !== "undefined" ? parseFloat(data.topics.tip.tipc[0].amt).toFixed(2) : 0.01}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/Tip-2.png" alt="comments" width='50' height='50' style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.tip[0] !== "undefined" ? parseFloat(data.topics.tip.tip[0].amt).toFixed(2) : 0.01}
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper className={classes.paper}>
								<img src="/static/tipcoins/Tip-3.png" alt="comments" width='50' height='50' style={
										{
											borderRight: "1px solid gray",
											paddingRight: "10%",
										}
									} 
								/>
								<div style={{ flexGrow: 1 }} />
								<Typography variant="button" >
									{typeof data.topics.tip.xth[0] !== "undefined" ? parseFloat(data.topics.tip.xth[0].amt).toFixed(2) : 0.01}
								</Typography>
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