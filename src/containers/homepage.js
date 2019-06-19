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
import Button from "@material-ui/core/Button";
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
import { getTopics, getUser, setType, setPageNumber } from "../actions/data";
import axios from 'axios';
import { Lang } from "../../lang"
import VerificationWarning from '../components/header/components/verificationWarning';
import Search from '../components/search/search';
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";


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
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  options: {
    display: "flex",
    alignItems: "center"
  }
});


class Homepage extends Component {

  state = {
    drawer: false,
    stopScroll: false,
    token: null,
    loading: false,
    open: false,
    searchBy: 'tag'
  };

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };


  async handleChange(type) {
    const { dataType } = this.state;
    const { getTopics, data, setType, setPageNumber } = this.props;
    this.setState({
      loading: true
    })
    let topics = await axios.get(config.api + '/topic?pageNumber=1&dataType=' + type);
    // console.log("type", type);
    getTopics({
      total: 0,
      topic: []
    });    
    getTopics(topics.data.content);
    setType(type);
    setPageNumber(2);
    this.setState({
      loading: false
    });
  };

  handlesearchBy = event => {
    this.setState({
      searchBy: event.target.value
    })
  }

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
    console.log(this.state);
    
    const { stopScroll, drawer, token, open, loading, searchBy } = this.state;
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
              <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                <div
                  // variant="outlined"
                  disabled={loading}
                  className={classes.formControl}
                >
                  <Typography variant="body1">
                    {Lang.q3}
                    &nbsp;
                  </Typography>
                  <Button
                    style={{ borderRadius: 0 }}
                    disabled={loading}
                    onClick={this.handleChange.bind(this, "hot")}
                    variant={data.type === "hot" ? "contained" : "text"}
                    color="primary"
                  >
                    {Lang.r3}
                  </Button>
                  <Button
                    style={{ borderRadius: 0 }}
                    disabled={loading}
                    onClick={this.handleChange.bind(this, "recent")}
                    variant={data.type === "recent" ? "contained" : "text"}
                    color="primary"
                  >
                    {Lang.s3}
                  </Button>
                  <Search searchBy={searchBy} />
                  <div className={classes.options}>
                    <Typography>&nbsp;Search By:&nbsp;</Typography>
                    <FormControlLabel
                      value="tag"
                      checked={searchBy === "tag"}
                      onChange={this.handlesearchBy}
                      control={<Radio />}
                      label="Tag"
                    />
                    <FormControlLabel
                      value="title"
                      checked={searchBy === "title"}
                      onChange={this.handlesearchBy}
                      control={<Radio />}
                      label="Title"
                    />
                  </div>
                </div>

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
  return bindActionCreators(
    {
      getTopics: getTopics,
      getUser: getUser,
      setType: setType,
      setPageNumber: setPageNumber
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  compose(withStyles(styles), withWidth())
  (Homepage)
);
