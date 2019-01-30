import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { Lang } from '../../../lang';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Warning extends React.Component {
  render() {
		const { open, handleClose, text, buttonText } = this.props;
    return (
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => handleClose()}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{/* You need to be logged in to perform this operation. // 您需要登录才能执行此操作。 */}
					{Lang.d1}
				</DialogTitle>

				<DialogContent>
					<Grid container justify='center' alignItems='center' >
						<img src="/static/icons/sadface.svg" width={150} height={150} />
					</Grid>
					<Grid container justify='center' alignItems='center' >
						<Typography>
							<Link href="/login">
								<a style={{ marginTop: 13 }} >
									{/* Login */}
									{Lang.j}
								</a>
							</Link>
						</Typography>
					</Grid>
				</DialogContent>

				<DialogActions>
					<Grid container justify='center' alignItems='center' >
						<Typography>
							{/* Don't have an Account?  */}
							{Lang.e1}
							&nbsp;
							<Link href="/register">
								<a>
									{/* Sign Up // 注册 */}
									{Lang.f1}
								</a>
						</Link>
						</Typography>
					</Grid>
				</DialogActions>
			</Dialog>
    );
  }
}

Warning.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Warning;