import styled from 'styled-components';
import { white } from '@carbon/colors';
import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle} from '../styles';
import { InfoContext } from "../contexts/infoContext";
import ProjectCard from '../components/ProjectCard';

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

const Projects = () => {
    const { info } = useContext(InfoContext);
    return (
      <Layout>
        <div>
          <SectionTitle>Projects</SectionTitle>
          <ProjectCard/> 
        </div>
      </Layout>
    );
  };
  
  export default Projects;

