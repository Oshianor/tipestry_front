import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import { Lang } from '../../../lang';
import Trend from '@material-ui/icons/TrendingUpOutlined'
import Dialog from '../reuseable/dialog';
import Tipcoin from '../tipcoin/tipcoin';
import Trends from '../trends/trends';
import Board from "@material-ui/icons/EventNote";
import Star from "@material-ui/icons/Star";
import LeaderBoard from "../leaderscoreboard/scoreboard";
import Popular from '../popular/popular';
import Stage from "../stage/stage";
import SignalLevel from "@material-ui/icons/SignalCellularAltOutlined";
import Userinfo from '../userinfo.js/userinfo';
import Ballot from "@material-ui/icons/Ballot";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
		whiteSpace: 'nowrap',
		
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
		...theme.mixins.toolbar
		// boxShadow: '0 0 0 0',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
	},
	body: {
		// backgroundColor: "#5967ae",
		// height: "100vh",
		// width: "100%",
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: "cover",
	}
});

class MiniDrawer extends React.Component {
	state = {
		tips: false,
		trendings: false,
		score: false,
		star: false,
		stage: false,
		userinfo: false
	}

	componentDidMount = () => {
		let token = localStorage.getItem('token')
		this.setState({
			token
		})
	}
	

	handleOpenRecentTips = () => {
		this.setState({
			tips: true
		})
	}

	handleCloseRecentTips = () => {
		this.setState({
			tips: false
		})
	}

	handleOpenTrendings = () => {
		this.setState({
			trendings: true
		})
	}

	handleCloseTrendings = () => {
		this.setState({
			trendings: false
		})
	}

	handleOpenLeaderBoard = () => {
		this.setState({
			score: true
		})
	}

	handleCloseLeaderBoard = () => {
		this.setState({
			score: false
		})
	}
	handleOpenPopular = () => {
		this.setState({
			star: true
		})
	}

	handleClosePopular = () => {
		this.setState({
			star: false
		})
	}

	handleOpenStage = () => {
		this.setState({
			stage: true
		})
	}

	handleCloseStage = () => {
		this.setState({
			stage: false
		})
	}

	handleOpenUserInfo = () => {
		this.setState({
			userinfo: true
		})
	}

	handleCloseUserInfo = () => {
		this.setState({
			userinfo: false
		})
	}

	displayDrawer = () => {
		const { classes, top, theme, drawer, handleDrawerClose, stopScroll, overlay } = this.props;
		const { token } = this.state;
		return (
			<Drawer
						variant="permanent"
						className={classNames(classes.drawer, {
							[classes.drawerOpen]: drawer,
							[classes.drawerClose]: !drawer
						})}
						classes={{
							paper: classNames({
								[classes.drawerOpen]: drawer,
								[classes.drawerClose]: !drawer
							}),
						}}
						open={drawer}
					>
						<div className={classes.toolbar}>
							<IconButton onClick={() => handleDrawerClose()}>
								{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
							</IconButton>
						</div>
						<List 
							className={classes.body}
							style={
								// this means overlay isn't preset for this page
								!overlay ?
									{ marginTop: 0 }
								:
									// if the overlay is preset and the drawer is open
									!stopScroll && drawer ? 
										{ marginTop: 0 } 
									: 
										// if the overlay is hidden and drawer is open
										stopScroll && drawer ? 
											{ marginTop: 0 } 
										:
											// if overlay is hidden and drawer is not opened
											stopScroll && !drawer ?
												{ marginTop: 0 } 
											:
												{ marginTop: top }
							}
						>
							<Divider />
							<ListItem button onClick={this.handleOpenRecentTips}>
								<ListItemIcon>
									<img src='/static/icons/moneybag.svg' style={{ width: 25, height: 25 }} />
								</ListItemIcon>
								<ListItemText primary={Lang.n} />
							</ListItem>
							<Divider />
							<ListItem button onClick={this.handleOpenTrendings} >
								<ListItemIcon>
									<Trend />
								</ListItemIcon>
								<ListItemText primary={Lang.u1} />
							</ListItem>
							<Divider />
							<ListItem button onClick={this.handleOpenLeaderBoard}>
								<ListItemIcon>
									<Board />
								</ListItemIcon>
								<ListItemText primary={Lang.x2} />
							</ListItem>
							<Divider />
							<ListItem button onClick={this.handleOpenPopular}>
								<ListItemIcon>
									<Star />
								</ListItemIcon>
								<ListItemText primary={Lang.y2} />
							</ListItem>
							{
								token &&
									<React.Fragment>
										<Divider />
										<ListItem button onClick={this.handleOpenStage}>
											<ListItemIcon>
												<SignalLevel />
											</ListItemIcon>
											<ListItemText primary={Lang.b3} />
										</ListItem>
										<Divider />
										<ListItem button onClick={this.handleOpenUserInfo}>
											<ListItemIcon>
												<Ballot />
											</ListItemIcon>
											<ListItemText primary={Lang.c3} />
										</ListItem>
										<Divider />
									</React.Fragment>
							}
						</List>
					</Drawer>
		)
	}

  render() {
    const { classes, showOnLg } = this.props;
		const { tips, trendings, score, star, stage, userinfo } = this.state;
		console.log(this.state)
    return (
      <div className={classes.root}>
        <CssBaseline />
				{
					showOnLg ?
						<Hidden lgUp>
							{this.displayDrawer()}
						</Hidden>
					:
						this.displayDrawer()
				}

        <main className={classes.content}>
          {/* <div className={classes.toolbar} /> */}
          {this.props.children}
        </main>

				{/* open recent tips in a dislog */}
				<Dialog open={tips} handleClose={this.handleCloseRecentTips} >
					<Tipcoin />
				</Dialog>

				{/* open trendings ina dialog */}
				<Dialog open={trendings} handleClose={this.handleCloseTrendings} >
					<Trends />
				</Dialog>

				{ /* handle LeaderBoard */ }
				<Dialog open={score} handleClose={this.handleCloseLeaderBoard} >
					<LeaderBoard />
				</Dialog>

				<Dialog open={star} handleClose={this.handleClosePopular}>
					<Popular />
				</Dialog>

				<Dialog open={stage} handleClose={this.handleCloseStage}>
					<Stage />
				</Dialog>

				<Dialog open={userinfo} handleClose={this.handleCloseUserInfo}>
					<Userinfo />
				</Dialog>
      </div>
    );
  }
}

MiniDrawer.defaultProps = {
	showOnLg: false
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	showOnLg: PropTypes.bool.isRequired,
	top: PropTypes.number.isRequired
};

export default compose(
	withWidth(),
	withStyles(styles, { withTheme: true })
	)
	(MiniDrawer);