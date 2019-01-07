import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		display: 'flex',
	},
	img: {

	}
});

class History extends React.Component {
  render() {
		const { classes, open, handleClose } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={() => handleClose()}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Tip's History</DialogTitle>
          <DialogContent>
            <Paper className={classes.root}>
							<img src="/static/icons/colormoneybag.svg" className={classes.img} />
						</Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

History.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(History);
