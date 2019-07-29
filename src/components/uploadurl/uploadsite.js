import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import isURL from "validator/lib/isURL";
import PropTypes from "prop-types";
import Router from "next/router";
import { Lang } from "../../../lang";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  but:{
    height: 50,
    marginTop: 3,
    borderRadius: 0
  }
});


class UploadSite extends React.Component {
  state = {
    msg: "",
    err: true
  };

  handleURLPost = async () => {
    const { url } = this.state;

    Router.push("/sites?s=" + url);
  };

  handleURL = event => {
    // check if the url is valid
    if ( !isURL(event.target.value) ) {
      // {require_valid_protocol: true, protocols: ['http','https','ftp'], require_protocol: true}

      this.setState({
        msg: "You need to provided a valid web url",
        err: true
      });
      return false;


    }

    if (
      !isURL(event.target.value, {
        require_valid_protocol: true,
        protocols: ["http", "https", "ftp"],
        require_protocol: true
      })
    ) {
      this.setState({
        url: "https://" + event.target.value,
        err: false,
        msg: ""
      });

      return
    }

    this.setState({
      url: event.target.value,
      err: false,
      msg: ""
    });

    return;
  };
  render() {
    const { msg, err } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Typography>{Lang.i2}</Typography>
          <TextField
            autoFocus
            margin="dense"
            style={{ maxWidth: 350 }}
            id="name"
            label={Lang.h2}
            type="url"
            variant="outlined"
            fullWidth
            onChange={this.handleURL}
          />
          <FormHelperText style={{ color: "red" }}>{msg}</FormHelperText>
        </div>
        <Button
          onClick={this.handleURLPost}
          color="secondary"
          className={classes.but}
          variant="contained"
          disabled={err}
        >
          {/* Upload */}
          {Lang.j2}
        </Button>
      </div>
    );
  }
}
export default withStyles(styles)(UploadSite);
