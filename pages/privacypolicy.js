import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Header from "../src/components/header/basicheader";


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

  render() {
    const { expanded } = this.state;
    return (
			<div>
				<Header />
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
								Tipestry 
								<br />
								940 Stewart Drive #203
								<br />
								Sunnyvale, CA 94085 US
								<br />
								<a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>
								<br />
								(650) 605-3434
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			</div>
    );
  }
}

export default PrivacyPolicy;
