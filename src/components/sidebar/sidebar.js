import React, { Component } from 'react';
import Compose from './compnents/compose';
import Container from './container';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import SiteAbout from './compnents/siteabout';
import Link from "next/link"
import { Lang } from '../../../lang';

class Sidebar extends Component {	
	render() {
		const { token, data } = this.props;
		return (
			<div style={{ marginTop: 80, height: "90vh" }}>
				<Typography variant="title" style={{ textAlign: 'center' }}>
					{ /* JOIN THE CONVERSATION TODAY /// 今天加入对话*/ }
					{Lang.v}
				</Typography>
				{
					typeof data.siteTopic[0] !== "undefined" &&
						<Typography style={{ textAlign: 'center' }}>
							<Link href={data.siteTopic[0].sites[0].url}>
								<a style={{ marginLeft: "5%", marginRight: "5%" }}>
									{data.siteTopic[0].sites[0].url}
								</a>
							</Link>
						</Typography>
						
				}
				<SiteAbout />
				{
					typeof data.siteTopic[0] !== "undefined" && data.siteTopic[0].comment.length > 0 ?
						<Container token={token} />
					:
						<Typography variant='subtitle2' style={{ textAlign: 'left', margin: '5%' }}>
							{/* This post has <a style={{ color: '#1F7BD8' }}>0</a> comments. Be the first to post */}
							{/* 这篇文章有 <a style={{ color: '#1F7BD8' }}>0</a> 条评论。 是第一个发帖的 */}
							{Lang.t} <a style={{ color: '#1F7BD8' }}>0</a> {Lang.u}

						</Typography>
				}
				<Compose token={token} />
			</div>
		);
	}
}

// export default Sidebar;
function mapStateToProps(state) {
	return {
		data: state.data,
	}
}

export default connect(mapStateToProps, )(Sidebar);
