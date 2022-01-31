import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const myprojects=[{title:'project 1',description:"This is a really really long description"},
  {title:'project 2',description:"This is a really really long description"},
  {title:'project 3',description:"This is a really really long description"},
  {title:'project 4',description:"This is a really really long description"},
  
  {title:'project 5',description:"This is a really really long description"},
  {title:'project 6',description:"This is a really really long description"},
  
  ]

const Projects = () => (
  
  <Section nopadding id="projects">
  <SectionDivider/>
  <SectionTitle main> Major Projects</SectionTitle>
  <GridContainer>
    {projects.map(({id,image,title,description,tags,source,visit})=>(
      <BlogCard key={id}>
      <Img src={image}/>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr/>
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag,i)=>(
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href={visit}>Code</ExternalLinks>
        <ExternalLinks href={source}>Source</ExternalLinks>
      </UtilityList>
      
      
      
      
      </BlogCard>
    ))}
  </GridContainer>

  </Section>
);

export default Projects;