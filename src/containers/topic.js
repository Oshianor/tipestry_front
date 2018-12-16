import React, { Component } from 'react';
import Embed from '../components/embed/embed';
import PropTypes from 'prop-types';
import {
	withStyles
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/sidebar/sidebar';
import Header from "../components/header/header";

const styles = theme => ({
	
});
class Topic extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Header />
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<Embed />
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<Sidebar />
					</Grid>
				</Grid>
			</div>
		);
	}
}

Topic.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topic);