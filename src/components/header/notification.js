import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Notifications from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Thumbnails from '../reuseable/thumbnails';
import Link from "next/link";
import Axios from 'axios';
import { config } from "../../../config";
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    
  },
  paper: {
    width: 500,
    [theme.breakpoints.only('xs')]: {
      width: 310,
    },
    // [theme.breakpoints.only('md')]: {
    //   width: 420,
    // },
    overflow: 'auto',
    padding: 10,
    height: 200,
    borderRadius: 10,
  },
  iconspacing: {
    [theme.breakpoints.only('xs')]: {
      margin: '0 1%',
    },
    [theme.breakpoints.only('sm')]: {
      margin: '0 2%',
    },
    [theme.breakpoints.between('md', 'xl')]: {
      margin: '0 4%',
    },
  },
  popper: {
    zIndex: 9999,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      [theme.breakpoints.only('xs')]: {
        width: '32em',
      },
      width: '71em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
      },
    }
  },
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  social: {
    margin: "20px 5px"
  },
  noty: {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid darkgray',
    display: 'flex',
    alignItems: 'center',
    margin: 5
  },
  index: {
    '&:hover': {
      backgroundColor: '#bfbebe'
    },
  }
});

class Notification extends React.Component {
  constructor(props) {
    super(props);
    
    this.note=null
    this.state = {
      arrow: true,
      arrowRef: null,
      disablePortal: false,
      flip: true,
      open: false,
      placement: 'bottom',
      preventOverflow: 'scrollParent',
      notify: [],
      count: null
    };
  }

  async componentDidMount() {
    this.farctNotification();
    this.note = setInterval(() => {
      this.farctNotification();
    }, 60000);
    // a min
  }

  componentWillUnmount = () => {
    clearInterval(this.note);
  }
  

  farctNotification() {
    let token = localStorage.getItem('token');

    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/notification",
      };
      Axios(options).then((res) => {
        if (res.status === 200) {
          this.setState({
            count: res.data.count
          })
        }
      }).catch(error => {
        console.log("NOT", error);
        
      })
    }
  }
  

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };
  

  handleChangeTarget = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleClickButton = node => async event => {
    let token = localStorage.getItem('token');
    this.setState({ count: 0 })
    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/notification/read",
      };
      let notify = await Axios(options);
      // console.log(7777777777, notify);
      if (notify.status === 200) {
        this.setState({
          notify: notify.data
        })
      }

    }

    this.setState(state => ({
      open: !state.open,
      arrowRef: node,
    }));
  };

  render() {
    const { classes, data } = this.props;
    const { open, placement, disablePortal, notify, count, flip, preventOverflow, arrow, arrowRef } = this.state;

    const id = open ? 'Share' : null;

    return (
      <React.Fragment>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Share"
          aria-describedby={id}
          onClick={this.handleClickButton("arrow")}
        >
          {!count || count === 0 ? (
            <Notifications style={{ color: "white" }} />
          ) : (
            <Badge badgeContent={count} color="secondary">
              <Notifications style={{ color: "white" }} />
            </Badge>
          )}
        </IconButton>
        <Popper
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          placement={placement}
          disablePortal={disablePortal}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: flip
            },
            arrow: {
              enabled: arrow,
              element: arrowRef
            },
            preventOverflow: {
              enabled: preventOverflow !== "disabled",
              boundariesElement:
                preventOverflow === "disabled"
                  ? "scrollParent"
                  : preventOverflow
            }
          }}
        >
          {/* {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null} */}
          <Paper className={classes.paper}>
            {notify.map((not, index) => (
              <div key={index} className={classes.index}>
                {not.link ? (
                  <Link href={config.host + not.link}>
                    <a className={classes.noty}>
                      <span style={{ marginBottom: 5 }}>
                        <Thumbnails
                          color="black"
                          url={
                            not.img
                              ? not.img.length > 200
                                ? config.base64 + not.img
                                : config.topic + not.img
                              : null
                          }
                          name={data.user.username}
                        />
                      </span>
                      <Typography
                        variant="body2"
                        style={{ fontSize: 12, marginLeft: 15 }}
                      >
                        {not.message}
                      </Typography>
                    </a>
                  </Link>
                ) : (
                  <>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: 12,
                        padding: 10,
                        backgroundColor: "#f0ddb885"
                      }}
                    >
                      {not.message}
                    </Typography>
                  </>
                )}
              </div>
            ))}
          </Paper>
        </Popper>
      </React.Fragment>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(Notification);
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(Notification));

