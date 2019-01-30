import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
	withStyles
} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import { Lang } from "../../../lang";

const styles = theme => ({
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

class Preloader extends Component{
	state = {
		msg: Lang.o1
		// 'Give us a sec ☺️. We are getting things ready for you.' // 给我们一个☺️。我们正在为您做好准备。
	}

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({
				msg: Lang.p1
				// 'I know it been a while but we are working on it 🙏...' // 我知道已经有一段时间但我们正在研究它......
			})
		}, 20000);

		this.timer = setTimeout(() => {
			this.setState({
				msg: Lang.q1
				// 'It taking too long. Your network must me slow 🚶.' // 这花了太长时间。你的网络必须让我慢一点。
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