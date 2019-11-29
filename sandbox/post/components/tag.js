import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Router from 'next/router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getTopics
} from "../../../actions/data";
import axios from "axios";
import { config } from "../../../../config";


const styles = theme => ({
  chip: {
		margin: 3,
    height: 20
  },
  chipAvater: {
    height: 20,
    width: 20
  }
});

class Tags extends Component {
  async handleTagGet (tag) {
    const { getTopics } = this.props;

    let topics = await axios.get(
      config.api + "/topic/get/hashtag?pageNumber=1&search=" + tag
    );

    console.log("rrrr", topics);
    
    getTopics(topics.data.content);
    Router.push('/hashtag?search=' + tag)
  };

  render() {
    const { tags, classes, handleTag } = this.props;
    return (
      <>
        {typeof tags !== "undefined" &&
          tags.map(tag => (
            // <Link href={"/hashtag?search=" + tag}>
            <Chip
              avatar={<Avatar className={classes.chipAvater}>#</Avatar>}
              label={tag}
              clickable
              color="primary"
              // href={"#" + tag}
              onClick={this.handleTagGet.bind(this, tag)}
              className={classes.chip}
              variant="filled"
            />
            // </Link>
          ))}
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTopics: getTopics
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Tags));