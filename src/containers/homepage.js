import React, { Component } from 'react';
import Header from '../components/header/header';
import Drawer from '../components/header/drawer';
import Post from '../components/post/post';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tipcoin from '../components/tipcoin/tipcoin';
import Grid from '@material-ui/core/Grid';
import Trends from '../components/trends/trends';
import Userinfo from '../components/userinfo.js/userinfo';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import LeaderBoard from "../components/leaderscoreboard/scoreboard"
import Popular from "../components/popular/popular";
import { connect } from 'react-redux';
import SiteInfo from '../components/siteinfo/siteinfo';
import Dialog from '../components/reuseable/dialog';
import Stage from "../components/stage/stage";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from '@material-ui/core';
import { config } from "../../config";
import { bindActionCreators } from "redux";
import { getTopics, getUser } from "../actions/data";
import axios from 'axios';


const styles = theme => ({
  root: {
    backgroundImage: "url('/static/homepage/headerBackground.svg')",
    width: "100%",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  new: {
    // flexGrow: 1,
    marginTop: 300
    // [theme.breakpoints.between('lg', 'xl')]: {
    //   marginTop: 300
    // },
  },
  demo: {
    // width: '100%',
    marginTop: 300,
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  top: {
    marginTop: 20,
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: 300
    }
  },
  rela: {
    position: "relative"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: 'flex',
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  }
});


class Homepage extends Component {
  state = {
    drawer: false,
    stopScroll: false,
    token: null,
    pageNumber: 2,
    // loading: false,
    open: false,
  };

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };

  // handleChange = async event => {
  //   const { dataType } = this.state;
  //   const { getTopics, data, setType } = this.props;
  //   this.setState({
  //     loading: true
  //   })
  //   let topics = await axios.get(config.api + '/topic?pageNumber=1&dataType=' + event.target.value);
  //   console.log("yeyeyeyey", topics.data.content);
  //   getTopics({
  //     total: 0,
  //     topic: []
  //   });    
  //   getTopics(topics.data.content);
  //   setType(event.target.value);
  //   this.setState({
  //     loading: false
  //   });
  // };

  // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  };

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("token")
    });
    addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.trackScrolling);
  }

  // track scroolling . when scroll amost to the header
  trackScrolling = e => {
    // console.log(window.scrollY, "vvv", window.scrollX);

    if (window.scrollY > 240) {
      this.setState({
        stopScroll: true
      });
      return false;
    }
    this.setState({
      stopScroll: false
    });
    return false;
  };

  handleDialog = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  render() {
    const { data, classes } = this.props;
    // const { stopScroll, drawer, token, open, loading } = this.state;
    const { stopScroll, drawer, token, open } = this.state;
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
          <Grid container justify="center" spacing={8}>
            <Grid
              container
              justify="space-evenly"
              alignItems="baseline"
              className={classes.demo}
            >
              {/* trends */}
              <Hidden mdDown>
                <Grid item lg={2} xl={2} style={{ marginRight: 25 }}>
                  <div style={{ position: "absolute" }}>
                    <div
                      style={
                        stopScroll
                          ? { position: "fixed", top: 90 }
                          : { position: "fixed" }
                      }
                      // style={{ position: 'fixed' }}
                    >
                      {token && <Userinfo handleOpen={this.handleDialog} />}
                      <Trends modal={false} />
                      <Popular />
                    </div>
                  </div>
                </Grid>
              </Hidden>

              {/* post  */}
              <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
                {/* <FormControl
                  variant="outlined"
                  disabled={loading}
                  className={classes.formControl}
                >
                  <Typography variant="body1">
                    Sort Post By &nbsp;
                  </Typography>
                  <Select
                    value={data.type}
                    onChange={this.handleChange}
                    style={{ width: 150, height: 35 }}
                    input={
                      <OutlinedInput
                        labelWidth={0}
                        name="dataType"
                        id="outlined-age-simple"
                      />
                    }
                  >
                    <MenuItem value="hot">Hot Post</MenuItem>
                    <MenuItem value="recent">Most Recent</MenuItem>
                  </Select>
                </FormControl> */}
                <div className={classes.center}>
                  <Post topicValue={data.topics.topic} source="topics" />
                </div>
              </Grid>

              {/* coin details */}
              <Hidden mdDown>
                <Grid item lg={3} xl={3} style={{ marginLeft: -25 }}>
                  <div style={{ position: "absolute" }}>
                    <div
                      // style={{ position: 'fixed', maxWidth: 300 }}
                      style={
                        stopScroll
                          ? { position: "fixed", top: 90, maxWidth: 300 }
                          : { position: "fixed", maxWidth: 300 }
                      }
                    >
                      <Tipcoin />
                      <LeaderBoard />
                      <SiteInfo />
                    </div>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Drawer>
        <Dialog open={open} handleClose={this.handleDialog}>
          <Stage />
        </Dialog>
      </div>
    );
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopics,
    getUser: getUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(
  compose(withStyles(styles), withWidth())
  (Homepage)
);
