import React, { Component } from 'react';
// import Siteabout from './compnents/siteabout';
import Compose from './compnents/compose';
import Container from './container';
import Typography from '@material-ui/core/Typography';

class Sidebar extends Component {	
	render() {
		const { token } = this.props;
		return (
			<div style={{ marginTop: 80, height: "90vh" }}>
				<Typography variant="title" style={{ textAlign: 'center' }}>
					JOIN THE CONVERSATION TODAY
				</Typography>
				<Container token={token} />
				<Compose token={token} />
			</div>
		);
	}
}

export default Sidebar;