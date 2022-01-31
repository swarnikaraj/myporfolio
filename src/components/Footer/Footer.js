import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 76-43-87-13-59">+91 7643871359</LinkItem>
        </LinkColumn>
        
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:swarnikarajsingh@gmail.com">swarnikarajsingh@gmail.com</LinkItem>
        </LinkColumn>
        {/* <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="https://wa.me/9473146034?text=Hi%27,%20like%20to%20chat%20with%20you">+91 9473146034</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Skype</LinkTitle>
          <LinkItem href="https://join.skype.com/invite/ykTStEckcfWM">swarnikarajsingh</LinkItem>
        </LinkColumn>


      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Code talks</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
        <SocialIcons>
       <AiFillGithub href='https://github.com/swarnikaraj/'/>
     </SocialIcons>
     <SocialIcons>
       <AiFillLinkedin href='https://www.linkedin.com/in/swarnnika-raj-singh-a6731914b/'/>
     </SocialIcons>
     <SocialIcons>
       <AiFillInstagram href='https://www.instagram.com/swarnikarajsingh/'/>
     </SocialIcons>
     </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
