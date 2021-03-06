import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"
import Header from "../src/components/header/basicheader";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {
	withStyles
} from '@material-ui/core/styles';
import { Lang } from '../lang';

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

	displayENg = () => {
		const { expanded } = this.state;
		return (
      <div style={{ margin: "80px 10%" }}>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <Typography>What is Tipestry?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Tipestry is a web annotation platform that lets people leave
              comments on any webpage or at any geographical location. Posts
              can be viewed through tipestry.com, the Tipestry browser
              add-on, or through augmented reality with the Tipestry Go app.
              Tipestry also features built-in cryptocurrency tipping,
              allowing people to monetize their posts or websites without
              having to pay high fees, give up personal information, or
              worry about being deplatformed.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <Typography>
              How is Tipestry different than other crypto social media
              platforms?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              First, Tipestry is blockchain agnostic, meaning you can tip
              and earn many different types of cryptocurrencies. Second,
              Tipestry is more than a social media site - it's also a
              universal commenting and tipping system that adds a meta layer
              on top of the entire web where people can interact and earn
              money anywhere online.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary>
            <Typography>How does Tipestry.com work?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              In the URL field on the top right of the screen, enter the
              address of the website you want to discuss and a comment
              section will load for that page. You can also check out what
              people around the web are currently talking about on the
              Trending section of the Tipestry homepage.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary>
            <Typography>What is tipping?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Tipping is a way to show other users you appreciate their
              content. It’s a more powerful version of a like or an upvote,
              as it involves automatically sending cryptocurrency to the
              user you’re tipping. To tip someone, click on the Give Coins
              button next to their post and choose the type of coin and the
              amount you want to tip. An icon showing the tip will then show
              up next to their post and they will receive the coins in their
              account.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel7"}
          onChange={this.handleChange("panel7")}
        >
          <ExpansionPanelSummary>
            <Typography>What is cryptocurrency?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Cryptocurrency is peer-to-peer digital money. It has several
              advantages over tradition currency, one of which is that it is
              much easier to send and receive online and across borders.
              Bitcoin, the first cryptocurrency, was created by Satoshi
              Nakamoto in 2009. Since then, thousands of other coins and
              tokens with different features have been created.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel8"}
          onChange={this.handleChange("panel8")}
        >
          <ExpansionPanelSummary>
            <Typography>
              How can I add coins to my Tipestry account?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              You can send Bitcoins, Dogecoins, etc. from an online exchange
              or wallet to your Tipestry addresses, which can be found in
              the Currency link on the homepage. However, if you are new to
              cryptocurrencies, we recommend starting off by simply posting
              content to Tipestry and earning coins through tips.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel9"}
          onChange={this.handleChange("panel9")}
        >
          <ExpansionPanelSummary>
            <Typography>How can I keep my coins safe?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Online cryptocurrency wallets, including the ones that come
              with Tipestry accounts, are inherently unsecure. The best way
              to secure your coins is in an offline wallet. Learn more about
              wallets and security at{" "}
              <a href="https://bitcoin.org/en/secure-your-wallet">
                https://bitcoin.org/en/secure-your-wallet
              </a>
              .If you end up with a significant amount of coins in your
              Tipestry account (for example if you post something really
              amazing and someone tips you a full Bitcoin), it is highly
              recommended that you make a withdrawal to somewhere more
              secure. To withdrawal coins, click on the Currencies link on
              the homepage, select the currency, and choose the Withdraw /
              Send coins option.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel10"}
          onChange={this.handleChange("panel10")}
        >
          <ExpansionPanelSummary>
            <Typography>What are Tipcoins and Tipestry Tokens?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Tipcoins(TIPC) are utility tokens that can be earned by
              contributing to the Tipestry community. They serve several
              purposes such as giving owners proportional voting rights on
              the platform governance including moderator election and
              removal, moderation policy, and selecting Best Of content for
              special rewards and recognition. Tipcoins can also be used to
              purchase Tipestry Premium status and as a payment method for
              listing other tokens on Tipestry. Tipestry Token(TIP) will be
              used for our upcoming STO.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel13"}
          onChange={this.handleChange("panel13")}
        >
          <ExpansionPanelSummary>
            <Typography>What are some use cases?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              <ul>
                <li>
                  Find out what people are saying about a particular
                  website. Is the site legitimate, is it a scam, is its
                  information up to date, is it fake news? Sometimes it’ s
                  hard to tell based just on a site’ s content or its search
                  engine rankings. A quick look at what other people are
                  saying can serve as a helpful guide.
                </li>
                <li>
                  Discuss sites where the comment sections have been
                  removed. Many major news organizations have removed their
                  comment sections in recent years. The justification often
                  used is that the quality of the comments is generally too
                  low to justify the cost of hosting them, and although that
                  might be true in some cases, it also conveniently prevents
                  readers from voicing contrary opinions.
                </li>
                <li>
                  Discuss topics where there’ s no obvious place to do so.
                  For example, If I wanted to share my thoughts on
                  rutabagas, but there’ s no message board dedicated to that
                  subject in my language, I can enter www.rutabagas.com{" "}
                  <a href="https://tipestry.com/www.rutabagas.com">
                    https://tipestry.com/www.rutabagas.com
                  </a>{" "}
                  on Tipestry and talk about it there.
                </li>
                <li>
                  Discuss very specific topics. After watching a movie, you
                  can sometimes find a forum to discuss it (although now
                  with IMDB shutting down its message boards, even that can
                  be difficult). However, what if you want to discuss a
                  specific episode, or a specific song? With Tipestry you
                  could go on the Wikipedia page or summary for a particular
                  episode or the lyrics page for a particular song and
                  discuss is there.
                </li>
                <li>
                  Find and share information about new product releases. For
                  example, when software is updated and you encounter a bug,
                  it’ s often difficult to sift through years of forum posts
                  about that software to find a discussion relevant to your
                  problem. Going to that software’ s homepage through
                  Tipestry is a way to find the latest and most relevant
                  discussion.
                </li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel14"}
          onChange={this.handleChange("panel14")}
        >
          <ExpansionPanelSummary>
            <Typography>How does moderation work?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Moderation is an unfortunate necessity on sites that allow
              user-generated content. As important as free speech is, having
              no rules is impractical on a platform like Tipestry due to bad
              actors. Spam, illegal content (threats of violence, libel,
              etc.) and doxing all require moderation. What the exact rules
              are, however, is never easy to decide. Rather than leave it up
              to us alone, our plan is to use blockchain to allow the
              community to transparently vote on moderation policies and
              elect moderators. Additionally, instead of relying on unpaid
              moderators to work out of the goodness of their hearts (or in
              order to put themselves in a position where they can push an
              agenda), elected moderators can be compensated for their
              efforts with cryptocurrency.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel15"}
          onChange={this.handleChange("panel15")}
        >
          <ExpansionPanelSummary>
            <Typography>What is the point of tipping?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Traditional social media companies rely on their users to
              generate most of the value on their platforms. Then then
              typically show their gratitude by selling their users’
              personal information to third party corporations and
              government agencies. This model is unfair and is due for a
              change. Tipestry’s built-in cryptocurrency tipping is one way
              to address the problem. If someone posts something valuable,
              they can receive tips from us and from other users, allowing
              contributors to the platform to earn rewards for the value
              they create. Cryptocurrency also provides avenues for us (such
              as issuing our own tokens) to cover the costs of running the
              platform while respecting users’ privacy.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel16"}
          onChange={this.handleChange("panel16")}
        >
          <ExpansionPanelSummary>
            <Typography>How can I send feedback?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              Please send any comments, bug reports, abuse complaints, or
              questions to{" "}
              <a href="mailto:feedback@tipestry.com">
                feedback@tipestry.com
              </a>
              .
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel17"}
          onChange={this.handleChange("panel17")}
        >
          <ExpansionPanelSummary>
            <Typography>What is Tipestry’s view on privacy?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              One of the main purposes of Tipestry is to create a business
              model for social media that respects users’ privacy, which is
              one of the reasons cryptocurrency is built into the platform.
              Cryptocurrency is good for privacy for two reasons: first, it
              allows people to send and receive money without giving up
              personal information through a credit card or bank account,
              and second, it creates an opportunity for us to cover our
              costs without resorting to invasive advertising.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel18"}
          onChange={this.handleChange("panel18")}
        >
          <ExpansionPanelSummary>
            <Typography>
              What is the official address for Tipcoin (TIPC)?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              variant="body2"
              style={{ textAlign: "left", marginBottom: 10 }}
            >
              0xBa20586B7D98539D8Dd9f459B2C76cB4852E98cA
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
	}

	displayCN = () => {
		const { expanded } = this.state;
		return (
			<div style={{ margin: "80px 10%" }} >
				<Typography>
					Tipestry.com是一个人们可以对其它任何网站在线聊天及发表评论，并用加密货币对他们喜欢的网站和评论进行打赏并赚取数字币的颠覆性新式的社交平台。TipestryGo是一个任何地方让用户在任何网站或地理位置留下评论, 发的帖子和网站评论都可以收到奖赏数字币的提示功能。
				</Typography>
					<ExpansionPanel
						square
						expanded={expanded === 'panel1'}
						onChange={this.handleChange('panel1')}
					>
						<ExpansionPanelSummary>
							<Typography >
								Tipestry Go是什么？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipestry Go是一个允许用户在任何地理位置发表评论的app。评论既可放置在用户当前地理位置处，也可在地图上选择一个点来放置。 评论可在视图&地图上查看，也可通过被选中范围内的附近帖子列表来查看，或在显示全球受欢迎帖子的栏中查看。						
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
								Tipestry.com与设有评论栏目的其他站点有何区别？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								尽管有些站点设有评论栏或留言板，但大多数站点却没有。本项目的目标之一是为人们提供更多的空间，供他们在线上，包括网络上更为偏僻的角落，进行互动和给予反馈。							
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
								Tipestry.com是如何运行的？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								在屏幕右上方的URL栏中， 输入你想讨论的网站的地址， 然后就会载入该页面的评论栏。 你也可以在Tipestry首页Trending栏中查看网友们目前讨论的内容
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
								 嘿！如果我不想让人在我的站点上发表评论，该怎么办？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								如果你有问题的话， 请发送电子邮件给我们， 地址为feedback @tipestry.com。
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel7'}
						onChange={this.handleChange('panel7')}
					>
						<ExpansionPanelSummary>
							<Typography>
								打赏是什么？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								打赏是一种向其他用户展示你感谢他们评论的方法。这是点赞或赞同的加强版，因为它会自动将加密货币发送给你打赏的用户。 如欲给某人打赏，点击其帖子旁边的“赠送加密货币”（Give Coins）按钮，选择加密货币的类型和你想打赏的数量。接着，显示打赏的图标将出现在其帖子的旁边，他们将会在其账户中收到打赏的加密货币。 
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
								加密货币是什么？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								加密货币是点对点数字货币。与传统货币相比，它具有几种优点，其中之一就是它更易于在线上和跨境发送和接收。  第一种加密货币--比特币，是由中本聪于2009年创造的。自那时起，人们已创造出成许多种具有不同特点的其他加密货币和代币。
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
								如何才能将币加入到我的Tipestry账户中？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								你可以将比特币、狗狗币等从线上交易所或钱包中发送至Tipestry地址，这些地址可在首页的“货币”（Currency）链接中找到。然而，如果你是首次接触加密货币，我们建议首先将内容发布至Tipestry上，然后通过打赏赚取加密货币。
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
								如何才能使我的币保持安全？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								在线加密货币钱包，包括与Tipestry账户配套的钱包，本身不是完全安全的。保障加密货币安全的最好方法是离线钱包。关于钱包和安全的更多信息，敬请访问：
								 <a href="https://bitcoin.org/en/secure-your-wallet"> https://bitcoin.org/en/secure-your-wallet </a> 
									If you end up with a significant amount of coins in your Tipestry account(
										如果最终你的Tipestry账户中有大量的加密货币（比如，如果你发布确实令人称奇的帖子，而某个人给你打赏很多比特币），我们强烈建议你将它们提现至更安全的地方。提现加密货币，请点击首页上的“货币”（Currencies）链接，选择货币，然后选择“提现/发送加密货币”（Withdraw/Send coins）选项
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel12'}
						onChange={this.handleChange('panel12')}
					>
						<ExpansionPanelSummary>
							<Typography>
								Tipestry对隐私的看法是什么？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								Tipestry的主要目的之一是创建一个尊重用户隐私的社交媒体业务的典范，这也是将加密货币内置到平台中的原因之一。加密货币有利于隐私的原因有两个：第一，它允许人们在不通过信用卡或银行帐户并放弃个人信息的情况下发送和接收资金；第二，它为我们提供了一个机会，我们可以在不使用侵入性广告的情况下支付我们的费用。
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
								如何才能发送反馈？
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography variant="body2" style={{ textAlign: 'left', marginBottom: 10 }} >
								如果有任何意见、漏洞报告、滥用投诉或疑问，请发送至<a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>.						
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
		)
	}
	
	render() {
		const { expanded } = this.state;
		return (
			<div>
				<Header />
				{
					Lang.locale === "en" ?
						this.displayENg()
					:
						this.displayCN()
				}
			</div>
		);
	}
}

export default Faq;