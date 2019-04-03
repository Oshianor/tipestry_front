import React , { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import { Lang } from '../../../lang';

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
		fontFamily: 'poppins',
		fontSize: 12,
		'&:hover': {
			textDecoration: 'none', 
			color: 'rgba(0, 0, 0, 0.61)',
			fontWeight: '500'
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
						<a className={classes.link} >
							{Lang.i}
						</a>
					</Link>
					&nbsp;&nbsp;
					<a href="mailto:feedback@tipestry.com" className={classes.link} >
						{Lang.k3}
					</a>
					&nbsp;&nbsp;
					<a  target="_blank" className={classes.link}  href="https://medium.com/@tipestry/introducing-the-tipestry-internet-meta-layer-comment-vote-and-earn-cryptocurrency-anywhere-7b94abb5918b" >
						{Lang.d3}
					</a>
					&nbsp;&nbsp;
					<Link href="/contests">
						<a className={classes.link} >
							{Lang.e3}
						</a>
					</Link>
					&nbsp;&nbsp;
					<Link href="/privacypolicy">
						<a className={classes.link}>
							{Lang.f3}
						</a>
					</Link>
					&nbsp;&nbsp;
					<a href='https://tipestrygo.com' target="_blank" className={classes.link} >
						Tipestry &nbsp; {Lang.g3}
					</a>
					&nbsp;&nbsp;
					<a href='https://tipestry.io/Tipestry-White-Paper.pdf' className={classes.link} >
						{Lang.h3}
					</a>
					&nbsp;&nbsp;
					<a href='https://chrome.google.com/webstore/detail/tipestry-for-chrome/cedgeodmmkbpclcdomkojhmfgjiaiogo?brand=CHBD&gclid=CjwKCAjw1dzkBRBWEiwAROVDLPuzKR-abSIREVOOrY7JNB_i6jS8GFuv9DuFKCgV-XzSVCdeV2GCnRoCXpcQAvD_BwE&gclsrc=aw.ds' target="_blank" className={classes.link} >
						Tipestry for Chrome
					</a>
					&nbsp;&nbsp;
					<Link href="/terms">
						<a className={classes.link} >
							{Lang.i3}
						</a>
					</Link>
				</div>
				<div style={{ margin: '10px 20px' }}>
					<Typography style={{ color: 'rgba(0, 0, 0, 0.61)', whiteSpace: 'nowrap', fontWeight: '600' }}>
						{Lang.j3}
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