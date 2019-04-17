import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Remove from "@material-ui/icons/Cancel"
import classNames from "classnames";

const styles = theme => ({
  root: {
    height: "auto",
    margin: "auto 5px",
    width: "auto",
    display: "flex",
    justifyContent: "space-between",
    // padding: "2px 10px",
    alignItems: "center",
    boxShadow: theme.shadows[2],
    "&:hover": {
      boxShadow: theme.shadows[14]
    }
  },
  warning: {
    backgroundColor: "#ebc063",
    borderColor: "#e8b64c",
    color: "#a07415"
  },
  danger: {
    backgroundColor: "#e27c79",
    borderColor: "#dd6864",
    color: "#9f2723"
  },
  info: {
    backgroundColor: "#91cf91",
    borderColor: "#80c780",
    color: "#3d8b3d"
  },
  text: {
    fontSize: 15,
    padding: "2px 10px"
  }
});

class MessageAlert extends Component {
	render() {
		const { classes, msg, handleClose, status } = this.props;
		// console.log(this.props);
		
		return (
      <Paper
        className={classNames(classes.root, {
          [classes.warning]: status === "w",
          [classes.danger]: status === "d",
          [classes.info]: status === "i"
        })}
      >
        <Typography className={classes.text}>{msg}</Typography>
        <IconButton onClick={() => handleClose()}>
          <Remove />
        </IconButton>
      </Paper>
    );
	}
}

// export default messageAlert;
MessageAlert.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageAlert);

		// danger
		// background-color: #e27c79;
    // border-color: #dd6864;
		// color: #9f2723;
		
		// info
		// background-color: #91cf91;
    // border-color: #80c780;
    // color: #3d8b3d;