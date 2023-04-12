import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topsection";
import { BookCard } from "../../components/bookcard";
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

export function PickUpDate() {
  return (
    <PageContainer>
        <Navbar />
        <TopSection pickUpActive={true} chooseStoreActive={false} bookBikeActive={false}/>
        <Title>Pick Up Date</Title>
        <BookCard />
        <Marginer direction="vertical" margin="20em" />
        <Button text="Next" theme="filled" to="/booking-process/choose-store"/>
        <Marginer direction="vertical" margin="10em" />
        <Footer />
    </PageContainer>
  );
}