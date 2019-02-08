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

class Siteactions extends Component {

	render() {
		const { site, url, gift } = this.props;
		return (
			<div style={{ margin: '8%' }} >
				<div style={{ display: 'flex' }} >
					<Thumb siteObjId={site._id} />
					<Follow />
					<SharePopover link={url} placement='bottom' />
					<Coin site={site} />
				</div>
				<SiteCoins gift={gift} />
				<Claim site={site} />
			</div>
		);
	}
}

Siteactions.propTypes = {
	votes: PropTypes.array.isRequired,
	site: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired
};

export default Siteactions;