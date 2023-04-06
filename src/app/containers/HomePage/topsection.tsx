import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import BackgroundImage from "../../assets/top-section-background.jpg";

const TopSectionContainer = styled.div `
    min-height: 500px;
    ${tw`
        w-full
        
    `}
`;

const ImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 45em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SloganContainer = styled.h1`
    ${tw`
        text-3xl
        md:text-5xl
        font-bold
        text-white
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export function TopSection() {
    return (
      <TopSectionContainer>
        
        <ImageContainer>
          <SloganContainer>
            Book your easybike today!
            </SloganContainer>  
          <img src={BackgroundImage} />
        </ImageContainer>
      </TopSectionContainer>
    );
}