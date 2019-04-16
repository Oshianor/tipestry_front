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
import Progress from "../components/reuseable/progress";
import { Lang } from '../../lang';
import Drawer from '../components/header/drawer';
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from '@material-ui/core/IconButton';
import BottomScrollListerer from 'react-bottom-scroll-listener';
import axios from 'axios';
import { config } from '../../config';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { getTopics, getFavourite } from "../actions/data";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    minHeight: 45 
  },
  tab: {
    alignItems: 'baseline',
    padding: 10,
  },
  pos: {
    // position: "absolute"
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

class Profile extends React.Component {
  state = {
    value: 0,
    drawer: false,
    stopScroll: false,
    userTopicPageNum: 2,
    favouritePageNum: 2, 
    loading: false
  };

  handleChange(value) {
    this.setState({ value });
  };

  getCurrentLevel = () => {
    const { data } = this.props;
    if (data.profile.user_level === 1) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/newbie.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Newbie
          </Typography>
        </div>
      )
    } else if (data.profile.user_level === 2) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/expert.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Expert
          </Typography>
        </div>
      )
    } else if (data.profile.user_level === 3) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/pro.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Pro
          </Typography>
        </div>
      )
    } else if (data.profile.user_level === 4) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/veteran.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Veteran
          </Typography>
        </div>
      )
    }
  }

  getFutureLevel = () => {
    const { data } = this.props;
    if (data.profile.user_level === 1) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/expert.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Expert
          </Typography>
        </div>
      )
    } else if (data.profile.user_level === 2) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/pro.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Pro
          </Typography>
        </div>
      )
    } else if (data.profile.user_level === 3) {
      return (
        <div style={{ marginTop: -5 }}>
          <img src="/static/levels/veteran.png" width={25} height={25} />
          <Typography variant='body2' style={{ fontSize: 10 }} >
            Veteran
          </Typography>
        </div>
      )
    }
  }

  displayInfo = () => {
    const { data } = this.props;
    
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
          {/* Member Since:  */}
          {Lang.d2}{moment(data.profile.created_at).locale(Lang.locale).format('YYYY')}
        </Typography>

        <div style={{ margin: "20px 20%" }}>
          <Grid container >
            <Grid item xs={1} >
              {this.getCurrentLevel()}
            </Grid>
            <Grid item xs={10} >
              <Progress percent={parseInt((data.profile.user_level / 6) * 100)} />
            </Grid>
            <Grid item xs={1} >
              {this.getFutureLevel()}
            </Grid>
          </Grid>
        </div>
        

        <Typography variant="subtitle2" style={{ margin: "5px 10%" }} >
          {data.profile.bio && data.profile.bio}
        </Typography>
      </div>
    )
  }

  handleFetchMoreUserPost = async () => {
    const { router, getTopics, data, userPostTotal } = this.props;
    const { userTopicPageNum, loading } = this.state;
    
    if (!loading && userPostTotal > data.topics.length) {
      try {
        this.setState({ loading: true });
        let profile = await axios.get(config.api + '/users/profile/' + router.query.userObjId + "?userPageTopic=" + userTopicPageNum);
        // console.log('profile =====>>>>', profile);
        
        if (profile.data.userTopics) {
          this.setState({
            userTopicPageNum: userTopicPageNum + 1,
            loading: false
          })
          // get the new updated data and push to the end of the array topics
          profile.data.userTopics.forEach(obj => {
            data.topics.push(obj);
          })
          getTopics(data.topics);
        }

      } catch (err) {
        // console.log(err);

      }
    }
  }

  handleFetchMoreUserFavouritePost = async () => {
    const { router, getFavourite, data } = this.props;
    const { favouritePageNum, loading } = this.state;
    
    if (!loading) {
      try {
        this.setState({ loading: true });
        let favor = await axios.get(config.api + '/users/profile/' + router.query.userObjId + "?userFavouritePageTopic=" + favouritePageNum)
        // console.log(favor);
        
        if (favor.data.favourite) {
          this.setState({
            favouritePageNum: favouritePageNum + 1,
            loading: false
          })
          // get the new updated data and push to the end of the array topics
          favor.data.favourite.forEach(obj => {
            data.favourite.push(obj);
          })
          getFavourite(data.favourite);
        }

      } catch (err) {
        // console.log(err);

      }
    }
    
  }

  displaySection = () => {
    const { value } = this.state;
    const { data } = this.props;
    if (value === 0) {
      return (
        <BottomScrollListerer onBottom={this.handleFetchMoreUserPost} >
          <Post topicValue={data.topics} source="usertopics" />
        </BottomScrollListerer>
      );
    } else if (value === 1) {
      return (
        <BottomScrollListerer onBottom={this.handleFetchMoreUserFavouritePost} >
          <Post topicValue={data.favourite} source="favourite" />
        </BottomScrollListerer>
      )
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
    const { classes, data, userPostTotal } = this.props;
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
              <Typography className={classes.pos} >
                {userPostTotal}
                &nbsp;
              </Typography>
              {/* Post */}
              {Lang.e2}
            </Button>
          </Grid>
          {
            token &&
              data.profile._id === data.user._id &&
              <Grid style={value === 1 ? curr : not} >
                <Button className={classes.tab} onClick={this.handleChange.bind(this, 1)}  >
                  <Typography className={classes.pos} >
                    { data.profile.favourite.length === 0 ? "" : data.profile.favourite.length }
                    &nbsp;
                  </Typography>
                  {/* Favourites */}
                  {Lang.f2}
                </Button>
              </Grid>
          }
          <Grid style={value === 2 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 2)}  >
              <Typography className={classes.pos} >
                { data.comment.length === 0 ? "" : data.comment.length }
                &nbsp;
              </Typography>
              {/* Comments */}
              {Lang.g2}
            </Button>
          </Grid>
          <Grid style={value === 4 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 4)}  >
              <Typography className={classes.pos} >
                { data.following.length === 0 ? "" : data.following.length }
                &nbsp;
              </Typography>
              {/* Following */}
              {Lang.g}
            </Button>
          </Grid>
          <Grid style={value === 5 ? curr : not} >
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 5)}  >
              <Typography className={classes.pos} >
                {data.followers.length === 0 ? "" : data.followers.length }
                &nbsp;
              </Typography>
              {/* Followers */}
              {Lang.x1}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }

    // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  }

    // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  }

	componentWillUnmount() {
		removeEventListener('scroll', this.trackScrolling);
  }
  
  // track scroolling . when scroll amost to the header
  trackScrolling = (e) => {
    // console.log(window.scrollY, "vvv", window.scrollX);
    
    if (window.scrollY > 240) {
      this.setState({
        stopScroll: true
      })
      return false
    }
    this.setState({
      stopScroll: false
    })
    return false;
  }
	
  componentDidMount() {
		addEventListener('scroll', this.trackScrolling);		
	}

  render() {
    const { stopScroll, drawer, loading, value } = this.state;
    const { classes, userPostTotal, data } = this.props;
    // console.log('userPostTotal', userPostTotal, 'data.topics.length', data.topics.length);
    
    return (
      <div>
        <Header 
          drawer={drawer} 
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        />
        <Drawer 
					drawer={drawer} 
					// this props is to check if overlay exisit 
					// in that page an push the icons to the top.
          overlay={true}
          top={130}
          stopScroll={stopScroll}
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        >
          <div>
            {this.displayInfo()}
            {this.displayTab()}
            {this.displaySection()}
            {
              // show a preloader sign for user post and user favourite post
              value === 0 && userPostTotal > data.topics.length &&
                <IconButton style={{ display: "contents" }} >
                  {
                    loading ?
                      <CircularProgress className={classes.progress} color="secondary" />
                    : 
                      <ExpandMore />
                  }
                </IconButton>
            }

            {
              // show a preloader sign for user post and user favourite post
              value === 1 &&
                <IconButton style={{ display: "contents" }} >
                  {
                    loading ?
                      <CircularProgress className={classes.progress} color="secondary" />
                    : 
                      <ExpandMore />
                  }
                </IconButton>
            }
          </div>
        </Drawer>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopics,
    getFavourite: getFavourite
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Profile)));