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
    md:ml-24
    lg:ml-24
    xl:ml-24
  `}
`;

const DescriptionLeftContainer = styled.p`
  ${tw`
    w-1/2
    mr-1
    md:mr-1
    lg:mr-2
    text-left
  `}
`;

const DescriptionRightContainer = styled.p`
  ${tw`
    w-1/2
    ml-4
    mr-4
    pr-2
    md:ml-6
    lg:ml-8
    text-right
  `}
`;

const ImageLeftContainer = styled.img`
    ${tw`
        border
        border-green-500
        w-1/2
        md:w-2/5
        border-2
        border-green-500
        lg:w-1/3
        mt-4
        md:mt-0
        mb-4
        md:mb-0
        object-scale-down
        border-8
        border-green-500
        rounded-lg
    `}
`;

const ImageRightContainer = styled.img`
    ${tw`
        w-1/2
        md:w-2/5
        lg:w-1/3
        mt-4
        md:mt-0
        mb-4
        md:mb-0
        mr-24
        object-scale-down
        border-8
        border-green-500
        rounded-lg
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
