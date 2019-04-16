import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from "next/link";


const styles = theme => ({
  root: {
		width: '100%',
	},
	rootGrow: {
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%"
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 2%"
			// margin: "0px 5%"
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 6%"
			// margin: "0px 10%"
		},
	},
	left: {
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			marginLeft: "10%"
		},
	},
	right: {
		marginRight: 0,
		[theme.breakpoints.up('sm')]: {
			marginRight: "10%"
		},
	},
	img: {
		[theme.breakpoints.up('xs')]: {
			width: 150,
			height: 150
		},
		[theme.breakpoints.up('md')]: {
			width: 230,
			height: 230
		}
	},
	logo: {
		width: 200,
		height: 60,
		[theme.breakpoints.down('sm')]: {
			width: 100,
			height: 40,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundImage: "url('/static/homepage/headerBackground.svg')",
		backgroundColor: "transparent",
		width: "100%",
		backgroundRepeat: 'no-repeat',
		backgroundSize: "cover",
		boxShadow: '0 0 0 0',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

});

class Header extends React.Component {
  render() {
		const { classes, admin } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.rootGrow}>
            <Link href="/" prefetch>
              <a
                style={{
                  margin: "0px 3%",
                  display: "flex",
                  alignItems: "baseline",
                  textDecoration: "none"
                }}
              >
                <img
                  src="/static/login/newlogo.png"
                  className={classes.logo}
                />
                {admin && (
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "white" }}
                  >
                    admin
                  </Typography>
                )}
              </a>
            </Link>

            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.defaultProps = {
  admin: false
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  admin: PropTypes.bool
};

export default withStyles(styles)(Header);