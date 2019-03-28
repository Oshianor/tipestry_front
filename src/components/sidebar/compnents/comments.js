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
import Edit from '@material-ui/icons/Edit';
import Remove from '@material-ui/icons/RemoveCircleOutline';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopic } from "../../../actions/data";
import Moment from "moment";
import ThumbComment from './thumbComment';
import axios from 'axios';
import { config } from '../../../../config';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CommentCoin from './commentCoin';
import TopicCoins from './topicCoins';
import Reply from '@material-ui/icons/Reply';
import Replies from './replies';
import Replycompose from './replycompose';
import { Lang } from '../../../../lang';
import Linkify from 'linkifyjs/react';
import Warning from '../../reuseable/warning'



const styles = theme => ({
  card: {
		maxWidth: "100%",
		marginTop: 5,
		// boxShadow: '11px -1px 24px -4px'
		boxShadow: "1px -1px 8px -4px",
		borderRadius: 10
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
		// borderBottom: '2px solid gray'
		// borderBottom: '1px solid #d8d6d6'
	},
	textLink: {
		cursor: 'pointer',
	}
});

class Comments extends React.Component {
	state = {
		// comments: [],
		edit: null,
		content: '',
		reply: null,
		open: false
	}

	handleNotLoggedIn = () => {
		this.setState(state => ({
			open: !state.open
		}))
	}

	handleEdit(id, mesg) {
		const { edit } = this.state;
		if (id === edit) {
			this.setState({
				edit: null,
				content: ''
			})
		} else {
			this.setState({
				edit: id,
				content: mesg
			})
		}
	}

	handleCommentEdit = async () => {
		// console.log("88888888");
		const { edit, content } = this.state;
		const { getSiteTopic } = this.props;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	commentObjId: edit,
        	content
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/edit'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				getSiteTopic(comment.data.content);
        this.setState({
					edit: null,
					content: '',
					// comments: comment.data.content[0].comment
        })
      }
      
    }
	}

	async handleCommentDelete(id) {
		// console.log("88888888");
		const { getSiteTopic } = this.props;

		let token = localStorage.getItem('token');
		if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	commentObjId: id,
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/delete'
      }

      let comment = await axios(options);
      // console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
				getSiteTopic(comment.data.content);
        this.setState({
					edit: null,
					content: '',
					// comments: comment.data.content[0].comment
        })
      }
      
    }
	}


	handleChange = (event) => {
    this.setState({
      content: event.target.value,
    });
	};
	

	// setstate to open the select replies for coment
	handleDisplayReplyCompose(id) {
		const { reply } = this.state;
		if (id === reply) {
			this.setState({
				reply: null
			})
		} else {
			this.setState({
				reply: id
			})
		}
	}

	handleUpdateReply = (reply, commentObjId) => {
		this.setState({
			replyShow: commentObjId,
			replyValues: reply
		})
	}




	// displayReplyForm(commentObjId, commentId, username) {
	// 	const { reply } = this.state;
	// 	if (reply === commentObjId) {
	// 		return <Replycompose commentObjId={commentObjId} commentId={commentId} username={username} handleUpdateReply={this.handleUpdateReply} /> ;
	// 	}
	// }

  render() {
		const { classes, data } = this.props;
		const { comments, edit, content, replyValues, reply, open } = this.state;
		// console.log(this.state);
		
    return (
			<React.Fragment>
				{
					data.siteTopic[0].comment.map((comment, index) => (
						<Card className={classes.card} key={index}>
							<CardHeader
								style={{ paddingTop: 5, paddingBottom: 7 }}
								avatar={
									<Link href={"/profile/" + comment.commentUser[0]._id + "/@" + comment.commentUser[0].username}>
										<a style={{ textDecoration: 'none' }}>
											<Thumbnails 
												borderColor="black" 
												borderWidth={2} 
												name={comment.commentUser[0].username} 
												url={
													comment.commentUser[0].profileimage === "" || !comment.commentUser[0].profileimage ?
														null
													:
														config.profileimage + comment.commentUser[0].profileimage
												}
											/>
										</a>
									</Link>
								}
								title={
									<Link href={"/profile/" + comment.commentUser[0]._id + "/@" + comment.commentUser[0].username} >
										<a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
											<strong style={{ color: 'gray' }}>@</strong>
											{comment.commentUser[0].username}
										</a>
									</Link>
								}
								subheader={
									<p style={{ fontSize: 10, margin: 0 }} >
										{Moment(comment.created_at).locale(Lang.locale).fromNow()}
									</p>
								}
							/>
							<CardContent style={{ padding: "0px 25px" }}>
								{
									// edit element
									edit && edit === comment._id ?
										<form className={classes.container} noValidate autoComplete="off">
											<TextField
												label="Edit comment"
												style={{ margin: 8, marginTop: -5 }}
												onChange={this.handleChange}
												fullWidth
												value={content}
												margin="normal"
												multiline
												onSubmit={this.handleCommentEdit}
											/>
											<Button 
												color="secondary" 
												style={{ marginTop: 27, marginTop: -5 }} 
												className={classes.button}
												onClick={this.handleCommentEdit}
											>
												Save
											</Button>
										</form>
									:
									// when edit state is null
										<Typography component="p" style={{ fontSize: 15, fontWeight: 'lighter' }} >
											<Linkify tagName="p">
												{comment.content}
											</Linkify>
										</Typography>
								}
							</CardContent>

							<CardActions className={classes.actions} disableActionSpacing>
								<ThumbComment 
									commentObjId={comment._id} 
									votes={comment.votesCount}
								/>

								{/* reply icon */}
								<IconButton aria-label="Reply" onClick={this.handleDisplayReplyCompose.bind(this, comment._id)} >
									<Reply style={{ fontSize: 20 }} />
								</IconButton>
								&nbsp;&nbsp;

								{
									// only show them if the owner of the post and the logged in user are the same
									data.user._id === comment.commentUser[0]._id &&
										<IconButton aria-label="Edit" onClick={this.handleEdit.bind(this, comment._id, comment.content)} >
											<Edit style={{ fontSize: 20 }} />
										</IconButton>
								}
								{
									// only show them if the owner of the post and the logged in user are the same
									data.user._id === comment.commentUser[0]._id &&
										<IconButton aria-label="delete" onClick={this.handleCommentDelete.bind(this, comment._id)} >
											<Remove style={{ fontSize: 20 }} />
										</IconButton>
								}

								{
									 //  fetch replies for this comment
									 // if reply exist for this comment then show this
								 typeof comment.replyCount[0] !== "undefined" &&
									<Typography 
										style={{ fontSize: 11 }}
									>
										Replies
										&nbsp;
										{typeof comment.replyCount[0] !== "undefined" ? comment.replyCount[0].count : ""}
									</Typography> 
								}

								&nbsp;&nbsp;
								<CommentCoin 
									// topic object id
									topicObjId={data.siteTopic[0]._id}
									// comment id
									commentId={comment.id}
									handleOpen={this.handleNotLoggedIn}
									// comment owner id
									commentUserId={comment.commentUser[0].id}
								/>
							</CardActions>


							{/* tips for comment */}
							<TopicCoins gift={comment.gifts} />



							{/* display reply form */}
							{/* {this.displayReplyForm(comment._id, comment.id, comment.commentUser[0].username)} */}
							

							{/* display replies and it component */}
							<Replies 
								replyValues={replyValues} 
								reply={reply}
								username={comment.commentUser[0].username}
								commentId={comment.id} 
								handleReply={this.handleReply}
								totalReplies={typeof comment.replyCount[0] !== "undefined" ? comment.replyCount[0].count : 0}
								commentObjId={comment._id}
								handleUpdateReply={this.handleUpdateReply}
							/>
							
						</Card>
					))
				}
        <Warning open={open} handleClose={this.handleNotLoggedIn}/>
			</React.Fragment>
    );
  }
}

Comments.propTypes = {
	classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(Comments);
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getSiteTopic: getSiteTopic
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Comments));
