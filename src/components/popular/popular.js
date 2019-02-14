import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Moment from "moment";
import { Lang } from '../../../lang';
import { config } from '../../../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopular } from "../../actions/data";
import axios from 'axios';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Star from "@material-ui/icons/Star";




const styles = theme => ({
  root: {
		color: 'white',
		maxWidth: 250,
		margin: '5%',
		boxShadow: '0px 0px 1px 0px',
		borderRadius: 0,
    // backgroundColor: theme.palette.background.paper,
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

class Popular extends React.Component {
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
  }

  componentWillUnmount = () => {
  	clearInterval(this.note);
  }


  async getTrends() {
		const { getPopular } = this.props;
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			url: config.api + "/topic/popular/post",
		};
		let res = await axios(options)
			if (!res.data.error) {
				// console.log('res.data.content', res.data.content);
				
				getPopular(res.data.content)
			}
	}
	
	// check if the link if it is a gif so instead of the 
	// displaying the image we use link and show the gif
	checkForGif = (filename) => {
		var ext = /.+\.(.+)$/.exec(filename);
		// console.log('r ? r[1] ',ext ? ext[1] : null);

		return ext ? ext[1] : null;
	}

	render() {
		const { expanded } = this.state;
		const { classes, data } = this.props;
		return (
			<Paper className={classes.root} >
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							<Star />{Lang.y2} 
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
						{
							data.popular.map((topic) => (
								<ul>
									<li>
										<img src={
											typeof topic.topic[0].site[0] !== "undefined" && this.checkForGif(topic.topic[0].site[0].url) == 'gif' || this.checkForGif(topic.topic[0].site[0].url) == 'png' || this.checkForGif(topic.topic[0].site[0].url) == 'jpg' ?
												topic.topic[0].site[0].url 
											:
												"//image.thum.io/get/auth/3228-www.tipestry.com/" + topic.topic[0].site[0].url
										} 
										style={{ width: 45, height: 45 }}
										/>
										<Link href={encodeURI("/topics/" + topic.topic[0]._id + "/" + topic.topic[0].title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
											<a>{topic.topic[0].title}</a>
										</Link>
										{/* <Typography component="span" className={classes.inline} color="textPrimary">
											{Moment(topic.topic[0].created_at).locale(Lang.locale).fromNow()}
										</Typography> */}
									</li>
								</ul>
							))
						}
						</div>
						<style jsx>{`
							*{
								margin: 0;padding: 0;
							}

							ul {
								list-style-type: none;
								width: 200px;
							}

							a {
								font: bold 10px / 1.5 Helvetica,
								Verdana,
								sans-serif;
							}

							li img {
								float: left;
								margin: 0 15px 0 0;
							}

							li span {
								font: 200 12px / 1.5 Georgia,
								Times New Roman,
								serif;
							}

							li {
								padding: 10px;
								overflow: auto;
							}

							li: hover {
								background: #eee;
								cursor: pointer;
							}
					`}</style>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Paper>
		);
	}

}

Popular.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getPopular: getPopular
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Popular));



















































































// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import Moment from "moment";
// import { Lang } from '../../../lang';
// import { config } from '../../../config';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { getPopular } from "../../actions/data";
// import axios from 'axios';
// import Link from 'next/link';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 300,
//     // backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// });

// class Popular extends React.Component {
// 	async componentDidMount() {
// 		this.getTrends();
//   }

//   componentWillUnmount = () => {
//   	clearInterval(this.note);
//   }


//   async getTrends() {
// 		const { getPopular } = this.props;
// 		const options = {
// 			method: 'GET',
// 			headers: {
// 				'content-type': 'application/json',
// 				'Access-Control-Allow-Origin': '*'
// 			},
// 			url: config.api + "/topic/popular/post",
// 		};
// 		let res = await axios(options)
// 			if (!res.data.error) {
// 				// console.log('res.data.content', res.data.content);
				
// 				getPopular(res.data.content)
// 			}
//   }

// 	render() {
// 		const { classes, data } = this.props;
// 		return (
// 			<div className={classes.root} >
// 				<Typography variant="button" style={{ fontSize: 25, marginLeft: 20, borderBottom: "1px solid darkgray" }}>
// 					{Lang.y2}
// 				</Typography>
// 				<List className={classes.root}>
// 					{
// 						data.popular.map((topic) => (
// 							<ListItem key={topic._id.topicId} alignItems="flex-start">
// 								<ListItemAvatar>
// 									<Avatar 
// 										style={{ borderRadius: 0 }} 
// 										src={
// 												// check to see if it the old data of base64
// 												// by using the lenght of the screenshot field
// 												topic.topic[0].screenshot.length > 200 ?
// 													config.base64 + topic.topic[0].screenshot
// 												:
// 													config.topic + topic.topic[0].screenshot
// 										}
// 									/>
// 								</ListItemAvatar>
// 								<ListItemText
// 									primary={
// 										<span>
// 											<Link href={encodeURI("/topics/" + topic.topic[0]._id + "/" + topic.topic[0].title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
// 												{topic.topic[0].title}
// 											</Link>
// 										</span>
// 									}
// 									secondary={
// 										<React.Fragment>
// 											<Typography component="span" className={classes.inline} color="textPrimary">
// 												{Moment(topic.topic[0].created_at).locale(Lang.locale).fromNow()}
// 											</Typography>
// 										</React.Fragment>
// 									}
// 								/>
// 							</ListItem>
// 						))
// 					}
// 				</List>
// 			</div>
// 		);
// 	}

// }

// Popular.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
// 	return {
// 		data: state.data,
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({
// 		getPopular: getPopular
// 	}, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Popular));
