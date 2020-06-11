import styled from 'styled-components';
import { white } from '@carbon/colors';
import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle, Pill } from '../styles';
import { InfoContext } from "../contexts/infoContext";

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`
const Projects = () => {
    const { info } = useContext(InfoContext);
    return (
      <Layout>
        <div>
          <SectionTitle>Projects</SectionTitle>
          <ul>
            {info.projects.map((project, i) => (
              <ProjectItem key={i}>
                <ProjectTitle>{project.name}</ProjectTitle>
                <p>{project.summary}</p>
                <SkillContainer>
                  {[...project.languages, ...project.libraries].map((item, j) => (
                    <Pill key={j}>{item}</Pill>
                  ))}
                </SkillContainer>
              </ProjectItem>
            ))}
          </ul>
        </div>
      </Layout>
    );
  };
  
  export default Projects;

