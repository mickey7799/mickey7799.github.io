import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    height: 15rem;
    width: 25rem;
    margin: auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    border: 0.75px solid #e5e5e5;
    border-radius: 7px;
    background-image: url("${props => props.path}");
    background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 769px){
        margin-top: 5em;
        min-width: 353.5px;
    }
`;

const TitleBox = styled.div`
    font-family: Inter, sans-serif;
    margin-top: auto;
    margin-bottom: 0px;
    width: 100%;
    height: 15%;
    background-color: #ffffff;
    opacity: 0.5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 7px;
`;
const Title = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    padding-top: 10px;
    color: black;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 2em;
    flex-direction: column;
    background-color: black;
    opacity: 0.7;
    height: 100%;
`;

const TitleBack = styled.div`
    text-align: center;
    font-weight: 650;
    font-size: 22px;
    padding-bottom: 0.2em;
    color: white;
`;

const Commnet = styled.div`
    text-align: center;
    margin: auto;
    font-family: 'Inter beta', sans-serif;
    font-weight: 450;
    font-size: 14px;
    display: box;
    line-height: 1.3;
    height: 5em;
`;

const SkillContainer = styled.div`
  margin-top: 1.2rem;
`
const SkillTag = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0rem;
  padding: 0.5rem 1rem;
  background-color: none;
  color: white;
  border: 1px solid white;
  border-radius: 2px;
  font-weight: 300;
`;

const DemoLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid black;
    width: 7em;
    height: 80%;
    margin: 0.2em 0.1em 0.1em;
    &:hover {
        cursor: pointer;
    }
`;
const Des = styled.div`
    font-weight: 400;
    margin: auto 0 auto;
    color: black;
    padding-left: 0.1em;
`;

const Img = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin: auto 0 auto;
`;


const ProjectCard = ({ name, image, summary, languages, libraries, githubUrl, website }) => {

    const [isfront, setBack] = useState(true);


    const handleMouseLeave = () => {
        if (!isfront) {
            setBack(!isfront);
        }

    }

    const flipCard = () => {
        setBack(!isfront);

    }

    return isfront ? (

        <Card path={image} onClick={flipCard} >
            <TitleBox>
                <Title>{name.toUpperCase()}</Title>
            </TitleBox>
        </Card>

    ) : (
            <Card path={image} onClick={flipCard} onMouseLeave={handleMouseLeave}>
                <Wrapper>

                    <TitleBack>{name.toUpperCase()}</TitleBack>

                    <Commnet>{summary}</Commnet>

                    <SkillContainer>
                        {[...languages, ...libraries].map((item, j) => (
                            <SkillTag key={j}>{item}</SkillTag>
                        ))}
                    </SkillContainer>

                </Wrapper>

                <TitleBox>

                    <DemoLink href={githubUrl} target="_blank">
                        <Img src="/images/github.svg" alt="github"></Img>
                        <Des>GITHUB</Des>
                    </DemoLink>

                    <DemoLink href={website} target="_blank">
                        <Img src="/images/play.svg" alt="play"></Img>
                        <Des>DEMO</Des>
                    </DemoLink>

                </TitleBox>
            </Card>
        )
}

export default ProjectCard;