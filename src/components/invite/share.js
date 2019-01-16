import React, { Component } from 'react';
import { config } from '../../../config'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const styles = theme => ({
	container: {
		display: 'flex',
		// flexWrap: 'wrap',
		// flexDirection: 'column'
		alignItems: "flex-start",
		padding: 20
	},
	grow: {
		flexGrow: 1
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	but: {
		boxShadow: '0px 0px 0px 0px',
    marginLeft: -4,
    height: 40,
    // marginTop: 2,
    borderRadius: 5
	},
	tex: {
		fontSize: 12,
		margin: 0,
		marginTop: -8,
		[theme.breakpoints.between('sm', 'xl')]: {
			margin: 6,
			fontSize: 16,
		}
	},
	img: {
		margin: 3,
		marginTop: 7,
		width: 25,
		height: 25,
		[theme.breakpoints.between('sm', 'xl')]: {
			margin: "0px 5px",
			width: 40,
			height: 40,
		}
	}
});

// style={{ margin: 5 }} width="50" height="50"

class share extends Component {
	render() {
		const { classes } = this.props;
		let link = "/register";
		return (
			<div className={classes.container} >
				<Typography variant="h6" className={classes.tex}>
					Share Your Link: 
				</Typography>
				<OutlinedInput
					id="component-outlined"
					style={{ height: 40, width: "100%", maxWidth: 350 }}
				/>
				<Button variant="contained" size="small" color="default" 
					className={classes.but}>
          Copy
        </Button>
				<div className={classes.grow} />
				<a href={`https://www.facebook.com/sharer/sharer.php?u=${config.host + link}`}
						target="_blank" className={classes.social} >
						<img src="/static/social/facebook.png" className={classes.img}  />
					</a>
					<a href = {
						`https://twitter.com/share?text=&amp;url=${config.host + link}`
					}
					target="_blank"
					className = {
						classes.social
					} >
						<img src="/static/social/twitter.png" className={classes.img}  />
				</a>
			</div>
		);
	}
}

// export default share;
share.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(share);