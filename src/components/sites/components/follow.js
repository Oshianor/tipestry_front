import React from 'react';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTopics } from "../../../actions/data";
import { config } from '../../../../config';
import axios from 'axios';
// import ReportComponent from './report';
import { Lang } from '../../../../lang';

class Options extends React.Component {
  state = {
    anchorEl: null,
		siteFollowing: [],
		token: null
  }

  componentDidMount() {
		const { data } = this.props;
		let token = localStorage.getItem('token');
    this.setState({
			siteFollowing: data.site.site ? data.site.site.following : [],
			token
    })
  }
  

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
	}
	

  handleClose = () => {
    this.setState({ anchorEl: null });
	}
	

  handleFollow = async () => {
		const { siteFollowing, token } = this.state;
    const { data } = this.props;
    
    if (token) {
      const options = {
        method: 'POST',
        data: JSON.stringify({ 
          siteObjId: data.site.site._id
        }),
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': token
        },
        url: config.api + '/sites/follow'
      }

      let follow = await axios(options);
      console.log("ADDING FOLLOWING", follow);
      if (follow.data.error === false) {
        this.setState({
          siteFollowing: follow.data.content.following,
        })
      }
      
    }
  }

  displayFollow = () => {
		const { data } = this.props;
		const { siteFollowing, token } = this.state;
    if (token) {
      // check if the owner of the post is the same with the logged in user
			if (siteFollowing.indexOf(data.user._id) === -1) {
				return (
					<Button 
						variant="outlined" 
						size="small" 
						color="primary" 
						onClick={this.handleFollow}
						style={{ padding: "5px", fontSize: 11, margin: 5 }} 
					>
						{/* Follow */}
						{Lang.f}
					</Button>
				)
			} else {
				return (
					<Button 
						variant="contained" 
						size="small" 
						color="primary" 
						onClick={this.handleFollow}
						style={{ padding: "5px", fontSize: 11, margin: 5 }} 
					>
						{/* Following */}
						{Lang.g}
					</Button>
				)
			} 
    }
  }


  render() {
    return (
      <div>
        {this.displayFollow()}
      </div>
    );
  }
}

// export default Options;
function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTopics: getTopics
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Options);
