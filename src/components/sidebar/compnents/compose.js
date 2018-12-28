import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    margin: "5%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
	button: {
    margin: theme.spacing.unit,
  },
});

class Compose extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
				<Typography>
					Your Comment
				</Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="3"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
				<Button variant="contained" color="primary" className={classes.button}>
					Post Comment
				</Button>
      </form>
    );
  }
}

Compose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Compose);
