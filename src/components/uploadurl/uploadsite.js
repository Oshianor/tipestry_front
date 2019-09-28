import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  but:{
    height: 30,
    marginTop: -17,
    borderRadius: 0
  },
  int: {
    height: 8
  }
});


class UploadSite extends React.Component {
  state = {
    url: "",
    msg: "",
    err: true
  };

  handleURLPost = async (e) => {
    e.preventDefault();
    const { url } = this.state;

    if (url !== "") {
      Router.push("/sites?s=" + url);
    }
  };

  handleURL = event => {
    this.setState({ url: "" })
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
        <form onSubmit={this.handleURLPost}>
          {/* <Typography>{Lang.i2}</Typography> */}
          {/* <TextField
            autoFocus
            margin="dense"
            inputProps={{ height: 8 }}
            style={{ maxWidth: 350, width: "100%" }}
            id="name"
            // label={Lang.h2}
            placeholder={Lang.h2}
            // type="url"
            variant="outlined"
            onChange={this.handleURL}
          /> */}
          <OutlinedInput
            autoFocus
            margin="dense"
            classes={{
              input: classes.int
            }}
            // style={{ maxWidth: 350, width: "100%" }}
            id="name"
            // label={Lang.h2}
            placeholder={Lang.h2}
            // type="url"
            // variant="outlined"
            onChange={this.handleURL}
          />
          <FormHelperText style={{ color: "red" }}>{msg}</FormHelperText>
        </form>
        <Button
          onClick={this.handleURLPost}
          color="primary"
          size="small"
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
