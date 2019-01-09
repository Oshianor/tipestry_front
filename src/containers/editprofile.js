import React, { Component } from 'react';
import Edit from '../components/editprofile/edit';
import Header from '../components/header/header';
import Changepassword from '../components/editprofile/changepassword';

class Editprofile extends Component {
	render() {
		return (
			<div>
				<Header />
				<Edit />
				<Changepassword />
			</div>
		);
	}
}

export default Editprofile;