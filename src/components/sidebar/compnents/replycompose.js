import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { config } from '../../../../config';
import Alert from '../../reuseable/alert';


const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: "flex-start",
    marginLeft: 60
	},
	button: {
		margin: theme.spacing.unit,
  },
});

class ReplyCompose extends React.Component {
  state = {
    reply:''
  }

  handleChange = event => {
    this.setState({
      reply: event.target.value
    });
  }

  handleReply = async () => {
    const { reply } = this.state;
		const { commentId, handleUpdateReply, commentObjId } = this.props;

		let token = localStorage.getItem('token');
		if (token) {
      console.log('uuu');
      
      const options = {
        method: 'POST',
        data: JSON.stringify({
        	commentId,
        	content: reply
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/commentReply/reply'
      }

      let comment = await axios(options);
      console.log("CHANGEING VOTES", comment);
      if (comment.data.error === false) {
        this.setState({
          reply: ""
        })
        handleUpdateReply(comment.data.content, commentObjId);
        
      }
      
    }
  }

  render() {
    const { classes, username } = this.props;
    const { reply } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="reply"
          label={
            <span>
              <span style={{ color: 'gray' }}>reply @</span>
              <b>{username}</b>
            </span>
          }
          value={reply}
					style={{ margin: 8 }}
					onChange={this.handleChange}
          fullWidth
          rowsMax={3}
					margin="normal"
          multiline
          color='secondary'
        />
        <Button 
          color="secondary" 
          style={{ marginTop: 20 }} 
          disabled={reply.length === 0}
          className={classes.button}
          onClick={this.handleReply}
        >
					Save
				</Button>
      </form>
    );
  }
}

ReplyCompose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReplyCompose);
