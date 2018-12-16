import React, { Component } from 'react';
import Siteabout from './compnents/siteabout';
import Compose from './compnents/compose';

class Sidebar extends Component {
	render() {
		return (
			<div style={{ height: "100vh" }}>
				<Siteabout />
				<Compose />
			</div>
		);
	}
}

export default Sidebar;