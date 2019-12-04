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
import SiteInfo from '../siteinfo/siteinfo';

const drawerWidth = 240;

const styles = theme => ({
 root: {
 		display: 'flex',
 	},
 	appBar: {
 		transition: theme.transitions.create(['margin', 'width'], {
 			easing: theme.transitions.easing.sharp,
 			duration: theme.transitions.duration.leavingScreen,
 		}),
 	},
 	appBarShift: {
 		// width: `calc(100% - ${drawerWidth}px)`,
 		marginLeft: drawerWidth,
 		transition: theme.transitions.create(['margin', 'width'], {
 			easing: theme.transitions.easing.easeOut,
 			duration: theme.transitions.duration.enteringScreen,
 		}),
 	},
 	menuButton: {
 		marginLeft: 12,
 		marginRight: 20,
 	},
 	hide: {
 		display: 'none',
 	},
 	drawer: {
 		// width: drawerWidth,
 		flexShrink: 0,
 	},
 	drawerPaper: {
 		width: drawerWidth,
 	},
 	drawerHeader: {
 		display: 'flex',
 		alignItems: 'center',
 		padding: '0 8px',
 		...theme.mixins.toolbar,
 		justifyContent: 'flex-end',
 	},
 	content: {
 		flexGrow: 1,
 		// padding: theme.spacing.unit * 3,
 		transition: theme.transitions.create('margin', {
 			easing: theme.transitions.easing.sharp,
 			duration: theme.transitions.duration.leavingScreen,
 		}),
 		// marginLeft: -drawerWidth,
 	},
 	contentShift: {
 		transition: theme.transitions.create('margin', {
 			easing: theme.transitions.easing.easeOut,
 			duration: theme.transitions.duration.enteringScreen,
 		}),
 		// marginLeft: 0,
 	},
});

class MiniDrawer extends React.Component {
	state = {
		open: null,
		token: null
	}

	componentDidMount = () => {
		let token = localStorage.getItem('token')
		this.setState({
			token
		});


	}
	

	handleOpen = name => () => {
		this.setState({
			open: name
		})
	}

	handleClose = () => {
		this.setState({
			open: null
		})
	}

	displayDrawer = () => {
		const { classes, top, theme, drawer, handleDrawerClose, stopScroll, overlay } = this.props;
		const { token } = this.state;
		return (
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				classes={{
					paper: classes.drawerPaper,
				}}
				open={drawer}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={() => handleDrawerClose()}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<List className={classes.body}>
					<Divider />
					<ListItem button onClick={this.handleOpen('tips')}>
						<ListItemIcon>
							<img src='/static/icons/moneybag.svg' style={{ width: 25, height: 25 }} />
						</ListItemIcon>
						<ListItemText primary={Lang.n} />
					</ListItem>
					<Divider />
					{/* <ListItem button onClick={this.handleOpen('trendings')} >
						<ListItemIcon>
							<Trend />
						</ListItemIcon>
						<ListItemText primary={Lang.u1} />
					</ListItem> */}
					<Divider />
					<ListItem button onClick={this.handleOpen('score')}>
						<ListItemIcon>
							<Board />
						</ListItemIcon>
						<ListItemText primary={Lang.x2} />
					</ListItem>
					<Divider />
					{/* <ListItem button onClick={this.handleOpen('star')}>
						<ListItemIcon>
							<Star />
						</ListItemIcon>
						<ListItemText primary={Lang.y2} />
					</ListItem> */}
					{
						token &&
							<React.Fragment>
								<Divider />
								<ListItem button onClick={this.handleOpen('stage')}>
									<ListItemIcon>
										<SignalLevel />
									</ListItemIcon>
									<ListItemText primary={Lang.b3} />
								</ListItem>
								<Divider />
								<ListItem button onClick={this.handleOpen('userinfo')}>
									<ListItemIcon>
										<Ballot />
									</ListItemIcon>
									<ListItemText primary={Lang.c3} />
								</ListItem>
								<Divider />
							</React.Fragment>
					}
					<SiteInfo />
				</List>
			</Drawer>
		)
	}

  render() {
    const { classes, showOnLg, drawer } = this.props;
		const { open } = this.state;
		// console.log(this.state)
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

        <main 
					className={classNames(classes.content, {
            [classes.contentShift]: drawer,
          })}
				>
					{/* <div className={classes.toolbar} /> */}
          {this.props.children}
        </main>

				{/* open recent tips in a dislog */}
				<Dialog open={open === "tips"} handleClose={this.handleClose} >
					<Tipcoin />
				</Dialog>

				{/* open trendings ina dialog */}
				<Dialog open={open === "trendings"} handleClose={this.handleClose} >
					<Trends modal={true} />
				</Dialog>

				{ /* handle LeaderBoard */ }
				<Dialog open={open === "score"} handleClose={this.handleClose} >
					<LeaderBoard />
				</Dialog>

				<Dialog open={open === "star"} handleClose={this.handleClose}>
					<Popular  modal={true} />
				</Dialog>

				{/* <Dialog open={open === "stage"} handleClose={this.handleClose}>
					<Stage />
				</Dialog> */}

				{/* <Dialog open={open === "userinfo"} handleClose={this.handleClose}>
					<Userinfo />
				</Dialog> */}
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