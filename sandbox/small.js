import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	withStyles
} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Notifications from '@material-ui/icons/Notifications';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Typography from '@material-ui/core/Typography';
import Thumbnails from '../reuseable/thumbnails';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Camera from '@material-ui/icons/CameraAlt';
import Collapse from '@material-ui/core/Collapse';
import Link from "next/link";

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: 40,
		// maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	grow: {
		flexGrow: 1
	},
	container: {
		animation: '1s appear forwards',
		animationDelay: 0.5
	},
	menuItem:{
		fontFamily:`'Open Sans', sans-serif`,
		fontSize: 15,
		padding: '10px 0',
		margin: '0 5%',
		cursor: 'pointer',
		color: 'black',
		transition: 'color 0.2s ease-in-out',
		animation: '0.5s slideIn forwards',
		animationDelay: 0.5,

	},
	line: {
		width: '90%',
		height: '1px',
		background: 'gray',
		margin: '0 auto',
		animation: '0.5s shrink forwards',
		animationDelay: 0.5,
	},
	rootGrow: {
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%"
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 10%"
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 20%"
		},
	},
	img: {
		[theme.breakpoints.up('xs')]: {
			width: 150,
			height: 150
		},
		[theme.breakpoints.up('md')]: {
			width: 200,
			height: 200
		},
		[theme.breakpoints.up('lg')]: {
			width: 300,
			height: 300
		},
	}
});


class Small extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			hide: false,
			hover: false
		}
		
		this.imgUpload = element => {
			this.imgUp = element;
		}
	}

	componentDidMount() {
		addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount() {
		removeEventListener('scroll', this.trackScrolling);
	}

	trackScrolling = (e) => {
		if(window.scrollY > 200) {
			this.setState({
				hide: true
			})
			return false
		}
		this.setState({
			hide: false
		})
		return false;
	}

	  
  displayHome = () => {
    const { hover, hide } = this.state;
    const { classes } = this.props;
    return (
			<Collapse in={!hide} timeout="auto" unmountOnExit>
        <div className={classes.rootGrow} >
          <Grid container spacing={24}>
            <Grid item xs={6} sm={6} >
              <img src="/static/homepage/layers.png" className={classes.img} />
            </Grid>
						<Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
							<Typography variant="h5" style={{ color: "white", textAlign: 'center', fontWeight: 'bolder', fontSize: '100%' }} >
								Comment's that make a difference.
							</Typography>
							<Typography style={{ color: "white", fontSize: "80%"  }}>
								Upload sites, movie links and many more.
								Get the opinions of others, upvotes and tips your favourite comments in crypto currency
							</Typography>
							<Button size="medium" >Get Started</Button>
						</Grid>
          </Grid>
        </div>
			</Collapse>
    )
  }
  

	handleMobileMenuOpen = () => {
		this.setState({
			open: !this.state.open
		})
	}

	upload = (e) => {
		e.preventDefault();
		let self = this;
		var reader = new FileReader();

		if (e.target.files[0] !== undefined) {
			this.setState({
				img: this.imgUp.files[0]
			})

			reader.onload = function (e) {
				self.setState({
					previewImg: e.target.result
				});
			}
			reader.readAsDataURL(e.target.files[0]);
		}
		console.log(this.imgUp.files[0])
	}


	hoverOn = () => {
		this.setState({ hover: true });
	}
	
	hoverOff = () => { 
		this.setState({ hover: false });    
	}

	displayProfile = () => {
		const { hover, hide } = this.state;
		return (
			<Collapse in={!hide} timeout="auto" unmountOnExit>
				<Grid container spacing={24} style={{ position: 'absolute', width: '100%', marginTop: 35 }} >
					<Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
					<div style={{ flexGrow: 1 }} />
					<div style={{ marginTop: 30 }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} >
						<Thumbnails size="xl" borderWidth={4} borderColor="white" name="matt" color="purple" />
						<IconButton
							onClick = {
								(e) => {
									this.imgUp.click()
								}
							}
							aria-label="Delete" 
							style={{ marginTop: -55, marginLeft: 75, position: 'absolute' }} >
							{
								hover &&
									<Camera style={
										{
											fontSize: 40,
											color: 'dimgray'
										}
									}
									/>
							}
						</IconButton>
						<input
							ref={this.imgUpload}
							type='file'
							accept="image/*"
							style={{ display: "none" }}
							onChange={this.upload}
						/>
					</div>
					<div style={{ flexGrow: 1 }} />
					<Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
				</Grid>
			</Collapse>
		)
	}

	displayDrop = () => {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Grid container justify="center">
					<Thumbnails size="xl" name="Matt" />
				</Grid>
				<div className={classes.container}>
					<div className={classes.menuItem}>
						Login
					</div>
					<div className={classes.line}/>
				</div>
				<div className={classes.container}>
					<div className={classes.menuItem}>
						Login
					</div>
					<div className={classes.line}/>
				</div>
				<div className={classes.container}>
					<div className={classes.menuItem}>
						Login
					</div>
					<div className={classes.line}/>
				</div>
				<div className={classes.container}>
					<div className={classes.menuItem}>
						Login
					</div>
					<div className={classes.line}/>
				</div>
			</React.Fragment>
		)
	}

	displayHeight = () => {
		const { open, hide } = this.state;
		const { router } = this.props;

		if (open) {
			return "100vh";
		} else if (!hide) {
			if (router.pathname == "/profile" || router.pathname == "/checkout") {
				return 200;
			} else if (router.pathname == "/") {
				return 300;
			}
		}
		return "";
	}

	displayBody = () => {
		const { open, hide } = this.state;
		const { router } = this.props;

		if (open) {
			return this.displayDrop();
		} else {
			if (router.pathname == "/") {
				return this.displayHome()
			} else if (router.pathname == "/profile" || router.pathname == "/checkout") {
				return this.displayProfile();
			}
		}
	}

	render() {
		// console.log(this.state);
		
		const { open, hide } = this.state;
		const { classes, router } = this.props;
		return (
			<Hidden only={['md','lg', 'xl']}>
				<AppBar position="fixed"
					style={
						{
							backgroundImage: "url('/static/homepage/headerBackground.svg')",
							backgroundColor: "transparent",
							width: "100%",
							// only show the profile image and the upload link if logged in or if the route is profile or edit profile
							height: this.displayHeight(),
							backgroundRepeat: 'no-repeat',
							backgroundSize: "cover",
							boxShadow: '0 0 0 0'
						}
					}>
					<Toolbar>
						<Link href="/" >
							<Typography style={{ cursor: 'pointer' }} variant="h6" color="inherit" noWrap>
								Tipestry
							</Typography>
						</Link>
						<div className={classes.grow} />
						<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
							<Notifications />
						</IconButton>
						<Thumbnails size="xs" name="Matt" color="purple" />
						<p>&nbsp;Hi, matt</p>
						<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
							{open ? <Clear /> : <MenuIcon />}
						</IconButton>
					</Toolbar>
					{this.displayBody()}
				</AppBar>
			</Hidden>
		);
	}
}

Small.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
};

export default compose(
	withStyles(styles),
	withWidth()
)(Small);

// {
// 	open ?
// 		this.displayDrop() :

// 		<
// 		React.Fragment > {
// 			router.pathname == "/" &&
// 			this.displayHome()
// 		} { /* // only show the profile image and the upload link if logged in or if the route is profile or edit profile */ } {
// 			router.pathname == "/profile" &&
// 				this.displayProfile()
// 		} <
// 		/React.Fragment>

// }