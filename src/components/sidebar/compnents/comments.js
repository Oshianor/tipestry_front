import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../../reuseable/thumbnails';
import Replies from './replies';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';

const styles = theme => ({
  card: {
		maxWidth: "100%",
		// [theme.breakpoints.up("lg")]: {
		// 	margin: "2% 30%"
		// },
		// [theme.breakpoints.down("md")]: {
		// 	margin: "1% 20%"
		// },
		// [theme.breakpoints.down("sm")]: {
		// 	margin: "1% 10%"
		// },
		marginTop: 5
	},
  actions: {
		display: 'flex',
		padding: "0px 25px",
		borderBottom: '2px solid gray'
  }
});

class Comments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
			<React.Fragment>
				{
					[0,1,2,3,4,5,6,7,8,9].map((tp) => (
						<Card className={classes.card}>
							<CardHeader
								avatar={
									<Thumbnails borderColor="black" borderWidth={2} name="sicker" />
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
								{/* <IconButton
									className={classes.iconspacing}
									aria-label="Show more"
								>
									<img src="/static/icons/moneybag.svg" alt="comments" width='25' height="25" />
									<ExpandMoreIcon className={classnames(classes.expand, {
										[classes.expandOpen]: expanded,
									})} style={{ fontSize: 15 }} />
								</IconButton> */}
								</CardActions>
								<Replies />
						</Card>
					))
				}
			</React.Fragment>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);
