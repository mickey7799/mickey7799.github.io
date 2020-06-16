import styled from 'styled-components';
import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { SectionTitle } from '../styles';
import { InfoContext } from "../contexts/infoContext";
import ProjectCard from '../components/ProjectCard';

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
    

    return (
        <Layout>
            <div>
                <SectionTitle>Projects</SectionTitle>
                
                <Container>
                    {info.projects.map((project, i) => (
                        <ProjectCard
                            name={project.name}
                            image={project.images[0].resolutions.desktop.url}
                            summary={project.summary}
                            languages={project.languages}
                            libraries={project.libraries}
                            githubUrl={project.githubUrl}
                            website={project.website}
                            key= {i}
                        />
                    ))}
                </Container>
            </div>
        </Layout>
    );
};

export default Projects;

