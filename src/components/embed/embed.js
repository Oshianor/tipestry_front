import React, { Component } from 'react';
import Axios from 'axios';
import { config } from '../../../config';
import Preloader from '../preloader/preloader';

 class Embed extends Component {
  state = {
    load: false
  }

  async componentDidMount() {
    const { url } = this.props;
    let sim = await Axios.get(config.api + '/topic/verify?s=' + url);
    console.log("YES", sim);

      this.setState({
        load: sim.data
      })
    // if (typeof sim.data['x-frame-options'] !== "undefined") {
    //   if (sim.data['x-frame-options'] !== "DENY" && sim.data['x-frame-options'] !== "SAMEORIGIN") {
    //     this.setState({
    //       load: true
    //     })
    //   }
    // }
    // console.log(sim.data['x-frame-options'] !== "DENY", "=====> ", sim.data['x-frame-options']);
    // if (sim.data.headers['x-frame-options'] !== "DENY") {
    //   if (sim.data.headers['x-frame-options'] !== "SAMEORIGIN") {
    //     this.setState({
    //       load: true
    //     })
    //   }
    // }
  }
  
	render() {
    const { height, top, img } = this.props;
    const { load } = this.state;
    console.log(this.state);
    
		return (
      <div>
        {
          load ?
            <iframe 
              id="frame"
              style={{ 
                borderRight: "10px solid gray",
                width: "100%",
                height: height ? height : "70vh",
                marginTop: top ? top : 0
              }}
              title="Inline Frame Example"
              width="300"
              height="200"
              src={this.props.url}
              onLoad={this.error}
              allow="fullscreen"
            >
            <p>Your browser does not support iframes.</p>
            </iframe>
          :
            typeof img !== "undefined" ?
              <img 
                src={
                  img.length > 200 ?
                    config.base64 + img
                  :
                    config.topic + img
                }
                style={{ 
                  borderRight: "10px solid gray",
                  width: "100%",
                  // height: height ? height : "70vh",
                  marginTop: top ? top : 0
                }}
              />
            :
              <img 
                src='/static/images/default.png'
                style={{ 
                  borderRight: "10px solid gray",
                  width: "100%",
                  height: height ? height : "70vh",
                  marginTop: top ? top : 0
                }}
              />
        }
        
      </div>
		)
	}
}
export default Embed;