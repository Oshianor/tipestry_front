import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// created component
import SharePopover from './sharePopover';

// filled
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from "../../../actions/data";
import Thumb from './thumb';
import Axios from 'axios';
import { config } from "../../../../config";
import Coin from './coin';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    borderTop: '.5px solid gray'
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

class CardActionIcons extends React.Component {

  handleFavourite = async () => {
    let token = localStorage.getItem('token');
    const { topicId, getUser } = this.props;

    if (token) {
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        data: JSON.stringify({
          topicId
        }),
        url: config.api + "/users/favourite",
      };
      let user = await Axios(options);
      console.log('user', user);
      
      getUser(user.data.content);
    }
  }

  displayFavour = () => {
    const { data, classes, topicId } = this.props;
    // console.log('topicId', data.user.favourite, "---", topicId);
    let token = localStorage.getItem('token');
    // check if the user properieste are avaiable
    if (typeof data.user !== "undefined" && token && typeof data.user.favourite !== "undefined") {
      if (data.user.favourite.indexOf(topicId) !== -1) {
        return (
          <Tooltip title="Remove from favourites" aria-label="Add to favorites">
            <IconButton onClick={this.handleFavourite} aria-label="Add to favorites" className={classes.iconspacing}>
              <FavoriteBorderOutlined style={{ color: '#1F7BD8' }} />
            </IconButton>
          </Tooltip>
        )
      }
    }
    return (
      <Tooltip title="Add to favourites" aria-label="Add to favorites">
        <IconButton onClick={this.handleFavourite} aria-label="Add to favorites" className={classes.iconspacing}>
          <FavoriteIcon />
        </IconButton>
      </Tooltip>
    )
  }

  render() {
    const { token, classes, topicUserId, votes, comment, topicObjId, link } = this.props;
    // console.log('votes.length,', votes.length);
    
    return (
      <CardActions className={classes.actions} >

        <Thumb 
          votes={votes} 
          token={token} 
          topicObjId={topicObjId} 
          iconspacing={classes.iconspacing} 
          num={classes.num} 
        />



        {/*  */}
        {this.displayFavour()}



        {/*  */}
        <Tooltip title="Comments" aria-label="comments">
          <IconButton aria-label="comments" className={classes.iconspacing}>
            <img src="/static/icons/comments.svg" alt="comments" width='25' height="25" />
          </IconButton>
        </Tooltip>
        <p className={classes.num} >
          {comment}
        </p>
				&nbsp;&nbsp;



        {/*  */}
        <Tooltip title="Share Post" aria-label="Share">
          <SharePopover link={link} />
        </Tooltip>

        {/* tips coin icons */}
        <Coin topicUserId={topicUserId} />
      </CardActions>
    );
  }
}

CardActionIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  votes: PropTypes.array.isRequired,
  comment: PropTypes.string.isRequired,
  topicId: PropTypes.number.isRequired,
  topicObjId: PropTypes.string.isRequired,
  topicUserId: PropTypes.string.isRequired,
  token: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUser: getUser,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CardActionIcons));
