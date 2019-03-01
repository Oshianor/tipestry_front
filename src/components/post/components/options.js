import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Report from '@material-ui/icons/Report';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics } from "../../../actions/data";
import { config } from '../../../../config';
import axios from 'axios';
import ReportComponent from './report';
import Delete from "@material-ui/icons/DeleteForever";
import { Lang } from '../../../../lang';
import DialogDeletePost from './dialogDeletePost';

class Options extends React.Component {
  state = {
    anchorEl: null,
    userFollowing: [],
    topicFollowing: [],
    report: false,
    del: false
  };

  handleReportOpen = () => {
    this.setState({
      report: true
    })
  }

  handleReportClose = () => {
    this.setState({
      report: false
    })
    this.handleClose();
  }


  handleDeleteClose = () => {
    this.setState({
      del: false
    })
  }

  handleDeleteOpen = () => {
    this.setState({
      del: true
    })
  }

  componentDidMount() {
    const { data, following } = this.props;
    this.setState({
      userFollowing: data.user.following ? data.user.following : [],
      topicFollowing: following ? following : []
    })
  }
  

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleFollow = async () => {
    const { token, topicUser } = this.props;
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ user_id: topicUser.id }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/follow'
      }

      let follow = await axios(options);
      // console.log("ADDING FOLLOWING", follow);
      if (follow.data.error === false) {
        this.setState({
          userFollowing: follow.data.content.following,
        })
      }
      
    }
  }

  displayFollow = () => {
    const { token, topicUser, data } = this.props;
    const { userFollowing } = this.state
    if (token) {
      // check if the user is logged in
      if (topicUser.id !== data.user.id) {
      // check if the owner of the post is the same with the logged in user
        if (userFollowing.indexOf(topicUser.id) === -1) {
          return (
            <Button 
              variant="outlined" 
              size="small" 
              color="primary" 
              onClick={this.handleFollow}
              style={{ padding: "5px", fontSize: 11 }} 
            >
              {/* Follow */}
              {Lang.f}
            </Button>
          )
        } else {
          return (
            <Button 
              variant="contained" 
              size="small" 
              color="primary" 
              onClick={this.handleFollow}
              style={{ padding: "5px", fontSize: 11 }} 
            >
              {/* Following */}
              {Lang.g}
            </Button>
          )
        } 
      }
    }
  }

  handlePostFollow = async () => {
    const { topicObjId } = this.props;
    // console.log("yes", token);
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ topicObjId }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/topic/follow'
      }

      let follow = await axios(options);
      // console.log("topic FOLLOWING", follow);
      if (follow.data.error === false) {
        this.setState({
          topicFollowing: follow.data.content.following
        })
      }
      
    }
  }

  handleDeletePost = async () => {
    const { token, topicUser, data, getTopics, topicObjId } = this.props;
    if (token) {
      // check if the user is logged in
      if (topicUser.id === data.user.id || data.user.is_admin === 1) {
      // check if the owner of the post is the same with the logged in user
      // check also if the user is admin then enable delete
        const options = {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-auth-token': token
          },
          url: config.api + '/topic/delete/' + topicObjId
        }

        try {
          let del = await axios(options);
          getTopics(del.data.content);
          // modal for more options like report post and follow post
          this.handleClose();
          // modal for deleteion confirmation
          this.handleDeleteClose();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  render() {
    const { anchorEl, topicFollowing, report, del } = this.state;
    const { data, topicUser } = this.props;
    // console.log(this.state);
    
    return (
      <div>
        {this.displayFollow()}
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem style={{ fontSize: 12, padding: "5px 16px" }} onClick={this.handlePostFollow}>
            {
              topicFollowing.indexOf(data.user._id) === -1 ?
                <React.Fragment>
                  <Add style={{ fontSize: 15 }} />
                  &nbsp;{Lang.z1}
                  {/* Follow Post */}
                </React.Fragment>
              :
                <React.Fragment>
                  <Remove style={{ fontSize: 15 }} />
                  &nbsp;{Lang.a2}
                  {/* Following Post */}
                </React.Fragment>
            }
          </MenuItem>
          <MenuItem style={{ fontSize: 12, padding: "5px 16px" }} onClick={this.handleReportOpen}>
            <Report style={{ fontSize: 15 }} /> &nbsp;{Lang.b2}
            {/* Report post */}
          </MenuItem>
          {
            topicUser.id === data.user.id || data.user.is_admin === 1 ?
              <MenuItem style={{ fontSize: 12, padding: "5px 16px" }} onClick={this.handleDeleteOpen}>
                <Delete style={{ fontSize: 15 }} />
                &nbsp;{Lang.c2}
                {/* Delete */}
              </MenuItem>
            :
              ""
          }
        </Menu>
        <ReportComponent 
          open={report}
          handleReportOpen={this.handleReportOpen}
          handleReportClose={this.handleReportClose}
        />
        <DialogDeletePost 
          open={del}
          handleClose={this.handleDeleteClose}
          handleDeletePost={this.handleDeletePost}
        />
      </div>
    );
  }
}

// export default Options;
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopics
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Options);
