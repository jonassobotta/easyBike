import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ImageDescriptionProps {
  description: string;
  imageSrc: string;
  isImageOnRight: boolean;
}

const ImageDescriptionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`;

const DescriptionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-row
    justify-between
    mt-4
    md:mt-6
    lg:mt-8
    xl:mt-10
    sm:mx-0
    md:mx-0
    lg:mx-0
    xl:mx-0
  `}
`;

const DescriptionLeftContainer = styled.p`
  ${tw`
    w-1/2
    md:mr-1
    lg:mr-2
    text-left
    pr-8
    pt-24
  `}
`;

const DescriptionRightContainer = styled.p`
  ${tw`
    w-1/2
    md:ml-1
    lg:ml-2
    text-left
    pl-8
    pt-24
  `}
`;

const ImageLeftContainer = styled.img`
    ${tw`
        w-1/2
        mt-4
        mb-4
        object-scale-down
        border-green-500
        border-2
        border-solid
        rounded-md
    `}
`;

const ImageRightContainer = styled.img`
    ${tw`
        w-1/2
        mt-4
        mb-4
        object-scale-down
        border-green-500
        border-2
        border-solid
        rounded-md
    `}
`;

export function ImageDescription({ description, imageSrc, isImageOnRight }: ImageDescriptionProps) {
  return (
    <ImageDescriptionContainer>
      <DescriptionContainer>
        {isImageOnRight ? (
          <>
            <DescriptionLeftContainer>{description}</DescriptionLeftContainer>
            <ImageRightContainer src={imageSrc} alt="Right Image" />
          </>
        ) : (
          <>
            <ImageLeftContainer src={imageSrc} alt="Left Image" />
            <DescriptionRightContainer>{description}</DescriptionRightContainer>
          </>
        )}
      </DescriptionContainer>
    </ImageDescriptionContainer>
  );
}
