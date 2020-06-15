import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { RecommendationContext } from '../contexts/RecommendationContext';
import Loader from './Loader';

const CardFront = styled.div`
    display: flex;
    height: 18rem;
    width: 34rem;
    margin: 1rem 2rem 1.5rem 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border: 0.75px solid #e5e5e5;
    background-image: url("images/front.jpg");
    background-position: center;
    background-size: cover;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 415px){
        width: 30rem;
    }

`;

const CardBack = styled.div`
    display: flex;
    height: 18rem;
    width: 34rem;
    margin: 1rem 2rem 1.5rem 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 0.75px solid #e5e5e5;
    background-image: url("images/back.jpg");
    background-position: center;
    background-size: cover;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .1);
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 415px){
        width: 30rem;
    }

`;

const Name = styled.div`
    margin: 1px auto;
    font-family: Inter, sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: #FFFFFF;
`;
const Type = styled.div`
    margin: 0em auto 1em;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 350;
    color: #FFFFFF;
`;
const Wrapper = styled.div`
    margin: 1em 1.5em;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 400;
    height: 18rem;
`;
const Performance = styled.div`
    font-weight: 500;
    margin-bottom: 4em;
    color: #FF69B4;
`;
const Contact = styled.div`
    align-self: flex-end;
    
`;

const BusinessCard = () => {
    const { recommendations, loading } = useContext(RecommendationContext);
    const [isfront, setBack] = useState(true);

    const flipCard = () => {
        setBack(!isfront);
    }

    return loading ? (
        <Loader />
    ) : (
            isfront ? (
                <CardFront onClick= {flipCard} >
                    <Name>{ recommendations.name }</Name>
                    <Type>{ recommendations.categories[0].title }</Type>
                </CardFront>

            ) : (
                    <CardBack onClick= {flipCard} >
                        <Wrapper>
                            <Performance>
                                <div>Rating: {recommendations.rating}</div>
                                <div>Price: {recommendations.price}</div>
                                <div>Review counts: {recommendations.review_count}</div>
                            </Performance>
                            <Contact>
                                <div>Phone: {recommendations.phone}</div>
                                <div>Address: {recommendations.location.address1}</div>
                            </Contact>
                        </Wrapper>
                    </CardBack>
                )

        )
}

export default BusinessCard;