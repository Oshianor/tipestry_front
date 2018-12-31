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
    padding: 10
  }
};

class Profile extends React.Component {
  state = {
    value: 2,
    completed: 0,
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

        <div style={{ margin: "10px 0px" }}>
          <LinearProgress 
            style={{ margin: "0px 20%", height: 17, borderRadius: 13 }}
            color="secondary" 
            variant="buffer" 
            value={completed}
            valueBuffer={buffer} 
          />
          <Typography variant="subtitle2" style={{ marginTop: -20 }} >
            Newbie
          </Typography>
        </div>
        

        <Typography variant="subtitle2" style={{ margin: "0px 10%" }} >
          The progress components accept a value in the range 0 - 100. This simplifies things
          for screen - reader users, where these are the
          default min / max values.Sometimes, however,
          you might be working with a data source where the values fall outside this range. 
          Here 's how you can easily transform a value in any range to a scale
        </Typography>
      </div>
    )
  }

  displaySection = () => {
    const { value } = this.state;
    const { data } = this.props;
    if (value === 0) {
      return <Post topicValue={data.topics} source="usertopics" />;
    } else if (value === 1) {
      return <Post topicValue={data.favourite} source="favourite" />;
    } else if (value === 2) {
      return <Comments value={data.comment} />;
    } else if (value === 3) {
      return <Replies value={data.replies} />;
    } else if (value === 4) {
      return <Follower value={data.following} />;
    } else if (value === 5) {
      return <Follower value={data.follower} /> ;
    }
        
  }

  displayTab = () => {
    const { classes, data } = this.props;
    return (
      <Paper>
        <Grid container justify="center">
          <Grid>
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 0)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.topics.length}
              </Typography>
              <br />
              Post
            </Button>
          </Grid>
          <Grid>
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 1)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.favourite.length}
              </Typography>
              <br />
              Favourites
            </Button>
          </Grid>
          <Grid>
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
          <Grid>
            <Button className={classes.tab} onClick={this.handleChange.bind(this, 4)}  >
              <Typography style={{ position: 'absolute'}} >
                {data.following.length}
              </Typography>
              <br />
              Following
            </Button>
          </Grid>
          <Grid>
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