import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { config } from '../../../../config';
import Alert from '../../reuseable/alert';
import Warning from "../../reuseable/warning";
import ReCAPTCHA from "react-google-recaptcha";




const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginLeft: 60
	},
	button: {
		margin: theme.spacing.unit,
  },
});

class ReplyCompose extends React.Component {
  constructor(props) {
    super(props);
    
    this.recaptchaRef = React.createRef();

    this.state = {
      open: false,
      reply: "",
      token: null
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    
    this.setState({
      token
    })
  }
  
  
  

  handleChange = event => {
    this.setState({
      reply: event.target.value
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleReply = async () => {
    const { reply } = this.state;
		const { commentId, handleUpdateReply, commentObjId } = this.props;

    const recaptchaValue = this.recaptchaRef.current.getValue();

    let token = localStorage.getItem('token');
    let options;

		if (token) {
      options = {
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
    } else {

      if (recaptchaValue === "") {
        return;
      }

      options = {
        method: "POST",
        data: JSON.stringify({
          commentId,
          content: reply
        }),
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        url: config.api + "/commentReply/reply/anonymous"
      };
    }


    let comment = await axios(options);
    // console.log("CHANGEING VOTES", comment);
    if (comment.data.error === false) {
      this.setState({
        reply: ""
      });
      handleUpdateReply(
        comment.data.content.replies,
        comment.data.content.total
      );
    }
  }

  render() {
    const { classes, username } = this.props;
    const { reply, open, token } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="reply"
          label={
            <span>
              <span style={{ color: "gray" }}>reply @</span>
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
          color="secondary"
        />
        <br />
        <br />
        {!token && (
          <div style={{ margin: "0 8%" }}>
            <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LfC9q4UAAAAAMbyFnaZtaQyEOuiBKb1gI8QMZKx"
              onChange={this.onChange}
            />
          </div>
        )}
        <Button
          color="secondary"
          style={{ marginTop: 20 }}
          disabled={reply.length === 0}
          className={classes.button}
          onClick={this.handleReply}
        >
          Save
        </Button>

        <Warning open={open} handleClose={this.handleClose} />
      </form>
    );
  }
}

ReplyCompose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReplyCompose);
