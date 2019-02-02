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
import { getTrends } from "../../actions/data";
import Link from 'next/link';
import Thumbnails from '../reuseable/thumbnails';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Eye from "@material-ui/icons/RemoveRedEye"
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    maxWidth: 300,
  },
  inline: {
    display: 'inline',
  },
});

class Trends extends Component {
	state = {
		loading: true
	}

  async componentDidMount() {
		this.getTrends();
  	this.note = setInterval(() => {
  		this.getTrends();
  	}, 600000);

  }

  componentWillUnmount = () => {
  	clearInterval(this.note);
  }


  getTrends() {
		const { getTrends } = this.props;
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			url: config.api + "/topic/trends",
		};
		axios(options).then((res) => {
			if (!res.data.error) {
				// console.log('res.data.content', res.data.content);
				
				getTrends(res.data.content)
			}
		}).catch(error => {
			console.log("NOT", error);

		})
  }
	
	render() {
		const { classes, data } = this.props;
		return (
			<div className={classes.root} >
				<Typography variant="button" style={{ fontSize: 25, marginLeft: 20, borderBottom: "1px solid darkgray" }}>
					{Lang.u1}
				</Typography>
				<List className={classes.root}>
					{
						data.trends.map(trend => (
							<ListItem key={trend._id} alignItems="flex-start" style={{ marginTop: -12, marginBottom: -15 }} >
								<ListItemIcon style={{ marginRight: -5 }} >
									<Trend />
								</ListItemIcon>
								<ListItemText
									primary={
										<Link href={encodeURI("/topics/" + trend._id + "/" + trend.title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
											<a style={{ fontSize: 14 }} >{trend.title}</a>
										</Link>
									}
									secondary={
										<span>
												{/* <Thumbnails 
													name={trend.user[0].username}
													size="xs"
													url = {
														// check if user profile image exist
														trend.user[0].profileimage === "" || !trend.user[0].profileimage ?
															null 
														:
															config.profileimage + trend.user[0].profileimage
													}
												/>  */}
												<Link href={encodeURI("/profile/" + trend.user[0]._id + "/@" + trend.user[0].username)} >
													<a style={{ color: '#1F7BD8', textDecoration: 'none', textTransform: "capitalize", fontSize: 10 }}>
														<strong style={{ color: 'gray' }}>@</strong>
														{typeof trend.user[0] !== "undefined" ? `${trend.user[0].username}` : "@No name"}
													</a>
												</Link>
											<span style={{ display: 'flex' }} >
												{
													trend.view > 0 &&
														<span>
															<Eye style={{ fontSize: 10 }} />
															<span style={{ fontSize: 10 }}>{trend.view}</span>
														</span>
												}
												&nbsp;
												{
													typeof trend.likes[0] !== "undefined" &&
														<span>
															<ThumbUpAlt style={{ fontSize: 10 }} />
															<span style={{ fontSize: 10 }} >{trend.likes[0].count}</span>
														</span>
												}
												&nbsp;
												{
													typeof trend.dislikes[0] !== "undefined" &&
														<span>
															<ThumbDownAlt style={{ fontSize: 10 }} />
															<span style={{ fontSize: 10 }} >{trend.dislikes[0].count}</span>
														</span>
												}
												&nbsp;
												{
													typeof trend.comment[0] !== "undefined" &&
														<span>
															<img 
																src="/static/icons/comments.svg"
																alt="comments"
																width='12'
																height="12" 
															/>
															<span style={{ fontSize: 10 }} >{trend.comment[0].count}</span>
														</span>
												}
											</span>
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


Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getTrends: getTrends
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Trends));
