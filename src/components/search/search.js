import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import { config } from "../../../config";
import axios from "axios";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";


const styles = theme => ({
  grow: {
    flexGrow: 1,
    fontFamily: "poppins",
    cursor: "pointer"
  },
  link: {
    textDecoration: "none",
    fontFamily: "poppins",
    padding: 5,
    // color: theme.palette.secondary.main,
    color: "white",
    fontWeight: "300",
    "&:hover": {
      fontWeight: "500"
    }
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  search: {
    border: ".5px solid",
    // borderColor: theme.palette.intermediate.main,
    // borderColor: 'white',
    position: "relative",
    borderRadius: 0,
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.45)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      // width: "auto"
      width: 300
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    color: "black",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  initiLink: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "grey",
      color: "red"
    }
  },
  inputRoot: {
    color: "white",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    color: "gray",
    // transition: theme.transitions.create('width'),
    width: 150
    // [theme.breakpoints.up('sm')]: {
    //   width: 150,
    //   '&:focus': {
    //     width: 300,
    //   },
    // },
  },
  root: {
    zIndex: 99999
  },
  paper: {
    margin: 0,
    [theme.breakpoints.up("xs")]: {
      marginLeft: 8
    },
    boxShadow: "0px 0px 1px 0px",
    background: "white",
    borderRadius: 0,
    // color: theme.palette.intermediate.main,
    width: 300,
    maxHeight: 400,
    overflow: "auto",
    textAlign: "center"
  },
  img: {
    width: 25
  },
  progress: {
    width: 25,
    height: 25
  },
  text: {
    padding: 10,
    borderBottom: "1px solid gray",
    textAlign: "left"
  }
});

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.anchorEl = null;
    this.state = {
      value: "",
      loading: false,
      res: [],
      open: false
    };
  }

  handleSearch = async e => {
    const { searchBy }  = this.props;
    this.setState({
      value: e.target.value,
      res: []
    });

    if (e.target.value !== "") {
      this.setState({
        loading: true
      });

      try {
        let result = await axios.post(config.api + "/topic/search", {
          text: e.target.value,
          searchBy
        });
        this.setState({
          res: result.data,
          open: true,
          loading: false
        });
      } catch (error) {
        console.log("search api", error.response);
      }
    } else {
      this.setState({
        res: [],
        open: false,
        loading: false
      });
      return false;
    }
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  nutralizeTitle = title => {
    return title
      .toLocaleLowerCase()
      .split(" ")
      .join("-")
      .replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g, "");
  };

  render() {
    const { classes } = this.props;
    const { open, res, loading } = this.state;
    console.log("search", this.state);

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {loading ? (
                <CircularProgress
                  style={{ width: 25, height: 25, color: "red" }}
                />
              ) : (
                <SearchIcon />
              )}
            </div>
            <InputBase
              placeholder="Search Topics..."
              aria-owns={open ? "search" : undefined}
              onChange={this.handleSearch}
              aria-haspopup="true"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </div>
        {res.length > 0 && (
          <Popper
            className={classes.root}
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="search"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    {res.map(topic => (
                      <Link
                        href={
                          "/topics/" +
                          topic._id +
                          "/" +
                          this.nutralizeTitle(topic.title)
                        }
                      >
                        <a className={classes.initiLink}>
                          <Typography className={classes.text}>
                            {topic.title}
                          </Typography>
                        </a>
                      </Link>
                    ))}
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
