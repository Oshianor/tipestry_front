import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import { connect } from 'react-redux';
import Moment from "moment";
// components
import Thumbnails from '../reuseable/thumbnails';
import CardActionsIcons from './components/CardActionIcons';
import TopicCoin from "./components/topicCoins";

// static icons svg
import Options from "./components/options";
import { config } from '../../../config';
import { Lang } from '../../../lang';
// import isURL from 'validator/lib/isURL';
import Linkify from 'linkifyjs/react';
// import withWidth from '@material-ui/core/withWidth';
import Tags from "./components/tag";
// import TagPopover from './components/tagPopup';
import axios from "axios";
import YouTube from "react-youtube";
import isURL from "validator/lib/isURL";



const styles = theme => ({
  card: {
    margin: "10px",
    position: "relative",
    width: "70%"
    // [theme.breakpoints.only("xs")]: {
    //   maxWidth: 450
    // },
    // [theme.breakpoints.only("sm")]: {
    //   maxWidth: 500
    // },
    // [theme.breakpoints.only("md")]: {
    //   maxWidth: 500
    // },
    // [theme.breakpoints.only("lg")]: {
    //   maxWidth: 450
    // }
  },
  demo: {
    // width: '100%',
    marginTop: 20,
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  media: {
    height: 0,
    // minHeight: 600,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    // margin: theme.spacing.unit,
    margin: 2,
    height: 10,
    fontSize: 10
  },
  actions: {
    display: "flex",
    borderTop: ".5px solid gray"
  },
  avatar: {
    backgroundColor: red[500]
  },
  home: {
    // [theme.breakpoints.only('xs')]: {
    //   margin: '0px 2%',
    //   // width: 320
    // },
    // [theme.breakpoints.only('sm')]: {
    //   margin: "0px 10%"
    // },
    // [theme.breakpoints.only('md')]: {
    //   margin: '0px 10%',
    // },
    // [theme.breakpoints.only('lg')]: {
    //   // margin: '0px 1%',
    // },
    // [theme.breakpoints.only('xl')]: {
    //   margin: '0px 5%',
    // },
  },
  chip: {
    margin: 1,
    height: 20
  },
  chipAvater: {
    height: 20,
    width: 20
  }
});


class Post extends React.Component {
  state = {
    token: null,
    textId: null,
    open: false,
    loading: false,
    res: []
  };

  // check if the link if it is a gif so instead of the
  // displaying the image we use link and show the gif
  checkForGif = filename => {
    var ext = /.+\.(.+)$/.exec(filename);
    // console.log('r ? r[1] ',ext ? ext[1] : null);

    return ext ? ext[1] : null;
  };

  // when the component ount set the token to the state
  componentDidMount() {
    let token = localStorage.getItem("token");
    this.setState({
      token
    });
  }

  nutralizeTitle = title => {
    return title
      .toLocaleLowerCase()
      .split(" ")
      .join("-")
      .replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g, "");
  };

  // display the title based on the length
  // truncate the title if it too long
  displayTitle = title => {
    return (
      <a
        style={{
          color: "#1F7BD8",
          textDecoration: "none",
          fontSize: 15,
          // textTransform: "lowercase"
        }}
      >
        <Linkify tagName="span">{title}</Linkify>
      </a>
    );
  };

  handleCloseTag = () => {
    this.setState({
      open: false
    });
  };

  getQuery(name, url) {
    // gettting YouTube videoId
    // if (!url) url = window.location.href;
    const urlObj = new URL(url);
    const pathname = urlObj.hostname;
    let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    if (improved === "youtube.com") {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    } else if (improved === "youtu.be") {
      return urlObj.pathname.replace("/", "");
    } else {
      return null
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  checkIfItYouTube = url => {
    var pathname = new URL(url).hostname;
    let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    if (improved === "youtube.com" || improved === "youtu.be") return true;
    return false
  };

  render() {
    const { classes, topicValue, errMsg } = this.props;
    const { token, open, res } = this.state;

    return (
      <Grid container justify="center">
        {// check if topic value exist
        typeof topicValue[0] === "undefined" ? (
          <img src="/static/images/sadface.svg" style={{ marginTop: 20 }} />
        ) : (
          topicValue.map((topic, index) => (
            <Card className={classes.card} key={index}>
              <CardHeader
                avatar={
                  // link to the user profile
                  <Link
                    href={encodeURI(
                      "/profile/" +
                        topic.user[0]._id +
                        "/@" +
                        topic.user[0].username
                    )}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <Thumbnails
                        name={topic.user[0].username}
                        url={
                          // check if user profile image exist
                          topic.user[0].profileimage === "" ||
                          !topic.user[0].profileimage
                            ? null
                            : config.profileimage + topic.user[0].profileimage
                        }
                      />
                    </a>
                  </Link>
                }
                action={
                  <Options
                    // sending token
                    token={token}
                    // topic object id
                    topicObjId={topic._id}
                    following={topic.following}
                    // topic owner details
                    topicUser={topic.user[0]}
                  />
                }
                component="div"
                title={
                  <Link
                    href={encodeURI(
                      "/profile/" +
                        topic.user[0]._id +
                        "/@" +
                        topic.user[0].username
                    )}
                  >
                    <a style={{ color: "#1F7BD8", textDecoration: "none" }}>
                      <strong style={{ color: "gray" }}>@</strong>
                      {typeof topic.user[0] !== "undefined"
                        ? `${
                            topic.user[0].username !== ""
                              ? topic.user[0].username
                              : topic.user[0].name
                          }`
                        : "@No name"}
                    </a>
                  </Link>
                }
                subheader={
                  <p style={{ fontSize: 10, margin: 0 }}>
                    {/* {Moment(topic.created_at).fromNow()} */}
                    {Moment(topic.created_at)
                      .locale(Lang.locale)
                      .fromNow()}
                  </p>
                }
              />
              <CardContent>
                <Typography component="p">
                  {/* post title */}
                  <Link
                    href={
                      "/topics/" +
                      topic._id +
                      "/" +
                      this.nutralizeTitle(topic.title)
                    }
                  >
                    {this.displayTitle(topic.title)}
                  </Link>
                  <br />
                  <Tags tags={topic.tags} handleTag={this.handleOpenTagFind} />
                </Typography>
              </CardContent>

              {/* check if it is youtube */}
              {!this.checkIfItYouTube(topic.sites[0].url) ? (
                <div>
                  <a
                    href={
                      "/topics/" +
                      topic._id +
                      "/" +
                      this.nutralizeTitle(topic.title)
                    }
                    style={{
                      position: "relative",
                      display: "block"
                    }}
                  >
                    <img
                      style={{
                        backgroundPosition: "top",
                        // height: "auto",
                        maxHeight: 550,
                        // minHeight: 500,
                        // minHeight: "-webkit-fill-available",
                        // maxHeight: "-webkit-fill-available",
                        width: "100%"
                      }}
                      // image.thum.io/get/iphoneX/noanimate/crop/650/auth/3228-www.tipestry.com/
                      // image.thum.io/get/auth/3228-www.tipestry.com/
                      src={
                        typeof topic.sites[0] !== "undefined"
                          ? this.checkForGif(topic.sites[0].url) == "gif" ||
                            this.checkForGif(topic.sites[0].url) == "png" ||
                            this.checkForGif(topic.sites[0].url) == "jpg"
                            ? topic.sites[0].url
                            : "//image.thum.io/get/iphoneX/noanimate/width/400/allowJPG/crop/700/hidePopovers/auth/3228-www.tipestry.com/" +
                              topic.sites[0].url
                          : "//image.thum.io/get/iphoneX/noanimate/width/400/allowJPG/crop/700/hidePopovers/auth/3228-www.tipestry.com/" +
                            "https://tipestry.com"
                      }
                    />
                  </a>
                </div>
              ) : (
                <YouTube
                  videoId={
                    this.getQuery("v", topic.sites[0].url) === null
                      ? url.substring(url.lastIndexOf("/") + 1)
                      : this.getQuery("v", topic.sites[0].url)
                  }
                  opts={{
                    // height: "500px",
                    width: "100%",
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 1
                    }
                  }}
                  onReady={this._onReady}
                />
              )}

              <CardContent>
                <Typography component="p">
                  {// post link
                  typeof topic.sites[0] !== "undefined" && (
                    <Link href={"/sites?s=" + topic.sites[0].url}>
                      <a style={{ fontSize: 12 }}>
                        {topic.sites[0].url.length > 50
                          ? topic.sites[0].url.substr(0, 40) + "..."
                          : topic.sites[0].url}
                      </a>
                    </Link>
                  )}
                </Typography>
              </CardContent>

              {/* card action icons */}
              <CardActionsIcons
                // topic votes
                views={
                  typeof topic.views !== "undefined" ? topic.views.length : 0
                }
                votes={topic.votes}
                title={topic.title}
                gift={topic.gift.length}
                // topic comment
                comment={
                  typeof topic.comment[0] !== "undefined"
                    ? topic.comment[0].count
                    : ""
                }
                topicId={topic.id}
                topicUserId={topic.user[0].id}
                token={token}
                topicObjId={topic._id}
                // link for the topic
                link={
                  "/topics/" +
                  topic._id +
                  "/" +
                  this.nutralizeTitle(topic.title)
                }
              />

              {/* coin details */}
              <TopicCoin gift={topic.gift} />
              {/* <TagPopover open={open} handleClose={this.handleCloseTag} data={res} /> */}
            </Card>
          ))
        )}
      </Grid>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Posts = withStyles(styles)(Post);
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(Posts);