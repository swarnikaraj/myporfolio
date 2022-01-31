import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href="/">
     <a style={{display:"flex",alignItems:"center" ,color:'white', MarginBottom:"20px"}}>
         <DiCssdeck size="3rem"/><Span>Swarnnika Raj Singh</Span>
     </a>

     </Link>
   </Div1>
   <Div2>
     <li>
       <Link href="#projects">
       <NavLink>Projects</NavLink>
       </Link>
     </li>
     
     
     <li>
       <Link href="#tech">
       <NavLink>Technologies</NavLink>
       </Link>
     </li>
     <li>
       <Link href="files/cv.pdf">
       <NavLink>Resume</NavLink>
       </Link>
     </li>
     

   </Div2>
   <Div3>
     <SocialIcons>
       <AiFillGithub href='https://github.com/swarnikaraj/'/>
     </SocialIcons>
     <SocialIcons>
       <AiFillLinkedin href='https://www.linkedin.com/in/swarnnika-raj-singh-a6731914b/'/>
     </SocialIcons>
     <SocialIcons>
       <AiFillInstagram href='https://www.instagram.com/swarnikarajsingh/'/>
     </SocialIcons>
   </Div3>
 </Container>
);

export default Header;
