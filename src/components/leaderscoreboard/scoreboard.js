import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Trend from '@material-ui/icons/TrendingUpOutlined'
import Typography from '@material-ui/core/Typography';
import { Lang } from '../../../lang';
import axios from 'axios';
import { config } from "../../../config";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLeaderBoard } from "../../actions/data";
import Link from 'next/link';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Eye from "@material-ui/icons/RemoveRedEye";

const styles = theme => ({
  root: {
    maxWidth: 300,
  },
  inline: {
    display: 'inline',
  },
});

class LeaderBoard extends Component {
	state = {
		loading: true
	}

  async componentDidMount() {
		this.getLeaderBoards();
  }
  async getLeaderBoards() {
		const { getLeaderBoard } = this.props;
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			url: config.api + "/users/leaderscoreboard",
		};
		try {
			let res = await axios(options);
			if (!res.data.error) {
				getLeaderBoard(res.data.content)
			}
		} catch (error) {
			console.log(error);
			
		}
		
  }
	
	render() {
		const { classes, data } = this.props;
		return (
			<div className={classes.root} >
				<Typography variant="button" style={{ fontSize: 25, marginLeft: 20, borderBottom: "1px solid darkgray" }}>
					{Lang.x2}
				</Typography>
				<List className={classes.root}>
					{
						data.leaderboard.map((score, index) => (
							<ListItem key={score._id.userId} alignItems="flex-start" style={{ margin: "-10px 0px -10px 0px" }} >
								<ListItemIcon style={{ marginRight: -13, marginTop: 6 }} >
									{index + 1}.
								</ListItemIcon>
								<ListItemText
									primary={
										<span style={{ display: 'flex' }} >
											<Link href={encodeURI("/profile/" + score.user[0]._id + "/@" + score.user[0].username)} >
												<a style={{ color: '#1F7BD8', textDecoration: 'none', textTransform: "capitalize", fontSize: 13, padding: 3 }}>
													<strong style={{ color: 'gray' }}>@</strong>
													{typeof score.user[0] !== "undefined" ? `${score.user[0].username}` : "@No name"}
												</a>
											</Link>
											<span style={{ fontSize: 13, padding: 3 }} >{score.count}</span>
										</span>
									}
								/>
							</ListItem>
						))
					}
				</List>
			</div>
		);
	}
}


LeaderBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getLeaderBoard: getLeaderBoard
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LeaderBoard));
