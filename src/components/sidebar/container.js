import React, { Component } from 'react';
import Comments from './compnents/comments';

class Container extends Component {
	render() {
		return (
			<div style={{ margin: "0 5%" }}>
				<div style={{ height: 500, width: "100%" }}>
					<div style={{ height: 450, width: "100%", overflow: "auto" }}>
						<Comments />
					</div>
				</div>
			</div>
		);
	}
}

export default Container;