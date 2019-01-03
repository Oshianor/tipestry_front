import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from './components/box';
import { config } from '../../../config';
import Typography from '@material-ui/core/Typography';


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

class Following extends React.Component {
  render() {
    let token = localStorage.getItem('token');
    const { classes, value, profile, user } = this.props;
    
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
              typeof value[0] === "undefined" ?
                <Typography 
                  style={{ marginTop: "10%", textAlign: 'center' }} 
                  variant="h6" 
                >
                  YOU CURRENTLY HAVE NO FOLLOWERS
                </Typography>
              :
                value.map((val) => (
                  <Grid items key={val._id} >
                    <Box 
                      name = {
                        val.name ? val.name : "@" + val.username
                      }
                      img={
                        val.profileimage &&
                        val.profileimage.length > 100 ?
                          'data:image/png;base64,' + val.profileimage
                        :
                          config.url + val.profileimage
                      } 
                      id={val.id}
                      token={token}
                      profile={profile}
                      user={user}
                    />
                  </Grid>
                ))
						}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Following.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Following);
