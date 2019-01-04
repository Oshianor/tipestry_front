import React, { Component } from 'react';
import Embed from '../components/embed/embed';
import Grid from '@material-ui/core/Grid';
import Header from "../components/header/header";
import {
	withRouter
} from 'next/router';
import TopicsList from "../components/sites/listTopics";
import { connect } from 'react-redux';

class Topic extends Component {
	render() {
	const { router, data }  = this.props;
		console.log("SITES", router.query.s);
		
		return (
			<div>
				<Header />
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12} md={6} lg={7} xl={7} >
						<Embed url={router.query.s} height="95vh" top={70} />
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={5} xl={5} >
						<TopicsList topics={data.site.topics} url={router.query.s} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}


export default connect(mapStateToProps, )(withRouter(Topic));