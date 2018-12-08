/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Link from 'next/link';
import Homepage from '../src/containers/homepage';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

export default withStyles(styles)(Index);
