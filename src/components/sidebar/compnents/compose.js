import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { config } from '../../../../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSiteTopic } from "../../../actions/data";
import Link from "next/link";
import { Lang } from '../../../../lang';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
    margin: "5%",
    marginTop: -25
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
	button: {
    margin: theme.spacing.unit,
  },
});

class Compose extends React.Component {
  state = {
    comment: '',
    token: null
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {
    let token = localStorage.getItem('token');
    this.setState({
      token
    })
  }
  

  async handleAddComment() {
    const { data, token, getSiteTopic, handleUpdate } = this.props;
    const { comment } = this.state;
    

    let obj = {
      comment_id: "",
      commentable_id: data.siteTopic[0].id,
      commentable_type: "AppTopic",
      content: comment
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token
      },
      data: JSON.stringify(obj),
      url: config.api + "/commentReply/comment",
    };

    try {
      let comment = await Axios(options);
      if (!comment.data.error) {
        console.log("commentReply", comment);
        this.setState({
          comment: ''
        })
        getSiteTopic(comment.data.content);
        handleUpdate(comment.data.content[0].comment);

      }
    } catch (error) {
      console.log("ERROR : ", error);
    }
  }

  render() {
    const { classes } = this.props;
    const { comment, token } = this.state;
    
    return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            // label="What are your thoughts? // 你是什么想法"
            label={Lang.a1}
            multiline
            rows="3"
            name="comment"
            value={comment}
            onChange={this.handleChange('comment')}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          {
            !token ? 
              <Typography variant="subtitle1" >
                {/* You have to be &nbsp; */}
                {/* 你必须  */}
                {Lang.x}&nbsp; 
                <Link href="/login" >
                  <a>
                    {/* Logged In */}
                    {/* 登录 */}
                    {Lang.y}
                  </a>
                </Link>
                {/* &nbsp; to comment */}
                &nbsp; {Lang.z}
                {/* 评论 */}
              </Typography>
            :
              <Button variant="outlined" onClick={this.handleAddComment.bind(this)} color="primary" className={classes.button}>
                {/* Add Comment // 添加评论 */}
                {Lang.w}
              </Button>
          }
        </form>
      </React.Fragment>
    );
  }
}

Compose.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSiteTopic: getSiteTopic
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Compose));