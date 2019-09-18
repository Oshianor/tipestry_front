import React, { Component } from 'react';
import BasicHeader from "../../components/header/basicheader"
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import { config } from "../../../config";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTopics } from "../../actions/data";

const styles = theme => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",

    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366
    },
    textAlign: "center"
  },
  rootCont: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  bid: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headBid: { fontSize: 16, fontWeight: "600" },
  container: { width: 400, height: 300, padding: 10, margin: 20 },
  bot: {
    display: "flex",
    justifyContent: "flex-end"
  }
});




class ValidateWithdrawal extends Component {
  state = {
    transactionid: "",
    txHelper: {
			err: false,
			msg: ''
		}
  };

  async handleApproveRequest (walletObjId) {
    const { getTopics } = this.props;
    const { transactionid } = this.state;
    let token = localStorage.getItem("token");
    if (transactionid !== "") {
      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-auth-token": token
        },
        data: JSON.stringify({
          transactionid,
          walletObjId
        }),
        url: config.api + "/crypto/approved/pending/withdrawals"
      };
      let data = await axios(options);
      getTopics(data.data.content);
    } else {
      this.setState({
        txHelper: {
          err: true,
          msg: "Tx Hash is required."
        }
      });
    }
  };

  handleChange = event => {
    this.setState({
      transactionid: event.target.value
    });
  };

  async handleCancelledRequest(walletObjId) {
    const { getTopics } = this.props;
    let token = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-auth-token": token
      },
      data: JSON.stringify({
        walletObjId
      }),
      url: config.api + "/crypto/cancelled/pending/withdrawals"
    };
    let data = await axios(options);
    getTopics(data.data.content);
  };


  render() {
    const { data, classes } = this.props;
    const { transactionid, txHelper } = this.state;

    
    return (
      <div>
        <BasicHeader admin={true} />
        <div className={classes.root}>
          <Typography variant="h4" style={{ marginTop: 80, marginBottom: 20 }}>
            Approve Withdrawals
          </Typography>
          <div className={classes.rootCont}>
            {data.topics.map(req => (
              <Paper elevation={12} key={req._id} className={classes.container}>
                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    Email:{" "}
                  </Typography>
                  &nbsp;
                  <Typography>{req.user[0].email}</Typography>
                </div>
                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    Username:{" "}
                  </Typography>
                  &nbsp;
                  <Typography>{req.user[0].username}</Typography>
                </div>
                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    Withdrawal Amount:{" "}
                  </Typography>
                  &nbsp;
                  <Typography>
                    {req.wallettype === "dogecoin" ||
                    req.wallettype === "ethtipc"
                      ? parseFloat(req.amount) - 2
                      : parseFloat(req.amount) - 0.0005}
                  </Typography>
                </div>
                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    Coin:{" "}
                  </Typography>
                  <Typography>{req.wallettype}</Typography>
                </div>

                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    address:{" "}
                  </Typography>
                  &nbsp;
                  <Typography>{req.receive_wallet_id}</Typography>
                </div>

                <div className={classes.bid}>
                  <Typography variant="h6" className={classes.headBid}>
                    IP:{" "}
                  </Typography>
                  &nbsp;
                  <Typography>{req.user[0].registration_ip}</Typography>
                </div>

                <TextField
                  style={{ marginTop: 40 }}
                  variant="outlined"
                  value={transactionid}
                  onChange={this.handleChange}
                  fullWidth
                  error={txHelper.err}
                  helperText={txHelper.msg}
                  required
                  label="Tx Hash"
                />
                <div className={classes.bot}>
                  <Button
                    onClick={this.handleCancelledRequest.bind(this, req._id)}
                    variant="text"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={this.handleApproveRequest.bind(this, req._id)}
                    variant="outlined"
                    color="primary"
                  >
                    Approve
                  </Button>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


ValidateWithdrawal.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTopics: getTopics
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ValidateWithdrawal));