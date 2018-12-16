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
	}
});


class Small extends Component {
	state = {
		open: false
	}

	handleMobileMenuOpen = () => {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		const { open } = this.state;
		const { classes } = this.props;
		return (
			<Hidden only={['md','lg', 'xl']}>
				<AppBar position="fixed"
					style = {
						{
							backgroundImage: "url('/static/homepage/headerBackground.svg')",
							backgroundColor: "transparent",
							width: "100%",
							height: open ? "100vh" : 200,
							backgroundRepeat: 'no-repeat',
							backgroundSize: "cover",
							boxShadow: '0 0 0 0'
						}
					}>
					<Toolbar>
						<Typography  variant="h6" color="inherit" noWrap>
							Tipestry
						</Typography>
						<div className={classes.grow} />
						<Thumbnails size="xs" name="Matt" />
						<p>&nbsp;Hi, matt</p>
						<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
							<Notifications />
						</IconButton>
						<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
							{open ? <Clear /> : <MenuIcon />}
						</IconButton>
					</Toolbar>
					{
						open ? 
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
						:
							<Grid container spacing={24} style={{ position: 'absolute', width: '100%', marginTop: 95 }} >
								<Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
								<div style={{ flexGrow: 1 }} />
								<div style={{ marginTop: 30 }}>
									<Thumbnails size="xl" borderWidth={4} borderColor="white" name="matt" />
								</div>
								<div style={{ flexGrow: 1 }} />
								<Button style={{ maxHeight: 40, marginTop: 60 }} >Upload Url</Button>
							</Grid>
					}
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
	withWidth(),
)(Small);

