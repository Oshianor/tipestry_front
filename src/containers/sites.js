import React, { Component } from 'react';
import Embed from '../components/embed/embedsite';
import Grid from '@material-ui/core/Grid';
import Header from "../components/header/header";
import {
	withRouter
} from 'next/router';
import TopicsList from "../components/sites/listTopics";
import { connect } from 'react-redux';
import Drawer from '../components/header/drawer';



class Topic extends Component {
	state = {
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

  componentDidMount() {
		addEventListener('scroll', this.trackScrolling);
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
	render() {
	const { router, data }  = this.props;
	const { stopScroll, drawer } = this.state;
		// console.log("SITES", router.query.s);
		return (
			<div>
				<Header 
					drawer={drawer} 
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose}
				/>
				<Drawer 
          drawer={drawer} 
          stopScroll={stopScroll}
          overlay={false}
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        >
					<Grid container spacing={24}>
						<Grid item xs={12} sm={12} md={6} lg={7} xl={7} >
							<Embed url={router.query.s} site={data.site.site} height="95vh" top={70} />
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
							<TopicsList topics={data.site.topics} site={data.site.site} gift={data.site.gift} url={router.query.s} />
						</Grid>
					</Grid>
				</Drawer>
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