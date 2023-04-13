import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ImageDescription } from "../../components/imagedescription";

import StandardBike from "../../assets/standard-bike.png";

const MiddleSectionContainer = styled.div`
    ${tw`
        w-full
    `};
`;

const Title = styled.h1`
    ${tw`
        text-3xl
        md:text-5xl
        font-bold
        text-green-500
        mt-4
        md:mt-6
        lg:mt-8
        xl:mt-10
        sm:mx-0
        md:mx-0
        lg:mx-0
        xl:mx-0
        md:ml-auto
        lg:ml-auto
        xl:ml-auto
        text-center
    `}
`;

export function MiddleSection() {
    
    return (
        <MiddleSectionContainer>
            <Title>Choose your bike</Title>
            <ImageDescription
                imageSrc={StandardBike}
                isImageOnRight={true}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            />
            <ImageDescription
                imageSrc={StandardBike}
                isImageOnRight={false}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            />
            <ImageDescription
                imageSrc={StandardBike}
                isImageOnRight={true}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
            />
        </MiddleSectionContainer>
    );
}