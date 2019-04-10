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
	
	displayEn = () => {
    const { expanded } = this.state;
		return (
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
								The following Terms of Service Agreement (the "TOS") is a legally binding agreement that shall govern the relationship with our users and others 
								which may interact or interface with Tipestry Inc., also known as Tipestry, 
								located at 35 - 37 LUDGATE HILL, LONDON, EC4M 7 JN, UNITED KINGDOM and our subsidiaries and affiliates,
								in association with the use of the Tipestry website, which includes 
								<a href="http://www.tipestry.com">www.tipestry.com</a>, (the "Site") and its Services, which shall be defined below.
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
								TIPESTRY LTD,
								<br />
								35-37 LUDGATE HILL
								<br />
								LONDON
								<br />
								EC4M 7JN
								<br />
								UNITED KINGDOM
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
								Email: <a href="mailto:feedback@tipestry.com">feedback@tipestry.com</a>
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
		)
	}

	displayCn = () => {
    const { expanded } = this.state;
		return (
			<div style={{ textAlign: 'center', margin: "80px 10%" }} >
					<Typography variant="h4" >
						互联网服务条款
					</Typography>
					<ul style={{ textAlign: 'left' }}>
						<li>
							 总则
						</li>
						<li>
							账户
						</li>
						<li>
							互联网平台服务使用守则
						</li>
						<li>
							您的权利和义务
						</li>
						<li>
							本公司的权利和义务
						</li>
						<li>
							 隐私及其他个人信息的保护
						</li>
						<li>
							系统中断或故障
						</li>
						<li>
							责任范围及责任限制
						</li>
						<li>
							 完整协议
						</li>
						<li>
							商标、知识产权的保护
						</li>
						<li>
							法律适用与争议解决
						</li>
					</ul>
					<Typography variant="h6" style={{ fontSize: 15 }} >
						互联网服务（以下简称“本服务”）是由互联网科技股份有限公司（以下简称“本公司”）向用户提供的云计算产品与服务。本条款由您和本公司签订。
					</Typography>
					<ExpansionPanel
						square
						expanded={expanded === 'panel1'}
						onChange={this.handleChange('panel1')}
					>
						<ExpansionPanelSummary>
							<Typography>
								总则
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								您确认：您在使用本服务之前，请您充分阅读、理解并接受本协议的全部内容，一旦您选择“同意”并完成注册、开启流程或使用本服务，即表示您同意遵循本协议之所有约定。
								 <br />
								您同意：本公司有权随时对本协议及相应的服务规则、服务内容、产品说明、产品功能等进行单方面的变更，并以消息推送、网页公告、短信群发等一种或多种方式予以公布，无需另行单独通知您，此种变更或调整不视为本公司违反本协议约定；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议内容，也将按照修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应立即停止使用本服务。
								 <br />
								您认可：本协议受中华人民共和国现行及不时更新的法律、法规之约束。本公司提供的服务内容和要求不受您所属国家或地区法律的排斥。如本协议约定与您所属国家、地区的法律法规相抵触，双方认可以中华人民共和国法律法规为唯一准据法。
								 <br />
								您声明：在您同意接受本协议并注册成为互联网平台用户时，您具有法律规定的完全民事权利能力和民事行为能力，并能够独立承担民事责任的自然人、法人或其他组织，或已经取得了充分的授权。不具备前述条件的，您应立即终止注册或停止使用本服务。
								 <br />
								您承诺：针对本协议项下相关产品、服务的使用行为，除应符合相关法律法规的规定外，还应符合社会公共道德的要求，不应损害任意第三方的合法权益，如因此遇到第三方追偿或权利主张，您应当承担全部责任，并确保本公司及其相关股东、董事会成员、各级管理成员等不受到牵连或因此而承担任何责任。对于任何第三方的损失，本公司不承担任何关联赔偿或作出任何承诺。
 
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
								账户
								注册
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								在使用本服务前，您必须先行注册，取得本公司提供给您的互联网平台账户（以下简称“该账户”），您同意并保证：
								程时，您应当按照法律法规要求，按相应页面的提示准确提供并及时更新您的资料，以使之真实、及时，完整和准确。如有合理理由怀疑您提供的资料错误、不实、过时或不完整的，本公司有权向您发出询问及/或要求改正的通知，并有权直接做出删除相应资料的处理、暂停注册、暂停帐户使用直至中止、终止对您提供的部分或全部服务。本公司对因此而造成的服务暂停、中止或终止不承担任何责任，您将自行承担因此产生的任何不利后果。
								您应当准确填写并及时更新您提供的电子邮件地址、联系电话、联系地址、邮政编码等联系方式，以便本公司与您进行有效联系；因通过这些联系方式无法与您取得联系，导致您在使用本服务过程中产生任何损失或增加费用的，应由您完全独自承担。您了解并同意，您有义务保持您提供的联系方式的有效性，如有变更需要更新的，您应按本公司的要求进行操作。
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel3'}
						onChange={this.handleChange('panel3')}
					>
						<ExpansionPanelSummary>
							<Typography>账户安全</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								您将对使用该账户及密码进行的一切操作及发表的言论负完全的责任，您同意：
								 对于本公司提供的该账户，您仅享有使用权；您应对您的互联网平台账户负责，只有您本人可以使用您的互联网平台账户；如您对该账户的使用权进行转让、赠与或授权他人使用的，应书面告知本公司，经本公司同意且上述承继人完成签署本协议后，承继人才能合法取得该账户的使用权，否则，本公司有权随时中止或终止对您提供的全部服务且不承担任何责任。
								 本公司通过您的用户名和密码识别您的指示，请您妥善保管您的用户名和密码，对于因密码泄露所致的损失及因此而引起的一切不利后果，由您自行承担。您保证不向其他任何人泄露该账户及密码，亦不使用其他任何人的互联网平台账户及密码。
								 如您发现有他人冒用或盗用您的账户及密码或任何其他未经合法授权之情形时，应立即以有效方式通知本公司，要求本公司暂停相关服务。同时，您理解本公司对您的请求采取行动需要合理期限，在此之前，本公司对已执行的指令及(或)所导致的您的损失不承担任何责任。
								如您遗忘帐户名称或相关密码，应及时与本公司联系，按照平台网站的提示取回密码并及时进行密码重置。
								 
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel4'}
						onChange={this.handleChange('panel4')}
					>
						<ExpansionPanelSummary>
							<Typography>账户注销</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								本公司保留在您违反国家、地方法律法规规定或违反本服务条款的情况下对您的帐户进行注销，保留中止或终止为您提供服务的权利。
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
								互联网平台服务使用守则
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								为有效保障您使用本服务的合法权益，您理解并同意接受以下规则：
 
								您在使用本服务过程中，本协议内容、页面上出现的关于交易操作的提示或本公司发送到您手机的信息（短信或电话等）内容是您使用本服务的相关规则，您使用本服务即表示您同意接受本服务的相关规则。您了解并同意本公司有权单方修改服务的相关规则，而无须征得您的同意，服务规则应以您使用服务时的页面提示（包括但不限于短信群发、电话告知、网站公告等）为准，您同意并遵照服务规则是您使用本服务的前提。
								 
								本公司可能会以电子邮件（包括但不限于短信群发、电话告知、网站公告等）方式通知您服务进展情况以及提示您进行下一步的操作，但本公司不保证您能够收到或者及时收到该邮件（包括但不限于短信群发、电话告知、网站公告等），且不对此承担任何后果。因此，在服务过程中您应当及时登录到本网站查看和进行交易操作。因您没有及时查看和对服务状态进行修改或确认或未能提交相关申请而导致的任何纠纷或损失，本公司不承担任何责任。
								 
								在您使用本服务时，本公司有权依照相应的服务收费报价单、订单及/或相关协议向您收取服务费用。本公司拥有制订及调整服务费之权利，具体服务费用以您使用本服务时平台网站页面上所列之收费方式为准，或以您与本公司达成的其他书面协议为准。
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
								您的权利和义务
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								您有权利享受互联网平台提供的互联网技术和信息服务，并有权利在接受互联网平台提供的服务时获得本公司的技术支持、咨询等服务，服务内容及服务产品的价格信息详见平台网站相关介绍。
 
								您承诺，您完全具有履行本合同所必须的法律法规要求的所有资质，由于您缺少相应资质导致的全部法律责任和不利后果，您应自行承担，同时本公司有权暂停或终止为您提供服务。
								 
								您知悉：您应按照《信息网络传播权保护条例》、《互联网著作权行政保护办法》等法律法规的要求对上网用户的相关信息进行记录，记录备份应依法保存90天，并在国家机关依法查询时予以提供。
								 
								您应尊重本公司及其他第三方的知识产权和其他合法权利，并保证在发生侵犯上述权益的违法事件时尽力保护本公司及其股东、雇员、合作伙伴等免于因该等事件受到影响或损失；本公司保留您侵犯本公司合法权益时终止向您提供服务并不退还任何款项的权利。如因您的违法或侵权行为造成本公司或本公司其他客户的损失的，您应承担全部责任。
								 
								您确认向本公司提供的联络方式是正确的，若因为联络方式有误或者您用于接受本公司邮件的电子邮箱安全性、稳定性不佳而导致的一切后果，您应自行承担责任，包括但不限于因您未能及时收到本公司的相关通知而导致的后果和损失。
								 
								您认同使用本公司提供的服务费用计费及数据查询系统，您对计费及数据的疑议不应成为您停止或暂停其履约或支付义务的理由。您应按时支付服务费用，并有权从本公司获取服务费用发票。本合同中所有涉及到的各种费用、金额、价款、税款等描述均不含增值税或其他价外税款，若根据国家“营改增”的政策要求，本公司由营业税转为增值税纳税人则相关增值税或其他价外税款应另行计算并由您另行支付；在本公司未完成“营改增”前，依现行税制向您开具服务费发票。
								您有权对本协议中的涉及产品、服务、价格等提出询问。一旦您选择使用这些产品、服务，我们将认为您已经不存在任何疑问，且您已经承诺放弃因疑问而向本公司进行追偿。

								您知悉，您可以采用信用卡或者账户预充值的方式进行产品使用费用的支付，若您采用账户预充值的方式进行支付，您的账户余额不能和本平台其他不同的账户进行转让、赠与等操作，也不能进行转为现金、提现等操作。
								<Typography variant="button" >
									您保证您使用本服务时将遵从国家、地方法律法规、行业惯例和社会公共道德，不会利用本公司提供的服务进行存储、发布、传播如下信息和内容：
								</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>
									反对宪法所确定的基本原则的；
									</li>
									<li>
										 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
									</li>
									<li>
										损害国家荣誉和利益的；
									</li>
									<li>
											煽动民族仇恨、民族歧视，破坏民族团结的；								
									</li>
									<li>
											破坏国家宗教政策，宣扬邪教和封建迷信的；								
									</li>
									<li>
										散布谣言，扰乱社会秩序，破坏社会稳定的；
									</li>
									<li>
										散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
									</li>
									<li>
										 侮辱或者诽谤他人，侵害他人合法权益的；
									</li>
								</ul>
									您同时承诺不利用本公司提供的服务实施危害电信网络安全和信息安全的行为，或实施扰乱电信市场秩序的行为危害电信网络安全和信息安全的行为，或实施扰乱电信市场秩序的行为；您知悉并认可基于互联网的特殊性，在您的帐户及应用危害到其他第三方合法权益和利益时，本公司有权停止您帐户的使用并保留向您追偿一切责任的权利。

									您承认， 本公司有权在您违反上述约定时或本公司收到有权机关的要求或第三方权利人的合法主张后， 有权终止向您提供服务并不予退还任何款项， 因您上述行为给本公司造成损失的， 您应予赔偿。
									本公司的权利和义务
									本公司应根据您选择的服务以及交纳款项的情况向您提供合格的网络技术和信息服务。

									本公司应根据您选择的服务在服务的过程中记录必要的信息， 并在您需要的时候或者相关政府监管部门提出监管审查、 合规或取证调查时进行提供。
								<Typography variant="button" >
									本公司承诺对您资料采取对外保密措施，不向第三方披露您资料，不授权第三方使用您资料，除非：
								</Typography>
								<ul style={{ textAlign: 'left' }}>
									<li>
										依据本协议条款或者您与本公司之间其他服务协议、合同、在线条款等规定可以提供；
									</li>
									<li>
										依据法律法规的规定应当提供；
									</li>
									<li>
										行政、司法等职权部门要求本公司提供；
									</li>
									<li>
										您同意本公司向第三方提供；
									</li>
									<li>
										 本公司解决举报事件、提起诉讼而提交的；
									</li>
									<li>
										本公司为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；
									</li>
									<li>
										本公司为向您提供产品、服务、信息而向第三方提供的，包括本公司通过第三方的技术及服务向您提供产品、服务、信息的情况。
									</li>
									<li>
										本公司及本公司关联公司所有网站有权使用您的资料和信息
									</li>
								</ul>
									本公司有权在当天服务结束后的24小时内按照您当天使用服务的实际情况收取当天的服务费用，并从您的账户(信用卡或者预充值账户)中进行扣除。您应及时关注账户金额(信用卡剩余额度或预充值账户余额)变动情况，若您的账户余额(或者信用卡剩余额度)不足，本公司有权立即暂停或终止向您提供服务，同时您应在被暂停或终止提供服务后的24小时内，将账户金额充值至足以支付上述服务费用的额度，否则您每逾期一日支付的，本公司有权按应付未付费用的千分之三的标准向您收取违约金。
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
								隐私及其他个人信息的保护
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
一旦您同意本协议或使用本服务，您即同意本公司按照以下条款来使用和披露您的个人信息：
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
								账号和密码
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								在您注册为互联网平台用户时，我们会要求您设置账号和密码来识别您的身份。您仅可通过您设置的密码来使用该账户，如果您泄漏了密码，您可能会丢失您的个人识别信息，并可能导致对您不利的法律后果。该账号和密码因任何原因受到潜在或现实危险时，您应该立即和本公司取得联系，因账号和密码泄露导致的一切后果，应由您负责承担。
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
								账号信息
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								您完成账户注册或激活流程该账户时，应向本公司提供您的真实姓名、地址、国籍、电话号码和电子邮件地址，您还可以选择来填写相关附加信息（包括但不限于您公司所在的省份和城市、时区和邮政编码、传真号码、个人主页和您的职务）。为有针对性地向您提供新的服务和机会，您了解并同意本公司及其关联公司或您登录的其他网站将通过您的电子邮件地址或该手机通知您这些信息。
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel10'}
						onChange={this.handleChange('panel10')}
					>
						<ExpansionPanelSummary>
							<Typography>银行账户信息</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								若本公司所提供的服务需要您提供您的银行账户信息，在您提供相应信息后，本公司将严格履行相关保密约定。
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
								登录记录
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								为了保障您使用本服务的安全以及不断改进服务质量， 本公司将记录并保存您登录和使用本服务的相关信息， 但本公司承诺不将此类信息提供给任何第三方（ 除双方另有约定或法律法规另有规定及本公司关联公司外）。
								广告
								本公司会对互联网平台用户的身份数据进行综合统计， 并出于宣传、 销售和奖励的需要使用或披露。
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
								外部链接
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								本网站含有到其他网站的链接，但本公司对其他网站的隐私保护措施不负任何责任。本公司可能在任何需要的时候增加商业伙伴或共用品牌的网站。
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
								安全
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								本公司仅按现有技术提供相应的安全措施来使本公司掌握的信息不丢失，不被滥用和变造。这些安全措施包括向其他服务器备份数据和对用户密码加密。尽管有这些安全措施，但本公司不保证这些信息的绝对安全。
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
								系统中断或故障
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								系统可能因下列状况无法正常运作， 使您无法使用各项联网服务时， 本公司不承担损害赔偿责任， 该状况包括但不限于：
								电信设备出现故障不能进行数据传输的。

								因台风、 地震、 海啸、 洪水、 停电、 战争、 恐怖袭击等不可抗力之因素， 造成本公司系统障碍不能执行业务的。

								由于黑客攻击、 病毒侵入、 电信部门技术调整或故障、 网站升级、 银行支付方面的问题等原因而造成的服务中断或者延迟。

								责任范围及责任限制
								本公司仅对本条款中列明的责任范围负责。
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
								本服务之合作单位，所提供之服务品质及内容由该合作单位自行负责，本公司对此不承担任何责任。
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								非本公司原因或不可抗力造成的您购买的服务不可用， 不属于本公司责任； 鉴于互联网的特点， 本公司提示： 您应自行及时地进行数据备份， 对您的数据损失本公司无需承担责任； 因您的系统调配或配置不合理或其他您的原因造成的服务不可用不属于本公司责任； 本公司对因第三方的作为或不作为而给您或者其他第三方造成的损失不负责任， 对通过您间接接受本公司服务的第三方的损失不承担任何责任。

								本公司对于与本协议有关或由本协议引起的任何间接的、 惩罚性的、 特殊的、 派生的损失（ 包括但不限于业务损失、 收益损失、 利润损失、 使用数据或其他经济利益的损失）， 不论是如何产生的， 也不论是由对本协议的违约（ 包括违反保证） 还是由侵权造成的， 均不负有任何责任， 即使事先已被告知此等损失的可能性。 另外即使本协议规定的排他性救济没有达到其基本目的， 也应排除本公司对上述损失的责任。

								如您的网站遭受到来自第三方的网络攻击等黑客行为时， 应及时与本公司进行沟通， 以保证服务品质， 但您仍应支付由此产生的流量或者带宽的费用。

								本公司对互联网平台提供的服务提供故障监控、 自动化恢复等故障管控机制， 保障云服务的故障及时处理与恢复。 当云服务的节点发生故障时， 通过本地的负载均衡和全局的负载均衡进行自动化的切换。 当整体云服务发生故障时， 本公司将第一时间通知客户按照相应的预案进行处理。
								本公司应使您购买的服务处于可用状态， 结合您购买的服务的相关特性， 服务可用： 指您使用互联网服务的域名下的网页、 文件、 流媒体等内容可以被访问或被下载； 服务不可用: 指服务当天总服务时间剔除服务可用时间后, 剩余部分时间为服务不可用。

								因本公司自身原因， 造成您购买的服务全网不可用的， 本公司将以分钟为单位， 计算每分钟费用（ 不足一分钟的按一分钟计算）， 按实际服务全网不可用时间对应的服务费用减免您相关的服务费用, 但减免的最高限额为当天您应付的服务费用且不以任何形式向下一天累计。 您同意除本条款前述约定外， 因服务不可用本公司不再对您的其他任何损失承担赔偿责任。

								除本协议另有规定外， 在任何情况下， 您同意本公司对本协议所承担的赔偿范围仅限于直接经济损失且赔偿责任总额不超过向您收取的当天次服务费用总额。
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel16'}
						onChange={this.handleChange('panel16')}
					>
						<ExpansionPanelSummary>
							<Typography>完整协议</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								本协议由本协议条款与本网站公示的各项规则组成， 相关名词可互相引用参照， 如有不同理解， 以本协议条款为准。
								您对本协议理解和认同， 您即对本协议所有组成部分的内容理解并认同， 一旦您使用本服务， 您和本公司即受本协议所有组成部分的约束。
								本协议若有部分内容被有管辖权的法院认定为无效的， 不因此影响其他内容的效力。 本协议任一条款未予执行不影响其他条款的效力。
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
								商标、知识产权的保护
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								除第三方产品或服务外， 本网站上所有内容， 包括但不限于著作、 图片、 档案、 资讯、 资料、 架构、 页面设计， 均由本公司或本公司关联企业依法拥有其知识产权， 包括但不限于商标权、 专利权、 著作权、 商业秘密等。
								非经本公司或本公司关联企业书面同意， 任何人不得擅自使用、 修改、 复制、 公开传播、 改变、 散布、 发行或公开发表本网站上程序或内容。

								尊重知识产权是您应尽的义务， 您应自行解决包括但不限于软件版权、 应用许可等相关问题， 本公司对此无审核义务， 我们将您签署本协议行为视为您已经认可前述约定并已经完成了全部的相关工作。 如有违反， 您应承担损害赔偿责任且本公司保留因此终止本协议的权利。
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						square
						expanded={expanded === 'panel18'}
						onChange={this.handleChange('panel18')}
					>
						<ExpansionPanelSummary>
							<Typography>法律适用与争议解决</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								本协议的效力、 解释、 履行和争议的解决均适用中华人民共和国法律、 法规、 电信管理部门的规定和计算机行业的规范。
								因履行本协议或与本协议有关的一切争议， 应通过友好协商方式解决。 如果协商未成， 则提交本公司住所地有管辖权的人民法院诉讼解决。
								本公司与您共同确认： 本协议签署的选择权对于双方是完全对等而公允的。 即任何一方可以不受强制地选择签署或不签署本协议。 本协议是经过双方审慎考虑阐述的意思表示， 不存在任何一方片面加大另一方责任或逃避应履行义务的情形。 任何一方签署或承诺遵守本协议均视为放弃对于本协议公允性的质疑。
								重要声明： 如上述合同条款出现中英文表述歧义或内容歧义， 均以中文条款为准。
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
						this.displayEn()
					:
						this.displayCn()
				}
			</div>
    );
  }
}

export default PrivacyPolicy;
