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


const styles = theme => ({
  card: {
		maxWidth: "100%",
		marginTop: 5
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
		// borderBottom: '2px solid gray'
		borderBottom: '1px solid #d8d6d6'
  }
});

class Comments extends React.Component {
	state = {
		// comments: [],
		edit: null,
		content: ''
	}


	// async componentDidMount() {
  //   const { data } = this.props;
  //   this.setState({
	// 		comments: data.siteTopic[0].comment
  //   });

	// }

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

  render() {
		const { classes, data } = this.props;
		const { comments, edit, content } = this.state;
		// console.log(this.state.content);
		
    return (
			<React.Fragment>
				{
					data.siteTopic[0].comment.map((comment, index) => (
						<Card className={classes.card} key={index}>
							<CardHeader
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
										{Moment(comment.created_at).fromNow()}
									</p>
								}
							/>
							<CardContent style={{ padding: "0px 25px" }}>
								{
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
										<Typography component="p">
											{comment.content}
										</Typography>
								}
							</CardContent>

							<CardActions className={classes.actions} disableActionSpacing>
								<ThumbComment 
									commentObjId={comment._id} 
									votes={comment.votesCount}
								/>

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
								&nbsp;&nbsp;
								<CommentCoin 
								// topic object id
									topicObjId={data.siteTopic[0]._id}
									// comment id
									commentId={comment.id}
									// comment owner id
									commentUserId={comment.commentUser[0].id}
								/>
							</CardActions>

							{/* tips for comment */}
							<TopicCoins gift={comment.gifts} />

						</Card>
					))
				}
			</React.Fragment>
    );
  }
}

Comments.propTypes = {
	classes: PropTypes.object.isRequired,
	
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
