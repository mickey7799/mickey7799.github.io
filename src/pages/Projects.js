import styled from 'styled-components';
import { white } from '@carbon/colors';
import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../styles';
import { InfoContext } from "../contexts/infoContext";
import ProjectCard from '../components/ProjectCard';

const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

const ProjectTitle = styled.h4`
  font-weight: bold;
`

const Container = styled.div`
    height: auto;
    display: flex;
    padding-top: 1%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    z-index:10;
`;

const Projects = () => {
    const { info } = useContext(InfoContext);
    const images = ['feedme.jpg', 'voting.png', 'pacman.png', 'bitbox.jpg', 'whist.png', 'search.jpg'];
    let i = 0;
    let infoAll = info.projects.map(project => {
        project.image = images[i];
        i++;
        return project;
    })

    return (
        <Layout>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <Container>
                    {infoAll.map((project, i) => (
                        <ProjectCard
                            name={project.name}
                            image={project.image}
                            summary={project.summary}
                            languages={project.languages}
                            libraries={project.libraries}
                            githubUrl={project.githubUrl}
                            website={project.website}
                        />
                    ))}
                </Container>
            </div>
        </Layout>
    );
};

export default Projects;

