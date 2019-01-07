import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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

// static icons svg
import Options from "./components/options";
import { config } from '../../../config';

const styles = theme => ({
  card: {
    [theme.breakpoints.only('xs')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 400,
    },
    [theme.breakpoints.between('md', 'xl')]: {
      width: 450
    },
  },
  demo: {
    // width: '100%',
    marginTop: 20,
    position: 'relative',
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    // margin: theme.spacing.unit,
    margin: 2,
    height: 10,
    fontSize: 10
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
  avatar: {
    backgroundColor: red[500],
  }
});

class Post extends React.Component {
  state = {
    token: null,
    textId: null
  }
  componentDidMount() {
    let token = localStorage.getItem('token');
    this.setState({
      token
    })
  }

  displayTitle = (title) => {
    if (title.length > 60) {
      return (
        <a style={{ color: '#1F7BD8',cursor: 'pointer', textDecoration: 'none' }} >
          {title.substr(0, 40)}
        </a>
      )
    } else {
      return (
        <a style={{ color: '#1F7BD8', textDecoration: 'none' }} >
          {title}
        </a>
      )
    }
  }

  render() {
    const { classes, topicValue, errMsg } = this.props;
    const { token } = this.state;
    // console.log("POST", this.state);
    
    return (
      <Grid container justify="center">
        <Grid
          container
          className={classes.demo}
          alignItems="center"
          justify="center"
        >
          {
            typeof topicValue[0] === "undefined" ?
              <Typography 
                style={{ marginTop: "10%", textAlign: 'center' }} 
                variant="h6" 
              >
                {errMsg}
              </Typography>
            :
              topicValue.map((topic, index) => (
                <Grid item style={{ margin: "10px" }} key={index} >
                  <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Link href={encodeURI("/profile/" + topic.user[0]._id + "/@" + topic.user[0].username)} >
                        <a style={{ textDecoration: 'none' }}>
                          <Thumbnails 
                            name={topic.user[0].username}
                            url = {
                              topic.user[0].profileimage === "" || !topic.user[0].profileimage ?
                                null 
                              :
                                config.profileimage + topic.user[0].profileimage
                            }
                          />
                        </a>
                      </Link>
                    }
                    action={
                      <Options 
                        token={token}
                        topicObjId={topic._id}
                        following={topic.following}
                        topicUser={topic.user[0]}
                      />
                    }
                    component="div"
                    title={
                      <Link href={encodeURI("/profile/" + topic.user[0]._id + "/@" + topic.user[0].username)} >
                        <a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
                          <strong style={{ color: 'gray' }}>@</strong>
                          {typeof topic.user[0] !== "undefined" ? `${topic.user[0].username}` : "@No name"}
                        </a>
                      </Link>
                    }
                    subheader={
                      <p style={{ fontSize: 10, margin: 0 }} >
                        {Moment(topic.created_at).fromNow()}
                      </p>
                    }
                  />
                  <CardMedia
                    className={classes.media}
                    image={
                      topic.screenshot.length > 200 ?
                        'data:image/png;base64,' + topic.screenshot
                      :
                        config.url + topic.screenshot
                    }
                    title={topic.title}
                    component="a"
                    href={encodeURI("/topics/" + topic._id + "/" + topic.title)}
                  />

                  <CardContent>
                    <Typography component="p">
                      <Link href={encodeURI("/topics/" + topic._id + "/" + topic.title)} >
                        {this.displayTitle(topic.title)}
                      </Link>
                      <br />
                      {
                        typeof topic.sites[0] !== "undefined" &&
                          <Link href={"/sites?s=" + topic.sites[0].url} >
                            <a >
                              {topic.sites[0].url.length > 50 ? topic.sites[0].url.substr(0, 40) + "..." : topic.sites[0].url}
                            </a>
                          </Link>
                      }
                    </Typography>
                  </CardContent>

                  {/* card action icons */}
                  <CardActionsIcons 
                    votes={topic.votes}
                    comment={typeof topic.comment[0] !== "undefined" ? topic.comment[0].count : ""}
                    topicId={topic.id}
                    topicUserId={topic.user[0].id}
                    token={token}
                    topicObjId={topic._id}
                    link={encodeURI("/public/topics/" + topic._id + "/" + topic.title)}
                  />
                </Card>
              </Grid>
            ))
          }
        </Grid>
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
