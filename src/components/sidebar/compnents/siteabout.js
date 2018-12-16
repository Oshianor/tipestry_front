import React, { Component } from 'react';
import Thumbnails from '../../reuseable/thumbnails';
import Typography from '@material-ui/core/Typography';

class Siteabout extends Component {
	render() {
		return (
			<div>
				<div>
					<span style={{ display: 'flex', alignItems: "center", position: 'absolute', margin: 10 }}>
						<Avatar alt="Remy Sharp" src="/static/images/forgot.jpg" className={classes.avatar} />
						<Typography variant="h3">
							Jumia tresberry deej
						</Typography>
					</span>
					
				</div>
				
			</div>
		);
	}
}

export default Siteabout;