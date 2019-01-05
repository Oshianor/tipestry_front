import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"
import Header from "../src/components/header/header";

class Faq extends Component {
	render() {
		return (
			<div>
				<Header />
				<div style={{ margin: "0px 10%" ,marginTop: 80 }} >
					<Typography variant="h4" style={{ textAlign: 'center' }} >
						What is Tipestry.com ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Tipestry.com is a platform where people can post comments about other websites and tip comments they like with cryptocurrency.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What is Tipestry Go ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						for iOS and Android that lets users leave a comment at any physical location.Comments can be placed either at the user 's 
						current physical location or by selecting a spot on the map. Comments can be viewed through the map view, through a list of nearby 
						posts within a selected range, in a section showing popular posts worldwide, or in Augmented Reality. Digital coins are also hidden 
						around the world and can be collected through the app.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						Tipestry Go is a mobile app
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
					How is Tipestry.com different than other sites with comment sections ?
						Although some sites feature comment sections or message boards, most do not.One of the goals of this project is to provide more places
						for
					people to interact and give feedback online, including the more obscure(or censored) corners of the web.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						How does Tipestry.com work ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						In the URL field on the top right of the screen, enter the address of the website you want to discuss and a comment section will load
						for that page.
						You can also check out what people around the web are currently talking about on the Trending section of the Tipestry homepage.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						Hey!What
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						if I don 't want people commenting on my site?
						To prevent abuse, in the future we will add an automatic way
						for most webmasters to opt out and prevent people from commenting on their site.For now, please email us at feedback @tipestry.com
						if you have an issue.
						However, we also value freedom of speech and part of the purpose of this platform is to provide a way
						for normal people to speak up when organizations are misbehaving.To that end, we will adopt a set of rules determining which sites can opt out and which can 't. In general, private individuals and smaller organizations can opt out by default, but governments, mass media organizations, and publicly traded companies cannot. We plan to use a voting system to get input from the community on what the exact rules are and how they will change over time.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What is tipping ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Tipping is a way to show other users you appreciate their comment.It’ s a more powerful version of a like or an upvote, as it involves automatically sending cryptocurrency to the user you’ re tipping.
						To tip someone, click on the Give Coins button next to their post and choose the type of coin and the amount you want to tip.An icon showing the tip will then show up next to their post and they will receive the coins in their account.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What is cryptocurrency ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Cryptocurrency is peer - to - peer digital money.It has several advantages over tradition currency, one of which is that it is much easier to send and receive online and across borders.

						Bitcoin, the first cryptocurrency, was created by Satoshi Nakamoto in 2009. Since then, thousands of other coins and tokens with different features have been created.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						How can I add coins to my Tipestry account ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						You can send Bitcoins, Dogecoins, etc.from an online exchange or wallet to your Tipestry addresses, which can be found in the Currency link on the homepage.However,
							if you are new to cryptocurrencies, we recommend starting off by simply posting content to Tipestry and earning coins through tips.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						How can I keep my coins safe ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Online cryptocurrency wallets, including the ones that come with Tipestry accounts, are inherently unsecure.The best way to secure your coins is in an offline wallet.Learn more about wallets and security at https: //bitcoin.org/en/secure-your-wallet.

							If you end up with a significant amount of coins in your Tipestry account(
								for example
								if you post something really amazing and someone tips you a full Bitcoin), it is highly recommended that you make a withdrawal to somewhere more secure.To withdrawal coins, click on the Currencies link on the homepage, select the currency, andchoose the Withdraw / Send coins option.				
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						Why isn 't Tipestry a browser add-on?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Tipestry started out as an add - on but we found it was too difficult to get people to
						try
						if they had to install software before they could post or even view the content.We will release a new add - on in the future once the user base is large enough
						for it to make sense.
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What are Tipcoin(TIPC) and the Tipestry Token(TIP) ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Tipcoins(TIPC) will give users proportional voting rights on the governance of the Tipestry platform, including moderator election and removal, moderation policy, and selecting Best Of content
				for special recognition.Tipcoins will be earned by contributing to the Tipestry community;
				we will not sell them.
				Tipestry Token(TIP) will be used to purchase Tipestry Premium accounts and will entitle the owners to dividends of cryptocurrency earned on the platform in the future.Tipestry Tokens will be sold in our token sale to help cover the costs of growing and improving the platform.
				TIPC and TIP are both ERC - 20 tokens.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What are some use cases 
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
							Find out what people are saying about a particular website.Is the site legitimate– is it a scam, is its information up to date, is it fake news ? Sometimes it’ s hard to tell based just on a site’ s content or its search engine rankings.A quick look at what other people are saying can serve as a helpful guide.
				Discuss sites where the comment sections have been removed.Many major news organizations have removed their comment sections in recent years.The justification often used is that the quality of the comments is generally too low to justify the cost of hosting them, and although that might be true in some cases, it also conveniently prevents readers from voicing contrary opinions.
				Discuss topics where there’ s no obvious place to do so.For example,
					if I
				wanted to share my thoughts on rutabagas, but there’ s no message board dedicated to that subject in my language, I can enter www.rutabagas.com on Tipestry and talk about it there.
				Discuss very specific topics.After watching a movie, you can sometimes find a forum to discuss it(although now with IMDB shutting down its message boards, even that can be difficult).However, what
				if you want to discuss a specific episode, or a specific song ? With Tipestry you could go on the a Wikipedia page or summary
				for a particular episode or the lyrics page
				for a particular song and discuss is there.
				Find and share information about new product releases.For example, when software is updated and you encounter a bug, it’ s often difficult to sift through years of forum posts about that software to find a discussion relevant to your problem.Going to that software’ s homepage through Tipestry is a way to find the latest and most relevant discussion.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						How does moderation work ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Moderation is an unfortunate necessity on sites that allow user - generated content.As important as free speech is, having no rules is impractical on a platform like Tipestry due to bad actors.Spam, illegal content(threats of violence, libel, etc.) and doxing all require moderation.What the exact rules are, however, is never easy to decide.

				Rather than leave it up to us alone, our plan is to use blockchain to allow the community to transparently vote on moderation policies and elect moderators.Additionally, instead of relying on unpaid moderators to work out of the goodness of their hearts(or in order to put themselves in a position where they can push an agenda), elected moderators can be compensated
				for their efforts with cryptocurrency.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What is the point of tipping ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Traditional social media companies rely on their users to generate most of the value on their platforms.Then then typically show their gratitude by selling their users’ personal information to third party corporations and government agencies.This model is unfair and is due
				for a change.

				Tipestry’ s built - in cryptocurrency tipping is one way to address the problem.If someone posts something valuable, they can receive tips from us and from other users, allowing contributors to the platform to earn rewards
				for the value they create.Cryptocurrency also provides avenues
				for us(such as issuing our own tokens) to cover the costs of running the platform
				while respecting users’ privacy.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						How can I send feedback ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						Please send any comments, bug reports, abuse complaints, or questions to <a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>.						
					</Typography>

					<Typography variant="h6" style={{ textAlign: 'center' }} >
						What is Tipestry’ s view on privacy ?
					</Typography>
					<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
						One of the main purposes of Tipestry is to create a business model
				for social media that respects users’ privacy, which is one of the reasons cryptocurrency is built into the platform.Cryptocurrency is good
				for privacy
				for two reasons: first, it allows people to send and receive money without giving up personal information through a credit card or bank account, and second, it creates an opportunity
				for us to cover our costs without resorting to invasive advertising.						
					</Typography>
				</div>
			</div>
		);
	}
}

export default Faq;