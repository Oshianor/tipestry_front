import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Moment from "moment";
import { Lang } from '../../../lang';
import { config } from '../../../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopular } from "../../actions/data";
import axios from 'axios';
import Link from 'next/link';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class Popular extends React.Component {
	async componentDidMount() {
		this.getTrends();
  }

  componentWillUnmount = () => {
  	clearInterval(this.note);
  }


  async getTrends() {
		const { getPopular } = this.props;
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			url: config.api + "/topic/popular/post",
		};
		let res = await axios(options)
			if (!res.data.error) {
				console.log('res.data.content', res.data.content);
				
				getPopular(res.data.content)
			}
  }

	render() {
		const { classes, data } = this.props;
		return (
			<div className={classes.root} >
				<Typography variant="button" style={{ fontSize: 25, marginLeft: 20, borderBottom: "1px solid darkgray" }}>
					{Lang.y2}
				</Typography>
				<List className={classes.root}>
					{
						data.popular.map((topic) => (
							<ListItem key={topic._id.topicId} alignItems="flex-start">
								<ListItemAvatar>
									<Avatar 
										style={{ borderRadius: 0 }} 
										src={
												// check to see if it the old data of base64
												// by using the lenght of the screenshot field
												topic.topic[0].screenshot.length > 200 ?
													config.base64 + topic.topic[0].screenshot
												:
													config.topic + topic.topic[0].screenshot
										}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<span>
											<Link href={encodeURI("/topics/" + topic.topic[0]._id + "/" + topic.topic[0].title.replace(/[.*+?^$/{}()|[\]\\]/g, '-'))} >
												{topic.topic[0].title}
											</Link>
										</span>
									}
									secondary={
										<React.Fragment>
											<Typography component="span" className={classes.inline} color="textPrimary">
												{Moment(topic.topic[0].created_at).locale(Lang.locale).fromNow()}
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
						))
					}
				</List>
			</div>
		);
	}

}

Popular.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getPopular: getPopular
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Popular));
