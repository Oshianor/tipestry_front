import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from "moment";



const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

class History extends React.Component {
  state = {
    scroll: 'paper',
  };

  render() {
		const { classes, open, handleClose, history } = this.props;
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
							<Table className={classes.table}>
								<TableHead>
									<TableRow>
										<TableCell>Discription</TableCell>
										<TableCell align="right">Tip Status</TableCell>
										<TableCell align="right">Currency</TableCell>
										<TableCell align="right">Amount</TableCell>
										<TableCell align="right">Date</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{history.map(row => {
										return (
											<TableRow key={row.id}>
												<TableCell component="th" scope="row">
													{typeof row.user[0].name !== "undefined" ? row.user[0].name : row.user[0].username}
												</TableCell>
												<TableCell 
													align="right"
													style={ row.transactiontype === "gifted" ? { color: 'green' } : row.transactiontype === "withdrawal" ? { color: "orange" } : { color: 'red' } }>
													{row.transactiontype}
												</TableCell>
												<TableCell align="right" >{row.wallettype}</TableCell>
												<TableCell align="right">{row.amount}</TableCell>
												<TableCell align="right">{moment(row.created_at).format('ddd MMM YYYY')}</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
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
