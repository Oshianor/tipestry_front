import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Header from '../components/header/header';
import Preloader from '../components/preloader/preloader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Comments from '../components/profile/comments';
import Follower from '../components/profile/follower';
import Replies from '../components/profile/replies';
import Post from '../components/post/post';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 100,
    minHeight: 45 
  },
  tab: {
    marginTop: -10,
    marginBottom: -7,
    padding: 0
  }
};

class Profile extends React.Component {
  state = {
    value: 0,
    loading: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  displayInfo = () => {
    return (
      <div style={{ marginTop: 250, marginBottom: 10, textAlign: 'center' }} >
        <Typography variant="h4">
          Matthew Abundance
        </Typography>
        <Typography variant="subtitle2">
          Member Since: 2017
        </Typography>
        <Typography variant="subtitle2">
          Next level job
        </Typography>
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

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div>
        {
          loading ?
            <Preloader />
          :
            <div>
              {/* <Header /> */}
              {this.displayInfo()}
              <Paper>
                <Grid container justify="center">
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Post</Button>
                  </Grid>
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Favourites</Button>
                  </Grid>
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Comments</Button>
                  </Grid>
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Replies</Button>
                  </Grid>
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Following</Button>
                  </Grid>
                  <Grid>
                    <Typography style={{ textAlign: 'center' }}>12</Typography>
                    <Button>Followers</Button>
                  </Grid>
                </Grid>
              </Paper>
            </div>
        }
        {/* <Comments /> */}
        {/* <Follower /> */}
        {/* <Replies /> */}
        <Post />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
{/* <Tabs
                  tabItemContainerStyle={{width: '400px'}}
                    className={classes.root}
                    style={{ minHeight: 45, marginBottom: 1 }}
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab icon={3} label="Posts" className={classes.tab} />
                    <Tab icon={73} label="Comments" className={classes.tab} />
                    <Tab icon={34} label="Replies" className={classes.tab} />
                    <Tab icon={34} label="Favourite" className={classes.tab} />
                    <Tab icon={34} label="Followers" className={classes.tab} />
                    <Tab icon={34} label="Following" className={classes.tab} />
                  </Tabs> */}