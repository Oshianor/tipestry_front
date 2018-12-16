import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';

// created component
import SharePopover from '../../popover/sharePopover';


// icons

// outlined
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlined from '@material-ui/icons/ChatBubbleOutlineOutlined';



// filled
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubble from '@material-ui/icons/ChatBubble';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    // marginLeft: 'auto',
    marginRight: "2%",
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  badge: {
    top: 0,
    right: -19,
    width: 27,
    height: 27,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  iconspacing: {
    margin: '0 3%',
    [theme.breakpoints.down('xs')]: {
      margin: '0 1%',
    },
  }
});

class CardActionIcons extends React.Component {
  render() {
    const { classes, expanded, handleExpandClick } = this.props;

    return (
      <CardActions className={classes.actions} >
        {/*  */}
        <Tooltip title="Thumbs Up" aria-label="Thumbs Up">
          <IconButton aria-label="Thumbs Up" className={classes.iconspacing} >
            <Badge badgeContent={233} color="primary" classes={{ badge: classes.badge }}>
              <ThumbUpAlt />
            </Badge>
          </IconButton>
        </Tooltip>
        {/*  */}
        <Tooltip title="Thumbs Down" aria-label="Thumbs Down">
          <IconButton aria-label="Thumbs Down" className={classes.iconspacing} >
            <ThumbDownAlt />
          </IconButton>
        </Tooltip>
        {/*  */}
        <Tooltip title="Add to favorites" aria-label="Add to favorites">
          <IconButton aria-label="Add to favorites" className={classes.iconspacing} >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        {/*  */}
        <Tooltip title="Comments" aria-label="comments">
          <IconButton aria-label="comments" className={classes.iconspacing}>
            <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }} >
              {/* <ChatBubble /> */}
              <img src="/static/icons/comments.svg" alt="comments" width='25' height="25" />
            </Badge>
          </IconButton>
        </Tooltip>
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
          <img src="/static/icons/moneybag.svg" alt="comments" width='25' height="25" />
          <ExpandMoreIcon className={classnames(classes.expand, {
            [classes.expandOpen]: expanded,
          })} style={{ fontSize: 15 }} />
        </IconButton>
      </CardActions>
    );
  }
}

CardActionIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired, 
  handleExpandClick: PropTypes.func.isRequired
};

export default withStyles(styles)(CardActionIcons);
