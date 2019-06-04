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
import { Lang } from '../../../../lang';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    // display: 'flex',
    borderTop: '.5px solid gray'
  },
});



class Thumb extends React.Component {
  state = {
    count: "",
    res: {
      error: false,
      msg: '',
      content: {}
    }
  }

  async componentDidMount() {
    let token = localStorage.getItem('token');
    const { votes, views, gift, comment } = this.props;


    this.setState({
      count: typeof votes[0] !== "undefined" ? Number(votes[0].count) + Number(views) + Number(gift) + Number(comment) : ""
    });

    // this.handleVotesCount();
    this.handleUserVotes(token);
    
  }

  // round(value, precision) {
  //   var multiplier = Math.pow(10, precision || 0);
  //   return Math.round(value * multiplier) / multiplier;
  // }

  // handleVotesCount = async () => {
  //   const { topicObjId } = this.props;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       "Access-Control-Allow-Origin": "*"
  //     },
  //     url: config.api + "/votes/get/topic/upvotes/" + topicObjId
  //   };

  //   let vote = await axios(options);
  //   // console.log("vote.data.content", vote.data.content);
    
  //   this.setState({
  //     count: this.round(vote.data.content)
  //   });
  // }


  handleUserVotes = async (token) => {
    const { topicObjId } = this.props;

    if (token) {
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-auth-token": token
        },
        url: config.api + "/votes/topic/" + topicObjId
      };

      let vote = await axios(options);
      if (!vote.data.error) {
        // console.log(vote.data, "9999999");
        this.setState({
          res: vote.data.content
        });
      }

      this.props.getToken(token);
    }
  }


  async handleVote(votes) {
    const { topicObjId, handleOpen, views, gift, comment } = this.props;
    const { count } = this.state; 
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

      try {
        let vote = await axios(options);
        console.log("vote.data.content.count", vote.data.content.count);
        if (vote.data.error === false) {
          this.setState({
            res: vote.data.content.reply,
            count: Number(vote.data.content.count) + Number(views) + Number(gift) + Number(comment)
          });
        }
      } catch (error) {
        console.log("voting", error);
        
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
    const { num, iconspacing, views , gift , comment} = this.props;
    const { count, open } = this.state;
    console.log("this.state", this.state);
    
    // let total = Number(count) + Number(views) + Number(gift) + Number(comment);
    return (
      <React.Fragment>
        {/*  */}
        <Tooltip title={Lang.o3} aria-label="Thumbs Up">
          <IconButton aria-label="Thumbs Up" className={iconspacing} onClick={this.handleVote.bind(this, 1)} >
            {this.thumbup()}
          </IconButton>
        </Tooltip>
        &nbsp;
        <p className={num}>
          {/* chek if the count is zero then show nothing else show count */}
          {/* {count <= 0 ? "" : count} */}
          {count <= 0 ? "" : count}
        </p>
				&nbsp;&nbsp;

        {/*  */}
        <Tooltip title={Lang.p3} aria-label="Thumbs Down">
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
