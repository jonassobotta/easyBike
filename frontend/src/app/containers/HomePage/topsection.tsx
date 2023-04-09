import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import BackgroundImage from "../../assets/top-section-background.jpg";
import { Button } from "../../components/button";

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
    md:ml-auto
    lg:ml-auto
    xl:ml-auto
    text-center
  `}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;



const ButtonContainer = styled.div`
  ${tw`
    mt-4
    md:mt-6
    lg:mt-8
    xl:mt-10
    flex
    justify-center
  `}
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;


const TopSectionContainer = styled.div`
  min-height: 500px;
  ${tw`
    w-full
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <ImageContainer>
        <img src={BackgroundImage} alt="" />
        <SloganContainer>Book your easybike!</SloganContainer>
        <ButtonContainer>
          <Button text="Book Now" />
        </ButtonContainer>
      </ImageContainer>
    </TopSectionContainer>
  );
}
