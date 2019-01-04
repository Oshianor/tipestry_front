import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormHelperText from '@material-ui/core/FormHelperText';
import isURL from 'validator/lib/isURL';
import PropTypes from 'prop-types';
import { config } from "../../../config";
import Router from "next/router";
import Axios from 'axios';

class UploadUrl extends React.Component {
	state = {
		msg: ""
	}

	handleURLPost = async () => {
		const { handleClose } = this.props;
		const { url } = this.state


		// let improved = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
		Router.push("/sites?s=" + url);
		
		handleClose();
	}

	handleURL = (event) => {
		
		if (!isURL(event.target.value)) {
			this.setState({ msg: 'You need to provided a valid web url' })
			return false;
		} 

		this.setState({
			url: event.target.value
		})
	}
  render() {
		const { uploadStatus, handleClose } = this.props;
		const { msg } = this.state;
    return (
			<Dialog
				open={uploadStatus}
				onClose={() => handleClose()}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Upload A Post</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter a url of your choice and create a post.
					</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Enter a Url"
						type="url"
						variant="outlined"
						fullWidth
						onChange={this.handleURL}
					/>
					<FormHelperText style={{ color: 'red' }}>{msg}</FormHelperText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleClose()} color="secondary">
						No, Thanks
					</Button>
					<Button onClick={this.handleURLPost} color="primary">
						Upload
					</Button>
				</DialogActions>
			</Dialog>
    );
  }
}
UploadUrl.propTypes = {
	uploadStatus: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};
export default UploadUrl;