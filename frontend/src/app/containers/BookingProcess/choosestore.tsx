import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { TopSection } from "./topsection";
import { Navbar } from "../../components/navbar";
import { DropDown } from "../../components/dropdown";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

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
      <DropDown />
      <Marginer direction="vertical" margin="4em" />

      <div className="flex flex-row justify-between">
        <Button text="Back" theme="filled" to="/booking-process/pick-up-date" />
        <Button text="Next" theme="filled" to="/booking-process/book-bike" />
      </div>

      <Marginer direction="vertical" margin="4em" />
      <Footer />
   </PageContainer>
  );
}