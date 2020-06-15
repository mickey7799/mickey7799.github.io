import React, { useContext, useState } from 'react';
//import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import { InfoContext } from '../contexts/infoContext';

const Card = styled.div`
    display: flex;
    height: 15em;
    width: 25em;
    margin: auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    border: 0.75px solid #e5e5e5;
    border-radius: 7px;
    background-image: url("/images/${props => props.path}");
    background-size: cover;
    background-position: center;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    @media (max-width: 769px){
        margin-top: 5em;
        min-width: 353.5px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding: 3em;
    flex-direction: column;
`;

const Name = styled.div`
    margin-bottom: 5px;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 769px){
        font-size: 24px;
        font-weight: 500;
    }
`;

const Description = styled.span`
    font-family: Inter, sans-serif;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Commnet = styled.div`
    margin: auto;
    font-family: 'Inter beta', sans-serif;
    font-weight: 300;
    font-size: 14px;
    display: box;
    // max-width: 400px;
    // height: 5em;
`;

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

const TitleBox = styled.div`
    font-family: Inter, sans-serif;
    margin-top: auto;
    width: 100%;
    height: 15%;
    background-color: #ffffff;
    opacity: 0.5;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const Title = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    padding-top: 10px;
    color: black;
    
`;
const DemoLink = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid black;
    width: 7em;
    height: 80%;
    margin: 0.1em;
`;
const Des = styled.div`
    font-weight: 400;
    padding-top: 0.2em;
    color: black;
    padding-left: 0.1em;
`;

const Img = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin: auto 0 auto;
`;


const ProjectCard = () => {
    const { info } = useContext(InfoContext);
    const [isfront, setBack] = useState(true);
    const images = ['feedme.jpg', 'voting.png', 'pacman.png', 'bitbox.jpg', 'whist.png', 'search.jpg'];
    let i = 0;
    let infoAll = info.projects.map(project => {
        project.image = images[i];
        i++;
        return project;
    })

    const flipCard = () => {
        setBack(!isfront);
    }

    return isfront ? (
        <Container>
            {infoAll.map((project, i) => (
                <Card path={project.image} key={i} onClick= {flipCard}>
                    <TitleBox>
                        <Title>{project.name.toUpperCase()}</Title>
                    </TitleBox>
                </Card>
            ))}
        </Container>

    ) : (
        <Container>
            {infoAll.map((project, i) => (
                <Card path={project.image} key={i} onClick= {flipCard}>
                    <Wrapper>
                        <Title>{project.name.toUpperCase()}</Title>
                        <Commnet>{project.summary}</Commnet>

                    </Wrapper>
                   
                    <TitleBox>
                        <DemoLink href={project.githubUrl} target="_blank">
                            <Img src="/images/github.svg" alt="github"></Img>
                            <Des>GITHUB</Des>
                        </DemoLink>
                        <DemoLink href={project.website} target="_blank">
                            <Img src="/images/play.svg" alt="play"></Img>
                            <Des>DEMO</Des>
                        </DemoLink>
                    </TitleBox>
                </Card>
            ))}
        </Container>

            // <Card>
            //     <Wrapper>
            //         <Profile profileUrl={recommendations.image_url} />
            //         <InfoWrapper>
            //             <Name>{recommendations.name}</Name>
            //             <DescriptionWrapper>
            //                 <div>Food expert of</div>
            //                 <Description> {recommendations.categories[0].title} </Description>
            //             </DescriptionWrapper>
            //         </InfoWrapper>
            //     </Wrapper>
            //     <Commnet>
            //         <LinesEllipsis
            //             text={'This fantastic restaurant is a ' + recommendations.categories[0].title + ' restaurant! It received ' + recommendations.review_count + ' reviews and got a rating of ' + recommendations.rating + ". Come and try it!"}
            //             maxLine='3'
            //             ellipsis='...'
            //             trimRight
            //         />
            //     </Commnet>
            //     <FoodImg url={recommendations.image_url} />

            // </Card>

        )
}

export default ProjectCard;