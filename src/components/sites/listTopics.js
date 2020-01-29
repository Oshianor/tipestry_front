import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Link from "next/link";
import moment from 'moment';
import { config } from '../../../config';
import green from '@material-ui/core/colors/green';
import { Lang } from '../../../lang';
import Addsite from './addsite';
import Siteactions from './siteactions';
import Thumbnails from '../reuseable/thumbnails';
import Paper from '@material-ui/core/Paper';
import Sitetopiccoin from './components/sitetopiccoin';
import Claim from './components/claim';



const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    margin: "0px 10% 0px 0px",
    padding: 0
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5px 10%"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  cnt: {
    fontSize: 11
  },
  pap: {
    margin: "10px 8%",
    boxShadow: "0px 0px 1px 0px",
    color: "#d9dadc",
    borderRadius: 0
  },
  topic: {
    maxHeight: 400,
    width: "100%",
    overflow: "auto"
  },
  head: { padding: "5px 12px", fontWeight: "400" }
});

class TopicList extends React.Component {
	state = {
		title: '',
		message: '',
		titleHelper: {
			err: false,
			msg: ""
		},
		loading: false,
		open: false,
		msg: ''
	}

	componentDidMount() {
		let token = localStorage.getItem("token");
		this.setState({
			token
		})		
	}
	


	nutralizeTitle = (title) => {
    return title.toLocaleLowerCase().split(" ").join("-").replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g, '');
  }


	displayEmptyTopics = () => {
		// let token = localStorage.getItem('token');
		const { token } = this.state;
		const { url, site, gift } = this.props;
		return (
			<div>
				{
					token ? 
					// if the user is logged in
						<div>
							{
								typeof site !== "undefined" && typeof site.id !== "undefined" &&
									<Siteactions url={url} site={site} gift={gift} />
							}
							<Addsite  url={url} />
						</div>
					:
						<div>
							<Typography variant="button" style={{ fontSize: 20 }} >
								{/* There currently no topics for this site */}
								{Lang.l2}
							</Typography>
							<Typography variant="caption" style={{ fontSize: 17 }} >
								{/* Please  */}
								{Lang.m2}
								<Link href="/login" >
									<a>
										&nbsp;
										{/* Login */}
										{Lang.j}
										&nbsp;
									</a>
								</Link> 
								{/* to create a topic and earn coin today */}
								{Lang.n2}
							</Typography>
							
						</div>
				}
			</div>
		)
	}

	displayTopics = () => {
		const { classes, topics } = this.props;
		return topics.map(topic => (
      <List className={classes.root} key={topic._id}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            {topic.user_id ? (
              <a
                target="_blank"
                href={
                  "/topics/" +
                  topic._id +
                  "/" +
                  this.nutralizeTitle(topic.title)
                }
                style={{ textDecoration: "none", margin: "6px -1px" }}
              >
                <Thumbnails
                  borderColor="black"
                  borderWidth={2}
                  name={topic.user[0].username}
                  url={
                    topic.user[0].profileimage
                      ? config.profileimage + topic.user[0].profileimage
                      : null
                  }
                />
              </a>
            ) : (
              <Thumbnails
                borderColor="black"
                borderWidth={2}
                name="Ano"
                url={null}
              />
            )}
          </ListItemAvatar>
          <ListItemText
            primary={
              // <Link href={"/topics/" + topic._id + "/" + this.nutralizeTitle(topic.title)} >
              <a
                target="_blank"
                href={
                  "/topics/" +
                  topic._id +
                  "/" +
                  this.nutralizeTitle(topic.title)
                }
                style={{
                  color: "#1F7BD8",
                  textDecoration: "none",
                  fontSize: 18
                }}
              >
                {topic.title.length > 50
                  ? topic.title.substr(0, 40) + "..."
                  : topic.title}
                <Sitetopiccoin gift={topic.gift} />
              </a>
              // </Link>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  By &nbsp;
                  {topic.user_id ? (
                    <Link
                      href={
                        "/profile/" +
                        topic.user[0]._id +
                        "/@" +
                        topic.user[0].username
                      }
                    >
                      <a style={{ color: "#1F7BD8", textDecoration: "none" }}>
                        <strong style={{ color: "gray" }}>@</strong>
                        {topic.user[0].username}
                      </a>
                    </Link>
                  ) : (
                    <Typography>Anonymous</Typography>
                  )}
                  &nbsp;{" "}
                  {moment(topic.created_at)
                    .locale(Lang.locale)
                    .fromNow()}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    ));
	}

	render() {
		const { site, topics, url, gift, classes } = this.props;
		const { token } = this.state;
		// let token = localStorage
		// console.log(site, 'wwwwww')
		return (
      <div style={{ marginTop: 80 }}>
        <Claim token={token} site={site} />
        {/* {token && typeof site._id !== "undefined" && (
          <Typography variant="h6" style={{ textAlign: "center", margin: "10px 8%", fontSize: 18 }}>
            Do you own this site?
            <Link href={"/site-verification/" + site._id + "/" + token}>
              <a> Claim it </a>
            </Link>
            today and earn tips
          </Typography>
        )} */}

        {typeof site.url !== "undefined" && (
          <Typography style={{ textAlign: "center", margin: "10px 8%" }}>
            <a target="_blank" href={site.url}>
              {site.url}
            </a>
          </Typography>
        )}

        {typeof topics === "undefined" ? (
          this.displayEmptyTopics()
        ) : (
          <React.Fragment>
            {// the reason for this code is to mount and unmount it when the data changes
            typeof site.id !== "undefined" && (
              <Siteactions url={url} site={site} gift={gift} />
            )}

            {/* topic fot the site */}
            <Paper className={classes.pap}>
              <Typography variant="h6" className={classes.head}>
                {/* Topics // 话题*/}
                {Lang.s}
              </Typography>
              <div>
                <div style={{ backgroundColor: "white", width: "100%" }}>
                  <div className={classes.topic}>{this.displayTopics()}</div>
                </div>
              </div>
            </Paper>

            {/* add url form */}
            <Addsite url={url} />
          </React.Fragment>
        )}
      </div>
    );
	}
}

TopicList.propTypes = {
	classes: PropTypes.object.isRequired,
	site: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicList);