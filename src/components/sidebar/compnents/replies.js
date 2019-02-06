import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../../reuseable/thumbnails';
import IconButton from '@material-ui/core/IconButton';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Edit from '@material-ui/icons/EditRounded';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Link from 'next/link';
import { connect } from 'react-redux';
import Moment from "moment";
import axios from 'axios';
import { config } from '../../../../config';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Lang } from '../../../../lang';
// import Linkify from 'linkifyjs/react';


const styles = theme => ({
	semicard: {
		marginLeft: '10%',
		marginTop: 5,
		// boxShadow: '0px 1px 2px -1px',
		boxShadow: "1px 4px 0px -4px",
		backgroundColor: "white",
		borderRadius: 5
	},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
	},
	time: {
		fontSize: 12,
		margin: "0px 1"
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
	},
	badge: {
    top: 0,
    right: -19,
    width: 27,
    height: 27,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  iconspacing: {
    margin: '0 3%',
    [theme.breakpoints.down('xs')]: {
      margin: '0 1%',
    },
  }
});

class Repiles extends React.Component {
	state = {
		edit: null,
		content: ''
	}

	handleReplyEdit = async () => {
		const { commentId, commentObjId, handleUpdateReply } = this.props;
		const { edit, content } = this.state;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	commentId,
					replyObjId: edit,
					content
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/reply/edit'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				handleUpdateReply(comment.data.content, commentObjId);
				this.setState({
					edit: null,
					content: ''
				})
      }
      
    }
	}

	handleChange = (event) => {
		this.setState({
			content: event.target.value,
		});
	};

	identifyLinks(text) {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return ReactHtmlParser(text.replace(exp, "<a style='text-decoration: none;' href='$1'> $1 </a>"));
	}


	handleDeleteReply = async (replyObjId) => {
		const { commentId, commentObjId, handleUpdateReply } = this.props;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
					commentId,
					replyObjId
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/reply/delete'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				// update the reply state
				handleUpdateReply(comment.data.content, commentObjId);
      }
      
    }
	}

	enableEdit(ObjId, body) {
		this.setState({
			edit: ObjId,
			content: body
		})
	}

  render() {
		const { classes, replyValues, data } = this.props;
		const { edit, content } = this.state;
		// console.log("PPPPPPPPP", replyValues);
		

    return (
			<div style={{ backgroundColor: "#fafafa" }}>
				{
					replyValues.map((reply, index) => (
						<Card className={classes.semicard} key={index} >
							<CardHeader
								classes = {
									{
										title: classes.time,
										subheader: classes.time // class name, e.g. `classes-nesting-root-x`
									}
								}
								avatar={
									<Link href={"/profile/" + reply.user[0]._id + "/@" + reply.user[0].username}>
										<a style={{ textDecoration: 'none' }}>
											<Thumbnails 
												size="xs" borderColor="black" borderWidth={1}
												name={reply.user[0].username}
												url = {
													// check if user profile image exist
													reply.user[0].profileimage === "" || !reply.user[0].profileimage ?
														null 
													:
														config.profileimage + reply.user[0].profileimage
												}
											/>
										</a>
									</Link>
								}
								titleTypographyProps={{ fontSize: 12 }}
								style={{ padding: "8px 25px"  }}
								action={
									data.user._id === reply.user[0]._id &&
									<CardActions className={classes.actions} disableActionSpacing>
										<div style={{ flexGrow: 1 }} />
										<IconButton 
											aria-label="Thumbs Up" 
											onClick={this.enableEdit.bind(this, reply._id, reply.content)} 
											className={classes.iconspacing} >
											<Edit style={{ fontSize: 14 }} /> 
										</IconButton>
										<IconButton 
											aria-label="delete" 
											onClick={this.handleDeleteReply.bind(this, reply._id)} 
											className={classes.iconspacing} >
											<RemoveCircle style={{ fontSize: 14 }} /> 
										</IconButton>
									</CardActions>
								}
								title={
									<Link href={"/profile/" + reply.user[0]._id + "/@" + reply.user[0].username} >
										<a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
											<strong style={{ color: 'gray' }}>@</strong>
											{reply.user[0].username}
										</a>
									</Link>
								}
								subheader={
									<p style={{ fontSize: 10, margin: 0 }} >
										{Moment(reply.created_at).locale(Lang.locale).fromNow()}
									</p>
								}
							/>
							<CardContent style={{ paddingTop: 0, paddingBottom: 9, paddingLeft: 25, paddingRight: 25  }}>
								{
									edit && edit === reply._id ?
										<form className={classes.container} noValidate autoComplete="off">
											<TextField
												label={<span style={{ fontSize: 12 }} >Edit Reply</span>}
												style={{ margin: 8, marginTop: -5, fontSize: 12 }}
												onChange={this.handleChange}
												fullWidth
												value={content}
												margin="normal"
												multiline
											/>
											<Button 
												color="secondary" 
												style={{ marginTop: 27, marginTop: -5 }} 
												className={classes.button}
												onClick={this.handleReplyEdit}
											>
												Save
											</Button>
										</form>
									:
										<Typography component="p" style={{ fontSize: 12, fontWeight: 'lighter' }}>
											{/* <Linkify tagName="p"> */}
											{reply.content}
											{/* </Linkify> */}
										</Typography>
								}
							</CardContent>
						</Card>
					))
				}
			</div>
    );
  }
}

Repiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}
export default connect(mapStateToProps, )(withStyles(styles)(Repiles));
