import React, { Component } from 'react';
import Embed from '../components/embed/embedtopic';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/sidebar/sidebar';
import Header from "../components/header/header";
import Siteabout from '../components/sidebar/compnents/siteabout';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Drawer from '../components/header/drawer';
import CoinModal from "../components/post/components/coingift";
import Alert from "../components/reuseable/alert";
import Warning from "../components/reuseable/warning";
import { bindActionCreators } from "redux";
import { getTopics, getFavourite, setWarning } from "../actions/data";


class Topic extends Component {
  state = {
    token: null,
    drawer: false,
    stopScroll: false,
    msgOpen: false,
    msg: ""
  };

  // handle drawer open
  handleDrawerOpen = () => {
    this.setState({ drawer: true });
  };

  // handle close of drawer
  handleDrawerClose = () => {
    this.setState({ drawer: false });
  };

  componentWillUnmount() {
    removeEventListener("scroll", this.trackScrolling);
  }

  // track scroolling . when scroll amost to the header
  trackScrolling = e => {
    // console.log(window.scrollY, "vvv", window.scrollX);

    if (window.scrollY > 240) {
      this.setState({
        stopScroll: true
      });
      return false;
    }
    this.setState({
      stopScroll: false
    });
    return false;
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    this.setState({
      token
    });
    addEventListener("scroll", this.trackScrolling);
  }

  showAlert(msg) {
    this.setState({
      msgOpen: true,
      msg
    });
  }

  hideAlert = () => {
    this.setState({
      msgOpen: false
    });
  };

  render() {
    const { token, stopScroll, drawer, msgOpen, msg } = this.state;
    const { data, gift } = this.props;
    return (
      <div>
        <Header
          drawer={drawer}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <Drawer
          drawer={drawer}
          // this props is to check if overlay exisit
          // in that page an push the icons to the top.
          overlay={false}
          stopScroll={stopScroll}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography
                variant="h6"
                style={{
                  margin: 5,
                  marginTop: 80,
                  textAlign: "center",
                  color: "black"
                }}
              >
                {typeof data.siteTopic[0] !== "undefined" &&
                  data.siteTopic[0].title}
              </Typography>
              <Embed
                url={
                  typeof data.siteTopic[0] !== "undefined" &&
                  data.siteTopic[0].sites[0].url
                }
                img={
                  typeof data.siteTopic[0] !== "undefined" &&
                  data.siteTopic[0].screenshot
                }
                height="85vh"
                top={0}
                site={
                  typeof data.siteTopic[0] !== "undefined" &&
                  data.siteTopic[0].sites[0]
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Sidebar token={token} />
            </Grid>
          </Grid>

          <CoinModal
            open={gift.open}
            image={gift.image}
            type={gift.type}
            topicId={gift.topicId}
            currentCoin={gift.currentCoin}
            topicUserId={gift.topicUserId}
            // handleClose={this.handleGiftClose}
            showAlert={this.showAlert.bind(this)}
          />
          <Alert handleClose={this.hideAlert} open={msgOpen} message={msg} />
          <Warning open={data.warning} handleClose={() => setWarning(false)} />
        </Drawer>
      </div>
    );
  }
}

// export default Topic;
function mapStateToProps(state) {
	return {
    data: state.data,
    gift: state.gift
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTopics: getTopics,
      getFavourite: getFavourite,
      setWarning
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
