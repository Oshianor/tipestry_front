import React, { Component } from 'react';
import Thumb from './components/thumb';
import PropTypes from 'prop-types';
import Follow from './components/follow';
import SharePopover from '../post/components/sharePopover';

class Siteactions extends Component {
	render() {
		const { siteObjId, url } = this.props;
		return (
			<div style={{ display: 'flex', margin: '8%' }} >
				<Thumb siteObjId={siteObjId} />
				<Follow />
				<SharePopover link={url} placement='bottom' />
			</div>
		);
	}
}

Siteactions.propTypes = {
	classes: PropTypes.object.isRequired,
	votes: PropTypes.array.isRequired,
	siteObjId: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};

export default Siteactions;