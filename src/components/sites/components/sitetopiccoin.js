import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
		display: 'inline-flex',
    // borderTop: '.5px solid gray'
  },
  num: {
    fontSize: 15,
    fontWeight: '500',
    padding: 0,
    color: "#403d3d",
    marginLeft: "-7px",
    [theme.breakpoints.up('md')]: {
      marginLeft: "-18px",
    },
	},
	img: {
		width: 30,
		height: 30,
		margin: 3,
		marginLeft: "1%"
	},
	num: {
		fontSize: 12,
		marginLeft: -3
	},
  iconspacing: {
    [theme.breakpoints.only('xs')]: {
      margin: '0 -3px',
    },
    [theme.breakpoints.only('sm')]: {
      margin: '0 4px',
    },
    [theme.breakpoints.between('md', 'xl')]: {
      margin: '0 10px',
    },
  }
});

class SiteTopicCoin extends React.Component {
	state = {
		btc: false,
		doge: false,
		eth: false,
		tipc: false,
		tip: false, 
		xth: false
	}

	componentDidMount() {
		const { gift } = this.props;
		if (typeof gift[0] !== "undefined") {
			gift.map((gif) => {
				if (gif.currency === 'btc') {
					this.setState({
						btc: true
					})
				}
				if (gif.currency === 'doge') {
					this.setState({
						doge: true
					})
				}
				if (gif.currency === 'ethcoin') {
					this.setState({
						eth: true
					})
				}
				if (gif.currency === 'ethtipc') {
					this.setState({
						tipc: true
					})
				}
				if (gif.currency === 'ethtipcoin') {
					this.setState({
						tip: true
					})
				}
				if (gif.currency === 'ethxrtcoin') {
					this.setState({
						xth: true
					})
				}
			})
		}
	}

  render() {
		const { classes, gift } = this.props;
		const { btc, doge, eth, tipc, tip, xth } = this.state;
    if (typeof gift[0] !== "undefined") {
			return (
				<span className={classes.actions} >
					{
						btc &&
						<React.Fragment>
							<img src="/static/tipcoins/bit.svg" className={classes.img} />
						</React.Fragment>
					}
					
					{
						doge &&
						<React.Fragment>
							<img src="/static/tipcoins/doge.svg" className={classes.img} />
						</React.Fragment>
					}
					
					{
						eth &&
						<React.Fragment>
							<img src="/static/tipcoins/eth.svg" className={classes.img} />
						</React.Fragment>
					}
					

					{
						tipc &&
						<React.Fragment>
							<img src="/static/tipcoins/Tip-1.png" className={classes.img} />
						</React.Fragment>
					}
					
					{
						tip &&
						<React.Fragment>
							<img src="/static/tipcoins/Tip-2.png" className={classes.img} />
						</React.Fragment>
					}
					
					{
						xth &&
						<React.Fragment>
							<img src="/static/tipcoins/Tip-3.png" className={classes.img} />
						</React.Fragment>
					}
			</span>
			)
    } else {
			return null;
		}
  }
}

SiteTopicCoin.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, )(withStyles(styles)(SiteTopicCoin));

















































































































// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import { connect } from 'react-redux';


// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   actions: {
// 		display: 'flex',
// 		flexGrow: 'wrap',
//     borderTop: '.5px solid gray'
//   },
//   num: {
//     fontSize: 15,
//     fontWeight: '500',
//     padding: 0,
//     color: "#403d3d",
//     marginLeft: "-7px",
//     [theme.breakpoints.up('md')]: {
//       marginLeft: "-18px",
//     },
// 	},
// 	img: {
// 		width: 30,
// 		height: 30,
// 		margin: 3,
// 		marginLeft: "1%"
// 	},
// 	num: {
// 		fontSize: 12,
// 		marginLeft: -3
// 	},
//   iconspacing: {
//     [theme.breakpoints.only('xs')]: {
//       margin: '0 -3px',
//     },
//     [theme.breakpoints.only('sm')]: {
//       margin: '0 4px',
//     },
//     [theme.breakpoints.between('md', 'xl')]: {
//       margin: '0 10px',
//     },
//   }
// });

// class TopicCoin extends React.Component {
// 	ethtipc = (currency, amount) => {
// 		const { classes } = this.props;
// 		let amt = 0;
// 		if (currency === "ethtipc") {
// 			amt = amt + parseFloat(amount);
// 		}
// 		return (
// 			<React.Fragment>
// 				<img src="/static/tipcoins/Tip-1.png" className={classes.img} />
// 				<p className={classes.num} >{amt}</p>
// 			</React.Fragment>
// 		)
// 	}

//   render() {
//     const { classes, gift } = this.props;
//     if (typeof gift[0] !== "undefined") {
// 			let amt = 0;
// 			return (
// 				<React.Fragment>
// 					{/* {
// 						gift.map((gif, index) => ( */}
// 							<CardActions key={index} className={classes.actions} >
// 									{
// 										gift.map((gif, index) => (
// 											gif.currency == 'bitcoin' &&
// 											<React.Fragment>
// 												<img src="/static/tipcoins/bit.svg" className={classes.img} />
// 												<p className={classes.num} >0.00003</p>
// 											</React.Fragment>
// 										)
// 									}
// 								{
// 									gif.currency == 'dogecoin' &&
// 										<React.Fragment>
// 											<img src="/static/tipcoins/doge.svg" className={classes.img} />
// 											<p className={classes.num} >0.0003</p>
// 										</React.Fragment>
// 								}
// 								{
// 									gif.currency == 'ethcoin' &&
// 										<React.Fragment>
// 											<img src="/static/tipcoins/eth.svg" className={classes.img} />
// 											<p className={classes.num} >0.0003</p>
// 										</React.Fragment>
// 								}
// 								{
// 									gif.currency == 'ethtipc' &&
// 										<React.Fragment>
// 											<img src="/static/tipcoins/Tip-1.png" className={classes.img} />
// 											<p className={classes.num} >
// 												{amt = amt + parseFloat(gif.amount)}
// 											</p>
// 										</React.Fragment>
// 								}
// 								{
// 									gif.currency == 'ethtipcoin' &&
// 										<React.Fragment>
// 											<img src="/static/tipcoins/Tip-2.png" className={classes.img} />
// 											<p className={classes.num} >0.0003</p>
// 										</React.Fragment>
// 								}
// 								{
// 									gif.currency == 'ethxrtcoin' &&
// 										<React.Fragment>
// 											<img src="/static/tipcoins/Tip-3.png" className={classes.img} />
// 											<p className={classes.num} >0.0003</p>
// 										</React.Fragment>
// 								}
								
								
								
								
								
								
// 						</CardActions>
// 					// 	))
// 					// }
// 				</React.Fragment>
// 			)
//     } else {
// 			return null;
// 		}
//   }
// }

// TopicCoin.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     data: state.data,
//   }
// }

// export default connect(mapStateToProps, )(withStyles(styles)(TopicCoin));
