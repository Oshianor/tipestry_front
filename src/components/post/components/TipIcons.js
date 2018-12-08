import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
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
    backgroundColor: 'transparent',
    color: 'black'
  },
  iconspacing: {
    // margin: '0 8px'
  }
});

class TipIcons extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.actions} >
        {/*  */}
        <IconButton aria-label="Thumbs Up" className={classes.iconspacing} >
          <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }} >
            <img src="/static/tipcoins/Bitcoin-Icon.svg" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
        {/*  */}
        <IconButton aria-label="Thumbs Down" className={classes.iconspacing} >
          <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }} >
            <img src="/static/tipcoins/Ethereum-Icon.svg" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
        {/*  */}
        <IconButton aria-label="Add to favorites" className={classes.iconspacing} >
          <Badge badgeContent={434} color="secondary" classes={{ badge: classes.badge }} >
            <img src="/static/tipcoins/Dogecoin-Icon.svg" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
        {/*  */}
        <IconButton aria-label="comments" className={classes.iconspacing}>
          <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }} >
            <img src="/static/tipcoins/Tip-1.png" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
        {/*  */}
        <IconButton aria-label="Share" className={classes.iconspacing} >
          <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }} >
              <img src="/static/tipcoins/Tip-2.png" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
        {/* tips coin icons */}
        <IconButton aria-label="Show more" >
          <Badge badgeContent={4} color="secondary" classes={{ badge: classes.badge }} >
            <img src="/static/tipcoins/Tip-3.png" alt="comments" width='25' height="25" />
          </Badge>
        </IconButton>
      </CardActions>
    );
  }
}

TipIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipIcons);
