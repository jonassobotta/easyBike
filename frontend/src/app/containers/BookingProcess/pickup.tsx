import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topsection";

const PageContainer = styled.div `
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const Title = styled.h1 `
    ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `}
`;

export function PickUpDate() {
  return (
    <PageContainer>
        <Navbar />
        <TopSection pickUpActive={true} chooseStoreActive={false} bookBikeActive={false}/>
        <Title>Pick Up Date</Title>
    </PageContainer>
  );
}