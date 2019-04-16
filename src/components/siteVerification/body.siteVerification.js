import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "../reuseable/alert";
import { config } from "../../../config";
import { withRouter } from "next/router"




const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: -100
  },
  root: {
    height: 'auto',
    // display: "flex",
    // justifyContent: "center",
    textAlign: "center",
    width: 500
  },
  logo: {
    width: 300,
    height: 100
  },
  link: {
    display: "flex",
    alignItems: "flex-end"
  },
  textHeader: {
    margin: "10px auto",
    fontWeight: "600"
  },
  bosy: {
    margin: 20,
    padding: "5%"
  },
  bodText: {
    textAlign: "left",
    marginTop: 9,
    fontSize: 13
  },
  cssOutlinedInput: {
    fontSize: 12
  },
  baseText: {
    marginTop: 40
  },
  warnText: {
		color: "gray",
		fontSize: 12
	}
});

class BodySiteVerification extends Component {
  state = {
    open: false,
    url: "",
		msg: "",
		loading: false
  };

  componentDidMount() {
    const { site } = this.props;

    let initiateUrl = new URL(site.url);
    let url = this.removeWWW(initiateUrl.host);

    this.setState({
      url
    });
  }

  handleAlertClose = () => {
    this.setState({
      open: false
    });
  };

  removeWWW = url => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
  };

  verifyClaim = async () => {
    let userToken = localStorage.getItem("token");
    const { url } = this.state;
    const { site, router } = this.props;

		this.setState({
			loading: true
		})

    if (userToken) {
      const options = {
        method: "POST",
        data: JSON.stringify({
          siteObjId: site._id,
          url: url
        }),
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-auth-token": userToken
        },
        url: config.api + "/sites/verify/site"
      };
      let raw = await axios(options);
      // console.log(raw);
      if (!raw.data.error) {
        this.setState({
          open: true,
					msg: raw.data.msg,
					loading: false
        });
      } else {
        this.setState({
          open: true,
					msg: raw.data.msg,
					loading: false
        });
			}
			router.push("/sites?s=" + site.url)
    }
	};
	
  render() {
    const { classes, site } = this.props;
    const { url, open, msg, loading } = this.state;
    return (
      <div className={classes.container}>
        <Paper elevation={12} className={classes.root}>
          <Typography variant="h5" className={classes.textHeader}>
            Welcome to site Verification
          </Typography>
          <Typography variant="h6">Add a new TXT record for {url}</Typography>

          <div className={classes.bosy}>
            <Typography variant="body1" className={classes.bodText}>
              To verify ownership of your site, you'll need to add a new DNS
              record for <strong>{url}</strong> using the account for your
              DNS host.
            </Typography>

            <Typography variant="body1" className={classes.bodText}>
              Please add the record on your root domain, not a subdomain.
            </Typography>

            <Typography variant="body1" className={classes.bodText}>
              Copy and paste the info below into the zone file for{" "}
              <strong>{url}</strong> using your DNS host's control panel.
            </Typography>

            <Typography className={classes.baseText}>
              Using the TXT Method copy and paste the data.
            </Typography>
            <TextField
              readonly
              fullWidth
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput
                }
              }}
              value={`tipestry-site-verification=${site.token}`}
              variant="outlined"
            />
            <CopyToClipboard
              text={`tipestry-site-verification=${site.token}`}
              onCopy={() => this.setState({ copied: true })}
            >
              <Button>Copy To Clipboard</Button>
            </CopyToClipboard>
            <Typography className={classes.warnText}>
              After adding and saving this TXT record with your DNS host, click
              the button below to verify.
            </Typography>
          </div>

          <Typography className={classes.warnText}>
            Note: This may take a few minutes to several hours to become
            available for verification depending on where your DNS is hosted.
          </Typography>
          <Button
            variant="extendedFab"
						color="primary"
						disabled={loading}
						onClick={this.verifyClaim}
            style={{ width: 150, margin: "10px auto" }}
          >
            Verify Records
          </Button>
        </Paper>
        <Alert open={open} message={msg} handleClose={this.handleAlertClose} />
      </div>
    );
  }
}
BodySiteVerification.propTypes = {
  classes: PropTypes.object
};
export default withRouter(withStyles(styles)(BodySiteVerification));
