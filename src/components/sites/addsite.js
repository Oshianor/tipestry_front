import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Link from "next/link";
// import moment from 'moment';
import { config } from '../../../config';
import Axios from 'axios';
import Router from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Alert from '../reuseable/alert';
import { Lang } from '../../../lang';
import Paper from '@material-ui/core/Paper';


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
		margin: "10px 8%", 
		boxShadow: '0px 0px 1px 0px', 
		// color: 'lightslategray', 
		color: '#d9dadc',
		borderRadius: 0
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
	},
	textField: {
		margin: "1px 20px"
	}
});

class Addsite extends Component {
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
			// console.log(event.target.value.length <= 140);
			
			if(event.target.value.length <= 140) {
				this.setState({
					[name]: event.target.value
				});
				return;
			}
			this.setState({
				open: true,
				msg: Lang.p
				// "Title field can only contain 140 characters" // 标题字段只能包含30个字符
			})
			return;
		}
		this.setState({
			message: event.target.value,
		});
		return;
	};

	// handle add topic
	async handleAddTopic() {
		this.setState({
			loading: true
		})
		const { title, message } = this.state;
		const { url } = this.props;
		let token = localStorage.getItem('token');
		if (token && title !== "") {
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
		} else {
			this.setState({
				open: true,
				msg: Lang.q
				// // "Title field can't be empty" // 标题字段不能为空
			})
		}
		
	}

	render() {
		const { classes } = this.props;
		const { title, titleHelper, message, loading, msg, open } = this.state;
		return (
			<Paper className={classes.container}>
				<Typography 
					style={{ textAlign: 'left', textTransform: 'capitalize', marginTop: 5, marginBottom: 5, fontWeight: '400' }} 
					variant='h6' 
					className={classes.textField} 
				>
					{/* ADD A TOPIC AND MAKE A DIFFERENCE */}
					{Lang.o}
				</Typography>
        <TextField
					required
          id="outlined-name"
					// label="Title"
					label={Lang.o2}
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
				<div style={{ display: 'flex', marginTop: -10 }} className={classes.textField} >
					<p style={140 - title.length < 20 ? { color: "red", fontWeight: '600'} : { color: "black" }} className={classes.cnt}>
						{140 - title.length}
					</p>
				</div>
				
        <TextField
          id="outlined-required"
					// label="Message"
					label={Lang.p2}
					value={message}
					fullWidth
					className={classes.textField}
					onChange={this.handleChange('message')}
          margin="normal"
					variant="outlined"
					multiline
					rows={3}
        />
				<Button style={{ margin: '10px 20px' }} disabled={loading} variant="contained" color='primary' onClick={this.handleAddTopic.bind(this)} >
					{/* {!loading ? "Add Topic" : <CircularProgress size={24} className={classes.buttonProgress} />} */}
					{!loading ? Lang.r : <CircularProgress size={24} className={classes.buttonProgress} />}
				</Button>
				<Alert open={open} message={msg} handleClose={this.handleClose} />
			</Paper>
		)
	}
}

// export default Addsite;
Addsite.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Addsite);