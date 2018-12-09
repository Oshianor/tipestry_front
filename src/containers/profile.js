import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from '../components/header/header';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 100,
    minHeight: 45 
  },
};

class Profile extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <Paper className={classes.root}>
          <Tabs
            style={{ minHeight: 45, marginBottom: 1 }}
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={3} label="Posts" style={{ marginTop: -10, marginBottom: -7, padding: 0 }} />
            <Tab icon={73} label="Comments" style={{ marginTop: -10, marginBottom: -7 }} />
            <Tab icon={34} label="Replies" style={{ marginTop: -10, marginBottom: -7 }} />
            <Tab icon={34} label="Favourite" style={{ marginTop: -10, marginBottom: -7 }} />
            <Tab icon={34} label="Followers" style={{ marginTop: -10, marginBottom: -7 }} />
            <Tab icon={34} label="Following" style={{ marginTop: -10, marginBottom: -7 }} />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
