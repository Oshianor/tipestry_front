import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
	},
	root: {
    display: 'flex',
  },
  formControl: {
    margin: 10,
	},
	spc: {
		margin: "-5px 0px"
	},
  group: {
    margin: "-5px 0px"
  },

});

class Report extends React.Component {
	state = {
		value: null,
	};

	handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, handleReportClose, open } = this.props;
		const { value } = this.state;
    return (
      <Dialog onClose={() => handleReportClose()} open={open} aria-labelledby="simple-dialog-title" >
				<DialogTitle id="simple-dialog-title"
					style={{ padding: "10px" }}
				>
					Give Us Feedback on this post
				</DialogTitle>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="Report"
            name="report"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            <FormControlLabel className={classes.spc} value="nudity" control={<Radio />} label="Nudity" />
            <FormControlLabel className={classes.spc} value="violence" control={<Radio />} label="Violence" />
            <FormControlLabel className={classes.spc} value="harrassment" control={<Radio />} label="Harassment" />
						<FormControlLabel className={classes.spc} value="false news" control={<Radio />} label="False news" />
            <FormControlLabel className={classes.spc} value="spam" control={<Radio />} label="Spam" />
            <FormControlLabel className={classes.spc} value="hate speech" control={<Radio />} label="Hate speech" />
						<FormControlLabel className={classes.spc} value="others" control={<Radio />} label="others" />
          </RadioGroup>
        </FormControl>
				<div style={{ display: 'flex', margin: '0px 4px 10px' }} >
					<div style={{ flexGrow: 1 }} />
					<Button onClick={() => handleReportClose()} >Send</Button>
				</div>
      </Dialog>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
  handleReportClose: PropTypes.func,
};

export default withStyles(styles)(Report);
