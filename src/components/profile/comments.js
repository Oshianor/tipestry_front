import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../reuseable/thumbnails';
import Link from 'next/link';

const styles = theme => ({
  card: {
		maxWidth: "100%",
		[theme.breakpoints.up("lg")]: {
			margin: "2% 30%"
		},
		[theme.breakpoints.down("md")]: {
			margin: "1% 20%"
		},
		[theme.breakpoints.down("sm")]: {
			margin: "1% 10%"
		},
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

class Comments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
			<React.Fragment>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Thumbnails borderColor="black" borderWidth={2} name="sicker" />
						}
						title="Shrimp and Chorizo Paella"
						subheader="September 14, 2016"
					/>
					<CardContent>
						<Typography component="p">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
						<div style={{ flexGrow: 1 }} />
						<Link href="/faq" >
							<a style={{ color: '1F7BD8' }}>View Post</a>
						</Link>
					</CardActions>
				</Card>
			</React.Fragment>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comments);
