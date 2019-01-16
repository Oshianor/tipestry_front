import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class Alert extends React.Component {
  render() {
    const { open, message, handleClose } = this.props;

    return (
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{message}</span>}
			/>
    );
  }
}

export default Alert
