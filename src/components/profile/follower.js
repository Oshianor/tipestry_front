import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './components/box';



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
});

class Follower extends React.Component {
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
						{
							[0,1,2,3,4,5,6,7,8].map((tp) => (
								<Grid items>
									<Box type="follow" />
								</Grid>
							))
						}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Follower.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Follower);
