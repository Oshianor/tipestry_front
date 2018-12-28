import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../../reuseable/thumbnails';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Edit from '@material-ui/icons/EditRounded';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import classnames from 'classnames';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
	semicard: {
		marginLeft: '10%',
		marginTop: 5,
		boxShadow: '0px 0px 0px 0px',
	},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
	},
	time: {
		fontSize: 12,
		margin: "0px 1"
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
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

class Repiles extends React.Component {
  render() {
    const { classes } = this.props;

    return (
			<React.Fragment>
				{
					[0,0,0,0,0,0,0,0,0,0].map((tp) => (
						<Card className={classes.semicard}>
							<CardHeader
								classes = {
									{
										title: classes.time,
										subheader: classes.time // class name, e.g. `classes-nesting-root-x`
									}
								}
								avatar={
									<Thumbnails size="xs" borderColor="black" borderWidth={2} name="sicker" />
								}
								titleTypographyProps={{ fontSize: 12 }}
								style={{ padding: "2px 25px"  }}
								title="Shrimp and Chorizo Paella"
								subheader="September 14, 2016"
							/>
							<CardContent style={{ padding: "2px 25px"  }}>
								<Typography component="p">
									This impressive paella is a perfect party dish and a fun meal to cook together with your
									guests. Add 1 cup of frozen peas along with the mussels, if you like.
								</Typography>
							</CardContent>
							<CardActions className={classes.actions} disableActionSpacing>
								<IconButton aria-label="Thumbs Up" className={classes.iconspacing} >
									<ThumbUpAlt style={{ fontSize: 14 }} /> 
								</IconButton>
								<p style={{ fontSize: 12, marginLeft: -10, padding: 0 }} >12</p>
								&nbsp;&nbsp;
								<IconButton aria-label="Thumbs Down" className={classes.iconspacing} >
									<ThumbDownAlt style={{ fontSize: 14 }} /> 
								</IconButton>
								<p style={{ fontSize: 12, marginLeft: -10, padding: 0 }} >12</p>
								&nbsp;&nbsp;
								<IconButton aria-label="Thumbs Up" className={classes.iconspacing} >
									<Edit style={{ fontSize: 14 }} /> 
								</IconButton>
								<IconButton aria-label="Thumbs Down" className={classes.iconspacing} >
									<RemoveCircle style={{ fontSize: 14 }} /> 
								</IconButton>
							</CardActions>
						</Card>
					))
				}
			</React.Fragment>
    );
  }
}

Repiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Repiles);
