import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"
import Header from "../src/components/header/basicheader";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {
	withStyles
} from '@material-ui/core/styles';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class Faq extends Component {
	state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
	}
	
	render() {
		const { expanded } = this.state;
		return (
			<div>
				<Header />
				<div style={{ margin: "80px 10%" }} >
					<ExpansionPanel
						square
						expanded={expanded === 'panel1'}
						onChange={this.handleChange('panel1')}
					>
						<ExpansionPanelSummary>
							<Typography >
								What is Tipestry.com?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipestry.com is a platform where people can post comments about other websites and tip comments they like with cryptocurrency.						
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel2'}
						onChange={this.handleChange('panel2')}
					>
						<ExpansionPanelSummary>
							<Typography >
								What is Tipestry Go?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipestry Go for iOS and Android that lets users leave a comment at any physical location.Comments can be placed either at the user 's 
								current physical location or by selecting a spot on the map. Comments can be viewed through the map view, through a list of nearby 
								posts within a selected range, in a section showing popular posts worldwide, or in Augmented Reality. Digital coins are also hidden 
								around the world and can be collected through the app.								
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel3'}
						onChange={this.handleChange('panel3')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How is Tipestry.com different than other sites with comment sections ?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								
									Although some sites feature comment sections or message boards, most do not.One of the goals of this project is to provide more places
									for
								people to interact and give feedback online, including the more obscure(or censored) corners of the web.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel4'}
						onChange={this.handleChange('panel4')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How does Tipestry.com work?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								In the URL field on the top right of the screen, enter the address of the website you want to discuss and a comment section will load
								for that page.
								You can also check out what people around the web are currently talking about on the Trending section of the Tipestry homepage.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					{/* <ExpansionPanel
						square
						expanded={expanded === 'panel5'}
						onChange={this.handleChange('panel5')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How does Tipestry.com work?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								In the URL field on the top right of the screen, enter the address of the website you want to discuss and a comment section will load
								for that page.
								You can also check out what people around the web are currently talking about on the Trending section of the Tipestry homepage.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel> */}
					{/* <ExpansionPanel
						square
						expanded={expanded === 'panel6'}
						onChange={this.handleChange('panel6')}
					>
						<ExpansionPanelSummary>
							<Typography>
								Hey!What
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								if I don 't want people commenting on my site?
								To prevent abuse, in the future we will add an automatic way
								for most webmasters to opt out and prevent people from commenting on their site.For now, please email us at feedback @tipestry.com
								if you have an issue.
								However, we also value freedom of speech and part of the purpose of this platform is to provide a way
								for normal people to speak up when organizations are misbehaving.To that end, we will adopt a set of rules determining which sites can opt out and which can 't. In general, private individuals and smaller organizations can opt out by default, but governments, mass media organizations, and publicly traded companies cannot. We plan to use a voting system to get input from the community on what the exact rules are and how they will change over time.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel> */}
					<ExpansionPanel
						square
						expanded={expanded === 'panel7'}
						onChange={this.handleChange('panel7')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What is tipping?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipping is a way to show other users you appreciate their comment.It’ s a more powerful version of a like or an upvote, as it involves automatically sending cryptocurrency to the user you’ re tipping.
								To tip someone, click on the Give Coins button next to their post and choose the type of coin and the amount you want to tip.An icon showing the tip will then show up next to their post and they will receive the coins in their account.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel8'}
						onChange={this.handleChange('panel8')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What is cryptocurrency?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Cryptocurrency is peer - to - peer digital money.It has several advantages over tradition currency, one of which is that it is much easier to send and receive online and across borders.
								Bitcoin, the first cryptocurrency, was created by Satoshi Nakamoto in 2009. Since then, thousands of other coins and tokens with different features have been created.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel9'}
						onChange={this.handleChange('panel9')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How can I add coins to my Tipestry account?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								You can send Bitcoins, Dogecoins, etc.from an online exchange or wallet to your Tipestry addresses, which can be found in the Currency link on the homepage.However,
									if you are new to cryptocurrencies, we recommend starting off by simply posting content to Tipestry and earning coins through tips.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel10'}
						onChange={this.handleChange('panel10')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How can I keep my coins safe?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Online cryptocurrency wallets, including the ones that come with Tipestry accounts, are inherently unsecure. The best way to secure your coins is in an offline wallet.Learn more about wallets and security at 
								 <a href="https://bitcoin.org/en/secure-your-wallet"> https://bitcoin.org/en/secure-your-wallet </a> 
									If you end up with a significant amount of coins in your Tipestry account(
										for example
										if you post something really amazing and someone tips you a full Bitcoin), it is highly recommended that you make a withdrawal to somewhere more secure.To withdrawal coins, click on the Currencies link on the homepage, select the currency, andchoose the Withdraw / Send coins option.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					{/* <ExpansionPanel
						square
						expanded={expanded === 'panel11'}
						onChange={this.handleChange('panel11')}
					>
						<ExpansionPanelSummary>
							<Typography>
								Why isn't Tipestry a browser add-on?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
									Tipestry started out as an add - on but we found it was too difficult to get people to
									try
									if they had to install software before they could post or even view the content.We will release a new add - on in the future once the user base is large enough
									for it to make sense.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel> */}
					<ExpansionPanel
						square
						expanded={expanded === 'panel12'}
						onChange={this.handleChange('panel12')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What are Tipcoins and Tipestry Tokens?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipcoins(TIPC) are utility tokens that can be earned by contributing to the Tipestry community.They serve several purposes such as giving owners proportional voting rights on the platform governance including moderator election and removal, moderation policy, and selecting Best Of content
								for special rewards and recognition.Tipcoins can also be used to purchase Tipestry Premium status and as a payment method
								for listing other tokens on Tipestry.Tipestry Token(TIP) will be used
								for our upcoming STO.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel13'}
						onChange={this.handleChange('panel13')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What are some use cases
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								<ul>
									<li>
										Find out what people are saying about a particular website.Is the site legitimate  is it a scam, is its information up to date, is it fake news? 
									</li>
									<li>
										Sometimes it’ s hard to tell based just on a site’ s content or its search engine rankings. 
										A quick look at what other people are saying can serve as a helpful guide.
									</li>
									<li>
										Discuss sites where the comment sections have been removed.Many major news organizations have removed their comment sections in recent years.The justification often used is that the quality of the comments is generally too low to justify the cost of hosting them, and although that might be true in some cases, it also conveniently prevents readers from voicing contrary opinions.
									</li>
									<li>
										Discuss topics where there’ s no obvious place to do so.
										<Typography>For example,</Typography>
										<Typography>
											If i wanted to share my thoughts on rutabagas, but there’ s no message board dedicated to that subject in my language, I can enter 
											<a href="www.rutabagas.com"> www.rutabagas.com </a> 
											on Tipestry and talk about it there.
											Discuss very specific topics.After watching a movie, you can sometimes find a forum to discuss it(although now with IMDB shutting down its message boards, even that can be difficult).However, what
											if you want to discuss a specific episode, or a specific song ? With Tipestry you could go on the a Wikipedia page or summary
											for a particular episode or the lyrics page
											for a particular song and discuss is there.
										</Typography>
									</li>
									<li>
										Find and share information about new product releases.For example, when software is updated and you encounter a bug, it’ s often difficult to sift through years of forum posts about that software to find a discussion relevant to your problem.Going to that software’ s homepage through Tipestry is a way to find the latest and most relevant discussion.										
									</li>
								</ul>
								
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel14'}
						onChange={this.handleChange('panel14')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How does moderation work?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Moderation is an unfortunate necessity on sites that allow user-generated content. 
								As important as free speech is, having no rules is impractical on a platform like Tipestry due to bad actors. 
								Spam, illegal content(threats of violence, libel, etc.) and doxing all require moderation.What the exact rules are, however, is never easy to decide.

								Rather than leave it up to us alone, our plan is to use blockchain to allow the community to transparently vote on moderation policies and elect moderators.Additionally, instead of relying on unpaid moderators to work out of the goodness of their hearts(or in order to put themselves in a position where they can push an agenda), elected moderators can be compensated
								for their efforts with cryptocurrency.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel15'}
						onChange={this.handleChange('panel15')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What is the point of tipping?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Traditional social media companies rely on their users to generate most of the value on their platforms. 
								Then then typically show their gratitude by selling their users’ personal information to third party corporations and government agencies. 
								This model is unfair and is due for a change.

								Tipestry’s built-in cryptocurrency tipping is one way to address the problem. 
								If someone posts something valuable, they can receive tips from us and from other users, allowing contributors to the platform to earn rewards
								for the value they create.Cryptocurrency also provides avenues
								for us(such as issuing our own tokens) to cover the costs of running the platform
								while respecting users’ privacy.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel16'}
						onChange={this.handleChange('panel16')}
					>
						<ExpansionPanelSummary>
							<Typography>
								How can I send feedback?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Please send any comments, bug reports, abuse complaints, or questions to <a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>.						
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel17'}
						onChange={this.handleChange('panel17')}
					>
						<ExpansionPanelSummary>
							<Typography>
								What is Tipestry’s view on privacy?
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								One of the main purposes of Tipestry is to create a business model
								for social media that respects users’ privacy, which is one of the reasons cryptocurrency is built into the platform.Cryptocurrency is good
								for privacy
								for us to cover our costs without resorting to invasive advertising.
								for two reasons: first, it allows people to send and receive money without giving up personal information through a credit card or bank account, and second, it creates an opportunity
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			</div>
		);
	}
}

export default Faq;