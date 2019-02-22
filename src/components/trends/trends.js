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
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
		maxWidth: 250,
		color: 'white',
		boxShadow: '0px 0px 1px 0px',
		borderRadius: 0,
		margin: "5%"
  },
  inline: {
    display: 'inline',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		display: 'flex'
	},
});

class Trends extends Component {
	state = {
		expanded: null,
		loading: true
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false,
		});
	};

  async componentDidMount() {
		const { modal } = this.props;
		if (modal) {
			this.setState({ expanded: 'panel1' })
		}
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
		const { classes, data, modal } = this.props;
		const { expanded } = this.state;
		return (
			<Paper className={classes.root} >
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							<Trend /> {Lang.u1} 
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						{/* <Typography> */}
							{
								data.trends.map((trend, index) => (
									
									<ul key={index} >
										<li>
											<Link href={encodeURI("/topics/" + trend._id + "/" + trend.title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
												<a style={{ fontSize: 14, textTransform: 'capitalize' }} >{trend.title}</a>
											</Link>
											<span>
												&nbsp;&nbsp;
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
										</li>
										<style jsx>{`
											*{
												margin: 0;padding: 0;
											}
											ul {
												list-style-type: none;
												width: 200px;
											}

											a {
												font: bold 20px / 1.5 Helvetica,
												Verdana,
												sans-serif;
											}

											li img {
												float: left;
												margin: 0 15px 0 0;
											}

											li span {
												font: 200 12 px / 1.5 Georgia,
												Times New Roman,
												serif;
											}

											li {
												padding: 10 px;
												overflow: auto;
											}

											li: hover {
												background: #eee;
												cursor: pointer;
											}
									`}</style>
									</ul>
								))
							}
						{/* </Typography> */}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Paper>
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


























































































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Trend from '@material-ui/icons/TrendingUpOutlined'
// import Typography from '@material-ui/core/Typography';
// import { Lang } from '../../../lang';
// import axios from 'axios';
// import { config } from "../../../config";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { getTrends } from "../../actions/data";
// import Link from 'next/link';
// import Thumbnails from '../reuseable/thumbnails';
// import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
// import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
// import Eye from "@material-ui/icons/RemoveRedEye"
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';


// const styles = theme => ({
//   root: {
// 		maxWidth: 300,
// 		boxShadow: '0px 0px 1px 0px',
// 		borderRadius: 0,
// 		margin: "3%"
//   },
//   inline: {
//     display: 'inline',
//   },
// });

// class Trends extends Component {
// 	state = {
// 		loading: true
// 	}

//   async componentDidMount() {
// 		this.getTrends();
//   	this.note = setInterval(() => {
//   		this.getTrends();
//   	}, 600000);

//   }

//   componentWillUnmount = () => {
//   	clearInterval(this.note);
//   }


//   getTrends() {
// 		const { getTrends } = this.props;
// 		const options = {
// 			method: 'GET',
// 			headers: {
// 				'content-type': 'application/json',
// 				'Access-Control-Allow-Origin': '*'
// 			},
// 			url: config.api + "/topic/trends",
// 		};
// 		axios(options).then((res) => {
// 			if (!res.data.error) {
// 				// console.log('res.data.content', res.data.content);
				
// 				getTrends(res.data.content)
// 			}
// 		}).catch(error => {
// 			console.log("NOT", error);

// 		})
//   }
	
// 	render() {
// 		const { classes, data } = this.props;
// 		return (
// 			<Paper className={classes.root} >
// 				<Typography variant="button" style={{ fontSize: 25, marginLeft: 20, borderBottom: "1px solid darkgray" }}>
// 					{Lang.u1}
// 				</Typography>
// 				<List >
// 					{
// 						data.trends.map(trend => (
// 							<ListItem key={trend._id} alignItems="flex-start" style={{ marginTop: -12, marginBottom: -15 }} >
// 								<ListItemIcon style={{ marginRight: -5 }} >
// 									<Trend />
// 								</ListItemIcon>
// 								<ListItemText
// 									primary={
// 										<Link href={encodeURI("/topics/" + trend._id + "/" + trend.title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
// 											<a style={{ fontSize: 14 }} >{trend.title}</a>
// 										</Link>
// 									}
// 									secondary={
// 										<span>
// 												<Link href={encodeURI("/profile/" + trend.user[0]._id + "/@" + trend.user[0].username)} >
// 													<a style={{ color: '#1F7BD8', textDecoration: 'none', textTransform: "capitalize", fontSize: 10 }}>
// 														<strong style={{ color: 'gray' }}>@</strong>
// 														{typeof trend.user[0] !== "undefined" ? `${trend.user[0].username}` : "@No name"}
// 													</a>
// 												</Link>
// 											<span style={{ display: 'flex' }} >
// 												{
// 													trend.view > 0 &&
// 														<span>
// 															<Eye style={{ fontSize: 10 }} />
// 															<span style={{ fontSize: 10 }}>{trend.view}</span>
// 														</span>
// 												}
// 												&nbsp;
// 												{
// 													typeof trend.likes[0] !== "undefined" &&
// 														<span>
// 															<ThumbUpAlt style={{ fontSize: 10 }} />
// 															<span style={{ fontSize: 10 }} >{trend.likes[0].count}</span>
// 														</span>
// 												}
// 												&nbsp;
// 												{
// 													typeof trend.dislikes[0] !== "undefined" &&
// 														<span>
// 															<ThumbDownAlt style={{ fontSize: 10 }} />
// 															<span style={{ fontSize: 10 }} >{trend.dislikes[0].count}</span>
// 														</span>
// 												}
// 												&nbsp;
// 												{
// 													typeof trend.comment[0] !== "undefined" &&
// 														<span>
// 															<img 
// 																src="/static/icons/comments.svg"
// 																alt="comments"
// 																width='12'
// 																height="12" 
// 															/>
// 															<span style={{ fontSize: 10 }} >{trend.comment[0].count}</span>
// 														</span>
// 												}
// 											</span>
// 										</span>
// 									}
// 								/>
// 							</ListItem>
// 						))
// 					}
					
// 				</List>
// 			</Paper>
// 		);
// 	}
// }


// Trends.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
// 	return {
// 		data: state.data,
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		getTrends: getTrends
// 	}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Trends));















