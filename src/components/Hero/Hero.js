import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Link } from 'react-router-dom';


const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    Discover <br/>
     my Amazing Tech <br/>Space!

    </SectionTitle>
    <SectionText>
      A passionate full stack developer and An aspiring etherium blockchain developer with a problem solving mindset, 
        well trained in MERN stack, Data structures and 
       Algorithms.
        
    </SectionText>
    <Button  onClick={()=>window.scrollTo(0,700)}>
    Explore
      
      </Button>
  </LeftSection>

  </Section>
);
// 
export default Hero;