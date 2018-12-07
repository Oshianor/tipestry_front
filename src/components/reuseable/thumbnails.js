import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {

  };
}


class Thumbnails extends Component {
  render() {
    // get the props
    const { url, size } = this.props;
    const small = { width: '20px', height: '20px', borderRadius: 20 };
    const medium = { width: '20px', height: '20px', borderRadius: 20 };
    const large = { width: '20px', height: '20px', borderRadius: 20 };
    const xtraLarge = { width: '20px', height: '20px', borderRadius: 20 };

    return (
      <div>
        
      </div>
    );
  }
}

Thumbnails.defaultProps = {
  url: '',
  size: 'm', // s, m, l, xl
};

Thumbnails.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  url: PropTypes.string.isRequired,
  size: PropTypes.string,
};




export default connect(
  mapStateToProps,
)(thumbnails);