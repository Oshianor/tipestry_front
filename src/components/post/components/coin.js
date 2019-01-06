 import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CoinGift from './coingift';
import { connect } from 'react-redux';
import Axios from 'axios';
import { config } from "../../../../config";



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
			margin: '0 -3px',
		},
		[theme.breakpoints.only('sm')]: {
			margin: '0 4px',
		},
		[theme.breakpoints.between('md', 'xl')]: {
			margin: '0 10px',
		},
	},
	lin: {
		cursor: 'pointer',
		margin: 5
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
			[theme.breakpoints.only('xs')]: {
				width: '20',
			},
			[theme.breakpoints.only('sm')]: {
				width: '33em',
			},
			[theme.breakpoints.between('md', 'xl')]: {
				width: '36em',
			},
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

class Coin extends React.Component {
  state = {
    arrow: true,
    arrowRef: null,
    disablePortal: false,
    flip: true,
    open: false,
    placement: 'top',
    preventOverflow: 'scrollParent',
    img: null,
    gift: false,
    type: "",
    btc: "Getting balance...",
		currentCoin: 0
	};

	async componentDidMount() {
		const { data } = this.props;
		// this.setState({
		// 	doge: data.user.doge[0].doge_balance,
		// 	eth: data.user.eth[0].ethapibalance,
		// 	tipc: data.user.eth[0].tipcapibalance,
		// 	tip: data.user.eth[0].tipapibalance,
		// 	xth: data.user.eth[0].xrtapibalance
		// })

		let token = localStorage.getItem('token');

    if (token) {
      const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + "/crypto/btc/balance",
      };
			let btc = await Axios(options);
			// console.log(btc);
      this.setState({
				btc: btc.data.result
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

  handleClickButton = node => event => {
    this.setState(state => ({
      open: !state.open,
      arrowRef: node,
    }));
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleGift(img, name) {
    const { data, topicUserObjId } = this.props;
    if (data.user._id !== topicUserObjId) {
      this.setState({
        img: '/static/tipcoins/' + img,
        type: name,
        gift: true
      })
    }

    // set the balance of the currenlty selected coin
		if (name === "btc") {
			this.setState({
			  currentCoin: this.state.btc
			})
		} else if(name === 'doge') {
			this.setState({
        currentCoin: data.user.doge[0].doge_balance
      })	
		} else if(name === 'eth') {
			this.setState({
        currentCoin: data.user.eth[0].ethapibalance
      })	
		} else if (name === 'tipc') {
			this.setState({
        currentCoin: data.user.eth[0].tipcapibalance
      })		
		} else if(name === 'tip') {
			this.setState({
        currentCoin: data.user.eth[0].tipapibalance
      })	
		} else if(name === 'xth') {
			this.setState({
        currentCoin: data.user.eth[0].xrtapibalance
      })		
		}
  }

  handleGiftClose = () => {
    this.setState({
      gift: false
    })
  }

  render() {
    const { classes, link, topicUserId } = this.props;
    const { currentCoin, open, placement, disablePortal, flip, preventOverflow, arrow, arrowRef, gift, img, type } = this.state;

    const id = open ? 'Share' : null;
    return (
      <div className={classes.iconspacing} >
				{/* tips coin icons */}
        <IconButton
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-label="Share" 
          aria-describedby={id}
          onClick={this.handleClickButton('arrow')}
        >
          <img src="/static/icons/moneybag.svg" alt="comments" width='25' height="25" style={{ color: '#1F7BD8' }} />
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
            <a className={classes.lin}  onClick={this.handleGift.bind(this, 'bit.svg', 'btc')} >
              <img src="/static/tipcoins/bit.svg" width="25" height="25" />
            </a>
            <a className={classes.lin} onClick={this.handleGift.bind(this, 'doge.svg', 'doge')} >
              <img src="/static/tipcoins/doge.svg" width="25" height="25" />
            </a>
            <a className={classes.lin} onClick={this.handleGift.bind(this, 'eth.svg', 'eth')} >
              <img src="/static/tipcoins/eth.svg" width="25" height="25" />
            </a>
            <a className={classes.lin} onClick={this.handleGift.bind(this, 'Tip-1.png', 'tipc')} >
              <img src="/static/tipcoins/Tip-1.png" width="25" height="25" />
            </a>
						<a className={classes.lin}  onClick={this.handleGift.bind(this, 'Tip-2.png', 'tip')} >
              <img src="/static/tipcoins/Tip-2.png" width="25" height="25" />
            </a>
						<a className={classes.lin}  onClick={this.handleGift.bind(this, 'Tip-3.png', 'xth')} >
              <img src="/static/tipcoins/Tip-3.png" width="25" height="25" />
            </a>
          </Paper>
        </Popper>
        <CoinGift 
          open={gift}
          image={img}
          type={type}
          currentCoin={currentCoin}
          topicUserId={topicUserId}
          handleClose={this.handleGiftClose}
        />
      </div>
    );
  }
}

Coin.propTypes = {
  classes: PropTypes.object.isRequired,
  topicUserObjId: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(Coin));
