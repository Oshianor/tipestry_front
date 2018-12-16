import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Thumbnails from '../reuseable/thumbnails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Camera from '@material-ui/icons/Camera';


const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '5%'
  },
  demo: {
    // width: '100%',
    position: 'relative',
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class EditProfile extends React.Component {

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            container
            className={classes.demo}
            alignItems="center"
            justify="center"
          >
          <Typography style={{ textAlign: 'left' }}>Personal Information</Typography>
            <Grid item>
						  <Thumbnails name="elute" size="xl" borderColor="black" borderWidth={2} />
              <Camera  style={{ marginTop: -150, marginLeft: 100 }}/>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="outlined-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  error
                  id="outlined-error"
                  label="Error"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows="4"
                  defaultValue="Default Value"
                  className={classes.textField}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </form>
            </Grid>


          </Grid>
        </Grid>
      </div>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfile);
