import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// created component
import SharePopover from './sharePopover';

// filled
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';

import { connect } from 'react-redux';
import Thumb from './thumb';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
  num: {
    fontSize: 15,
    fontWeight: '500',
    padding: 0,
    color: "#403d3d",
    marginLeft: "-7px",
    [theme.breakpoints.up('md')]: {
      marginLeft: "-18px",
    },
  },
  iconspacing: {
    [theme.breakpoints.only('xs')]: {
      margin: '0 -3px',
    },
    [theme.breakpoints.only('sm')]: {
      margin: '0 4px',
    },
    [theme.breakpoints.between('md', 'xl')]: {
      margin: '0 10px',
    },
  }
});

class CardActionIcons extends React.Component {
  handleFavourite = () => {

  }

  displayFavour = () => {
    const { data, votes, classes, topicId } = this.props;
    // console.log('topicId', data.user.favourite, "---", topicId);
    
    // check if the user properieste are avaiable
    if (typeof data.user !== "undefined") {
      if (data.user.favourite.indexOf(topicId) !== -1) {
        return (
          <Tooltip title="Remove from favourites" aria-label="Add to favorites">
            <IconButton onClick={this.handleFavourite} aria-label="Add to favorites" className={classes.iconspacing}>
              <FavoriteBorderOutlined style={{ color: '#1F7BD8' }} />
            </IconButton>
          </Tooltip>
        )
      }
    }
    return (
      <Tooltip title="Add to favourites" aria-label="Add to favorites">
        <IconButton aria-label="Add to favorites" className={classes.iconspacing}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    )
  }

  render() {
    const { token, classes, expanded, handleExpandClick, votes, comment, topicObjId } = this.props;
    // console.log('votes.length,', votes.length);
    
    return (
      <CardActions className={classes.actions} >

        <Thumb 
          votes={votes} 
          token={token} 
          topicObjId={topicObjId} 
          iconspacing={classes.iconspacing} 
          num={classes.num} 
        />



        {/*  */}
        {this.displayFavour()}



        {/*  */}
        <Tooltip title="Comments" aria-label="comments">
          <IconButton aria-label="comments" className={classes.iconspacing}>
            <img src="/static/icons/comments.svg" alt="comments" width='25' height="25" />
          </IconButton>
        </Tooltip>
        <p className={classes.num} >
          {comment}
        </p>
				&nbsp;&nbsp;



        {/*  */}
        <Tooltip title="Share Post" aria-label="Share">
          <SharePopover />
        </Tooltip>

        {/* tips coin icons */}
        <IconButton
          onClick={handleExpandClick}
          className={classes.iconspacing}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <img src="/static/icons/moneybag.svg" alt="comments" width='25' height="25" style={{ color: '#1F7BD8' }} />
        </IconButton>
        <p className={classes.num} >
        4500
        </p>
				&nbsp;&nbsp;
      </CardActions>
    );
  }
}

CardActionIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  votes: PropTypes.array.isRequired,
  comment: PropTypes.array.isRequired,
  topicId: PropTypes.number.isRequired,
  topicObjId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(CardActionIcons));
