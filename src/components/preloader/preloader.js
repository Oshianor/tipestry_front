import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
	withStyles
} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

class Preloader extends Component{
	state = {
		msg: 'Give us a sec ☺️. We are getting things ready for you.'
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({
				msg: 'I know it been a while but we are working on it 🙏...'
			})
		}, 20000);

		this.timer = setTimeout(() => {
			this.setState({
				msg: 'It taking too long. Your network must me slow 🚶.'
			})
		}, 30000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
		// console.log("clear timer", this.timer);
	}

	render() {
		// console.log("PRLOADER", this.state);
		
		const { classes } = this.props;
		const { msg } = this.state;
		return (
			<div style = {
				{
					top: "15%",
					left: 0,
					right: 0,
					bottom: 0,
					position: "absolute",
					display: "block"
				}
			} >
				<Typography style={{ textAlign: "center", fontSize: 13 }} variant="caption">
					<CircularProgress className={classes.progress} />
					<br />
					{msg}
				</Typography>
			</div>
		)
	}
}
Preloader.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Preloader);