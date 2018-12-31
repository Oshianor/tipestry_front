import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
		alignItems: "flex-start"
	},
	button: {
		margin: theme.spacing.unit,
	},
});

class ReplyCompose extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="reply"
          label="Reply"
					style={{ margin: 8 }}
					onChange={this.handleChange}
					fullWidth
					variant="filled"
					margin="normal"
					multiline
        />
				<Button color="secondary" style={{ marginTop: 27 }} className={classes.button}>
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
