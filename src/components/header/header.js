import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Camera from '@material-ui/icons/CameraAlt';
import Collapse from '@material-ui/core/Collapse';
import {
	withRouter
} from 'next/router';
import UploadUrl from "../uploadurl/uploadurl";
import Thumbnails from '../reuseable/thumbnails';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";
import Notification from './notification';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logout from '@material-ui/icons/ExitToAppRounded';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import { config } from "../../../config"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProfile } from "../../actions/data";


const styles = theme => ({
  root: {
		width: '100%',
	},
	rootGrow: {
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%"
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 5%"
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 10%"
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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hed: {
  	color: "white",
		fontWeight: 'bolder',
		[theme.breakpoints.up('xs')]: {
			fontSize: 28
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 30
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 30
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: 30
		},
	},
	hedbody: {
		color: "white",
		[theme.breakpoints.up('xs')]: {
			fontSize: 15
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: 25
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: 30
		},
	},
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.imgUpload = element => {
			this.imgUp = element;
		}

		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			uploadStatus: false,
			hide: false,
			hover: false,
			token: null,
			img: null,
			previewImg: null
		}
	}

	handleLogout = () => {
		const { router } = this.props;
		localStorage.removeItem('token');
		this.setState({
			token: null
		})
		router.push('/login');
	}
	
	handleClickOpen = () => {
		this.setState({
			uploadStatus: true
		});
		this.handleMobileMenuClose();
	};

	handleClose = () => {
		this.setState({
			uploadStatus: false
		});
	};

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
	};


	componentDidMount() {
		let token = localStorage.getItem('token');
		this.setState({
			token
		})
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
    const { hide } = this.state;
    const { classes } = this.props;
    return (
			<Collapse in={!hide} timeout="auto"  unmountOnExit>
        <div className={classes.rootGrow} >
          <Grid container spacing={24}>
            <Grid item xs={6} sm={6} >
              <img src="/static/homepage/layers.png" className={classes.img} />
            </Grid>
						<Grid item xs={6} sm={6} style={{ textAlign: 'center' }}>
							<Typography variant="h4" className={classes.hed} >
								Comment's that make a difference.
							</Typography>
							<Typography  variant='display4' className={classes.hedbody}>
								Upload sites, movie links and many more.
								Get the opinions of others, upvotes and tips your favourite comments in crypto currency
							</Typography>
							<Button size="medium" style={{ marginTop: 5 }} variant="outlined" >Get Started</Button>
						</Grid>
          </Grid>
        </div>
			</Collapse>
    )
  }

	async upload(e) {
		const { token } = this.state;
		const { getProfile } = this.props;
		e.preventDefault();
		let formData = new FormData();
		console.log(this.imgUp.files);
		formData.append("img", e.target.files[0]);
		if (token) {
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'multipart/form-data',
					'x-auth-token': token
				},
				data: formData,
				url: config.api + '/users/upload'
			}

			let upload = await axios(options);
			console.log('upload', upload);
			
			if (upload.status === 200) {
				getProfile(upload.data);
			}
		}
	}

	hoverOn = () => {
		this.setState({ hover: true });
	}
	
	hoverOff = () => { 
		this.setState({ hover: false });    
	}

	displayProfile = () => {
		const { hover, hide, token } = this.state;
		const { data } = this.props;
		return (
			<Collapse in={!hide} timeout="auto" unmountOnExit>
				<Grid container spacing={24} style={{ position: 'absolute', width: '100%', marginTop: 35 }} >
					<Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
					<div style={{ flexGrow: 1 }} />
					<div style={{ marginTop: 30 }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} >
						<Thumbnails 
							size="xl" 
							borderWidth={4} 
							borderColor="white" 
							name="matt" 
							color="purple" 
							// url={config.url + data.profile.profileimage}
							url={'data:image/png;base64,'+ data.profile.profileimage}
						/>
						<IconButton
							onClick = { (e) => { this.imgUp.click() } }
							aria-label="Delete" 
							style={{ marginTop: -55, marginLeft: 75, position: 'absolute' }} >
							{ token && data.profile._id === data.user._id &&
								hover && <Camera style={{ fontSize: 40, color: 'dimgray' }} /> }
						</IconButton>
						<input
							ref={this.imgUpload}
							type='file'
							accept="image/*"
							style={{ display: "none" }}
							onChange={this.upload.bind(this)}
						/>
					</div>
					<div style={{ flexGrow: 1 }} />
					<Button style={{ maxHeight: 40, marginTop: 60 }} >Edit Profile</Button>
				</Grid>
			</Collapse>
		)
	}

	displayBody = () => {
		const { hide } = this.state;
		const { router } = this.props;

		if (router.pathname == "/") {
			return this.displayHome()
		} else if (router.pathname == "/profile" || router.pathname == "/checkout") {
			return this.displayProfile();
		}
	}
	

	displayDesktop = () => {
		const { anchorEl, token } = this.state;
    const { classes, data } = this.props;
    const isMenuOpen = Boolean(anchorEl);
		return (
			<div className={classes.sectionDesktop}>
				<Link href="/about">
					<Button color="inherit">About</Button>
				</Link>
				<Link href="/faq">
					<Button color="inherit">Faq</Button>
				</Link>
				{
					!token &&
						<React.Fragment>
							<Link href="/login" prefetch>
								<Button color="inherit">Login</Button>
							</Link>
							<Link href="/register" prefetch >
								<Button color="inherit">
									Register
								</Button>
							</Link>
						</React.Fragment>
				}
				
				<Button 
					onClick={this.handleClickOpen} 
					variant="outlined" 
					style={{ color: 'white' }} size="small" color="secondary" className={classes.button}>
					Upload Url
				</Button>
			</div>
		)
	}

	displayHeight = () => {
		const { hide } = this.state;
		const { router } = this.props;

		if (!hide) {
			if (router.pathname == "/profile" || router.pathname == "/checkout") {
				return 200;
			} else if (router.pathname == "/") {
				return 300;
			}
		}
		return "";
	}

  render() {
    const { anchorEl, mobileMoreAnchorEl, uploadStatus, token } = this.state;
    const { classes, data } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
				<MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Invite</p>
        </MenuItem>
				<MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Tip Report</p>
        </MenuItem>
				<MenuItem onClick={this.handleClickOpen}>
          <Button style={{ margin: "1% 15%" }} variant="outlined" size="small" color="secondary" className={classes.button}>
						Upload Url
					</Button>
        </MenuItem>
      </Menu>
    );

		// console.log(this.state);
		

    return (
      <div className={classes.root}>
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
					}
				>
          <Toolbar className={classes.rootGrow}>
						<Link href="/" >
							<a style={{ color: 'white', textDecoration: 'none' }} >
								<Typography className={classes.title} variant="h6" color="inherit" noWrap>
									Tipestry
								</Typography>
							</a>
						</Link>
            
            <div className={classes.grow} />
						{this.displayDesktop()}
						{
							token &&
								<React.Fragment>
									<Notification />
									<Link href={"/profile/" + data.user._id + "/" + data.user.username} >
										<a>
											<Thumbnails size="xs" color="black"  name={data.user.username} />
										</a>
									</Link>
									<Link href={"/profile/" + data.user._id + "/" + data.user.username} >
										<a style={{ color: 'white', textDecoration: 'none' }}>
											<p>&nbsp;Hi, {data.user.username}</p>
										</a>
									</Link>
									
									<Tooltip title="Log out" aria-label="logout">
										<IconButton
											onClick={this.handleLogout}
											color="inherit"
										>
											<Logout />
										</IconButton>
									</Tooltip>
								</React.Fragment>
						}
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
								<MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
					{/* display body for hide when scroll **bad english funck you */}
					{this.displayBody()}
        </AppBar>

				{/* render mobile menu */}
				{renderMobileMenu}

				{/* upload url modal display */}
				<UploadUrl uploadStatus={uploadStatus} handleClose={this.handleClose} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withRouter(withStyles(styles)(Header));
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getProfile: getProfile
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));
