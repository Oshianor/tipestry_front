import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Header from "../src/components/header/basicheader";
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


class PrivacyPolicy extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
	};
	

	displayCN = () => {
    const { expanded } = this.state;
		return (
			<div style={{ textAlign: 'center', margin: "80px 10%" }} >
				<Typography variant="h4" >Tipestry隐私政策</Typography>
				<Typography variant="h6" style={{ fontSize: 15 }} >
					编制本隐私政策的目的是为了更好地服务于担心自身的‘个人可标识信息’（PII）被在线使用的人士。正如美国隐私法律和信息安全中描述的PII，是指能够独自或与其他信息以期用于识别、联系或定位某个个人，或在上下文中识别个人身份的信息。请仔细阅读我们的隐私政策，以清楚地了解我们如何根据我们的网站收集、使用、保护或以其他方式处理你的个人可标识信息。
				</Typography>
				<ExpansionPanel
					square
					expanded={expanded === 'panel1'}
					onChange={this.handleChange('panel1')}
				>
					<ExpansionPanelSummary>
						<Typography>
							我们从访问我们的博客、网站或app的人士那里收集哪些个人信息？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							在我们的网站上下订单或注册（视具体情况而定）时，你可能会被要求输入你的电子邮件地址或其他详细信息，以帮助你增强你的体验。
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel2'}
					onChange={this.handleChange('panel2')}
				>
					<ExpansionPanelSummary>
						<Typography>
							我们何时收集信息？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							当你在我们的网站上注册或在我们的网站上输入信息时，我们会从你那里收集信息。
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
							我们如何使用你的信息？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							当你注册、进行购物、注册订阅我们的简讯、答复调查或营销通信、浏览网站或使用其他特定网站特点时，我们会采用以下方式使用从你那里收集的信息：
							<ul style={{ textAlign: 'left' }}>
								<li>·定期向你发送与你的订单或其他产品和服务有关的电子邮件。</li>
							</ul>
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
							我们如何保护你的信息？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							我们不使用漏洞扫描和/或PCI数据安全标准扫描。
							我们仅提供文章和信息。我们不会索要信用卡号码。

							我们不使用恶意软件扫描。
							<br />

							你的个人信息保存在安全网络之中，只有数量有限的享有此类系统特别访问权限或需要对信息保密的人士才可访问。此外，你提供的所有敏感性/信用信息都是通过安全套接层（SSL）技术加密的。

							我们在用户输入、提交或访问其信息时实施众多保全措施，以保障你的个人信息的安全。

							所有交易都是通过网关提供商处理的，而不会在我们的服务器上存储或处理。
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel5'}
					onChange={this.handleChange('panel5')}
				>
					<ExpansionPanelSummary>
						<Typography>
							我们使用‘cookies’吗？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							我们不使用cookies作跟踪用途。
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel6'}
					onChange={this.handleChange('panel6')}
				>
					<ExpansionPanelSummary>
						<Typography>
							第三方披露
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							我们不会将你的个人可标识信息出售、交易或以其他方式转让给外部各方，但我们提前通知用户的除外。这不包括网站托管合作伙伴和协助我们运行网站、经营我们业务或为我们用户提供服务的其他方，但条件是这些各方同意对这些信息保密。如果遵守法律、执行我们网站政策或保障我们或其他人权利、财产或安全需要发布信息，则我们也可以进行信息发布。  
							<br />
							然而，非个人可标识访客信息可提供给其他方，作营销、广告或其他用途。
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
							第三方链接
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							有时候，我们可根据自身判断，在我们的网站上纳入或提供第三方产品或服务。这些第三方站点具有单独、独立的隐私政策。因此，我们对于这些链接站点的内容和活动不承担任何责任或职责。尽管如此，我们仍力求保持我们网站的诚信，并欢迎对这些站点提供反馈意见。
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
							加利福尼亚州在线隐私保护法
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							加利福尼亚州在线隐私保护法（CalOPPA）是全美首部要求商业网站和在线服务发布隐私政策的州法律。该法律的覆盖范围延伸至加利福尼亚州以外，要求在美国（乃至全世界）运营网站同时收集加利福尼亚州消费者个人可标识信息的任何人士或公司，在其网站上发布显眼的隐私政策，其中明确指明所收集的信息及与哪些个人或公司分享这些信息。--更多信息敬请访问:
							<a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">
							 	http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
							</a> 
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
							根据CalOPPA，我们同意以下条款：
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							用户可以匿名访问我们的网站。

							一旦本隐私政策得以建立， 我们将在我们的首页， 或者在进入我们网站后的第一个显著页面添加一个指向该隐私政策的链接。

							我们的隐私政策链接包括‘ 隐私’ 一词， 并可在上文指定的页面上轻易找到。


							隐私政策一旦发生变动， 你将会被告知：

							· 在我们的隐私政策页面上
							可以更改你的个人信息：· 通过给我们发送电子邮件
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
							我们的网站如何处理“请勿追踪”信号？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							当“请勿追踪（DNT）”浏览器机制已部署到位时，我们信守“请勿追踪”信号和“请勿追踪”，安插cookies，或使用广告。
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel11'}
					onChange={this.handleChange('panel11')}
				>
					<ExpansionPanelSummary>
						<Typography>
							我们的网站是否允许第三方行为追踪？
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							同样值得指出的是，我们并不允许第三方行为追踪。
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
							COPPA（儿童在线隐私保护法）
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							谈到从年龄不满13岁的儿童那里收集个人信息，儿童在线隐私保护法（COPPA）对家长实施管制。美国消费者保护机构--联邦贸易委员会实施COPPA规则，该规则明确规定网站和在线服务运营商必须采取措施保护儿童的在线隐私和安全。
							<Typography variant="button" >
								我们不会像年龄不满13岁的儿童进行特定营销。
							</Typography>
							我们是否允许第三方， 包括广告网络或插件从年龄不满13岁的儿童那里收集PII？
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
							公平信息实践
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							美国隐私法律骨干部分的公平信息实践原则及它们包括的理念，在世界各地制定数据保护法律方面起着重要的作用。了解公平信息实践原则及应该如何实施这些原则，对于遵守保护个人信息的各类隐私法律至关重要。
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
							为了遵循公平信息实践，一旦发生数据泄密，我们将采曲以下应对行动：
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							我们将在7个工作日以内通过电子邮件通知你
							<br />
							 我们亦同意个人赔偿原则，该原则规定，个人有权依法对未能遵循法律的数据收集者和处理者行使可执行权利。该原则不仅规定个人对数据使用者享有可执行权利，而且还规定，个人可对法庭或政府机构对数据处理者未遵循法律的行为进行追究和/或起诉。
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
							反垃圾邮件法
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							反垃圾邮件法这项法律设定了商业电子邮件规则、制定了商业消息要求、赋予接受者阻止向他们发送电子邮件的权利，并明确规定了针对违法行为的严厉处罚。
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
							我们收集你的电子邮件地址，以便：
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							·发送信息，回答查询和/或其他请求或问题
								<br />
							·推销我们的邮件列表，或在发生初始交易后继续向我们的客户发送电子邮件。
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
							为遵守反垃圾邮件法，我们同意如下事项：
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							·不使用虚假或具有误导性的主题或电子邮件地址。
								<br />
							·以某种合理的方式将消息标识为广告。
							    	<br />									  
							·纳入我们商业或站点总部的实际地址。
							      <br />
							·如果使用第三方邮件营销服务的话，对第三方邮件营销服务进行监测，以便遵守法律。
							      <br />
							·快速响应退订/取消订阅请求。
							      <br />
							·允许用户通过使用每封电子邮件底部的链接取消订阅。	
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel18'}
					onChange={this.handleChange('panel18')}
				>
					<ExpansionPanelSummary>
						<Typography>
							如果你随时想取消订阅将来不再接收邮件，你可以给我们发送电子邮件
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							feedback@tipestry.com，我们将立即停止向你发送一切通信。
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}

	displayENG = () => {
    const { expanded } = this.state;
		return (
			<div style={{ textAlign: 'center', margin: "80px 10%" }} >
				<Typography variant="h4" >Tipestry Privacy Policy</Typography>
				<Typography variant="h6" style={{ fontSize: 15 }} >
					This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information'(PII) is being used online.PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
				</Typography>
				<ExpansionPanel
					square
					expanded={expanded === 'panel1'}
					onChange={this.handleChange('panel1')}
				>
					<ExpansionPanelSummary>
						<Typography>
							What personal information do we collect from the people that visit our blog, website or app ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							When ordering or registering on our site, as appropriate, you may be asked to enter your email address or other details to help you with your experience.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel2'}
					onChange={this.handleChange('panel2')}
				>
					<ExpansionPanelSummary>
						<Typography>
							When do we collect information ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We collect information from you when you register on our site or enter information on our site.
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
							How do we use your information ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We may use the information we collect from you when you register, make a purchase, sign up
							for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
							<ul style={{ textAlign: 'left' }}>
								<li>To send periodic emails regarding your order or other products and services.</li>
							</ul>
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
							How do we protect your information ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We do not use vulnerability scanning and / or scanning to PCI standards.
							We only provide articles and information. We never ask for credit card numbers.
							We do not use Malware Scanning.

							Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.In addition, all sensitive / credit information you supply is encrypted via Secure Socket Layer(SSL) technology.

							We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.

							All transactions are processed through a gateway provider and are not stored or processed on our servers.

						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel5'}
					onChange={this.handleChange('panel5')}
				>
					<ExpansionPanelSummary>
						<Typography>
							Do we use 'cookies' ?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We do not use cookies for tracking purposes
							
							You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies.You do this through your browser settings.Since browser is a little different, look at your browser 's Help Menu to learn the correct way to modify your cookies.

							If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.that make your site experience more efficient and may not function properly.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel6'}
					onChange={this.handleChange('panel6')}
				>
					<ExpansionPanelSummary>
						<Typography>
							Third-party disclosure
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety. 

							However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
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
							Third-party links
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
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
							Google
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en"> https://support.google.com/adwordspolicy/answer/1316548?hl=en</a> 

							We use Google AdSense Advertising on our website.

							Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.

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
							We have implemented the following:
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
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
							Opting out:
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel11'}
					onChange={this.handleChange('panel11')}
				>
					<ExpansionPanelSummary>
						<Typography>
							California Online Privacy Protection Act
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.The law 's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel12'}
					onChange={this.handleChange('panel12')}
				>
					<ExpansionPanelSummary>
						<Typography>According to CalOPPA, we agree to the following:</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Users can visit our site anonymously.
							Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.
							<Typography variant="button" >
								Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.
							</Typography>
							You will be notified of any Privacy Policy changes:
										• On our Privacy Policy Page
							Can change your personal information:
										• By emailing us
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
							How does our site handle Do Not Track signals?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track(DNT) browser mechanism is in place.	
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
							Does our site allow third-party behavioral tracking?
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							It's also important to note that we do not allow third-party behavioral tracking
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
							COPPA (Children Online Privacy Protection Act)
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
							<br />
							We do not specifically market to children under the age of 13 years old.
							Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?
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
							Fair Information Practices
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe.Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
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
							In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							We will notify you via email
									• Within 7 business days
							<br />
							We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law.This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and / or prosecute non - compliance by data processors.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel18'}
					onChange={this.handleChange('panel18')}
				>
					<ExpansionPanelSummary>
						<Typography>
							CAN SPAM Act
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel19'}
					onChange={this.handleChange('panel19')}
				>
					<ExpansionPanelSummary>
						<Typography>
							We collect your email address in order to:
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							<Typography variant="h4">YOU HEREIN EXPRESSLY ACKNOWLEDGE AND AGREE THAT:</Typography>
							<ul style={{ textAlign: 'left' }}>
								<li>
									Send information, respond to inquiries, and/or other requests or questions
								</li>
								<li>
									Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.
								</li>
							</ul>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel20'}
					onChange={this.handleChange('panel20')}
				>
					<ExpansionPanelSummary>
						<Typography>
							To be in accordance with CANSPAM, we agree to the following:
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							YOU EXPLICITLY ACKNOWLEDGE, UNDERSTAND AND AGREE THAT TIPESTRY INC.AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY PUNITIVE, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES WHICH MAY BE RELATED TO THE LOSS OF ANY PROFITS, GOODWILL, USE, DATA AND / OR OTHER INTANGIBLE LOSSES, EVEN THOUGH WE MAY HAVE BEEN ADVISED OF SUCH POSSIBILITY THAT SAID DAMAGES MAY OCCUR, AND RESULT FROM:
							<ul style={{ textAlign: 'left' }}>
								<li>
									Not use false or misleading subjects or email addresses.
								</li>
								<li>
									Identify the message as an advertisement in some reasonable way.
								</li>
								<li>
									nclude the physical address of our business or site headquarters.
								</li>
								<li>
									Monitor third-party email marketing services for compliance, if one is used.
								</li>
								<li>
									Honor opt-out/unsubscribe requests quickly.
								</li>
								<li>
									Allow users to unsubscribe by using the link at the bottom of each email.
								</li>
							</ul>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel21'}
					onChange={this.handleChange('panel21')}
				>
					<ExpansionPanelSummary>
						<Typography>
							If at any time you would like to unsubscribe from receiving future emails, you can email us at
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							<a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a> and we will promptly remove you from ALL correspondence.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel22'}
					onChange={this.handleChange('panel22')}
				>
					<ExpansionPanelSummary>
						<Typography>
							Contacting Us
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							If there are any questions regarding this privacy policy, you may contact us using the information below.
							TIPESTRY LTD,
							<br />
							OFFICE 7
							<br />
							35-37 LUDGATE HILL
							<br />
							LONDON
							<br />
							EC4M 7JN
							<br />
							UNITED KINGDOM
							<br />
							<a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}

  render() {
    return (
			<div>
				<Header />
				{
					Lang.locale === "en" ?
						this.displayENG()
					:
						this.displayCN()
				}
			</div>
    );
  }
}

export default PrivacyPolicy;
