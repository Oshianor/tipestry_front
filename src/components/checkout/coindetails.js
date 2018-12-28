import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
		flexGrow: 1,
		textAlign: 'center',
		justify: 'center',
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%",
			marginTop: 300,
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 15%",
			marginTop: 300,
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 25%",
			marginTop: 300,
		},
	},
	rooty: {
		flexGrow: 1,
		textAlign: 'center',
		justify: 'center',
		[theme.breakpoints.up('xs')]: {
			margin: "0px 1%",
		},
		[theme.breakpoints.up('md')]: {
			margin: "0px 15%",
		},
		[theme.breakpoints.up('lg')]: {
			margin: "0px 25%",
		},
	},
	paperRoot: {
		padding: theme.spacing.unit * 2,
		
	},
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
		color: theme.palette.text.secondary,
		display: "flex", alignItems: "center"
	},
	
});

function CoinDetails(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
			<div className={classes.paperRoot}>
				<Typography className={classes.rooty} variant="subtitle2" style={{ fontSize: 12, textAlign: "left", marginTop: -13 }} >Received Tips</Typography>
				<Grid container className={classes.rooty} spacing={24}>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper} >
							<img src="/static/tipcoins/Bitcoin-Icon.svg"
								alt="comments"
								width='60'
								height='60'
								style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								}
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>
							<img src="/static/tipcoins/Ethereum-Icon.svg" alt="comments" width='60' height='60' 
								style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								} 
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>
							<img src="/static/tipcoins/Dogecoin-Icon.svg" alt="comments" width='60' height='60' style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								} 
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>




			<div className={classes.paperRoot}>
				<Typography className={classes.rooty} variant="subtitle2" style={{ fontSize: 12, textAlign: "left", marginTop: -13 }} >Tips Given</Typography>
				<Grid container className={classes.rooty}  spacing={24}>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper} >
							<img src="/static/tipcoins/Bitcoin-Icon.svg"
								alt="comments"
								width='60'
								height='60'
								style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								}
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>
							<img src="/static/tipcoins/Ethereum-Icon.svg" alt="comments" width='60' height='60' 
								style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								} 
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>
							<img src="/static/tipcoins/Dogecoin-Icon.svg" alt="comments" width='60' height='60' style={
									{
										borderRight: "1px solid gray",
										paddingRight: "10%",
									}
								} 
							/>
							<div style={{ flexGrow: 1 }} />
							<Typography variant="button" >0.0000</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>

			<Button variant="contained" color="primary"> Cash Out Tips </Button>

    </div>
  );
}

CoinDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoinDetails);
