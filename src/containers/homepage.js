import React, { Component } from 'react';
import Header from '../components/header/header';
import Drawer from '../components/header/drawer';
import Post from '../components/post/post';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tipcoin from '../components/tipcoin/tipcoin';
import Grid from '@material-ui/core/Grid';
// import Trends from '../components/trends/trends';
import Userinfo from '../components/userinfo.js/userinfo';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import LeaderBoard from "../components/leaderscoreboard/scoreboard"
// import Popular from "../components/popular/popular";
import { connect } from 'react-redux';
import SiteInfo from '../components/siteinfo/siteinfo';
import Dialog from '../components/reuseable/dialog';
import Stage from "../components/stage/stage";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { config } from "../../config";
import { bindActionCreators } from "redux";
import { getTopics, getUser, setType, setPageNumber } from "../actions/data";
import axios from 'axios';
import { Lang } from "../../lang"
import VerificationWarning from '../components/header/components/verificationWarning';
// import Search from '../components/search/search';
import Tag from "../components/post/components/tag";
import UploadSite from '../components/uploadurl/uploadsite';
import Ads from '../components/ads/ads';
import Searchpost from '../components/header/searchpost';
import BottomScrollListerer from "react-bottom-scroll-listener";


const styles = theme => ({
  root: {
    backgroundImage: "url('/static/homepage/headerBackground.svg')",
    width: "100%",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  wrapitRoot: {
    maxWidth: 250,
    padding: 5,
    boxShadow: "0px 0px 1px 0px",
    color: "grey",
    borderRadius: 0,
    maxHeight: 350
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
    marginTop: 100,
    // marginTop: 300,
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
  formControlNew: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  options: {
    display: "flex",
    alignItems: "center"
  }
  // center: {
  //   display:
  // }
});


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.timer = null;

    this.state = {
      drawer: false,
      stopScroll: false,
      token: null,
      loading: false,
      loadingMore: false,
      open: false,
      searchBy: "tag",
      tag: []
    };
  }

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };

  async handleChange(type) {
    const { dataType } = this.state;
    const { getTopics, data, setType, setPageNumber } = this.props;

    clearInterval(this.timer);

    this.setState({
      loading: true
    });
    let topics = await axios.get(
      config.api + "/topic?pageNumber=1&dataType=" + type
    );
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
    this.timer = setInterval(() => {
      this.handleFetchMoreTopics();
    }, 50000);
  }

  handleFetchMoreTopics = async () => {
    try {
      const { data, getTopics, setPageNumber } = this.props;
      const { loading } = this.state;

      this.setState({
        loading: true
      });

      if (!loading) {
        const url =
          config.api +
          "/topic?pageNumber=" +
          data.pageNumber +
          "&dataType=" +
          data.type;

        console.log("urlurlurl", url);

        let topicsCont = await axios.get(url);
        if (!topicsCont.data.error) {
          topicsCont.data.content.topic.forEach(obj => {
            data.topics.topic.push(obj);
          });

          this.setState({
            loading: false
          });
          getTopics({
            topic: data.topics.topic,
            total: topicsCont.data.content.total
          });
          let num = Number(data.pageNumber) + 1;
          setPageNumber(num);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  };

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("token")
    });
    this.handleGetTags();
    addEventListener("scroll", this.trackScrolling);

    this.timer = setInterval(() => {
      this.handleFetchMoreTopics();
    }, 50000);
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.trackScrolling);
    clearInterval(this.timer);
  }

  handleGetTags = async () => {
    let tag = await axios.get(config.api + "/topic/top/hashtag");
    this.setState({
      tag: tag.data
    });
  };

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

  handleClose = () => {
    this.setState({
      uploadStatus: false
    });
  };

  render() {
    const { data, classes } = this.props;
    // console.log(this.state);

    const {
      stopScroll,
      drawer,
      token,
      open,
      loading,
      searchBy,
      tag
    } = this.state;
    return (
      <BottomScrollListerer onBottom={this.handleFetchMoreTopics}>
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
                      >
                        {token && <Userinfo handleOpen={this.handleDialog} />}
                        {/* <Trends modal={false} />
                      <Popular /> */}
                        <Paper className={classes.wrapitRoot}>
                          <Typography
                            className={classes.text}
                            variant="subheading"
                          >
                            Top Hashtags
                          </Typography>
                          <div className={classes.wrapit}>
                            {typeof tag[0] !== "undefined" && (
                              <Tag tags={tag} />
                            )}
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </Grid>
                </Hidden>

                {/* post  */}
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                  <div
                    // variant="outlined"
                    // disabled={loading}
                    className={classes.formControlNew}
                  >
                    {/* upload url modal display */}
                    <UploadSite />

                    <div className={classes.formControl}>
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
                    </div>
                  </div>

                  {/* post component */}
                  <div className={classes.center}>
                    <Ads />
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
                        <Searchpost />
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
      </BottomScrollListerer>
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
