import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class DeletePost extends React.Component {
  render() {
    const { open, handleDeletePost, handleClose } = this.props;

    return (
        <Dialog
          // fullScreen={fullScreen}
          open={open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Delete Post"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to continue with this operation?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              No, Thanks
            </Button>
            <Button onClick={() => handleDeletePost()} color="secondary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

DeletePost.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default withMobileDialog()(DeletePost);
