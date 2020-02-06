import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Camera from '@material-ui/icons/CameraAlt';
import Create from '@material-ui/icons/Create';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { Lang } from "../../../lang"
import Collapse from '@material-ui/core/Collapse';
import {
	withRouter
} from 'next/router';
import UploadUrl from "../uploadurl/uploadurl";
import Thumbnails from '../reuseable/thumbnails';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";
import Notification from './notification';
import Logout from '@material-ui/icons/ExitToAppRounded';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';
import { config } from "../../../config";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProfile, getUser } from "../../actions/data";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import VerificationWarning from './components/verificationWarning';
import Searchpost from './searchpost';
import Uploadsite from '../uploadurl/uploadsite';



const drawerWidth = 240;


const styles = theme => ({
  root: {
		width: '100%',
		// marginTop: 30
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
		// width: 200,
		height: 60,
		[theme.breakpoints.down('sm')]: {
			// width: 100,
			height: 40,
		},
	},
  grow: {
		flexGrow: 1
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
			fontSize: 20,
			wordSpacing: 2,
			letterSpacing: 3
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: 20,
			wordSpacing: 2,
			letterSpacing: 3
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
	but: {
		maxHeight: 40,
		marginTop: 45,
		[theme.breakpoints.down('sm')]: {
			fontSize: 11,
			marginTop: 30
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
  appBarShift: {
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
	},
	menuButton: {
    marginLeft: 12,
		marginRight: 36,
		display: 'none',
		[theme.breakpoints.between('xs', 'md')]: {
			display: 'block',
		},
  },
  hide: {
    display: 'none',
	},
	hideonxs: {
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	}
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
		localStorage.removeItem("token");
		sessionStorage.removeItem('user');
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


	SignUp = () => {
		const { router } = this.props;
		router.push("/register");
	}
	
	
  displayHome = () => {
    const { hide, token } = this.state;
    const { classes, data } = this.props;
    return (
			<Collapse in={!hide} timeout="auto"  unmountOnExit>
        <div className={classes.rootGrow} >
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} >
							{/* check if user is logged in and that is profile image  exist  */}
							{
								!token ?
									<img src="/static/homepage/layers.png" className={classes.img} />
								:
									data.user.profileimage === "" || !data.user.profileimage ?
										<img src="/static/homepage/layers.png" className={classes.img} />
									:
										<Avatar
											className={classes.img}
											src = {
												config.profileimage + data.user.profileimage
											}
										/>
							}
            </Grid>
						<Grid item className={classes.hideonxs} sm={6} style={{ textAlign: 'center' }}>
							<Typography variant="h4" className={classes.hed} >
								{Lang.a}
							</Typography>
							<Typography  variant='display4' className={classes.hedbody}>
								{Lang.b}
							</Typography>
							{
								// if user is logged in then don't show
								!token &&
									<Button onClick={this.SignUp} size="medium" style={{ marginTop: 5 }} variant="outlined" >
										{Lang.c}
										{/* get started */}
									</Button>
							}
							<Searchpost />
						</Grid>
          </Grid>
        </div>
			</Collapse>
    )
  }

	// upload user profile image
	async upload(e) {
		const { token } = this.state;
		const { getProfile } = this.props;
		e.preventDefault();
		let formData = new FormData();
		// console.log(this.imgUp.files);
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
			// console.log('upload', upload);
			
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
		const { data, classes } = this.props;
		return (
				<Collapse in={!hide} timeout="auto" unmountOnExit>
					<Grid container spacing={24} style={{ position: 'absolute', width: '100%', marginTop: 35, display: 'flex', justifyContent: 'space-between' }} >
						<Grid item  className={classes.left} >
							{
								token &&
									data.profile._id === data.user._id ?
										<Link href={'/tip/report/' + data.user._id} >
											<a>
												<Typography style={{ color: "white", textDecoration: 'underline' }} className={classes.but} >
													{/* <img src="/static/icons/moneybag.svg"  width='20' height="20" /> */}
													{Lang.d}
													{/* wallet details */}
												</Typography>
											</a>
										</Link>
									:
										<Typography style={{ color: "black" }} className={classes.but} >
											{
												"@" + data.profile.username + "   " + moment(data.profile.created_at).locale(Lang.locale).format('YYYY')
											}
										</Typography>
							}
						</Grid>

						{/* <div style={{ flexGrow: 1 }} /> */}

						{/* <Grid item style={{ marginLeft: '4.5%' }} > */}
						<Grid item style={{ marginLeft: '0.5%' }} >
							<div style={{ marginTop: 15 }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} >
								<Thumbnails 
									size="xl" 
									borderWidth={4} 
									borderColor="white" 
									color="purple" 
									name={typeof data.profile.username !== 'undefined' ? data.profile.username : ''}
									url = {
										data.profile.profileimage === "" || !data.profile.profileimage ?
											null 
										:
											config.profileimage + data.profile.profileimage
									}
									
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
						</Grid>
						
						{/* <div style={{ flexGrow: 1 }} /> */}
						
						<Grid item className={classes.right} >
							{
								token &&
									data.profile._id === data.user._id ?
										<Link href={'/edit/' + data.user._id + "/@" + data.user.username} >
											<a style={{ textDecoration: 'none' }} >
												<Typography style={{ color: "white", textDecoration: 'underline' }} className={classes.but} >
													<Create style={{ fontSize: 17 }} />
													{Lang.e} 
													{/* edit profile */}
												</Typography>
											</a>
										</Link>
									:
									this.following()
							}
						</Grid>

					</Grid>
				</Collapse>
		)
	}

	// handle following user or unfollowing
	handleFollow = async () => {
		const { data, getUser } = this.props;
		const { token } = this.state;
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ user_id: data.profile.id }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/users/follow'
      }

      let follow = await axios(options);
      // console.log("ADDING FOLLOWING", follow);
      if (follow.data.error === false) {
				data.user.following = follow.data.content.following;
        getUser(data.user)
      }
      
    }
  }


	following = () => {
		const { data, classes } = this.props;
		if (typeof data.user.following !== "undefined") {
			if (data.user.following.indexOf(data.profile.id) === -1) {
				return (
					<Button 
						size='small'
						variant="outlined" 
						onClick={this.handleFollow}
						className={classes.but} 
						// style={{ color: "white", borderColor: "white", padding: "0px 6px", fontSize: 10 }} 
					>
						<Add style={{ fontSize: 17 }} />
						{Lang.f}
						{/* Follow */}
					</Button>
				)
			} 
			return (
				<Button 
					size='small'
					variant='contained' 
					onClick={this.handleFollow}
					className={classes.but} 
					color='primary'
					// style={{ padding: "0px 6px", fontSize: 10 }} 
				>
					<Remove style={{ fontSize: 17 }} />
					{Lang.g}
					{/* Following */}
				</Button>
			)
		}
	}


	displayBody = () => {
		const { hide } = this.state;
		const { router } = this.props;
		// console.log('router', router);
		
		// if (router.pathname == "/") {
		// 	return this.displayHome()
		// } else 
		if (router.pathname == "/profile" || router.pathname == "/tipreport" || router.pathname == "/invite") {
			return this.displayProfile();
		}
	}
	

	displayDesktop = () => {
		const { anchorEl, token } = this.state;
    const { classes, data } = this.props;
    const isMenuOpen = Boolean(anchorEl);
		return (
      <div className={classes.sectionDesktop}>
        {token ? (
          <React.Fragment>
            {data.user.is_admin === 1 && (
              <Link href={"/controlpanel/" + token}>
                <Button
									variant="text"
									style={{ color: "white" }}
                  size="small"
                  color="primary"
                >
                  Admin
                </Button>
              </Link>
            )}

            <Button
              onClick={this.handleClickOpen}
              variant="outlined"
              style={{ color: "white", fontSize: 14, borderColor: "white" }}
              size="small"
              color="secondary"
              className={classes.button}
            >
              {Lang.h}
              {/* Enter Url */}
            </Button>
            <Tooltip title="Log out" aria-label="logout">
              <IconButton onClick={this.handleLogout} color="inherit">
                <Logout />
              </IconButton>
            </Tooltip>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://medium.com/@tipestry/introducing-the-tipestry-internet-meta-layer-comment-vote-and-earn-cryptocurrency-anywhere-7b94abb5918b"
            >
              <Button color="inherit" style={{ color: "white" }}>
                {Lang.d3}
                {/* Abount */}
              </Button>
            </a>
            <Link href="/login" prefetch>
              <Button color="inherit">
                {Lang.j}
                {/* Login */}
              </Button>
            </Link>
            <Link href="/register" prefetch>
              <Button color="inherit">
                {Lang.k}
                {/* Register */}
              </Button>
            </Link>
          </React.Fragment>
        )}
      </div>
    );
	}


	displayHeight = () => {
		const { hide } = this.state;
		const { router } = this.props;

		if (!hide) {
			if (router.pathname == "/profile" || router.pathname == "/tipreport" || router.pathname == "/invite") {
				return 200;
			}
			//  else if (router.pathname == "/") {
			// 	return 300;
			// }
		}
		return "";
	}


  render() {
    const { anchorEl, mobileMoreAnchorEl, uploadStatus, token } = this.state;
    const { classes, data, drawer, handleDrawerOpen } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


		// onClick={this.handleProfileMenuOpen}
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {!token ? (
          <React.Fragment>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://medium.com/@tipestry/introducing-the-tipestry-internet-meta-layer-comment-vote-and-earn-cryptocurrency-anywhere-7b94abb5918b"
            >
              <MenuItem>{Lang.d3}</MenuItem>
            </a>
            <Link href="/login" prefetch>
              <MenuItem>{Lang.j}</MenuItem>
            </Link>
            <Link href="/register" prefetch>
              <MenuItem>{Lang.k}</MenuItem>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <MenuItem onClick={this.handleLogout}>
              <IconButton color="inherit">
                <Logout />
              </IconButton>
              <p>
                {Lang.l}
                {/* logout */}
              </p>
            </MenuItem>
          </React.Fragment>
        )}
        {/* <MenuItem onClick={this.handleClickOpen}>
          <Button
            style={{ margin: "1% 1%" }}
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.button}
          >
            {Lang.h}
            Enter Url
          </Button>
        </MenuItem> */}
        {/* <MenuItem onClick={this.handleClickOpen}> */}
          <Searchpost />
        {/* </MenuItem> */}
      </Menu>
    );

		// console.log("this.statedata", data);
		const back = {
      height: this.displayHeight()
    };

    return (
      <>
        {typeof data.user.deactivated !== "undefined" &&
          data.user.deactivated && <VerificationWarning />}
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            style={back}
            className={classNames(classes.appBar, {
              [classes.appBarShift]: drawer
            })}
          >
            <Toolbar className={classes.rootGrow} disableGutters={!drawer}>
              {/* tigger for drawer */}
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => handleDrawerOpen()}
                className={classNames(classes.menuButton, {
                  [classes.hide]: drawer
                })}
              >
                <MenuIcon />
              </IconButton>

              <Link href="/" prefetch>
                <a>
                  <Typography
                    variant="h2"
                    gutterBottom
                    style={{ margin: "0px 3%" }}
                  >
                    <img
                      src="/static/tipcoins/Tip-1.png"
                      // src="/static/login/newlogo.png"
                      className={classes.logo}
                    />
                  </Typography>
                </a>
              </Link>

              <div className={classes.grow} />
              {token && (
                <React.Fragment>
                  <Notification />
                  <Link
                    href={
                      "/profile/" + data.user._id + "/" + data.user.username
                    }
                  >
                    <a>
                      <Thumbnails
                        size="xs"
                        color="black"
                        name={
                          typeof data.user !== "undefined" &&
                          typeof data.user.username !== "undefined"
                            ? data.user.username
                            : "o"
                        }
                        url={
                          data.user.profileimage === "" ||
                          !data.user.profileimage
                            ? null
                            : config.profileimage + data.user.profileimage
                        }
                      />
                    </a>
                  </Link>
                  <Link
                    href={
                      "/profile/" + data.user._id + "/" + data.user.username
                    }
                  >
                    <a style={{ textDecoration: "none" }}>
                      <Typography
                        style={{
                          color: "white",
                          textTransform: "capitalize"
                        }}
                      >
                        &nbsp;
                        {Lang.m},{/* Hi,  */}
                        &nbsp;
                        {data.user.username}
                      </Typography>
                    </a>
                  </Link>
                  &nbsp; &nbsp;
                </React.Fragment>
              )}
              {this.displayDesktop()}
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
              </div>
              {/* <Uploadsite /> */}
            </Toolbar>
            {/* display body for hide when scroll **bad english funck you */}
            {this.displayBody()}
          </AppBar>

          {/* render mobile menu */}
          {renderMobileMenu}

          {/* upload url modal display */}
          <UploadUrl
            uploadStatus={uploadStatus}
            handleClose={this.handleClose}
          />
        </div>
      </>
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
		getProfile: getProfile,
		getUser: getUser
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Header)));
