import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 150, text: 'DSA Problems', },
  { number: 1000, text: 'Hrs of Hands on Coding ', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomlishments</SectionTitle>
      <Boxes>
        {data.map((card,index)=>(
          <Box>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    
  </Section>
);

export default Acomplishments;
