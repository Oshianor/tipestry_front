import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  chip: {
		margin: 1,
    height: 20
  },
  chipAvater: {
    height: 20,
    width: 20
  }
});

class Tags extends Component {
  render() {
    const { tags, classes, handleTag } = this.props;
    return (
      <>
        {typeof tags !== "undefined" &&
          tags.map(tag => (
            <Chip
              avatar={<Avatar className={classes.chipAvater}>#</Avatar>}
              label={tag}
              clickable
              color="primary"
              onClick={() => handleTag(tag)}
              className={classes.chip}
              variant="filled"
            />
          ))}
      </>
    );
  }
}

export default withStyles(styles)(Tags);