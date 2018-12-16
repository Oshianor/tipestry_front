import React, { Component } from 'react';
import Thumbnails from '../../reuseable/thumbnails';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Add from '@material-ui/icons/Add';

const Box = (props) => {
	return (
		<Paper style={{ width: 250, height: 270, margin: 5 }}>
			<div style = {
				{
					backgroundImage: "url('/static/homepage/headerBackground.svg')",
					backgroundColor: "transparent",
					width: "100%",
					height: 130,
					backgroundRepeat: 'no-repeat',
					backgroundSize: "cover",
					boxShadow: '0 0 0 0'
				}
			}/>
			<div style={{ textAlign: "center", marginTop: -50, alignItems: "center", justifyContent: "center" }}>
				<div style={{ marginLeft: 87 }}>
					<Thumbnails size="lg" borderColor="white" borderWidth={1} url="yes" name="sicker"/>
				</div>
				<Typography variant="subtitle2" style={{ marginTop: 10 }}>Sam Baker</Typography>
				<Button variant='outlined' size="small" style={{ marginTop: 20, maxHeight: 35, padding: 7, borderRadius: 20 }}>
					{
						props.type === "follow" ?
							<React.Fragment>
								<Add style={{ fontSize: 15 }} />
								Follow
							</React.Fragment>
						:
							<React.Fragment>
								Unfollow
							</React.Fragment>
					}
					
				</Button>
			</div>
		</Paper>
	);
}
export default Box;