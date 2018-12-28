import React, { Component } from 'react';
import Siteabout from './compnents/siteabout';
import Compose from './compnents/compose';
import Container from './container';

class Sidebar extends Component {
	render() {
		return (
			<div style={{ height: "100vh" }}>
				<Siteabout />
				<Container />
				<Compose />
			</div>
		);
	}
}

export default Sidebar;