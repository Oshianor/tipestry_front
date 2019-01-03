import React, { Component } from 'react';

 class Embed extends Component {
	render() {
    const { height } = this.props;
		return (
      <div>
        <iframe 
          id="frame"
          style={{ 
            borderRight: "10px solid gray",
            width: "100%",
            height: height ? height : "70vh",
            // marginTop: 80
          }}
          title="Inline Frame Example"
          width="300"
          height="200"
          src={this.props.url}
        >
        </iframe>
      </div>
		)
	}
}
export default Embed;