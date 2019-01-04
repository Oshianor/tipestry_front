import React, { Component } from 'react';
import Thumbnails from '../../reuseable/thumbnails';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { config } from '../../../../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFollowers, getFollowing, getUser } from "../../../actions/data";
import PropTypes from 'prop-types';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

class Box extends React.Component{
	state = {
		loading: false
	}
	handleFollow = async () => {
		this.setState({
			loading: true
		})
		const { getUser, getFollowing, getFollowers, token, id } = this.props;
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ user_id: id }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/profile/follow'
      }

      let follow = await Axios(options);
      console.log("ADDING FOLLOWING", follow);
      if (follow.data.error === false) {
				this.setState({ loading: false })
				getFollowers(follow.data.content.followersUserData);
				getFollowing(follow.data.content.followingUserData);
				getUser(follow.data.content.user)
      }
    }
  }

	render() {
		const { type, name, img, profile, user, token, data, id, loading } = this.props;
		console.log("idddd", this.state);
		
		return (
			<Paper style={{ width: 250, height: 270, margin: 5 }}>
				<div style = {
					{
						backgroundImage: "url('/static/homepage/headerBackground.svg')",
						backgroundColor: "transparent",
						width: "100%",
						height: 130,
						backgroundRepeat: 'no-repeat',
						backgroundSize: "cover",
						boxShadow: '0 0 0 0'
					}
				}/>
				<div style={{ textAlign: "center", marginTop: -50, alignItems: "center", justifyContent: "center" }}>
					<div style={{ marginLeft: 87 }}>
						<Thumbnails 
							size="lg" 
							borderColor="white" 
							borderWidth={1} 
							url={img} 
							name={name}
						/>
					</div>
					<Typography variant="subtitle2" style={{ marginTop: 10, textTransform: 'capitalize' }}>
						{name}
					</Typography>
					<Button 
					//  if the user isn't logged in and the profile isnt the same with the current user then disable this button
						disabled={token && profile._id !== user._id ? true : false}
						onClick={this.handleFollow}
						variant='outlined' 
						size="small" 
						style={{ marginTop: 20, maxHeight: 35, padding: 7, borderRadius: 20 }}
					>
						{
							loading ?
								<CircularProgress size={24} className={classes.buttonProgress} />
							:
							// type represent followers
							type === "follow" ?
							// if they are both following one another then on followers show unfollow
								data.user.following && data.user.following.indexOf(id) === -1 ?
									<React.Fragment>
										<Add style={{ fontSize: 15 }} />
										Follow
									</React.Fragment>
								:
								// if the current user is only following him
									<React.Fragment>
										<Remove style={{ fontSize: 15 }} />
										Unfollow
									</React.Fragment>
							:
								//followings 
								<React.Fragment>
									<Remove style={{ fontSize: 15 }} />
									Unfollow
								</React.Fragment>
						}
						
					</Button>
				</div>
			</Paper>
		);
	}
}

Box.propTypes = {
	id: PropTypes.number.isRequired
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getFollowing: getFollowing,
		getFollowers: getFollowers,
		getUser: getUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
