import React, { Component } from 'react';
import Edit from '../components/editprofile/edit';
import Header from '../components/header/header';

class Editprofile extends Component {
	render() {
		return (
			<div>
				<Header />
				<Edit />
			</div>
		);
	}
}

export default Editprofile;