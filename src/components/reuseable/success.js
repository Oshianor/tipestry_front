import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

// function Transition(props) {
//   return <Slide direction="up" {...props} />;
// }

class Success extends React.Component {
  render() {
		const { open, handleClose, text, buttonText } = this.props;
    return (
			<Dialog
				open={open}
				// TransitionComponent={Transition}
				keepMounted
				onClose={() => handleClose()}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{text}
				</DialogTitle>

				<DialogContent>
					<img src="/static/images/success.svg" width={150} height={150} />
				</DialogContent>

				<DialogActions>
					<Button onClick={() => handleClose()} color='secondary' >
						{buttonText}
					</Button>
				</DialogActions>
			</Dialog>
    );
  }
}

Success.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Success;