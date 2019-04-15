import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Verified from '@material-ui/icons/VerifiedUserOutlined'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import Link from "next/link";




const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
	text: { textAlign: "center", margin: "10px 8%", fontSize: 15 },
});


class Claim extends Component {

	render() {
		const { classes, site, token } = this.props;
		return (
      <>
        {typeof site._id !== "undefined" && (
          <>
            {token && site.claim.verified === "start" && (
              <Typography variant="h6" className={classes.text}>
                Do you own this site?
                <Link href={"/site-verification/" + site._id + "/" + token}>
                  <a> Claim it </a>
                </Link>
                today and earn tips
              </Typography>
            )}
            {token && site.claim.verified === "pending" && (
              <Typography variant="h6" className={classes.text}>
                Site verification for this link is pending.
              </Typography>
            )}
            {token && site.claim.verified === "success" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 8%"
                }}
              >
                <img
                  src="/static/icons/verified-badge.svg"
                  style={{ width: 25, height: 25 }}
                />
                <Typography variant="h6" style={{ fontSize: 14 }}>
                  Site ownership was verified by: @
                  {site.claim.username}
                </Typography>
              </div>
            )}
          </>
        )}
      </>
    ); 
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