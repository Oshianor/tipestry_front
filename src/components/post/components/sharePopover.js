import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FileCopy from '@material-ui/icons/FileCopy';
import { withRouter } from 'next/router';
import { config } from '../../../../config';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';


const styles = theme => ({
  root: {
  },
  paper: {
    maxWidth: 400,
    overflow: 'auto',
    padding: 10,
    borderRadius: 18,

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
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '17em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${theme.palette.common.white} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.9em',
      width: '17em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${theme.palette.common.white} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${theme.palette.common.white} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.9em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${theme.palette.common.white}`,
      },
    },
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
  }
});

class AnchorPlayground extends React.Component {
  state = {
    arrow: true,
    arrowRef: null,
    disablePortal: false,
    flip: true,
    open: false,
    placement: 'top',
    preventOverflow: 'scrollParent',
    copied: false
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  async handleCounterForSocial(mode) {
    let token = localStorage.getItem('token');
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ mode }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/share/topic'
      }

      let vote = await axios(options);
      console.log("Adding count for share", vote);
    }
  }

  handleChangeTarget = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleClickButton = node => event => {
    // this.setState(state => ({
    //   open: !state.open,
    //   arrowRef: node,
    // }));
    const { handleOpen } = this.props;
    let token = localStorage.getItem('token');
    if (token) {
      this.setState(state => ({
        open: !state.open,
        arrowRef: node,
      }));
    } else {
      handleOpen();
    }
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, link } = this.props;
    const { open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef, copied } = this.state;

    const id = open ? 'Share' : null;

    // console.log(link);
    
    // console.log("ROYETR", this.props);
    let message = `Visit ${config.host + link} and join the conversation`;
    return (
      <div className={classes.iconspacing} >
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Share" 
          aria-describedby={id}
          onClick={this.handleClickButton('arrow')}
        >
          <ShareIcon />
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
              enabled: flip,
            },
            arrow: {
              enabled: arrow,
              element: arrowRef,
            },
            preventOverflow: {
              enabled: preventOverflow !== 'disabled',
              boundariesElement:
                preventOverflow === 'disabled' ? 'scrollParent' : preventOverflow,
            },
          }}
        >
          {arrow ? <span className={classes.arrow} ref={this.handleArrowRef} /> : null}
          <Paper className={classes.paper}>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${config.host + link}&t=${message}`} onClick={this.handleCounterForSocial.bind(this, 'fb')} target="_blank" className={classes.social} >
              <img src="/static/social/facebook.png" width="25" height="25" />
            </a>
            <a href={`https://twitter.com/share?text=${message}&amp;url=${config.host + link}`} onClick={this.handleCounterForSocial.bind(this, 'tw')} target="_blank" className={classes.social} >
              <img src="/static/social/twitter.png" width="25" height="25" />
            </a>
            <CopyToClipboard text={config.host + link}onCopy={() => this.setState({ copied: true })}>
              <FileCopy style={{ cursor: 'pointer', color: 'red' }} />
            </CopyToClipboard>
          </Paper>
        </Popper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={copied}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Successfully copied!</span>}
        />
      </div>
    );
  }
}

AnchorPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AnchorPlayground));
