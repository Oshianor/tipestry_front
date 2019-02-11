import React, { Component } from 'react';
import Axios from 'axios';
import { config } from '../../../config';
import Preloader from '../preloader/preloader';
import YouTube from 'react-youtube';
import isURL from 'validator/lib/isURL';



 class Embed extends Component {
  state = {
    load: 'open', //img, youtube, open, close
    videoId: ''
  }

  async componentDidMount() {
    const { url, screenshot } = this.props;
    // console.log(this.getQuery('v', url));
    if(this.checkIfItYouTube(url) == "youtube.com" && this.getQuery('v', url) != null) {
      this.setState({
        load: "youtube",
        videoId: this.getQuery('v', url)
      })

    }
  }

  checkIfUrl = (url) => {
    let yes = isURL(url, { protocols: ['http','https'], require_tld: true, require_protocol: false} );
    // console.log('yes', yes);
    
    return yes ? yes : null
  }

  checkIfItYouTube = (url) => {
     var pathname = new URL(url).hostname;
     let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
     return improved;
  }

  getQuery(name, url) {
    // gettting YouTube videoId
    // if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }


  displayYoutube = () => {
    const { url, height } = this.props;
    const { load, videoId } = this.state;
    const opts = {
      height: '500px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    if (load === 'youtube') {
      return (
        <div style={{ marginTop: 70 }}>
          <YouTube
            videoId={this.getQuery('v', url)}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      );
    }
  }

  displayIframe = () => {
    const { height, top, site } = this.props;
    const { load } = this.state;
    if (site) {
      if(site.screen_path === "") {
        return (
          <iframe 
            id="frame"
            style={{ 
              borderRight: "10px solid gray",
              width: "100%",
              height: height ? height : "70vh",
              marginTop: top ? top : 0
            }}
            // title="Inline Frame Example"
            width="300"
            height="200"
            src={this.props.url}
            onLoad={this.error}
            allow="fullscreen"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        )
      } else {
        return (
          <img 
            // src={
            //   this.checkIfUrl(site.screen_path) ?
            //     site.screen_path
            //   :
            //     config.topic + "/captures/" + site.screen_path
            // }
            src={"//image.thum.io/get/auth/3228-www.tipestry.com/" + site.url}
            style={{ 
              borderRight: "10px solid gray",
              width: "100%",
              height: "85vh",
              // marginTop: 70,
              marginTop: top ? top : 0
            }}
          />
        )
      }
    } else {
      return (
        <iframe 
          id="frame"
          style={{ 
            borderRight: "10px solid gray",
            width: "100%",
            height: height ? height : "70vh",
            marginTop: top ? top : 0
          }}
          // title="Inline Frame Example"
          width="300"
          height="200"
          src={this.props.url}
          onLoad={this.error}
          allow="fullscreen"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      )
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
	render() {
    const { height, top, img } = this.props;
    const { load } = this.state;
    // console.log(this.state, "=======>", this.props);
    
		return (
      <div>
        {this.displayYoutube()}
        {this.displayIframe()}    
      </div>
		)
	}
}
export default Embed;

// let improved = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
// console.log("YES", improved);



// const urlParams = new URLSearchParams(improved);
// const myParam = urlParams.get('watch');
// this.getQuery('v', url);
// console.log(this.getQuery('v', url));




        // let sim = await Axios.get(config.api + '/topic/verify?s=' + url);
        // console.log(sim, "sim");

        // this.setState({
        //   load: sim.data === "open" ? "open" : typeof img !== "undefined" ? sim.data : 'img'
        // })