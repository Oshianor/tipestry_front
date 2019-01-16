import React, { Component } from 'react';
import Embed from '../components/embed/embed';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/sidebar/sidebar';
import Header from "../components/header/header";
import Siteabout from '../components/sidebar/compnents/siteabout';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

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
		const { token } = this.state;
		const { data } = this.props;
		return (
			<div>
				<Header />
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<Typography variant="h6" style={{ margin: 5, marginTop: 80, textAlign: 'center', color: 'black' }} >
							{data.siteTopic[0].title}
						</Typography>
						<Embed 
							url={data.siteTopic[0].sites[0].url} 
							img={data.siteTopic[0].screenshot}
							height="70vh" 
						/>
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

// export default Topic;
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(Topic);
