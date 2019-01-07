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
import Moment from "moment";
import { config } from "../../../config";

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
    const { classes, value } = this.props;

    return (
			<React.Fragment>
				{
					typeof value[0] === "undefined" ?
						<Typography 
							style={{ marginTop: "10%", textAlign: 'center' }} 
							variant="h6" 
						>
							YOU CURRENTLY HAVE NO COMMENTS
						</Typography>
					:
						value.map((val) => (
							<Card className={classes.card} key={val._id} >
								<CardHeader
									avatar={
										<Thumbnails 
											name={val.user[0].username} 
											url={
												val.user[0].profileimage === "" || !val.user[0].profileimage ?
													null
												:
													config.profileimage + val.user[0].profileimage
											}
											borderColor="black" 
											borderWidth={2} 
										/>
									}
									component="div"
                  title={
                    <Link href={encodeURI("/profile/" + val.user[0]._id + "/@" + val.user[0].username)} >
                      <a style={{ color: '#1F7BD8', textDecoration: 'none' }}>
                        <strong style={{ color: 'gray' }}>@</strong>
                        {typeof val.user[0] !== "undefined" ? `${val.user[0].username}` : "@No name"}
                      </a>
                    </Link>
                  }
                  subheader={
                    <p style={{ fontSize: 10, margin: 0 }} >
                      {Moment(val.created_at).fromNow()}
                    </p>
                  }
								/>
								<CardContent>
									<Typography component="p">
										{val.content}
									</Typography>
								</CardContent>
								<CardActions className={classes.actions} disableActionSpacing>
									<div style={{ flexGrow: 1 }} />
									<Link href={encodeURI("/topics/" + val.topic[0]._id + "/" + val.topic[0].title)} >
										<a style={{ color: '1F7BD8' }}>View Post</a>
									</Link>
								</CardActions>
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
