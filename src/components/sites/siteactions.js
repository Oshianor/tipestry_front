import React, { Component } from 'react';
import Thumb from './components/thumb';
import PropTypes from 'prop-types';
import Follow from './components/follow';
import SharePopover from '../post/components/sharePopover';
import Coin from './components/coin';
import Claim from './components/claim';
import axios from 'axios';
import { config } from "../../../config";
import SiteCoins from './components/siteCoins';
import Paper from '@material-ui/core/Paper';

class Siteactions extends Component {
	state = {
		open: false
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	handleClose = () => {
		this.setState({
			open: false
		})
	}
	
	render() {
		const { site, url, gift } = this.props;
		return (
			< Paper style = {
				{
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					margin: '10px 8%',
					boxShadow: '0px 0px 1px 0px',
					// color: 'lightslategray',
					color: '#d9dadc',
					borderRadius: 0
				}
			} >
				{/* <div style={{ display: 'flex' }} > */}
					<Thumb siteObjId={site._id} />
					<Follow />
					{/* <SharePopover link={url} title={} placement='bottom'  handleOpen={this.handleOpen}  /> */}
					<Coin site={site} />
					<Claim site={site} />
				{/* </div> */}
				<br />
				<SiteCoins gift={gift} />
			</Paper>
		);
	}
}

Siteactions.propTypes = {
	votes: PropTypes.array.isRequired,
	site: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired
};

export default Siteactions;