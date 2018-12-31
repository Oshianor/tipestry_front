import React, { Component } from 'react';
import Embed from '../components/embed/embed';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/sidebar/sidebar';
import Header from "../components/header/header";
import Siteabout from '../components/sidebar/compnents/siteabout';


class Topic extends Component {
	state = {
    token: null
  }
  componentDidMount() {
    let token = localStorage.getItem('token');
    this.setState({
      token
    })
	}
	
	render() {
		const { classes } = this.props;
		const { token } = this.state;
		return (
			<div>
				<Header />
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<Embed />
						<Siteabout token={token} />
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<Sidebar token={token} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Topic;