import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Thumbnails from '../../reuseable/thumbnails';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  card: {
		margin: '2px 5%',
    boxShadow: "0px 0px 0px 0px",
    backgroundColor: 'navajowhite'
		// backgroundColor: 'azure'
  },
  actions: {
		display: 'flex',
		padding: "0px 25px"
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
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SiteAbout extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
		const { expanded } = this.state;
    return (
      <Card className={classes.card}>
        <CardHeader
					style={{ padding: "2px 25px"  }}
          avatar={
            <Thumbnails name="rat" borderColor="black" borderWidth={2} />
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent style={{ padding: "0px 25px" }}>
          <Typography component="p" style={{   }}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon style={{ fontSize: 15 }} />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon style={{ fontSize: 15 }} />
          </IconButton>
        	<IconButton
						className={classes.iconspacing}
						aria-label="Show more"
					>
						<img src="/static/icons/moneybag.svg" alt="comments" width='25' height="25" />
						<ExpandMoreIcon className={classnames(classes.expand, {
							[classes.expandOpen]: expanded,
						})} style={{ fontSize: 15 }} />
					</IconButton>
				</CardActions>
      </Card>
    );
  }
}

SiteAbout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SiteAbout);
