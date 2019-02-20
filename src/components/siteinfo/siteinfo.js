import React , { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	link: {
		textDecoration: 'none', 
		color: 'rgba(0, 0, 0, 0.61)',
		'&:hover': {
			textDecoration: 'none', 
			color: 'black',
		},
		'&:active': {
			textDecoration: 'underline', 
			color: 'black',
		},
		'&:focus': {
			textDecoration: 'none', 
			color: 'black',
		},
	},
});

class SiteInfo extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div style={{ margin: '20px 18px' }} >
				<Typography style={{ color: 'rgba(0, 0, 0, 0.61)' }}>
					© 2019 TIpestry 
					&nbsp;&nbsp;
					<Link href="/faq">
						<a className={classes.link} >Faq</a>
					</Link>
					&nbsp;&nbsp;
					<br />
					<Link href="/privacypolicy">
						<a className={classes.link} >Privacy Policy</a>
					</Link>
					&nbsp;&nbsp;
					<Link href="/contests">
						<a className={classes.link} >Contests</a>
					</Link>
					<br />
					&nbsp;&nbsp;
					<Link href="/terms">
						<a className={classes.link} style={{ whiteSpace: 'nowrap' }} >Terms and Conditions</a>
					</Link>
				</Typography>
			</div>
		)
	}
}
export default withStyles(styles)(SiteInfo);