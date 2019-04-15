import React, { Component } from 'react';
import HeaderSiteVerification from "../components/siteVerification/header.siteVerification"
import BodySiteVerification from "../components/siteVerification/body.siteVerification";
import { connect } from "react-redux";

class siteVerificationContainer extends Component {
	render() {
		const { data } = this.props;
		return (
			<div>
				<HeaderSiteVerification />
				<BodySiteVerification site={data.site} />
			</div>
		);
	}
}

// export default siteVerificationContainer;
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}


export default connect(mapStateToProps, )(siteVerificationContainer);