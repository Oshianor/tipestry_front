import React, { Component } from 'react';
import ListUsers from '../src/containers/admins/listusers';

class UserInfo extends Component {
	componentDidMount = async() => {

	}
	render() {
		return (
			<div>
				<ListUsers />
			</div>
		)
	}
}

export default UserInfo;