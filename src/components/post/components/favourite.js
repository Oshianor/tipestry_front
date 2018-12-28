import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// filled
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import { connect } from 'react-redux';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
});

class Favourite extends React.Component {
  handleFavourite = () => {

  }

  displayFavour = () => {
    const { data, votes, classes, topicId } = this.props;
    // console.log('topicId', data.user.favourite, "---", topicId);
    
    // check if the user properieste are avaiable
    if (typeof data.user !== "undefined") {
      if (data.user.favourite.indexOf(topicId) !== -1) {
        return (
          <Tooltip title="Remove from favorites" aria-label="Add to favorites">
            <IconButton onClick={this.handleFavourite} aria-label="Add to favorites" className={classes.iconspacing}>
              <FavoriteBorderOutlined />
            </IconButton>
          </Tooltip>
        )
      }
    }
    return (
      <Tooltip title="Add to favorites" aria-label="Add to favorites">
        <IconButton aria-label="Add to favorites" className={classes.iconspacing}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    )
  }

  render() {
    
    return this.displayFavour();
  }
}

Favourite.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(Favourite));
