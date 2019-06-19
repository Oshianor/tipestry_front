import React, { Component } from "react";
import Header from "../components/header/header";
import Drawer from "../components/header/drawer";
import Post from "../components/post/post";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tipcoin from "../components/tipcoin/tipcoin";
import Grid from "@material-ui/core/Grid";
import Trends from "../components/trends/trends";
import Userinfo from "../components/userinfo.js/userinfo";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import compose from "recompose/compose";
import LeaderBoard from "../components/leaderscoreboard/scoreboard";
import Popular from "../components/popular/popular";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { config } from "../../config";
import { bindActionCreators } from "redux";
import { getTopics, getUser, setType, setPageNumber } from "../actions/data";
import axios from "axios";
import { Lang } from "../../lang";
import VerificationWarning from "../components/header/components/verificationWarning";
import Search from "../components/search/search";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tag from "../components/post/components/tag";

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
    marginTop: 100,
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  top: {
    marginTop: 20,
    [theme.breakpoints.between("lg", "xl")]: {
      marginTop: 90
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
  },
  wrapit: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 250
  },
  wrapitRoot: {
		height: 300
	},
	text: {
		textAlign: 'center',
		margin: 5
	},
	// display: 'flex',
	// justifyContent: "center",
	// maxWidth: 500
});

class Homepage extends Component {
  state = {
    drawer: false,
    stopScroll: false,
    token: null,
  };

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };

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


  render() {
    const { data, classes } = this.props;
		// console.log(this.state);
		let tags = [
      "tipestry",
      "btc",
      "money",
      "cryptocurrency",
      "technology",
      "bitcoin",
      "crypto",
      "humor",
      "media",
      "travel",
      "beauty",
      "earn",
      "amazon",
      "science",
      "exchanges",
      "doge",
      "nature",
      "news"
    ];

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
                    <Paper
                      className={classes.wrapitRoot}
                      style={
                        stopScroll
                          ? { position: "fixed", top: 90 }
                          : { position: "fixed" }
                      }
                      // style={{ position: 'fixed' }}
                    >
                      <Typography
                        className={classes.text}
                        variant="caption"
                      >
                        Top Hashtags
                      </Typography>
                      <div className={classes.wrapit}>
                        <Tag tags={tags} />
                      </div>
                    </Paper>
                  </div>
                </Grid>
              </Hidden>

              {/* post  */}
              <Grid item lg={6} xl={6} md={6} sm={8} xs={12}>
                <div className={classes.center}>
                  <Post topicValue={data.topics.topic} source="topics" />
                </div>
              </Grid>

              {/* coin details */}
              <Hidden mdDown>
                <Grid item lg={3} xl={3} style={{ marginLeft: -25 }}>
                  <div style={{ position: "absolute" }}>
                    {/* <Paper
                      // style={{ position: 'fixed', maxWidth: 300 }}
                      style={
                        stopScroll
                          ? {
                              position: "fixed",
                              top: 90,
                              maxWidth: 250,
                              height: 300
                            }
                          : {
                              position: "fixed",
                              maxWidth: 250,
                              height: 300
                            }
                      }
                    >
                      <Typography
                        className={classes.text}
                        variant="caption"
                      >
                        Search by Tags
                      </Typography>

                      <Search />
                    </Paper> */}
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Drawer>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    withStyles(styles),
    withWidth()
  )(Homepage)
);
