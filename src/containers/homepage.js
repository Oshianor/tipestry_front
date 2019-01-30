import React, { Component } from 'react';
import Header from '../components/header/header';
import Drawer from '../components/header/drawer';
import Post from '../components/post/post';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tipcoin from '../components/tipcoin/tipcoin';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Trends from '../components/trends/trends';
import Userinfo from '../components/userinfo.js/userinfo';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import LeaderBoard from "../components/leaderscoreboard/scoreboard"
import Popular from "../components/popular/popular"

const styles = theme => ({
  root: {
    backgroundImage: "url('/static/homepage/headerBackground.svg')", 
    width: "100%",
    height: "50vh",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover"
  },
  new: {
    flexGrow: 1,
    marginTop: 300,
    // [theme.breakpoints.between('lg', 'xl')]: {
    //   marginTop: 300
    // },
  },
  top: {
    marginTop: 20,
    [theme.breakpoints.between('lg', 'xl')]: {
      marginTop: 300
    },
  },
});
class Homepage extends Component {
  state = {
    drawer: false,
    stopScroll: false,
    token: null
  }

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  }

    // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  }

  componentDidMount() {
    this.setState({
      token: localStorage.getItem('token')
    })
		addEventListener('scroll', this.trackScrolling);
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

  render() {
    const { data, classes } = this.props;
    const { stopScroll, drawer, token } = this.state;
    return (
      <div>
        <Header 
          drawer={drawer} 
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        />

        <Drawer 
          drawer={drawer} 
          stopScroll={stopScroll}
          overlay={true}
          showOnLg={true}
          top={228}
          handleDrawerOpen={this.handleDrawerOpen}  
          handleDrawerClose={this.handleDrawerClose} 
        >
          <div className={classes.new}>
            <Grid container justify="center" spacing={8} >

              {/* trends */}
              <Hidden mdDown>
                <Grid item lg={2} xl={2} 
                  style={{ position: "relative", background: "linear-gradient(to right, #b1b1b13b, rgba(255, 255, 255, 0.24))" }} 
                  >
                  <div style={stopScroll ? { position: 'fixed', top: "70px"} : { position: 'relative' }} >
                    { token && <Userinfo /> }
                    <Trends />
                    <Popular />
                  </div>
                </Grid>
              </Hidden>

              {/* post  */}
              <Grid item lg={7} xl={7}  >
                <Post topicValue={data.topics.topic} source="topics" />
              </Grid>


              {/* coin details */}
              <Hidden mdDown>
                <Grid item lg={3} xl={3} style={{ background: "linear-gradient(to left, #b1b1b13b, rgba(255, 255, 255, 0.24))" }}  >
                  <div style={stopScroll ? { position: 'fixed', top: "70px"} : { position: 'relative' }} >
                    <Tipcoin />
                    <LeaderBoard />
                  </div>
                </Grid>
              </Hidden>

            </Grid>
          </div>
        </Drawer>

        
        
      </div>
    )
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(
  compose(withStyles(styles), withWidth())
  (Homepage)
  );
