import React, { Component } from 'react';
import Embed from '../components/embed/embedtopic';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/sidebar/sidebar';
import Header from "../components/header/header";
import Siteabout from '../components/sidebar/compnents/siteabout';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Drawer from '../components/header/drawer';


class Topic extends Component {
	state = {
		token: null,
		drawer: false,
		stopScroll: false
	}

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  }

    // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  }

	componentWillUnmount() {
		removeEventListener('scroll', this.trackScrolling);
  }
  
  // track scroolling . when scroll amost to the header
  trackScrolling = (e) => {
    // console.log(window.scrollY, "vvv", window.scrollX);
    
    if (window.scrollY > 240) {
      this.setState({
        stopScroll: true
      })
      return false
    }
    this.setState({
      stopScroll: false
    })
    return false;
  }
	
  componentDidMount() {
    let token = localStorage.getItem('token');
    this.setState({
      token
		})
		addEventListener('scroll', this.trackScrolling);		
	}
	
	render() {
		const { token, stopScroll, drawer } = this.state;
		const { data } = this.props;
		return (
			<div>
				<Header 
					drawer={drawer} 
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
				/>
				<Drawer 
					drawer={drawer} 
					// this props is to check if overlay exisit 
					// in that page an push the icons to the top.
					overlay={false}
          stopScroll={stopScroll}
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        >
					<Grid container spacing={24}>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
							<Typography variant="h6" style={{ margin: 5, marginTop: 80, textAlign: 'center', color: 'black' }} >
								{typeof data.siteTopic[0] !== "undefined" && data.siteTopic[0].title}
							</Typography>
							<Embed 
								url={typeof data.siteTopic[0] !== "undefined" && data.siteTopic[0].sites[0].url} 
								img={typeof data.siteTopic[0] !== "undefined" && data.siteTopic[0].screenshot}
								height="85vh" 
								top={0}
								site={typeof data.siteTopic[0] !== "undefined" && data.siteTopic[0].sites[0]}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
							<Sidebar token={token} />
						</Grid>
					</Grid>
				</Drawer>
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
