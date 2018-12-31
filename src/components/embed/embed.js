import React, { Component } from 'react';

 class Embed extends Component {
	render() {
		return (
      <div>
        <iframe 
          id="inlineFrameExample"
          style={{ 
            borderRight: "10px solid gray",
            width: "100%",
            height: "70vh",
            marginTop: 80
          }}
          title="Inline Frame Example"
          width="300"
          height="200"
          src="http://toxicwap.com/TV_Series/">
        </iframe>
      </div>
		)
	}
}
export default Embed;