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

const styles = theme => ({
  root: {
    // flexGrow: 1,
    
  },
  paper: {
    width: 500,
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
  }
});

class Notification extends React.Component {
  state = {
    arrow: true,
    arrowRef: null,
    disablePortal: false,
    flip: true,
    open: false,
    placement: 'bottom',
    preventOverflow: 'scrollParent',
  };

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

  handleClickButton = node => event => {
    this.setState(state => ({
      open: !state.open,
      arrowRef: node,
    }));
  };

  render() {
    const { classes } = this.props;
    const { open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef } = this.state;

    const id = open ? 'Share' : null;

    return (
      <React.Fragment>
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Share" 
          aria-describedby={id}
          onClick={this.handleClickButton('arrow')}
          
        >
          <Badge badgeContent={17} color="secondary">
						<Notifications style={{ color: "white" }} />
					</Badge>
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
          {
            [1, 2, 3, 4].map((r) => (
              <div style = {
                {
                  borderBottom: '1px solid darkgray',
                  display: 'flex',
                  alignItems: 'center',
                  margin: 5
                }
              } >
                <span style={{ marginBottom: 5 }}><Thumbnails name="spalt" /></span>
                <Typography variant='body2' style={{ fontSize: 12, marginLeft: 15 }}>
                  pipeline " expression to be used in place of the "
                  local and
                  foreign " keys. So instead of using the
                </Typography>
              </div>
            ))
          }
          </Paper>
        </Popper>
      </React.Fragment>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notification);
