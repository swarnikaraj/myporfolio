import React from 'react';
import { findDOMNode } from 'react-dom/cjs/react-dom.development';
import { DiAtlassian, DiFirebase, DiHtml5Connectivity, DiMaterializecss, DiNodejs, DiReact, DiSwift, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies in web application world.
    From Backend To Design
  </SectionText>
  <List>
    <ListItem>
      <DiReact size='3rem'/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js , Redux,
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size='3rem'/>
      <ListContainer>
        <ListTitle>Backend</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Node.js ,Express, Python, Flask, Websocket
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size='3rem'/>
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          Experince with <br/>
          MongoDb, MySql
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
    <DiHtml5Connectivity size='3rem' />
      <ListContainer>
        <ListTitle>Block-Chain</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Smart Contract, Solidity, Web3, 
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiAtlassian size='3rem'/>
      <ListContainer>
        <ListTitle>Animation</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Three.js, Anime.js,
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMaterializecss size='3rem'/>
      <ListContainer>
        <ListTitle>UI-UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Styled Components, Chakra
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
