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
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
		maxWidth: 400,
		padding: 5,
		marginTop: 10,
		boxShadow: "0px 0px 1px 0px",
    borderRadius: 0,
    color: "rgba(0, 0, 0, 0.54)"
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
			<Paper className={classes.root} >
				<Typography variant="button" style={{ fontSize: 16, marginLeft: 15 }}>
					{Lang.x2}
				</Typography>
				<List style={{ marginLeft: 15 }} >
					{
						data.leaderboard.map((score, index) => (
							<ListItem key={score._id.userId} alignItems="flex-start" style={{ margin: "-10px 0px -10px -5px", padding: '5px 5px' }} >
								{/* <ListItemIcon style={{ marginRight: -13, marginTop: 6 }} >
									{index + 1}.
								</ListItemIcon> */}
								<ListItemText
									primary={
										<span style={{ display: 'flex' }} >
											<Link href={encodeURI("/profile/" + score.user[0]._id + "/@" + score.user[0].username)} >
												<a style={{ color: '#1F7BD8', textDecoration: 'none', textTransform: "capitalize", fontSize: 13, padding: 3 }}>
													<strong style={{ color: 'gray' }}>@</strong>
													{typeof score.user[0] !== "undefined" ? `${score.user[0].username}` : "@No name"}
												</a>
											</Link>
											<div style={{ fontSize: 13 }} >
												<span><img src='/static/tipcoins/doge.svg' style={{ width: 30, height: 30, marginTop: 0 }} /></span>
												<span style={{ marginTop: 4, position: 'absolute',padding: '0px 5px' }} >
													<NumberFormat value={parseFloat(score.count).toFixed(2)} displayType="text" thousandSeparator={true} />
												</span>
											</div>
										</span>
									}
								/>
							</ListItem>
						))
					}
				</List>
			</Paper>
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
