import React , { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	root: {
		margin: '10px 20px',
		display: 'flex',
		flexWrap: 'wrap'
	},
	link: {
		textDecoration: 'none', 
		color: 'rgba(0, 0, 0, 0.61)',
		whiteSpace: 'nowrap',
		fontWeight: '300',
		'&:hover': {
			textDecoration: 'none', 
			color: 'rgba(0, 0, 0, 0.61)',
			fontWeight: '600'
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
	img: {
		backgroundColor: 'rgba(0, 0, 0, 0.61)',
		margin: '10px 5px',
		borderRadius: 25,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'white'
		}
	},
});

class SiteInfo extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.root} >
					<Typography style={{ color: 'rgba(0, 0, 0, 0.61)', whiteSpace: 'nowrap', fontWeight: '600' }}>
						© 2019 Tipestry 
					</Typography>
					&nbsp;&nbsp;
					<Link href="/faq">
						<a className={classes.link} >Faq</a>
					</Link>
					&nbsp;&nbsp;
					<Link href="/contests">
						<a className={classes.link} >Contests</a>
					</Link>
					&nbsp;&nbsp;
					<Link href="/privacypolicy">
						<a className={classes.link}>Privacy Policy</a>
					</Link>
					&nbsp;&nbsp;
					<a href='https://tipestrygo.com' target="_blank" className={classes.link} >
						Tipestry Go
					</a>
					&nbsp;&nbsp;
					<a href='https://tipestry.io/Tipestry-White-Paper.pdf' className={classes.link} >
						White Paper
					</a>
					&nbsp;&nbsp;
					<a href='https://chrome.google.com/webstore/detail/flaaoclnjndmbijdgmeehfmaacpclgca/publish-accepted?authuser=0&hl=en' target="_blank" className={classes.link} >
						Tipestry for Chrome
					</a>
					&nbsp;&nbsp;
					<Link href="/terms">
						<a className={classes.link} >Terms and Conditions</a>
					</Link>
				</div>
				<div style={{ margin: '10px 20px' }}>
					<Typography style={{ color: 'rgba(0, 0, 0, 0.61)', whiteSpace: 'nowrap', fontWeight: '600' }}>
						Follow on Social Media
					</Typography>
					<div>
						<a href='https://www.facebook.com/tipestry' target="_blank" >
							<img src="/static/icons/facebook.png"  width='30' className={classes.img} />
						</a>
						<a href='https://twitter.com/tipestry' target="_blank" >
							<img src="/static/icons/twitter.png" width='30' className={classes.img} />
						</a>
						<a href='https://www.youtube.com/channel/UC9u8IG9weAezdAzRw8LSyRw' target="_blank" >
							<img src="/static/icons/youtube.png" width='30' className={classes.img} />
						</a>
						<a href='https://t.me/tipestry' target="_blank" >
							<img src="/static/icons/telegram.png" width='30' className={classes.img} />
						</a>
					</div>
				</div>
			</div>
			
		)
	}
}
export default withStyles(styles)(SiteInfo);