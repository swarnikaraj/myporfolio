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
      
        <LinkColumn>
          <LinkTitle>Skype</LinkTitle>
          <LinkItem href="https://join.skype.com/invite/ykTStEckcfWM" target='_blank'>swarnikarajsingh</LinkItem>
        </LinkColumn>


      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Code talks</Slogan>
        </CompanyContainer>
        <SocialIconsContainer >
        <SocialIcons href='https://github.com/swarnikaraj/' target='_blank'>
       <AiFillGithub />
     </SocialIcons>
    
     <SocialIcons href='https://www.linkedin.com/in/swarnnika-raj-singh-a6731914b/' target='_blank'>
       <AiFillLinkedin  />
     </SocialIcons>
     <SocialIcons href='https://www.instagram.com/swarnikarajsingh/' target='_blank'>
       <AiFillInstagram />
     </SocialIcons>
     </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
