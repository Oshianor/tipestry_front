import React, { Component } from 'react';
import { config } from '../../../config'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Axios from 'axios';

const styles = theme => ({
	container: {
		display: 'flex',
		// flexWrap: 'wrap',
		// flexDirection: 'column'
		alignItems: "flex-start",
		padding: 20,
		marginLeft: "1%",
		marginRight: "1%",
		[theme.breakpoints.between('md', 'xl')]: {
			marginLeft: "5%",
		}
	},
	but: {
		boxShadow: '0px 0px 0px 0px',
    marginLeft: -4,
    height: 40,
		borderRadius: 5,
		[theme.breakpoints.only('xs')]: {
			fontSize: 12,
		}
	},
	root: {
		height: 7
	}
});

class share extends Component {

	// loadYoutubeApi() {
	// 	const script = document.createElement("script");
	// 	script.src = "https://apis.google.com/js/client.js";

	// 	script.onload = () => {
	// 		gapi.load('client', () => {
	// 			gapi.client.setApiKey(API_KEY);
	// 			gapi.client.load('youtube', 'v3', () => {
	// 				this.setState({
	// 					gapiReady: true
	// 				});
	// 			});
	// 		});
	// 	};

	// 	document.body.appendChild(script);
	// }

	// componentDidMount() {
	// 	this.loadYoutubeApi();
	//   }
	auth = () =>  {
		var config = {
			'client_id': '552622529500-tija1afnm8t36c6cm3g6unpg15t13d4e.apps.googleusercontent.com',
			'scope': 'https://www.google.com/m8/feeds'
		};
		gapi.auth.authorize(config, () => {
			this.fetch(gapi.auth.getToken());
		});
	}

	fetch = async (token) => {
		// $.ajax({
		// 	url: "https://www.google.com/m8/feeds/contacts/default/full?access_token=" + token.access_token + "&alt=json",
		// 	dataType: "jsonp",
		// 	success: function (data) {
		// 		console.log(JSON.stringify(data));
		// 	}
		// });
		const options = {
			// data: JSON.stringify(obj),
			url: "https://www.google.com/m8/feeds/contacts/default/full?access_token=" + token.access_token + "&alt=json",
		};

		try {
			let url = await Axios(options);
			console.log(url);
			
			// window.open(url.data, 'sharer', 'toolbar=0,status=0,width=548,height=325');
		} catch (error) {
			console.log("ERROR : ", error);
		}
	}

	// handle = async () => {
	// 	const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 			'Access-Control-Allow-Origin': '*',
	// 			// 'x-auth-token': token
	// 		},
	// 		data: JSON.stringify(obj),
	// 		url: config.api + "/users/invite/contacts",
	// 	};

	// 	try {
	// 		let url = await Axios(options);
	// 		window.open(url.data, 'sharer', 'toolbar=0,status=0,width=548,height=325');
	// 	} catch (error) {
	// 		console.log("ERROR : ", error);
	// 	}
	// }

	render() {
		const { classes } = this.props;
		let link = "/register";
		return (
			<div>
				<div className={classes.container} >
					{/* <TextField
						id="outlined-full-width"
						label="Label"
						style={{ margin: 3, borderRadius: 0, maxWidth: 350 }}
						className={{
							root: classes.root,
							input: classes.root
						}}
						fullWidth
						margin="normal"
						variant="outlined"
					/> */}
					<OutlinedInput
						id="component-outlined"
						style={{ height: 40, width: "100%", maxWidth: 450 }}
						placeholder="Email address"
          />
					<Button variant="contained" size="small" color="secondary" 
						className={classes.but}>
						Send Invite
					</Button>
				</div>
				<Typography variant='body1'>
					Import contact 
					<Button onClick={this.auth} >GMAIL</Button>
					YAHOO
				</Typography>
			</div>
		);
	}
}

// export default share;
share.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(share);