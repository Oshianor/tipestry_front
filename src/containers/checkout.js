import React, { Component } from 'react';
import Header from '../components/header/header';
import Coindetails from '../components/checkout/coindetails';
import Drawer from '../components/header/drawer';

class Checkout extends Component {
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
		addEventListener('scroll', this.trackScrolling);		
	}

	render() {
		const { stopScroll, drawer } = this.state;
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
					overlay={true}
					top={130}
          stopScroll={stopScroll}
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        >
					<Coindetails />
				</Drawer>
			</div>
		);
	}
}

export default Checkout;