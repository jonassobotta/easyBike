import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import styled from "styled-components";
import tw from "twin.macro";

import standardBike from "../../assets/standard-bike.png";


const Container = styled.div`
    ${tw`
        flex
        flex-col
        w-1/2
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const ImageDescrioptionContainer = styled.div`
    ${tw`
        flex
        flex-row   
    `}
`;

const ImageContainer = styled.div`
    ${tw`
        w-full
        h-1/2
    `}
`;

const Image = styled.img`
    ${tw`
        w-full
        h-full
        object-cover
    `}
`;

const TextContainer = styled.div`
    ${tw`
        w-full
        h-1/2
        px-6
        py-8
        flex
        flex-col
        justify-center
        items-center
        text-left
    `}
`;

const Title = styled.h2`
    ${tw`
        text-2xl
        font-bold
        mb-4
        text-center
    `}
`;

const Description = styled.p`
    ${tw`
        text-lg
        mb-4
        text-left
    `}
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        space-x-4
    `}
`;


export function ImageDropdown(){
    const bikeState = useSelector((state: any) => state.bikes);
    

    return (
        <Container>
            <ImageDescrioptionContainer>
            <ImageContainer>
                <Image src={standardBike} />
            </ImageContainer>
            <TextContainer>
                <Title>City Bike</Title>
                <Description>Available: {bikeState.cityBikes.length}</Description>
                <Description>Our city bike is perfect for a day out in the city. It's light and easy to handle.</Description>
                <Description>Price: $4 / day</Description>
                <ButtonContainer>
                    <button>+</button>
                    <button>-</button>
                </ButtonContainer>
            </TextContainer>
            </ImageDescrioptionContainer>
            <ImageDescrioptionContainer>
            <ImageContainer>
                <Image src={standardBike} />
            </ImageContainer>
            <TextContainer>
                <Title>Mountain Bike</Title>
                <Description>Available: {bikeState.mountainBikes.length}</Description>
                <Description>Our mountain bike is perfect for exploring rough terrains with ease. It's designed to be lightweight and agile, making it easy to handle and maneuver even on challenging trails.</Description>
                <Description>Price: $5 / day</Description>
                <ButtonContainer>
                    <button>+</button>
                    <button>-</button>
                </ButtonContainer>
            </TextContainer>
            </ImageDescrioptionContainer>
            <ImageDescrioptionContainer>
            <ImageContainer>
                <Image src={standardBike} />
            </ImageContainer>
            <TextContainer>
                <Title>Racing Bike</Title>
                <Description>Available: {bikeState.racingBikes.length}</Description>
                <Description>Our racing bike is perfect for fast-paced rides on smooth surfaces, whether it's for training or competition. It's designed to be lightweight and responsive, making it easy to handle and reach high speeds with minimal effort.</Description>
                <Description>Price: $6 / day</Description>
                <ButtonContainer>
                    <button>+</button>
                    <button>-</button>
                </ButtonContainer>
            </TextContainer>
            </ImageDescrioptionContainer>

        </Container>


        
    );
}

