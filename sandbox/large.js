import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import withWidth from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import Hidden from '@material-ui/core/Hidden';
import Thumbnails from '../reuseable/thumbnails';
import Grid from '@material-ui/core/Grid';
import Link from "next/link";
import Camera from '@material-ui/icons/CameraAlt';
import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '5%'
  },
  rootUser: {
    flexGrow: 1,
  },
  demo: {
    // width: '100%',
    position: 'relative',
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
  grow: {
    flexGrow: 1,
  },
  rootUser: {
    flexGrow: 1,
    margin: "0px 40px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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
  img: {
    [theme.breakpoints.up('xs')]: {
      width: 150,
      height: 150
    },
    [theme.breakpoints.up('md')]: {
      width: 200,
      height: 200
    }
  }
});

class Large extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  
  displayHome = () => {
    const { hover, hide } = this.state;
    const { classes } = this.props;
    return (
			<Collapse in={!hide} timeout="auto" unmountOnExit>
        <div className={classes.rootUser} >
          <Grid container spacing={16}>
            <Grid item xl={6} sm={6} >
              <img src="/static/homepage/layers.png" className={classes.img}  />
            </Grid>
            <Grid item xl={6} sm={6} style={{ textAlign: 'center' }} >
              <Typography variant="h3" style={{ color: "white", fontWeight: 'bolder' }} >
								Comment's that make a difference.
							</Typography>
							<Typography style={{ color: "white" }}>
								Upload sites, movie links and many more.
								Get the opinions of others, upvotes and tips your favourite comments in crypto currency
							</Typography>
							<Button size={"large"} >Get Started</Button>
            </Grid>
          </Grid>
        </div>
			</Collapse>
    )
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

	displayHeight = () => {
		const { open, hide } = this.state;
		const { router } = this.props;

		if (open) {
			return "100vh";
		} else if (!hide) {
			if (router.pathname == "/profile" || router.pathname == "/checkout") {
				return 200;
			} else if(router.pathname == "/") {
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
    const {
      classes,
      handleOpen,
      router
    } = this.props;
    return (
      <Hidden only={['xs', 'sm']}>
        <AppBar position = "fixed"
        style = {
          {
            backgroundImage: "url('/static/homepage/headerBackground.svg')",
            backgroundColor: "transparent",
            width: "100%",
            height: this.displayHeight(),
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            boxShadow: "0 0 0 0"
          }
          }>
          <Toolbar >
            <Link href="/" >
							<Typography style={{ cursor: 'pointer' }} variant="h6" color="inherit" noWrap>
								Tipestry
							</Typography>
						</Link>
            <div className={classes.grow} />
            <Link href="/about">
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/faq">
              <Button color="inherit">Faq</Button>
            </Link>
            <Link href="/login" prefetch>
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="/register" prefetch >
              <Button color="inherit">
                Register
              </Button>
            </Link>
            <Button variant="outlined" size="small" onClick={() => handleOpen()} color="secondary" className={classes.button}>
              Upload Url
            </Button>
          </Toolbar>
          {this.displayBody()}
        </AppBar>
      </Hidden>
    );
  }
}

Large.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
};

export default compose(
	withStyles(styles),
	withWidth(),
)(Large);
