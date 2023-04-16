import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import styled from "styled-components";
import tw from "twin.macro";

import CityBike from "../../assets/citybike.jpg";
import MountainBike from "../../assets/mountainbike.jpg";
import RacingBike from "../../assets/racingbike.jpg";
import { Marginer } from "../marginer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

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

const ImageDescriptionContainer = styled.div`
    ${tw`
        flex
        flex-row  
    `}
`;

const ImageContainer = styled.div`
    ${tw`
        w-full
        h-1/2
        border-green-500
        border-2
        border-solid
        rounded-md
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
    `};

    & span {
        ${tw`text-green-500`}
    }
`;

const IconContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        space-x-4
    `}
`;

const Icon = styled.div`
    ${tw`
        text-green-500
        text-2xl
    `}
`;


export function ImageDropdown(){
    const bikeState = useSelector((state: any) => state.bikes);
    

    return (
        <Container>
            <ImageDescriptionContainer>
            <ImageContainer>
                <Image src={CityBike} />
            </ImageContainer>
            <TextContainer>
                <Title>City Bike</Title>
                <Description>Available: {bikeState.cityBikes.length}</Description>
                <Description>Price: <span>$4 / day</span></Description>
                <IconContainer>
                    <Icon>
                        <FontAwesomeIcon icon={faCircleMinus} />   
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </Icon>
                </IconContainer>
            </TextContainer>
            </ImageDescriptionContainer>

            <Marginer direction="vertical" margin="2em" />

            <ImageDescriptionContainer>
            <ImageContainer>
                <Image src={MountainBike} />
            </ImageContainer>
            <TextContainer>
                <Title>Mountain Bike</Title>
                <Description>Available: {bikeState.mountainBikes.length}</Description>
                <Description>Price: <span>$5 / day</span></Description>
                <IconContainer>
                    <Icon>
                        <FontAwesomeIcon icon={faCircleMinus} />   
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </Icon>
                </IconContainer>
            </TextContainer>
            </ImageDescriptionContainer>

            <Marginer direction="vertical" margin="2em" />

            <ImageDescriptionContainer>
            <ImageContainer>
                <Image src={RacingBike} />
            </ImageContainer>
            <TextContainer>
                <Title>Racing Bike</Title>
                <Description>Available: {bikeState.racingBikes.length}</Description>
                <Description>Price: <span>$6 / day</span></Description>
                <IconContainer>
                    <Icon>
                        <FontAwesomeIcon icon={faCircleMinus} />   
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </Icon>
                </IconContainer>
            </TextContainer>
            </ImageDescriptionContainer>

        </Container>


        
    );
}

