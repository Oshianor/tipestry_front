import React, { Component } from 'react';
import Header from '../components/header/header';
import Post from '../components/post/post';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    backgroundImage: "url('/static/images/pagecover.svg')", 
    height: 300,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "contain"
  },
});
class Homepage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root} >
          <Header />
        </div>
        
        <Post />
      </div>
    )
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);
