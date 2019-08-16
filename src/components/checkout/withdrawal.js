import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Axios from 'axios';
import { config } from "../../../config";
import Alert from '../reuseable/alert';
import Remove from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import MessageAlert from '../reuseable/message';

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
    amount: "",
    currentCoin: 0,
    show: "false",
    address: "",
    withdraw: {
      err: false,
      msg: ""
    },
    loading: false,
    displayName: "bitcoin"
    // opener: false,
    // msg: ''
  };

  onChnage(name, displayName) {
    this.setState({
      coin: name,
      displayName
    });
  }

  handleChangeText = prop => event => {
    this.setState({
      [prop]: event.target.value,
      error: ""
    });
  };

  handleAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  renderCurrentCoinImg = () => {
    const { coin } = this.state;
    if (coin == "bitcoin") {
      return (
        <img
          src="/static/tipcoins/bit.svg"
          alt="doge"
          style={{ width: 15, height: 15 }}
        />
      );
    } else if (coin === "dogecoin") {
      return (
        <img
          src="/static/tipcoins/doge.svg"
          alt="doge"
          style={{ width: 15, height: 15 }}
        />
      );
      // } else if (coin === 'ethcoin') {
      //   return <img src="/static/tipcoins/eth.svg" alt="doge" style={{ width: 15, height: 15 }} />
    } else if (coin === "ethtipc") {
      return (
        <img
          src="/static/tipcoins/Tip-1.png"
          alt="doge"
          style={{ width: 15, height: 15 }}
        />
      );
      // } else if (coin === 'ethtipcoin') {
      //   return <img src="/static/tipcoins/Tip-2.png" alt="doge" style={{ width: 15, height: 15 }} />
      // } else if (coin === 'ethxrtcoin') {
      //   return <img src="/static/tipcoins/Tip-3.png" alt="doge" style={{ width: 15, height: 15 }} />
    }
  };

  handleAlertClose = () => {
    this.setState({
      withdraw: {
        err: false,
        msg: ""
      }
    });
  };

  handleChange = name => event => {
    this.setState({ show: name });
  };

  handleWithdrawal = async () => {
    const { coin, amount, address } = this.state;
    this.setState({
      loading: true
    });
    let token = localStorage.getItem("token");
    let obj = {
      coinType: coin,
      amount,
      address
    };
    let amt;
    if (coin === "bitcoin") {
      amt = parseFloat(amount) - 0.0005;
    } else if (coin === "dogecoin") {
      amt = parseFloat(amount) - 2;
    } else {
      // not sure how much is network fee
      amt = parseFloat(amount) - 2;
    }

    if (token && amt > 0) {
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-auth-token": token
        },
        data: JSON.stringify(obj),
        url: config.api + "/crypto/withdrawal"
      };
      let withh = await Axios(options);
      console.log("withdraw,", withh);

      if (!withh.data.error) {
        this.setState({
          withdraw: {
            err: true,
            msg: withh.data.msg,
            status: "i"
          },
          loading: false
        });
      } else {
        this.setState({
          withdraw: {
            err: true,
            msg: withh.data.msg,
            status: "w"
          },
          loading: false
        });
      }
    } else {
      this.setState({
        withdraw: {
          err: true,
          status: "w",
          msg: "You don't have sufficient amount for a withdrawal"
        },
        loading: false
      });
    }
  };

  handleDialogClose = () => {
    const { handleClose } = this.props;
    handleClose();
    this.setState({
      coin: "bitcoin",
      error: "",
      amount: "",
      currentCoin: 0,
      show: "false",
      address: "",
      withdraw: {
        err: false,
        msg: ""
      },
      loading: false
    });
  };

  render() {
    // console.log(this.state);

    const { classes, open, handleClose, btc, doge, eth } = this.props;
    const {
      opener,
      msg,
      coin,
      error,
      amount,
      displayName,
      address,
      withdraw,
      loading
    } = this.state;
    let bac = {
      backgroundColor: "#50557b"
    };
    let nobac = {
      backgroundColor: "white"
    };

    return (
      <div>
        <Dialog
          open={open}
          onClose={() => handleClose()}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <div>
            <IconButton onClick={this.handleDialogClose}>
              <Remove />
            </IconButton>
            <DialogTitle
              id="scroll-dialog-title"
              style={{ textAlign: "center", marginTop: -60 }}
            >
              Withdraw
            </DialogTitle>
          </div>

          <DialogContent>
            {withdraw.err && (
              // <Typography style={{ color: "red", textAlign: "center" }}>
              //   {withdraw.msg}
              // </Typography>
              <MessageAlert
                msg={withdraw.msg}
                status={withdraw.status}
                handleClose={this.handleAlertClose}
              />
            )}

            {coin === "bitcoin" && withdraw.err && amount >= 0.099 && (
              <Typography
                style={{
                  color: "red",
                  fontSize: 12,
                  padding: "10px 0px"
                }}
              >
                Withdraw of{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  &nbsp;{coin}
                </strong>{" "}
                greater than{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  {coin === "bitcoin" ? 0.099 : 500}
                </strong>{" "}
                would be subject to review and approval of admin
              </Typography>
            )}

            {coin === "dogecoin" && withdraw.err && amount >= 500 && (
              <Typography
                style={{
                  color: "red",
                  fontSize: 12,
                  padding: "10px 0px"
                }}
              >
                Withdraw of{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  &nbsp;{coin}
                </strong>{" "}
                greater than{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  {coin === "bitcoin" ? 0.099 : 500}
                </strong>{" "}
                would be subject to review and approval of admin
              </Typography>
            )}

            {coin === "ethtipc" && withdraw.err && amount >= 500 && (
              <Typography
                style={{
                  color: "red",
                  fontSize: 12,
                  padding: "10px 0px"
                }}
              >
                Withdraw of{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  &nbsp; tipcoin
                </strong>{" "}
                greater than{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  {coin === "ethtipc" ? 100 : 500}
                </strong>{" "}
                would be subject to review and approval of admin
              </Typography>
            )}

            <Grid container spacing="24">
              <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography>Choose Currency</Typography>
                <div style={{ display: "flex" }}>
                  <img
                    src="/static/tipcoins/bit.svg"
                    alt="btc"
                    onClick={this.onChnage.bind(this, "bitcoin", "bitcoin")}
                    className={classes.img}
                    style={coin === "bitcoin" ? bac : nobac}
                  />
                  <img
                    src="/static/tipcoins/doge.svg"
                    alt="doge"
                    onClick={this.onChnage.bind(
                      this,
                      "dogecoin",
                      "dogecoin"
                    )}
                    className={classes.img}
                    style={coin === "dogecoin" ? bac : nobac}
                  />
                  <img
                    src="/static/tipcoins/Tip-1.png"
                    alt="tipcoin"
                    onClick={this.onChnage.bind(this, "ethtipc", "tipcoin")}
                    className={classes.img}
                    style={coin === "ethtipc" ? bac : nobac}
                  />
                </div>

                <Typography
                  style={{
                    color: "red",
                    fontSize: 12,
                    padding: "10px 0px"
                  }}
                >
                  Cannot withdraw funds without
                  <strong>
                    &nbsp;Network fee of &nbsp;
                    {coin === "bitcoin" ? 0.0005 : 2.0}
                    <strong style={{ textTransform: "uppercase" }}>
                      &nbsp;{displayName}.
                    </strong>
                  </strong>
                  &nbsp;Maximum withdrawable balance is{" "}
                  {coin === "bitcoin"
                    ? btc.balance - 0.0005
                    : coin === "dogecoin"
                    ? doge.doge_balance - 2
                    : eth.tipapibalance - 2}
                  <strong style={{ textTransform: "uppercase" }}>
                    &nbsp;{displayName}
                  </strong>
                </Typography>

                <TextField
                  error={error !== ""}
                  id="outlined-adornment-amount"
                  variant="outlined"
                  label="Wallet Address (optional)"
                  helperText={error}
                  fullWidth
                  className={classes.margin}
                  value={address}
                  onChange={this.handleAddress}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">xyz</InputAdornment>
                    )
                  }}
                />

                <TextField
                  error={error !== ""}
                  required
                  id="outlined-adornment-amount"
                  variant="outlined"
                  label="Amount"
                  type="number"
                  helperText={error}
                  value={amount}
                  fullWidth
                  className={classes.margin}
                  onChange={this.handleChangeText("amount")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {this.renderCurrentCoinImg()}
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <img
                  src="/static/icons/colormoneybag.svg"
                  className={classes.icon}
                />
              </Grid>
              <Button
                disabled={loading}
                onClick={this.handleWithdrawal}
                style={{ marginLeft: "35%" }}
                color="secondary"
              >
                Cash Out
              </Button>
            </Grid>
          </DialogContent>

          {/* <Alert
            open={opener}
            message={msg}
            handleClose={this.handleAlertClose}
          /> */}
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



{
  /* <img 
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
                  /> */
}