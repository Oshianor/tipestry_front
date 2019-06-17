import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Tag from "./tag";
import { Lang } from "../../../../lang"
import Moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";


const styles = theme => ({
	root: {
		margin: "5px 0px"
	}
})


function TagPopover(props) {
	const { handleClose, open, data, classes } = props;

	const handleTag = function () {
		console.log("click");
		
	};

	const nutralizeTitle = function (title) {
    return title
      .toLocaleLowerCase()
      .split(" ")
      .join("-")
      .replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g, "");
  };

	return (
    <Dialog
      // fullScreen={fullScreen}
      maxWidth="sm"
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Top</DialogTitle>
      <DialogContent>
        {data.map(topic => (
          <div key={topic._id} className={classes.root}>
            <Link
              href={
                "/topics/" + topic._id + "/" + nutralizeTitle(topic.title)
              }
            >
              <a style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    color: "#1F7BD8",
                    textDecoration: "none",
                    fontSize: 16,
                    textTransform: "capitalize"
                  }}
                >
                  {topic.title}
                </Typography>
              </a>
            </Link>
            <Tag tags={topic.tags} handleTag={handleTag} />
            <Typography style={{ fontSize: 10 }}>
              {Moment(topic.created_at)
                .locale(Lang.locale)
                .fromNow()}
            </Typography>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(TagPopover);