import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from '../components/header/header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Comments from '../components/profile/comments';
import Follower from '../components/profile/follower';
import Following from '../components/profile/following';
import Replies from '../components/profile/replies';
import Post from '../components/post/post';
import { connect } from 'react-redux';
import moment from 'moment';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 100,
    minHeight: 45 
  },
  tab: {
    alignItems: 'baseline',
    padding: 10,
  },
};

class Profile extends React.Component {
  state = {
    value: 2,
    completed: 70,
    buffer: 10,
    color: 'secondary'
  };

  handleChange(value) {
    this.setState({ value });
  };

  displayInfo = () => {
    const { data } = this.props;
    const { completed, buffer } = this.state;
    return (
      <div style={{ marginTop: 250, marginBottom: 10, textAlign: 'center' }} >
        <Typography variant="h4" style={{ textTransform: "capitalize" }}>
          {
            typeof data.profile.name !== "undefined" ?
              data.profile.name
            :
              data.profile.username
          }
        </Typography>
        <Typography variant="subtitle2">
          Member Since: { moment(data.profile.created_at).format('YYYY') }
        </Typography>

        <div style={{ margin: "20px 20%" }}>
          <Grid container >
            <Grid item xs={1} >
              <div style={{ marginTop: -5 }}>
                <img src="/static/levels/newbie.png" width={15} height={15} />
                <Typography variant='body2' style={{ fontSize: 10 }} >
                  Newbie
                </Typography>
              </div>
            </Grid>
            <Grid item xs={10} >
              <LinearProgress 
                style={{ height: 17, borderRadius: 13, zIndex: 9999 }}
                color="primary" 
                variant="buffer" 
                value={completed}
                valueBuffer={buffer} 
              />
              <Typography variant='h6' style={{ fontSize: 13, zIndex: 99999, marginTop: -20 }} >
                {completed} %
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <div style={{  marginTop: -5 }}>
                <img src="/static/levels/newbie.png" width={15} height={15} />
                <Typography variant='body2' style={{ fontSize: 10 }} >
                  Pro
                </Typography>
              </div>
            </Grid>
          </Grid>
          
          
          
        </div>
        

        <Typography variant="subtitle2" style={{ margin: "5px 10%" }} >
          {data.profile.bio && data.profile.bio}
        </Typography>
      </div>
    )
  }

  displaySection = () => {
    const { value } = this.state;
    const { data } = this.props;
    if (value === 0) {
      return <Post topicValue={data.topics} source="usertopics" errMsg="YOU CURRENTLY HAVE NO POST" />;
    } else if (value === 1) {
      return <Post topicValue={data.favourite} source="favourite" errMsg="YOU CURRENTLY HAVE NO FAVOURITE POST" />;
    } else if (value === 2) {
      return <Comments value={data.comment} />;
    } else if (value === 3) {
      return <Replies value={data.replies} />;
    } else if (value === 4) {
      return <Following value={data.following} profile={data.profile} user={data.user} />;
    } else if (value === 5) {
      return <Follower value={data.followers} profile={data.profile} user={data.user} /> ;
    }
        
  }

  displayTab = () => {
    const { classes, data } = this.props;
    const { value } = this.state;
    let token = localStorage.getItem('token')
    const curr = {
      // backgroundColor: "#1f7be1"
      borderBottom: "2px solid #1f7be1"
    }
    const not = {
      backgroundColor: "white"
      // borderBottom: "2px solid #1f7be1"
    }
    return (
      <Paper>
        <Grid container justify="center">
          <Grid style={value === 0 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 0)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.topics.length}
              </Typography>
              <br />
              Post
            </Button>
          </Grid>
          {
            token &&
              data.profile._id === data.user._id &&
              <Grid style={value === 1 ? curr : not} >
                <Button className={classes.tab} onClick={this.handleChange.bind(this, 1)}  >
                  <Typography style={{ position: 'absolute'}} >
                    {data.favourite.length}
                  </Typography>
                  <br />
                  Favourites
                </Button>
              </Grid>
          }
          <Grid style={value === 2 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 2)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.comment.length}
              </Typography>
              <br />
              Comments
            </Button>
          </Grid>
          {/* <Grid>
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 3)}  >
              <Typography style={{ position: 'absolute'}} >12</Typography>
              <br />
              Replies
            </Button>
          </Grid> */}
          <Grid style={value === 4 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 4)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.following.length}
              </Typography>
              <br />
              Following
            </Button>
          </Grid>
          <Grid style={value === 5 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 5)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.followers.length}
              </Typography>
              <br />
              Followers
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }

  render() {
    return (
      <div>
        <Header />
        {this.displayInfo()}
        {this.displayTab()}
        {this.displaySection()}
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(Profile));


{/* <div style={{ margin: "20px 20%" }}>
          <div style={{ float: 'left', marginTop: -5 }}>
            <img src="/static/levels/newbie.png" width={15} height={15} />
            <Typography variant='body2' style={{ fontSize: 10 }} >
              Newbie
            </Typography>
          </div>
          <LinearProgress 
            style={{ height: 17, borderRadius: 13, marginRight: 22 }}
            color="primary" 
            variant="buffer" 
            value={completed}
            valueBuffer={buffer} 
          />
          <div style={{ float: 'right', marginTop: -20 }}>
            <img src="/static/levels/newbie.png" width={15} height={15} />
            <Typography variant='body2' style={{ fontSize: 10 }} >
              Pro
            </Typography>
          </div>
        </div> */}