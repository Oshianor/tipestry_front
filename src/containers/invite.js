import React, { Component } from 'react';
import Share from '../components/invite/share';
import Sendinvite from '../components/invite/sendinvite';
import Header from '../components/header/header';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	container: {
		// backgroundColor: '#c74523',
		width: '100%',
		height: "80vh",
		marginTop: 150,
		textAlign: 'center'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	but: {
		boxShadow: '0px 0px 0px 0px',
		marginLeft: -4,
		height: 57,
		marginTop: 3,
		borderRadius: 5
	},
	sps: {
		margin: "8vh 2%",
		[theme.breakpoints.only('md')]: {
			margin: "17vh 15%",
		},
		[theme.breakpoints.between('lg', 'xl')]: {
			margin: "20vh 20%",
		},
		backgroundColor: 'white',
		borderRadius: 5,
		boxShadow: "1px 1px 5px grey"
	}
});

class Invite extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Header />
				<div className={classes.container}>
					<Typography variant="h4" style={{ padding: 40, paddingTop: 100 }}>Invite your friends to join Tipestry</Typography>
					<Typography variant='subheading' style={{ marginLeft: "10%", marginRight: '10%' }}>
						Invite your friends to Tipestry via email, or share your referral code on Facebook or Twitter.
						When your friends register and create their first post, 
						they automatically get 5 XTH tokens credited to them.
						5 XTH tokens will also be credited to your wallet.
					</Typography>
					<div className={classes.sps} >
						<Sendinvite />
						<div style={{ padding: 19 }}>
							<hr style={{ borderTop: "2px dotted rgb(0, 162, 232)" }} />
							<Typography
								style={{ 
									marginTop: -26, 
									backgroundColor: 'white', 
									maxWidth: "10%", 
									fontSize: 20, 
									textAlign: 'center', 
									marginLeft: '45%' 
								}}
								>
								OR
							</Typography>
						</div>
						<Share />
					</div>
				</div>
			</div>
		);
	}
}

// export default Invite;
Invite.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Invite);