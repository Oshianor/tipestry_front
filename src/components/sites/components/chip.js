import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    margin: 1
  }
});


function ChipsArray (props) {
	const { classes, chipData, handleDelete } = props;
	console.log("chipData", chipData);


	return (
		<div className={classes.root}>
			{chipData.map(data => {
				return (
          <Chip
            size="small"
            key={data.key}
            avatar={<Avatar>#</Avatar>}
            label={data.label}
            onDelete={() => handleDelete(data)}
            className={classes.chip}
          />
        );
			})}
		</div>
	);
}

export default withStyles(styles)(ChipsArray);
