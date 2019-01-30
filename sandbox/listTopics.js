import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from "next/link";
import moment from 'moment';
import { config } from '../../../config';
import Axios from 'axios';
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Alert from '../reuseable/alert';

const styles = theme => ({
  root: {
    width: '100%',
		// maxWidth: 360,
		margin: "0px 10% 0px 0px",
		padding: 0,
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
	},
	container: {
    display: 'flex',
		flexWrap: 'wrap',
		margin: "5px 10%"
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	cnt: {
		fontSize: 11
	}
});

class TopicList extends React.Component {
	state = {
		title: '',
		message: '',
		titleHelper: {
			err: false,
			msg: ""
		},
		loading: false,
		open: false,
		msg: ''
	}


	handleClose = () => {
		this.setState({
			open: false
		})
	}

	handleChange = name => event => {
		if(name === 'title') {
			if(event.target.value !== "") {
				this.setState({
					[name]: event.target.value,
				});
				return;
			}
		}
		this.setState({
			[name]: event.target.value,
		});
		return;
	};


	displayEmptyTopics = () => {
		let token = localStorage.getItem('token');
		return (
			<div>
				{
					token ? 
						this.displayAddTopicForm()
					:
						<div>
							<Typography variant="h4" >
								{/* There currently no topics for this site */}
								目前没有此网站的主题
							</Typography>
							<Typography variant="h6" >
								{/* Please  */}
								请
								<Link href="/login" >
									<a>
										&nbsp;
										{/* Login */}
										登录
										&nbsp;
									</a>
								</Link> 
								{/* to create a topic and earn coin today */}
								创建一个主题，今天赚钱
							</Typography>
							
						</div>
				}
			</div>
		)
	}


	// handle add topic
	async handleAddTopic() {
		this.setState({
			loading: true
		})
		const { title, message } = this.state;
		const { url } = this.props;
		let token = localStorage.getItem('token');
		if (token) {
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'x-auth-token': token
				},
				// pass title, url, and message
				data: JSON.stringify({
					url,
					title,
					message
				}),
				url: config.api + "/topic",
			};

			let site = await Axios(options);
			// console.log(site, "nnn");
			
			// if successful then redirect back to home page 
			if(!site.data.error) return Router.push('/');
			
			this.setState({
				loading: false,
				open: true,
				msg: site.data.msg
			})
		}
		
	}


	displayAddTopicForm = () => {
		const { classes } = this.props;
		const { title, titleHelper, message, loading } = this.state;
		return (
			<form className={classes.container} noValidate autoComplete="off">
			<Typography style={{ textAlign: 'center' }} variant='subtitle1' >
				{/* ADD A TOPIC AND MAKE A DIFFERENCE */}
				添加一个话题并使之有所不同
			</Typography>
        <TextField
					required
          id="outlined-name"
					// label="Title"
					label="标题"
					error={titleHelper.err}
          className={classes.textField}
          value={title}
          onChange={this.handleChange('title')}
					margin="normal"
					size="small"
					fullWidth
					helperText={titleHelper.msg}
          variant="outlined"
        />
				<div style={{ display: 'flex', marginTop: -9 }} >
					<p style={30 - title.length < 10 ? { color: "red"} : { color: "black" }} className={classes.cnt}>
						{30 - title.length}
					</p>
				</div>
				
        <TextField
          id="outlined-required"
					// label="Message"
					label="信息留言"
					value={message}
					fullWidth
					className={classes.textField}
					onChange={this.handleChange('message')}
          margin="normal"
					variant="outlined"
					multiline
					rows={3}
        />
				<Button disabled={loading} variant="contained" color='primary' onClick={this.handleAddTopic.bind(this)} >
					
					{/* {!loading ? "Add Topic" : <CircularProgress size={24} className={classes.buttonProgress} />} */}
					{!loading ? "添加话题" : <CircularProgress size={24} className={classes.buttonProgress} />}
				</Button>
			</form>
		)
	}

	displayTopics = () => {
		const { classes, topics } = this.props;

		
	}

	render() {
			const { classes, topics } = this.props;
			const { open, msg } = this.state;
		// console.log("TOPICLIST", topics);
		
		return (
			<div style={{ marginTop: 80 }} >
				{
					typeof topics === "undefined" ?
						this.displayEmptyTopics()
					:
						<React.Fragment>
							<Typography variant="h5" style={{ textAlign: 'center' }} >
								{/* Topics */}
								话题
							</Typography>
							<div style={{ margin: "0 10%" }}>
								<div style={{ 
									// height: 400, 
									backgroundColor: 'white', width: "100%" }}>
									<div style={{ 
										// height: 400,
										maxHeight: 400,
										width: "100%", overflow: "auto" }}>
									{
										topics.map((topic) => (
											<List className={classes.root} key={topic._id} >
												<ListItem alignItems="flex-start">
													<ListItemAvatar>
														<Link href={encodeURI("/topics/" + topic._id + "/" + topic.title)} >
															<a  >
																<Avatar style={{ borderRadius: 0 }} src={
																	topic.screenshot.length > 200 ?
																		config.base64 + topic.screenshot :
																		config.topic + topic.screenshot
																	}
																/>
															</a>
														</Link>
													</ListItemAvatar>
													<ListItemText
														primary = {
															<Link href={encodeURI("/topics/" + topic._id + "/" + topic.title)} >
																<a style={{ color: '#1F7BD8', textDecoration: 'none' }} >
																	{topic.title.length > 50 ? topic.title.substr(0, 40) + "..." : topic.title}
																</a>
															</Link>
														}
														secondary={
															<React.Fragment>
																<Typography component="span" className={classes.inline} color="textPrimary">
																	By &nbsp;
																	<Link href={"/profile/" + topic.user[0]._id + "/@" + topic.user[0].username}>
																		<a style={{ color: '#1F7BD8', textDecoration: 'none' }} >
																			<strong style={{ color: 'gray' }}>@</strong>
																			{topic.user[0].username}															
																		</a>
																	</Link>
																	&nbsp; {moment(topic.created_at).locale('zh_cn').fromNow()}
																</Typography>
															</React.Fragment>
														}
													/>
												</ListItem>
											</List>
										))
									}
									</div>
								</div>
							</div>
							{this.displayAddTopicForm()}
						</React.Fragment>
				}
				<Alert open={open} message={msg} handleClose={this.handleClose} />
			</div>
		);
	}
}

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);
