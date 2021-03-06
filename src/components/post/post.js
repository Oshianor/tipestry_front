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
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from "react-twitter-embed";
import lozad from "lozad";




const styles = theme => ({
  card: {
    margin: "10px",
    position: "relative",
    // width: "70%"
    [theme.breakpoints.only("xs")]: {
      // maxWidth: 450
      width: "100%"
    },
    [theme.breakpoints.only("sm")]: {
      // maxWidth: 500
      width: "90%"
    },
    [theme.breakpoints.only("md")]: {
      // maxWidth: 500
      width: "70%"
    },
    [theme.breakpoints.only("lg")]: {
      // maxWidth: 450
      width: "65%"
    },
    [theme.breakpoints.only("xl")]: {
      // maxWidth: 450
      width: "70%"
    }
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

  // handleLazyLoadImage = () => {
  //   const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  //   observer.observe();
  // };


  // when the component ount set the token to the state
  componentDidMount() {
    let token = localStorage.getItem("token");

    // this.handleLazyLoadImage();


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
          fontSize: 15
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
      return null;
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // checkIfItYouTube = url => {
  //   var pathname = new URL(url).hostname;
  //   let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
  //   if (improved === "youtube.com" || improved === "youtu.be") return true;
  //   return false
  // };

  checkIfURL = (url, topic) => {
    var pathname = new URL(url).hostname;
    let improved = pathname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
    if (improved === "youtube.com" || improved === "youtu.be") {
      return (
        <YouTube
          videoId={
            this.getQuery("v", url) === null
              ? url.substring(url.lastIndexOf("/") + 1)
              : this.getQuery("v", url)
          }
          opts={{
            // height: "500px",
            width: "100%",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          }}
          onReady={this._onReady}
        />
      );
    } else if (improved === "twitter.com") {
      const arr = url.split("/");
      if (arr[4] === "status") {
        return <TwitterTweetEmbed tweetId={arr[arr.length - 1]} />;
      } else if (arr.length === 4) {
        return (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={arr[arr.length - 1]}
            options={{ height: 400 }}
          />
        );
      }
    }
    return (
      <div>
        <a
          href={"/topics/" + topic._id + "/" + this.nutralizeTitle(topic.title)}
          style={{
            position: "relative",
            display: "block"
          }}
        >
          <img
            className="lozad"
            style={{
              backgroundPosition: "top",
              width: "100%"
            }}
            data-src={
              typeof topic.sites[0] !== "undefined"
                ? this.checkForGif(url) == "gif" ||
                  this.checkForGif(url) == "png" ||
                  this.checkForGif(url) == "jpg"
                  ? url
                  : "//image.thum.io/get/iphoneX/noanimate/width/400/allowJPG/crop/700/hidePopovers/auth/3228-www.tipestry.com/" +
                    url
                : "//image.thum.io/get/iphoneX/noanimate/width/400/allowJPG/crop/700/hidePopovers/auth/3228-www.tipestry.com/" +
                  "https://tipestry.com"
            }
          />
        </a>
      </div>
    );
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
                  topic.user_id ? (
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
                  ) : (
                    <Thumbnails name="Anonymous" url={null} />
                  )
                }
                action={
                  topic.user_id && (
                    <Options
                      // sending token
                      token={token}
                      // topic object id
                      topicObjId={topic._id}
                      following={topic.following}
                      // topic owner details
                      topicUser={topic.user[0]}
                    />
                  )
                }
                component="div"
                title={
                  topic.user_id ? (
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
                  ) : (
                    <Typography>Anonymous</Typography>
                  )
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

              {/* render content */}
              {this.checkIfURL(topic.sites[0].url, topic)}

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
                topicUserId={topic.user_id ? topic.user[0].id : null}
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