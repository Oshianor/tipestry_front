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



const styles = theme => ({
  root: {
    width: '100%',
		// maxWidth: 360,
		margin: "0px 10% 0px 0px",
		padding: 0,
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
	},
	container: {
    display: 'flex',
		flexWrap: 'wrap',
		margin: "5px 10%"
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	cnt: {
		fontSize: 11
	}
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




	displayEmptyTopics = () => {
		let token = localStorage.getItem('token');
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
		return (
			topics.map((topic) => (
				<List className={classes.root} key={topic._id} >
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Link href={encodeURI("/topics/" + topic._id + "/" + topic.title)} >
								<a style={{ textDecoration: 'none', margin: "6px -1px" }}>
									<Thumbnails 
										borderColor="black" 
										borderWidth={2} 
										name={topic.user[0].username} 
										url={
											topic.user[0].profileimage || topic.user[0].profileimage !== "" ?
												config.profileimage + topic.user[0].profileimage
											:
												null
										}
									/>
								</a>
							</Link>
						</ListItemAvatar>
						<ListItemText
							primary = {
								<Link href={encodeURI("/topics/" + topic._id + "/" + topic.title)} >
									<a style={{ color: '#1F7BD8', textDecoration: 'none', fontSize: 18 }} >
										{topic.title.length > 50 ? topic.title.substr(0, 40) + "..." : topic.title}
										<Sitetopiccoin gift={topic.gift} />
									</a>
								</Link>
							}
							secondary={
								<React.Fragment>
									<Typography component="span" className={classes.inline} color="textPrimary">
										By &nbsp;
										<Link href={"/profile/" + topic.user[0]._id + "/@" + topic.user[0].username}>
											<a style={{ color: '#1F7BD8', textDecoration: 'none' }} >
												<strong style={{ color: 'gray' }}>@</strong>
												{topic.user[0].username}															
											</a>
										</Link>
										&nbsp; {moment(topic.created_at).locale(Lang.locale).fromNow()}
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			))
		)
	}

	render() {
		const { site, topics, url, gift } = this.props;
		const { open, msg } = this.state;
		console.log(site, 'wwwwww')
		return (
			<div style={{ marginTop: 80 }} >
				{
					typeof site.url !== "undefined" &&
						<Typography style={{ textAlign: 'center', margin: "10px 8%", }}>
							<Link href={site.url}>
								<a>
									{site.url}
								</a>
							</Link>
						</Typography>
				}
				{
					typeof topics === "undefined" ?
						this.displayEmptyTopics()
					:
						<React.Fragment>
							{/* <Siteactions url={url} site={site} gift={gift} /> */}
							{
								// the reason for this code is to mount and unmount it when the data changes
								typeof site.id !== "undefined" &&
									<Siteactions url={url} site={site} gift={gift} />
							}


							{/* topic fot the site */}
							<Paper style={{ margin: "10px 8%", boxShadow: '0px 0px 1px 0px', color: 'lightslategray', borderRadius: 0 }} >
								<Typography variant="h6" style={{ padding: "5px 12px", fontWeight: '400' }} >
									{ /* Topics // 话题*/ }
									{Lang.s}
								</Typography>
								<div>
									<div style={{ backgroundColor: 'white', width: "100%" }}>
										<div style={{ maxHeight: 400, width: "100%", overflow: "auto" }}>
										{this.displayTopics()}
										</div>
									</div>
								</div>
							</Paper>



							{/* add url form */}
							<Addsite url={url} />
						</React.Fragment>
				}
			</div>
		);
	}
}

TopicList.propTypes = {
	classes: PropTypes.object.isRequired,
	site: PropTypes.object.isRequired
};

export default withStyles(styles)(TopicList);