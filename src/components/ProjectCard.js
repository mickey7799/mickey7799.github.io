import React, { useContext, useState } from 'react';
//import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import { InfoContext } from '../contexts/infoContext';

const Card = styled.div`
    display: flex;
    height: auto;
    width: 355px;
    margin: auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
    border: 0.75px solid #e5e5e5;
    border-radius: 7px;
    background-color: #fcfcfc;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    @media (max-width: 769px){
        margin-top: 5em;
        min-width: 353.5px;
    }
`;
const CardFront = styled.div`
    display: flex;
    height: 20em;
    width: 30em;
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
    margin-bottom: 10px;
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex-direction: row;
    @media (max-width: 769px){
        margin-bottom: 15px;
        padding-top: 25px;
        padding-right: 25px;
        padding-left: 25px;
    }
    @media (max-width: 415px){
        padding-right: 10px;
        padding-left: 10px;
    }
    @media (max-width: 360px){
        padding-right: 10px;
        padding-left: 10px;
    }

`;

const Profile = styled.div`
    border-radius: 100%;
    width: 75px;
    height: 75px;
    background-size: cover;
    background-position: center;
    background-image: url("images/child.svg");
    @media (max-width: 769px){
        width: 100px;
        height: 100px;
    }
`;
const InfoWrapper = styled.div`
    margin-left: 20px;
    align-self: center;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    max-width: 250px;
    @media (max-width: 769px){
        margin-left: 25px;
        max-width: 250px;
    }
    @media (max-width: 415px){
        margin-left: 10px;
        max-width: 200px;
    }
    @media (max-width: 360px){
        margin-left: 10px;
        max-width: 150px;
    }

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

const DescriptionWrapper = styled.div`
    display: flex;
    margin-top: 0px;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Inter beta', sans-serif;
    font-weight: 300;
    @media (max-width: 769px){
        margin-top: 10px;
    }

`;

const Commnet = styled.div`
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    font-family: 'Inter beta', sans-serif;
    font-weight: 300;
    font-size: 14px;
    display: -webkit-box;
    max-width: 400px;
    height: 5em;
    @media (max-width: 769px){
        margin-right: 25px;
        margin-bottom: 25px;
        margin-left: 25px;
        font-size: 16px;
        font-weight: 300;
    }
    @media (max-width: 360px){
        margin-right: 10px;
        margin-left: 10px;
    }

`;

const FoodImg = styled.div`
    width: 353.5px;
    height: 353.5px;
    margin-top: auto; 
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-image: url(${props => props.url});

`;
const Container = styled.div`
    height: auto;
    display: flex;
    padding-top: 1%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
`;

const TitleBox = styled.div`
    font-family: Inter, sans-serif;
    margin-top: auto;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    opacity: 0.6;
    @media (max-width: 769px){
        font-size: 24px;
        font-weight: 500;
    }
`;
const Title = styled.p`
    font-family: Inter, sans-serif;
    text-align: center;
    font-weight: 400;
    font-size: 22px;
    padding: 1em auto;
    color: black;
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
                <CardFront path={project.image} key={i}>
                    <TitleBox>
                        <Title>{project.name}</Title>
                    </TitleBox>

                </CardFront>
            ))}
        </Container>

    ) : (
        <div></div>
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