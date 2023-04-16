import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ImageDescription } from "../../components/imagedescription";

import CityBike from "../../assets/citybike.jpg";
import MountainBike from "../../assets/mountainbike.jpg";
import RacingBike from "../../assets/racingbike.jpg";

const MiddleSectionContainer = styled.div`
    ${tw`
        w-1/2
    `};
`;

const Title = styled.h2`
    ${tw`
      text-3xl
      lg:text-5xl
      text-black
      font-extrabold
      text-center
    `};
`;

export function MiddleSection() {
    
    return (
        <MiddleSectionContainer>
            <Title>Our Bikes</Title>
            <ImageDescription
                imageSrc={CityBike}
                isImageOnRight={true}
                description="Our city bike is perfect for a day out in the city. It's light and easy to handle."
            />
            <ImageDescription
                imageSrc={MountainBike}
                isImageOnRight={false}
                description="Our mountain bike is perfect for exploring rough terrains with ease. It's designed to be lightweight and agile, making it easy to handle and maneuver even on challenging trails."
            />
            <ImageDescription
                imageSrc={RacingBike}
                isImageOnRight={true}
                description="Our racing bike is perfect for fast-paced rides on smooth surfaces, whether it's for training or competition. It's designed to be lightweight and responsive, making it easy to handle and reach high speeds with minimal effort."
            />
        </MiddleSectionContainer>
    );
}