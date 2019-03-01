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
					<Typography variant="h4" >
						TERMS OF SERVICE AGREEMENT
					</Typography>
					<Typography variant="h6" style={{ fontSize: 15 }} >
						PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR SITES AND OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THE TERMS AND ALL TERMS INCORPORATED HEREIN BY REFERENCE. IT IS THE RESPONSIBILITY OF YOU, THE USER, CUSTOMER, OR PROSPECTIVE CUSTOMER TO READ THE TERMS AND CONDITIONS BEFORE PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF THE TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITES OR OUR SERVICES. THIS TERMS OF SERVICE AGREEMENT IS EFFECTIVE AS OF 08/10/2017.
					</Typography>
					<ExpansionPanel
						square
						expanded={expanded === 'panel1'}
						onChange={this.handleChange('panel1')}
					>
						<ExpansionPanelSummary>
							<Typography>ACCEPTANCE OF TERMS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								The following Terms of Service Agreement (the "TOS") is a legally binding agreement that shall govern the relationship with our users and others which may interact or interface with Tipestry Inc., also known as Tipestry, located at 940 Stewart Drive #203, Sunnyvale, California 94085 and our subsidiaries and affiliates, in association with the use of the Tipestry website, which includes <a href="http://www.tipestry.com">www.tipestry.com</a>, (the "Site") and its Services, which shall be defined below.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel2'}
						onChange={this.handleChange('panel2')}
					>
						<ExpansionPanelSummary>
							<Typography>DESCRIPTION OF WEBSITE SERVICES OFFERED</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								The Site is an online discussion website which has the following description:
								<br />
								Social media platform with built-in cryptocurrency tipping.
								<br />
								Any and all visitors to our site, despite whether they are registered or not, shall be deemed as "users" of the herein contained Services provided for the purpose of this TOS. Once an individual register's for our Services, through the process of creating an account, the user shall then be considered a "member."
								<br />
								The user and/or member acknowledges and agrees that the Services provided and made available through our website and applications, which may include some mobile applications and that those applications may be made available on various social media networking sites and numerous other platforms and downloadable programs, are the sole property of Tipestry Inc.. At its discretion, Tipestry Inc. may offer additional website Services and/or products, or update, modify or revise any current content and Services, and this Agreement shall apply to any and all additional Services and/or products and any and all updated, modified or revised Services unless otherwise stipulated. Tipestry Inc. does hereby reserve the right to cancel and cease offering any of the aforementioned Services and/or products. You, as the end user and/or member, acknowledge, accept and agree that Tipestry Inc. shall not be held liable for any such updates, modifications, revisions, suspensions or discontinuance of any of our Services and/or products. Your continued use of the Services provided, after such posting of any updates, changes, and/or modifications shall constitute your acceptance of such updates, changes and/or modifications, and as such, frequent review of this Agreement and any and all applicable terms and policies should be made by you to ensure you are aware of all terms and policies currently in effect. Should you not agree to the updated, revised or modified terms, you must stop using the provided Services forthwith.
								<br />
								Furthermore, the user and/or member understands, acknowledges and agrees that the Services offered shall be provided "AS IS" and as such Tipestry Inc. shall not assume any responsibility or obligation for the timeliness, missed delivery, deletion and/or any failure to store user content, communication or personalization settings.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel3'}
						onChange={this.handleChange('panel3')}
					>
						<ExpansionPanelSummary>
							<Typography>REGISTRATION</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								To register and become a "member" of the Site, you must be at least 18 years of age to enter into and form a legally binding contract.In addition, you must be in good standing and not an individual that has been previously barred from receiving Tipestry 's Services under the laws and statutes of the United States or other applicable jurisdiction.
								<br />
								When you register, Tipestry may collect information such as your name, e - mail address, birth date, gender, mailing address, occupation, industry and personal interests.You can edit your account information at any time.Once you register with Tipestry and sign in to our Services, you are no longer anonymous to us.

								<Typography variant="button" >
									Furthermore, the registering party hereby acknowledges, understands and agrees to:
								</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>
										furnish factual, correct, current and complete information with regards to yourself as may be requested by the data registration process, and
									</li>
									<li>
										maintain and promptly update your registration and profile information in an effort to maintain accuracy and completeness at all times.
									</li>
								</ul>
									If anyone knowingly provides any information of a false, untrue, inaccurate or incomplete nature, Tipestry Inc. will have sufficient grounds and rights to suspend or terminate the member in violation of this aspect of the Agreement, and as such refuse any and all current or future use of Tipestry Inc. Services, or any portion thereof.


									It is Tipestry Inc.'s priority to ensure the safety and privacy of all its visitors, users and members, especially that of children. Therefore, it is for this reason that the parents of any child under the age of 13 that permit their child or children access to the Tipestry website platform Services must create a "family" account, which will certify that the individual creating the "family" account is of 18 years of age and as such, the parent or legal guardian of any child or children registered under the "family" account. As the creator of the "family" account, s/he is thereby granting permission for his/her child or children to access the various Services provided, including, but not limited to, message boards, email, and/or instant messaging. It is the parent's and/or legal guardian's responsibility to determine whether any of the Services and/or content provided are age-appropriate for his/her child.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel4'}
						onChange={this.handleChange('panel4')}
					>
						<ExpansionPanelSummary>
							<Typography>MEMBER ACCOUNT, USERNAME, PASSWORD AND SECURITY</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								When you set up an account, you are the sole authorized user of your account. You shall be responsible for maintaining the secrecy and confidentiality of your password and for all activities that transpire on or within your account. It is your responsibility for any act or omission of any user(s) that access your account information that, if undertaken by you, would be deemed a violation of the TOS. It shall be your responsibility to notify Tipestry Inc. immediately if you notice any unauthorized access or use of your account or password or any other breach of security. Tipestry Inc. shall not be held liable for any loss and/or damage arising from any failure to comply with this term and/or condition of the TOS.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel5'}
						onChange={this.handleChange('panel5')}
					>
						<ExpansionPanelSummary>
							<Typography>RISKS INVOLVING CRYPTOCURRENCY</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry takes no responsibility for any loss of coins or tokens tipped, held, sent or received via the processes integrated into our web platform. Send and hold cryptocurrencies here at your own risk. Further, holding cryptocurrency in general, especially through a web service or “hot wallet”, involves substantial risk of loss both from malicious actors and technical issues. As a user or member of the Site and service, you herein acknowledge, understand and agree that cryptocurrency used on Tipestry can be lost at any time and that Tipestry is under no obligation to compensate or provide any form of reimbursement in any manner or nature. Further, violating these Terms of Service can result in the forfeiture of any and all coins or tokens held on the platform. “Not your keys, not your Bitcoin.” Until you withdraw cryptocurrency from the platform, they do not actually belong to you.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel6'}
						onChange={this.handleChange('panel6')}
					>
						<ExpansionPanelSummary>
							<Typography>CONDUCT</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								As a user or member of the Site, you herein acknowledge, understand and agree that all information, text, software, data, photographs, music, video, messages, tags or any other content, whether it is publicly or privately posted and/or transmitted, is the expressed sole responsibility of the individual from whom the content originated. In short, this means that you are solely responsible for any and all content posted, uploaded, emailed, transmitted or otherwise made available by way of the Tipestry Services, and as such, we do not guarantee the accuracy, integrity or quality of such content. It is expressly understood that by use of our Services, you may be exposed to content including, but not limited to, any errors or omissions in any content posted, and/or any loss or damage of any kind incurred as a result of the use of any content posted, emailed, transmitted or otherwise made available by Tipestry.

								<Typography variant="button" >
									Furthermore, you herein agree not to make use of Tipestry Inc.'s Services for the purpose of:
								</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>
										uploading, posting, emailing, transmitting, or otherwise making available any content that shall be deemed unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or invasive of another's privacy or which is hateful, and/or racially, ethnically, or otherwise objectionable;
									</li>
									<li>
										 causing harm to minors in any manner whatsoever;
									</li>
									<li>
										impersonating any individual or entity, including, but not limited to, any Tipestry officials, forum leaders, guides or hosts or falsely stating or otherwise misrepresenting any affiliation with an individual or entity;									
									</li>
									<li>
										forging captions, headings or titles or otherwise offering any content that you personally have no right to pursuant to any law nor having any contractual or fiduciary relationship with;									
									</li>
									<li>
										uploading, posting, emailing, transmitting or otherwise offering any such content that may infringe upon any patent, copyright, trademark, or any other proprietary or intellectual rights of any other party;									
									</li>
									<li>
										uploading, posting, emailing, transmitting or otherwise offering any content that you do not personally have any right to offer pursuant to any law or in accordance with any contractual or fiduciary relationship;
									</li>
									<li>
										uploading, posting, emailing, transmitting, or otherwise offering any unsolicited or unauthorized advertising, promotional flyers, "junk mail," "spam," or any other form of solicitation, except in any such areas that may have been designated for such purpose;
									</li>
									<li>
										uploading, posting, emailing, transmitting, or otherwise offering any source that may contain a software virus or other computer code, any files and/or programs which have been designed to interfere, destroy and/or limit the operation of any computer software, hardware, or telecommunication equipment;
									</li>
									<li>
										disrupting the normal flow of communication, or otherwise acting in any manner that would negatively affect other users' ability to participate in any real time interactions;
									</li>
									<li>
										interfering with or disrupting any Tipestry Inc. Services, servers and/or networks that may be connected or related to our website, including, but not limited to, the use of any device software and/or routine to bypass the robot exclusion headers;
									</li>
									<li>
										intentionally or unintentionally violating any local, state, federal, national or international law, including, but not limited to, rules, guidelines, and/or regulations decreed by the U.S. Securities and Exchange Commission, in addition to any rules of any nation or other securities exchange, that would include without limitation, the New York Stock Exchange, the American Stock Exchange, or the NASDAQ, and any regulations having the force of law;
									</li>
									<li>
										providing informational support or resources, concealing and/or disguising the character, location, and or source to any organization delegated by the United States government as a "foreign terrorist organization" in accordance to Section 219 of the Immigration Nationality Act;
									</li>
									<li>
										"stalking" or with the intent to otherwise harass another individual; and/or
									</li>
									<li>
										collecting or storing of any personal data relating to any other member or user in connection with the prohibited conduct and / or activities which have been set forth in the aforementioned paragraphs.
									</li>
								</ul>
									Tipestry Inc. herein reserves the right to pre-screen, refuse and/or delete any content currently available through our Services. In addition, we reserve the right to remove and/or delete any such content that would violate the TOS or which would otherwise be considered offensive to other visitors, users and/or members.

								<Typography variant="button" >
									Tipestry Inc. herein reserves the right to access, preserve and/or disclose member account information and/or content if it is requested to do so by law or in good faith belief that any such action is deemed reasonably necessary for:

								</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>Compliance with any legal process;</li>
									<li>Enforcement of the TOS;</li>
									<li>Responding to any claim that therein contained content is in violation of the rights of any third party;</li>
									<li>Responding to requests for customer service; or</li>
									<li>Protecting the rights, property or the personal safety of Tipestry Inc., its visitors, users and members, including the general public.</li>
								</ul>
									
									Tipestry Inc. herein reserves the right to include the use of security components that may permit digital information or material to be protected, and that such use of information and/or material is subject to usage guidelines and regulations established by Tipestry Inc. or any other content providers supplying content services to Tipestry Inc.. You are hereby prohibited from making any attempt to override or circumvent any of the embedded usage rules in our Services. Furthermore, unauthorized reproduction, publication, distribution, or exhibition of any information or materials supplied by our Services, despite whether done so in whole or in part, is expressly prohibited.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel7'}
						onChange={this.handleChange('panel7')}
					>
						<ExpansionPanelSummary>
							<Typography>INTERSTATE COMMUNICATION</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Upon registration, you hereby acknowledge that by using www.tipestry.com to send electronic communications, which would include, but are not limited to, email, searches, instant messages, uploading of files, photos and/or videos, you will be causing communications to be sent through our computer network. Therefore, through your use, and thus your agreement with this TOS, you are acknowledging that the use of this Service shall result in interstate transmissions.

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
								CAUTIONS FOR GLOBAL USE AND EXPORT AND IMPORT COMPLIANCE
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Due to the global nature of the internet, through the use of our network you hereby agree to comply with all local rules relating to online conduct and that which is considered acceptable Content. Uploading, posting and/or transferring of software, technology and other technical data may be subject to the export and import laws of the United States and possibly other countries. Through the use of our network, you thus agree to comply with all applicable export and import laws, statutes and regulations, including, but not limited to, the Export Administration Regulations
								<a href="http://www.access.gpo.gov/bis/ear/ear_data.html" >(http://www.access.gpo.gov/bis/ear/ear_data.html)</a>, 
								as well as the sanctions control program of the United States 
								<a href="http://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx">(http://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx)</a>. 
								Furthermore, you state and pledge that you:
								<ul style={{ textAlign: 'left' }}>
									<li>
										are not on the list of prohibited individuals which may be identified on any government export exclusion report 
										<a href="http://www.bis.doc.gov/complianceandenforcement/liststocheck.htm">(http://www.bis.doc.gov/complianceandenforcement/liststocheck.htm)</a> 
										nor a member of any other government which may be part of an export-prohibited country identified in applicable export and import laws and regulations;
									</li>
									<li>
										agree not to transfer any software, technology or any other technical data through the use of our network Services to any export-prohibited country;									
									</li>
									<li>
										agree not to use our website network Services for any military, nuclear, missile, chemical or biological weaponry end uses that would be a violation of the U.S. export laws; and									
									</li>
									<li>
										agree not to post, transfer nor upload any software, technology or any other technical data which would be in violation of the U.S. or other applicable export and/or import laws.
									
									</li>
								</ul>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel9'}
						onChange={this.handleChange('panel9')}
					>
						<ExpansionPanelSummary>
							<Typography>CONTENT PLACED OR MADE AVAILABLE FOR COMPANY SERVICES</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry Inc. shall not lay claim to ownership of any content submitted by any visitor, member, or user, nor make such content available for inclusion on our website Services. Therefore, you hereby grant and allow for Tipestry Inc. the below listed worldwide, royalty-free and non-exclusive licenses, as applicable:								
								
								<ul style={{ textAlign: 'left' }}>
									<li>
										The content submitted or made available for inclusion on the publicly accessible areas of Tipestry Inc.'s sites, the license provided to permit to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display said Content on our network Services is for the sole purpose of providing and promoting the specific area to which this content was placed and/or made available for viewing. This license shall be available so long as you are a member of Tipestry Inc.'s sites, and shall terminate at such time when you elect to discontinue your membership.										
									</li>
									<li>
										Photos, audio, video and/or graphics submitted or made available for inclusion on the publicly accessible areas of Tipestry Inc.'s sites, the license provided to permit to use, distribute, reproduce, modify, adapt, publicly perform and/or publicly display said Content on our network Services are for the sole purpose of providing and promoting the specific area in which this content was placed and/or made available for viewing. This license shall be available so long as you are a member of Tipestry Inc.'s sites and shall terminate at such time when you elect to discontinue your membership.										
									</li>
									<li>
										For any other content submitted or made available for inclusion on the publicly accessible areas of Tipestry Inc.'s sites, the continuous, binding and completely sub-licensable license which is meant to permit to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and/or publicly display said content, whether in whole or in part, and the incorporation of any such Content into other works in any arrangement or medium current used or later developed.										
									</li>
								</ul>
									Those areas which may be deemed "publicly accessible" areas of Tipestry Inc.'s sites are those such areas of our network properties which are meant to be available to the general public, and which would include message boards and groups that are openly available to both users and members. However, those areas which are not open to the public, and thus available to members only, would include our mail system and instant messaging.
							
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel10'}
						onChange={this.handleChange('panel10')}
					>
						<ExpansionPanelSummary>
							<Typography>CONTRIBUTIONS TO COMPANY WEBSITE</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry Inc. provides an area for our users and members to contribute feedback to our website. When you submit ideas, documents, suggestions and/or proposals ("Contributions") to our site, you acknowledge and agree that:
								
								<ul style={{ textAlign: 'left' }}>
									<li>
										your contributions do not contain any type of confidential or proprietary information;
									</li>
									<li>
										Tipestry shall not be liable or under any obligation to ensure or maintain confidentiality, expressed or implied, related to any Contributions;
									</li>
									<li>
										Tipestry shall be entitled to make use of and / or disclose any such Contributions in any such manner as they may see fit;
									</li>
									<li>
										the contributor 's Contributions shall automatically become the sole property of Tipestry; and
									</li>
									<li> 
										 Tipestry is under no obligation to either compensate or provide any form of reimbursement in any manner or nature.
									</li>
								</ul>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel11'}
						onChange={this.handleChange('panel11')}
					>
						<ExpansionPanelSummary>
							<Typography>INDEMNITY</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								All users and/or members herein agree to insure and hold Tipestry Inc., our subsidiaries, affiliates, agents, employees, officers, partners and/or licensors blameless or not liable for any claim or demand, which may include, but is not limited to, reasonable attorney fees made by any third party which may arise from any content a member or user of our site may submit, post, modify, transmit or otherwise make available through our Services, the use of  Tipestry Services or your connection with these Services, your violations of the Terms of Service and/or your violation of any such rights of another person.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel12'}
						onChange={this.handleChange('panel12')}
					>
						<ExpansionPanelSummary>
							<Typography>COMMERCIAL REUSE OF SERVICES</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								The member or user herein agrees not to replicate, duplicate, copy, trade, sell, resell nor exploit for any commercial reason any part, use of, or access to Tipestry's sites.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel13'}
						onChange={this.handleChange('panel13')}
					>
						<ExpansionPanelSummary>
							<Typography>USE AND STORAGE GENERAL PRACTICES</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								You herein acknowledge that Tipestry Inc. may set up any such practices and/or limits regarding the use of our Services, without limitation of the maximum number of days that any email, message posting or any other uploaded content shall be retained by Tipestry Inc., nor the maximum number of email messages that may be sent and/or received by any member, the maximum volume or size of any email message that may be sent from or may be received by an account on our Service, the maximum disk space allowable that shall be allocated on Tipestry Inc.'s servers on the member's behalf, and/or the maximum number of times and/or duration that any member may access our Services in a given period of time.  In addition, you also agree that Tipestry Inc. has absolutely no responsibility or liability for the removal or failure to maintain storage of any messages and/or other communications or content maintained or transmitted by our Services. You also herein acknowledge that we reserve the right to delete or remove any account that is no longer active for an extended period of time. Furthermore, Tipestry Inc. shall reserve the right to modify, alter and/or update these general practices and limits at our discretion.
								<br />
								Any messenger service, which may include any web-based versions, shall allow you and the individuals with whom you communicate with the ability to save your conversations in your account located on Tipestry Inc.'s servers. In this manner, you will be able to access and search your message history from any computer with internet access. You also acknowledge that others have the option to use and save conversations with you in their own personal account on www.tipestry.com. It is your agreement to this TOS which establishes your consent to allow Tipestry Inc. to store any and all communications on its servers.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel14'}
						onChange={this.handleChange('panel14')}
					>
						<ExpansionPanelSummary> 
							<Typography>MODIFICATIONS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry Inc. shall reserve the right at any time it may deem fit, to modify, alter and or discontinue, whether temporarily or permanently, our service, or any part thereof, with or without prior notice. In addition, we shall not be held liable to you or to any third party for any such alteration, modification, suspension and/or discontinuance of our Services, or any part thereof.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel15'}
						onChange={this.handleChange('panel15')}
					>
						<ExpansionPanelSummary>
							<Typography>TERMINATION</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								As a member of www.tipestry.com, you may cancel or terminate your account, associated email address and/or access to our Services by submitting a cancellation or termination request to <a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>.
								<br />
								As a member, you agree that Tipestry Inc. may, without any prior written notice, immediately suspend, terminate, discontinue and/or limit your account, any email associated with your account, and access to any of our Services. The cause for such termination, discontinuance, suspension and/or limitation of access shall include, but is not limited to:

								<ul style={{ textAlign: 'left' }} >
									<li>
										any breach or violation of our TOS or any other incorporated agreement, regulation and/or guideline;
									</li>
									<li>
										by way of requests from law enforcement or any other governmental agencies;
									</li>
									<li>
										he discontinuance, alteration and/or material modification to our Services, or any part thereof;
									</li>
									<li>
										unexpected technical or security issues and/or problems;
									</li>
									<li>
										any extended periods of inactivity;
									</li>
									<li>
										any engagement by you in any fraudulent or illegal activities; and/or
									</li>
									<li>
										the nonpayment of any associated fees that may be owed by you in connection with your <a href="http://www.tipestry.com">www.tipestry.com</a> account Services.
									</li>
								</ul>
								<br />
								Furthermore, you herein agree that any and all terminations, suspensions, discontinuances, and or limitations of access for cause shall be made at our sole discretion and that we shall not be liable to you or any other third party with regards to the termination of your account, associated email address and/or access to any of our Services.

								<Typography variant="button" >The termination of your account with www.tipestry.com shall include any and/or all of the following:</Typography>
								<ul>
									<li>
										the removal of any access to all or part of the Services offered within <a href="http://www.tipestry.com">www.tipestry.com</a>;
									</li>
									<li>the deletion of your password and any and all related information, files, and any such content that may be associated with or inside your account, or any part thereof; and</li>
									<li>the barring of any further use of all or part of our Services.</li>
								</ul>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel16'}
						onChange={this.handleChange('panel16')}
					>
						<ExpansionPanelSummary>
							<Typography>ADVERTISERS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Any correspondence or business dealings with, or the participation in any promotions of, advertisers located on or through our Services, which may include the payment and/or delivery of such related goods and/or Services, and any such other term, condition, warranty and/or representation associated with such dealings, are and shall be solely between you and any such advertiser. Moreover, you herein agree that Tipestry Inc. shall not be held responsible or liable for any loss or damage of any nature or manner incurred as a direct result of any such dealings or as a result of the presence of such advertisers on our website.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel17'}
						onChange={this.handleChange('panel17')}
					>
						<ExpansionPanelSummary>
							<Typography>LINKS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Either Tipestry Inc. or any third parties may provide links to other websites and/or resources. Thus, you acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and as such, we do not endorse nor are we responsible or liable for any content, products, advertising or any other materials, on or available from such third party sites or resources. Furthermore, you acknowledge and agree that Tipestry Inc. shall not be responsible or liable, directly or indirectly, for any such damage or loss which may be a result of, caused or allegedly to be caused by or in connection with the use of or the reliance on any such content, goods or Services made available on or through any such site or resource.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel18'}
						onChange={this.handleChange('panel18')}
					>
						<ExpansionPanelSummary>
							<Typography>PROPRIETARY RIGHTS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								You do hereby acknowledge and agree that Tipestry Inc.'s Services and any essential software that may be used in connection with our Services ("Software") shall contain proprietary and confidential material that is protected by applicable intellectual property rights and other laws. Furthermore, you herein acknowledge and agree that any Content which may be contained in any advertisements or information presented by and through our Services or by advertisers is protected by copyrights, trademarks, patents or other proprietary rights and laws. Therefore, except for that which is expressly permitted by applicable law or as authorized by Tipestry Inc. or such applicable licensor, you agree not to alter, modify, lease, rent, loan, sell, distribute, transmit, broadcast, publicly perform and/or created any plagiaristic works which are based on Tipestry Inc. Services (e.g. Content or Software), in whole or part.

								<br />
								Tipestry Inc. herein has granted you personal, non-transferable and non-exclusive rights and/or license to make use of the object code or our Software on a single computer, as long as you do not, and shall not, allow any third party to duplicate, alter, modify, create or plagiarize work from, reverse engineer, reverse assemble or otherwise make an attempt to locate or discern any source code, sell, assign, sublicense, grant a security interest in and/or otherwise transfer any such right in the Software. Furthermore, you do herein agree not to alter or change the Software in any manner, nature or form, and as such, not to use any modified versions of the Software, including and without limitation, for the purpose of obtaining unauthorized access to our Services. Lastly, you also agree not to access or attempt to access our Services through any means other than through the interface which is provided by Tipestry Inc. for use in accessing our Services.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel19'}
						onChange={this.handleChange('panel19')}
					>
						<ExpansionPanelSummary>
							<Typography>WARRANTY DISCLAIMERS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								<Typography variant="h4">YOU HEREIN EXPRESSLY ACKNOWLEDGE AND AGREE THAT:</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>
										THE USE OF TIPESTRY INC. SERVICES AND SOFTWARE ARE AT THE SOLE RISK BY YOU. OUR SERVICES AND SOFTWARE SHALL BE PROVIDED ON AN "AS IS" AND/OR "AS AVAILABLE" BASIS. TIPESTRY INC. AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES OF ANY KIND WHETHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
									</li>
									<li>
										TIPESTRY INC. AND OUR SUBSIDIARIES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS MAKE NO SUCH WARRANTIES THAT (i) TIPESTRY INC. SERVICES OR SOFTWARE WILL MEET YOUR REQUIREMENTS; (ii) TIPESTRY INC. SERVICES OR SOFTWARE SHALL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (iii) THAT SUCH RESULTS WHICH MAY BE OBTAINED FROM THE USE OF THE TIPESTRY INC. SERVICES OR SOFTWARE WILL BE ACCURATE OR RELIABLE; (iv) QUALITY OF ANY PRODUCTS, SERVICES, ANY INFORMATION OR OTHER MATERIAL WHICH MAY BE PURCHASED OR OBTAINED BY YOU THROUGH OUR SERVICES OR SOFTWARE WILL MEET YOUR EXPECTATIONS; AND (v) THAT ANY SUCH ERRORS CONTAINED IN THE SOFTWARE SHALL BE CORRECTED.
									</li>
									<li>
										ANY INFORMATION OR MATERIAL DOWNLOADED OR OTHERWISE OBTAINED BY WAY OF TIPESTRY INC. SERVICES OR SOFTWARE SHALL BE ACCESSED BY YOUR SOLE DISCRETION AND SOLE RISK, AND AS SUCH YOU SHALL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS AND CAUSES OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER AND/OR INTERNET ACCESS, DOWNLOADING AND/OR DISPLAYING, OR FOR ANY LOSS OF DATA THAT COULD RESULT FROM THE DOWNLOAD OF ANY SUCH INFORMATION OR MATERIAL.
									</li>
									<li>
										NO ADVICE AND/OR INFORMATION, DESPITE WHETHER WRITTEN OR ORAL, THAT MAY BE OBTAINED BY YOU FROM TIPESTRY INC. OR BY WAY OF OR FROM OUR SERVICES OR SOFTWARE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THE TOS.
									</li>
									<li> 
										A SMALL PERCENTAGE OF SOME USERS MAY EXPERIENCE SOME DEGREE OF EPILEPTIC SEIZURE WHEN EXPOSED TO CERTAIN LIGHT PATTERNS OR BACKGROUNDS THAT MAY BE CONTAINED ON A COMPUTER SCREEN OR WHILE USING OUR SERVICES. CERTAIN CONDITIONS MAY INDUCE A PREVIOUSLY UNKNOWN CONDITION OR UNDETECTED EPILEPTIC SYMPTOM IN USERS WHO HAVE SHOWN NO HISTORY OF ANY PRIOR SEIZURE OR EPILEPSY. SHOULD YOU, ANYONE YOU KNOW OR ANYONE IN YOUR FAMILY HAVE AN EPILEPTIC CONDITION, PLEASE CONSULT A PHYSICIAN IF YOU EXPERIENCE ANY OF THE FOLLOWING SYMPTOMS WHILE USING OUR SERVICES: DIZZINESS, ALTERED VISION, EYE OR MUSCLE TWITCHES, LOSS OF AWARENESS, DISORIENTATION, ANY INVOLUNTARY MOVEMENT, OR CONVULSIONS.
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
							<Typography>LIMITATION OF LIABILITY</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								YOU EXPLICITLY ACKNOWLEDGE, UNDERSTAND AND AGREE THAT TIPESTRY INC. AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY PUNITIVE, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES WHICH MAY BE RELATED TO THE LOSS OF ANY PROFITS, GOODWILL, USE, DATA AND/OR OTHER INTANGIBLE LOSSES, EVEN THOUGH WE MAY HAVE BEEN ADVISED OF SUCH POSSIBILITY THAT SAID DAMAGES MAY OCCUR, AND RESULT FROM:

								<ul style={{ textAlign: 'left' }}>
									<li>THE USE OR INABILITY TO USE OUR SERVICE;</li>
									<li>THE COST OF PROCURING SUBSTITUTE GOODS AND SERVICES;</li>
									<li>UNAUTHORIZED ACCESS TO OR THE ALTERATION OF YOUR TRANSMISSIONS AND/OR DATA;</li>
									<li>STATEMENTS OR CONDUCT OF ANY SUCH THIRD PARTY ON OUR SERVICE;</li>
									<li>AND ANY OTHER MATTER WHICH MAY BE RELATED TO OUR SERVICE.</li>
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
							<Typography>RELEASE</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								In the event you have a dispute, you agree to release Tipestry Inc.(and its officers, directors, employees, agents, parent subsidiaries, affiliates, co - branders, partners and any other third parties) from claims, demands and damages(actual and consequential) of every kind and nature, known and unknown, suspected or unsuspected, disclosed and undisclosed, arising out of or in any way connected to such dispute.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel22'}
						onChange={this.handleChange('panel22')}
					>
						<ExpansionPanelSummary>
							<Typography>SPECIAL ADMONITION RELATED TO FINANCIAL MATTERS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Should you intend to create or to join any service, receive or request any such news, messages, alerts or other information from our Services concerning companies, stock quotes, investments or securities, please review the above Sections Warranty Disclaimers and Limitations of Liability again. In addition, for this particular type of information, the phrase "Let the investor beware" is appropriate. Tipestry Inc.'s content is provided primarily for informational purposes, and no content that shall be provided or included in our Services is intended for trading or investing purposes. Tipestry Inc. and our licensors shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted and/or made available by way of our Services, and shall not be responsible or liable for any trading and/or investment decisions based on any such information.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel23'}
						onChange={this.handleChange('panel23')}
					>
						<ExpansionPanelSummary>
							<Typography>EXCLUSION AND LIMITATIONS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								THERE ARE SOME JURISDICTIONS WHICH DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OF EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES.THEREFORE, SOME OF THE ABOVE LIMITATIONS OF SECTIONS WARRANTY DISCLAIMERS AND LIMITATION OF LIABILITY MAY NOT APPLY TO YOU.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel24'}
						onChange={this.handleChange('panel24')}
					>
						<ExpansionPanelSummary>
							<Typography>THIRD PARTY BENEFICIARIES</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								You herein acknowledge, understand and agree, unless otherwise expressly provided in this TOS, that there shall be no third-party beneficiaries to this agreement.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel25'}
						onChange={this.handleChange('panel25')}
					>
						<ExpansionPanelSummary>
							<Typography>NOTICE</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry Inc. may furnish you with notices, including those with regards to any changes to the TOS, including but not limited to email, regular mail, MMS or SMS, text messaging, postings on our website Services, or other reasonable means currently known or any which may be herein after developed. Any such notices may not be received if you violate any aspects of the TOS by accessing our Services in an unauthorized manner. Your acceptance of this TOS constitutes your agreement that you are deemed to have received any and all notices that would have been delivered had you accessed our Services in an authorized manner.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel26'}
						onChange={this.handleChange('panel26')}
					>
						<ExpansionPanelSummary>
							<Typography>TRADEMARK INFORMATION</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								You herein acknowledge, understand and agree that all of the Tipestry Inc. trademarks, copyright, trade name, service marks, and other Tipestry Inc. logos and any brand features, and/or product and service names are trademarks and as such, are and shall remain the property of Tipestry Inc.. You herein agree not to display and/or use in any manner the Tipestry Inc. logo or marks without obtaining Tipestry Inc.'s prior written consent.

							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel27'}
						onChange={this.handleChange('panel27')}
					>
						<ExpansionPanelSummary>
							<Typography>COPYRIGHT OR INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS NOTICE & PROCEDURES</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Tipestry Inc. will always respect the intellectual property of others, and we ask that all of our users do the same. With regards to appropriate circumstances and at its sole discretion, Tipestry Inc. may disable and/or terminate the accounts of any user who violates our TOS and/or infringes the rights of others. If you feel that your work has been duplicated in such a way that would constitute copyright infringement, or if you believe your intellectual property rights have been otherwise violated, you should provide to us the following information:

								<ul style={{ textAlign: 'left' }} >
									<li>
										The electronic or the physical signature of the individual that is authorized on behalf of the owner of the copyright or other intellectual property interest;	
									</li>
									<li>
										A description of the copyrighted work or other intellectual property that you believe has been infringed upon;
									</li>
									<li>
										A description of the location of the site which you allege has been infringing upon your work;
									</li>
									<li>
										Your physical address, telephone number, and email address;
									</li>
									<li>
										A statement, in which you state that the alleged and disputed use of your work is not authorized by the copyright owner, its agents or the law;
									</li>
									<li>
										And finally, a statement, made under penalty of perjury, that the aforementioned information in your notice is truthful and accurate, and that you are the copyright or intellectual property owner, representative or agent authorized to act on the copyright or intellectual property owner's behalf.
									</li>
								</ul>
								<br />

								<Typography variant="button" >The Tipestry Inc. Agent for notice of claims of copyright or other intellectual property infringement can be contacted as follows:</Typography>
								Mailing Address:
								<br />
								Tipestry Inc.
								<br />
								Attn: Copyright Agent
								<br />
								940 Stewart Drive #203
								<br />
								Sunnyvale, California 94085
								<br />
								Telephone: (650) 605-3434
								<br />
								Email: <a href='mailto:feedback@tipestry.com'>feedback@tipestry.com</a>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel47'}
						onChange={this.handleChange('panel47')}
					>
						<ExpansionPanelSummary>
							<Typography>CLOSED CAPTIONING</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								BE IT KNOWN, that Tipestry Inc.complies with all applicable Federal Communications Commission rules and regulations regarding the closed captioning of video content.For more information, please visit our website at <a href="http://www.tipestry.com">www.tipestry.com</a>.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel28'}
						onChange={this.handleChange('panel28')}
					>
						<ExpansionPanelSummary>
							<Typography>GENERAL INFORMATION</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								<ul style={{ textAlign: 'left' }} >
									<li>
										<Typography style={{ textDecoration: 'underline' }} >ENTIRE AGREEMENT</Typography>
										This TOS constitutes the entire agreement between you and Tipestry Inc. and shall govern the use of our Services, superseding any prior version of this TOS between you and us with respect to Tipestry Inc. Services. You may also be subject to additional terms and conditions that may apply when you use or purchase certain other Tipestry Inc. Services, affiliate Services, third-party content or third-party software.

									</li>
									<li>
										<Typography style={{ textDecoration: 'underline' }} >CHOICE OF LAW AND FORUM</Typography>
										It is at the mutual agreement of both you and Tipestry Inc. with regard to the TOS that the relationship between the parties shall be governed by the laws of the state of California without regard to its conflict of law provisions and that any and all claims, causes of action and/or disputes, arising out of or relating to the TOS, or the relationship between you and Tipestry Inc., shall be filed within the courts having jurisdiction within the County of Santa Clara, California or the U.S. District Court located in said state. You and Tipestry Inc. agree to submit to the jurisdiction of the courts as previously mentioned, and agree to waive any and all objections to the exercise of jurisdiction over the parties by such courts and to venue in such courts.

									</li>
									<li>
										<Typography style={{ textDecoration: 'underline' }} >WAIVER AND SEVERABILITY OF TERMS</Typography>
										At any time, should Tipestry Inc. fail to exercise or enforce any right or provision of the TOS, such failure shall not constitute a waiver of such right or provision. If any provision of this TOS is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the TOS remain in full force and effect.

									</li>
									<li>
										<Typography style={{ textDecoration: 'underline' }} >NO RIGHT OF SURVIVORSHIP NON-TRANSFERABILITY</Typography>
										You acknowledge, understand and agree that your account is non-transferable and any rights to your ID and/or contents within your account shall terminate upon your death. Upon receipt of a copy of a death certificate, your account may be terminated and all contents therein permanently deleted.

									</li>
									<li>
										<Typography style={{ textDecoration: 'underline' }} >STATUTE OF LIMITATIONS</Typography>
										You acknowledge, understand and agree that regardless of any statute or law to the contrary, any claim or action arising out of or related to the use of our Services or the TOS must be filed within 1 year(s) after said claim or cause of action arose or shall be forever barred.

									</li>
								</ul>
								<br />
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel29'}
						onChange={this.handleChange('panel29')}
					>
						<ExpansionPanelSummary>
							<Typography>VIOLATIONS</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								<Typography variant="h4">Please report any and all violations of this TOS to Tipestry Inc. as follows:</Typography>
								<br />
								Mailing Address:
								<br />
								Tipestry Inc.
								<br />
								940 Stewart Drive #203
								<br />
								Sunnyvale, California 94085
								<br />
								Email: <a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
			</div>
    );
  }
}

export default PrivacyPolicy;
