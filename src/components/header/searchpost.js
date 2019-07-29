import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Search from '../search/search';
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center"
  },
  options: {
    display: "flex",
    alignItems: "center"
  }
});
class Searchpost extends Component {
  state = {
    searchBy: "tag"
  };

  handlesearchBy = event => {
    this.setState({
      searchBy: event.target.value
    });
  };

  render() {
    const { searchBy } = this.state;
		const { classes } = this.props;
		// search and toggle code 
    return (
      <div className={classes.formControl}>
        <Search searchBy={searchBy} />
        <div className={classes.options}>
          <Typography>&nbsp;Search By:&nbsp;</Typography>
          <FormControlLabel
            value="tag"
            checked={searchBy === "tag"}
            onChange={this.handlesearchBy}
            control={<Radio />}
            label="Tag"
          />
          <FormControlLabel
            value="title"
            checked={searchBy === "title"}
            onChange={this.handlesearchBy}
            control={<Radio />}
            label="Title"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Searchpost);