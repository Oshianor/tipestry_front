import React, { Component } from 'react';
import Header from '../components/header/header';
import Post from '../components/post/post';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tipcoin from '../components/tipcoin/tipcoin';

const styles = theme => ({
  root: {
    backgroundImage: "url('/static/homepage/headerBackground.svg')", 
    // minHeight: 300,
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'inherit',
    width: "100%",
    height: "50vh",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover"
  },
});
class Homepage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Tipcoin />
        <Post />
      </div>
    )
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homepage);
