import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { TopSection } from "./topsection";
import { Navbar } from "../../components/navbar";

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

export function ChooseStore() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection pickUpActive={false} chooseStoreActive={true} bookBikeActive={false} />
      <Title>Choose Store</Title>
   </PageContainer>
  );
}