import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// outlined
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getToken } from "../../../actions/data";

import axios from 'axios';
import { config } from '../../../../config';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
});

class Thumb extends React.Component {
  state = {
    count: 1,
    res: {
      error: false,
      msg: '',
      content: {}
    }
  }

  async componentDidMount() {
    const { topicObjId, votes } = this.props;
    let token = localStorage.getItem('token');

    this.setState({
      count: typeof votes[0] !== "undefined" ? votes[0].count : 1
    });

    if (token) {
      // console.log('token', token);
      
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/votes/topic/' + topicObjId
      }
      
      let vote = await axios(options);
      if (vote.data.error == false) {
        console.log(vote.data, "9999999");
        this.setState({
          res: vote.data.content
        })
      }
      
      this.props.getToken(token)
    }
  }

  async handleVote(votes) {
    const { topicObjId, handleOpen } = this.props;
    let token = localStorage.getItem('token');

    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ votes, topicObjId }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/votes/topic'
      }

      let vote = await axios(options);
      console.log("CHANGEING VOTES", vote);
      if (vote.data.error === false) {
        this.setState({
          res: vote.data.content.reply,
          count: vote.data.content.count
        })
      }
      
    } else {
      handleOpen();
    }
  }

  thumbup() {
    const { res } = this.state;
    const { data } = this.props;
    // check if there as a response
    if (typeof res.userId !== 'undefined') {
      // check if the vote userId match the current userId
      // check the vote type (thumb up or down)
      if (res.userId === data.user.id && res.votes === 1) {
        return ( <ThumbUpAltOutlined style={{ color: '#1F7BD8' }} />
        )
      }
    }
    
    return (
      <ThumbUpAlt />
    )
  }

  thumbDown() {
    const { res } = this.state;
    const { data } = this.props;
    if (typeof res.userId !== 'undefined') {
      if (res.userId === data.user.id && res.votes === 0) {
        return ( <ThumbDownAltOutlined style={{ color: '#1F7BD8' }} />
        )
      }
    }
    return (
      <ThumbDownAlt />
    )
  }
  
  render() {
    const { num, iconspacing } = this.props;
    const { count, open } = this.state;
    
    return (
      <React.Fragment>
        {/*  */}
        <Tooltip title="Thumbs Up" aria-label="Thumbs Up">
          <IconButton aria-label="Thumbs Up" className={iconspacing} onClick={this.handleVote.bind(this, 1)} >
            {this.thumbup()}
          </IconButton>
        </Tooltip>
        <p className={num}>
          {count}
        </p>
				&nbsp;&nbsp;

        {/*  */}
        <Tooltip title="Thumbs Down" aria-label="Thumbs Down">
          <IconButton aria-label="Thumbs Down" className={iconspacing} onClick={this.handleVote.bind(this, 0)} >
            {this.thumbDown()}
          </IconButton>
        </Tooltip>
			</React.Fragment>
    );
  }
}

Thumb.propTypes = {
  classes: PropTypes.object.isRequired,
  votes: PropTypes.array.isRequired,
  topicObjId: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getToken: getToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Thumb));
