import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 0,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

const colors = {
  black: "#000000",
  blue: "#0000ff",
  brown: "#a52a2a",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  fuchsia: "#ff00ff",
  gold: "#ffd700",
  green: "#008000",
  indigo: "#4b0082",
  khaki: "#f0e68c",
  lightblue: "#add8e6",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lime: "#00ff00",
  magenta: "#ff00ff",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  orange: "#ffa500",
  pink: "#ffc0cb",
  purple: "#800080",
  violet: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  yellow: "#ffff00"
}



class Thumbnails extends Component {
  colorRan() {
    var result;
    var count = 0;
    for (var prop in colors)
      if (Math.random() < 1 / ++count)
        result = prop;
    return result;
  }

  render() {
    const {
      classes,
      url,
      size,
      borderWidth,
      borderColor,
      name
    } = this.props;
    const sm = {
      backgroundColor: this.colorRan(),
      width: 40,
      height: 40,
      border: `${borderWidth}px solid ${borderColor}`
      // fontSize: 50
    }
    const md = {
      backgroundColor: this.colorRan(),
      width: 60,
      height: 60,
      fontSize: 35,
      border: `${borderWidth}px solid ${borderColor}`
    }
    const lg = {
      backgroundColor: this.colorRan(),
      width: 75,
      height: 75,
      fontSize: 50,
      border: `${borderWidth}px solid ${borderColor}`
      
    }
    const xl = {
      backgroundColor: this.colorRan(),
      width: 125,
      height: 125,
      fontSize: 100,
      border: `${borderWidth}px solid ${borderColor}`
    }
    let sizer;
    if (size === "sm") {
      sizer = sm;
    } else if(size === 'md') {
      sizer = md;
    } else if (size === 'lg') {
      sizer = lg;
    } else if (size === 'xl') {
      sizer = xl;
    }
    if (url !== "") {
      return (
        <Avatar src="/static/images/forgot.jpg" className={classes.avatar} style={sizer} />
      );
    } else {
      return (
        <Avatar className={classes.avatar} style={sizer}>
          {name.charAt(0).toUpperCase()}
        </Avatar>
      );
    }
  }
}

Thumbnails.defaultProps = {
  url: "",
  borderWidth: 0,
  borderColor: 'transparent',
  size: 'sm'
};


Thumbnails.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number
};

export default withStyles(styles)(Thumbnails);
