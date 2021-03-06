import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		display: 'flex',
	},
	img: {
    border: "1px solid darkgray",
    width: 35,
    height: 35,
    margin: 5,
    borderRadius: 5,
    cursor: 'pointer',
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: '20%'
  },
  margin: {
		margin: 5,
	},
});

class Withdrawal extends React.Component {
  state = {
    coin: "bitcoin",
    error: "",
    amount: '',
    currentCoin: 0,
    show: 'false',
    address: ''
  }

  onChnage(name) {
    this.setState({
      coin: name
    })
  }

  handleChangeText = prop => event => {
		const { currentCoin } = this.state;
		if (currentCoin > event.target.value) {
			this.setState({
				[prop]: event.target.value,
				error: ""
			});
		} else {
			this.setState({
				error: "You have insuficient balance to handle this transaction"
			});
		}
  };

  handleAddress = event => {
    this.setState({
      address: event.target.value
    })
  }

  renderCurrentCoinImg = () => {
    const { coin } = this.state;
    if (coin == 'bitcoin') {
      return <img src="/static/tipcoins/bit.svg" alt="doge" style={{ width: 15, height: 15 }} />      
    } else if(coin === "dogecoin") {
      return <img src="/static/tipcoins/doge.svg" alt="doge" style={{ width: 15, height: 15 }} />
    } else if (coin === 'ethcoin') {
      return <img src="/static/tipcoins/eth.svg" alt="doge" style={{ width: 15, height: 15 }} />      
    } else if(coin === 'ethtipc') {
      return <img src="/static/tipcoins/Tip-1.png" alt="doge" style={{ width: 15, height: 15 }} />
    } else if (coin === 'ethtipcoin') {
      return <img src="/static/tipcoins/Tip-2.png" alt="doge" style={{ width: 15, height: 15 }} />
    } else if (coin === 'ethxrtcoin') {
      return <img src="/static/tipcoins/Tip-3.png" alt="doge" style={{ width: 15, height: 15 }} />
    }
  }

  handleChange = name => event => {
    this.setState({ show: name });
  }
  
  render() {
    // console.log(this.state);
    
    const { classes, open, handleClose } = this.props;
    const { coin, error, amount, show, address } = this.state;
    let bac = {
      backgroundColor: '#50557b'      
    }
    let nobac = {
      backgroundColor: 'white'
    }
    return (
      <div>
        <Dialog
          open={open}
          onClose={() => handleClose()}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title" style={{ textAlign: 'center' }}  >Withdraw</DialogTitle>
          <DialogContent>
            <Grid container spacing="24" >
              <Grid item xs="12" sm="8" md="8" lg='8' xl='8' >
                <Typography>Choose Currency</Typography>
                <div style={{ display: 'flex' }}>
                  <img 
                    src="/static/tipcoins/bit.svg" 
                    alt="btc"
                    onClick={this.onChnage.bind(this, 'bitcoin')}
                    className={classes.img} 
                    style={ coin === "bitcoin" ? bac : nobac } 
                  />
                  <img 
                    src="/static/tipcoins/doge.svg" 
                    alt="doge" 
                    onClick={this.onChnage.bind(this, 'dogecoin')}
                    className={classes.img} 
                    style={ coin === "dogecoin" ? bac : nobac } 
                  />
                  <img 
                    src="/static/tipcoins/eth.svg" 
                    alt="eth" 
                    onClick={this.onChnage.bind(this, 'ethcoin')}
                    className={classes.img} 
                    style={ coin === "ethcoin" ? bac : nobac } 
                  />
                  <img 
                    src="/static/tipcoins/Tip-1.png" 
                    alt="tipc" 
                    onClick={this.onChnage.bind(this, 'ethtipc')}
                    className={classes.img} 
                    style={ coin === "ethtipc" ? bac : nobac } 
                  />
                  <img 
                    src="/static/tipcoins/Tip-2.png" 
                    alt="tip" 
                    onClick={this.onChnage.bind(this, 'ethtipcoin')}
                    className={classes.img} 
                    style={ coin === "ethtipcoin" ? bac : nobac } 
                  />
                  <img 
                    src="/static/tipcoins/Tip-3.png" 
                    alt="xth" 
                    onClick={this.onChnage.bind(this, 'ethxrtcoin')}
                    className={classes.img} 
                    style={ coin === "ethxrtcoin" ? bac : nobac } 
                  />
                </div>
                <Typography style={{ fontSize: 12 }} >
                  I want to provide my own wallet address
                  <Checkbox
                    checked={show === "false" ? false : true}
                    onChange={this.handleChange(show === "false" ? "true" : 'false')}
                    value={show === "false" ? "true" : 'false'}
                  />
                </Typography>

                {
                  show === "true" &&
                    <TextField
                      error={error !== ""}
                      id="outlined-adornment-amount"  
                      variant="outlined"
                      label="Wallet Address"
                      helperText={error}
                      fullWidth
                      className={classes.margin}
                      value={address}
                      onChange={this.handleAddress}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">
                          xyz
                        </InputAdornment>,
                      }}
                    />
                }
                
                <TextField
                  error={error !== ""}
                  id="outlined-adornment-amount"  
                  variant="outlined"
                  label="Amount"
                  type='number'
                  helperText={error}
                  value={amount}
                  fullWidth
                  className={classes.margin}
                  onChange={this.handleChangeText('amount')}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      {this.renderCurrentCoinImg()}
                    </InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs="12" sm="4" md="4" lg='4' xl="4" >
							  <img src="/static/icons/colormoneybag.svg" className={classes.icon} />              
              </Grid>
              <Button onClick={() => handleClose()} style={{ marginLeft: '35%' }} color="secondary">
                Cash Out
              </Button>
            </Grid>						
          </DialogContent>
          {/* <DialogActions>
            
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

Withdrawal.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Withdrawal);
