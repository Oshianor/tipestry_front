import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Verified from '@material-ui/icons/VerifiedUserOutlined'
import Button from '@material-ui/core/Button';
import Dialog from '../../reuseable/dialog';
import ClaimDialog from "./claimDialog";
import { connect } from 'react-redux';
import { Typography } from "@material-ui/core";


const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});


class Claim extends Component {
	state = {
		open: false
	}

	handleClose = () => {
		this.setState({
			open: false
		})
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const { classes, site, data } = this.props;
		const { open } = this.state;
		return (
			<div>
				{
					// ! check if the site is verified and if the owner of the site 
					// * is not the not logged in user before you show
					typeof site.claim !== "undefined" && !site.claim.verified &&
						<React.Fragment>
							<Button
								variant='contained'
								size="small"
								onClick={this.handleOpen}
								color='default'
								aria-label="Add"
								className={classes.margin}
							>
								<Verified className={classes.extendedIcon} />
								Claim this website
							</Button>
							<Dialog open={open} handleClose={this.handleClose} >
								<ClaimDialog site={site} handleClose={this.handleClose} />
							</Dialog>
						</React.Fragment>
				}
			</div>
		) 
	}
}
// && site.claim.userId !== data.user.id &&
Claim.propTypes = {
	classes: PropTypes.object.isRequired,
	site: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(withStyles(styles)(Claim));