import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topsection";
import { Button } from "../../components/button";
import { BookForm } from "../../components/bookForm";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { ImageDescription } from "../../components/imagedescription";
import { ImageDropdown } from "../../components/dropdown/ImageDropdown";

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

export function BookBike() {
  return (
    <PageContainer>
        <Navbar />
        <TopSection pickUpActive={false} chooseStoreActive={false} bookBikeActive={true}/>
        <Title>Book Bike</Title>
        
        <ImageDropdown />

        <BookForm />

        <div className="flex flex-row justify-between">
        <Button text="Back" theme="filled" to="/booking-process/choose-store" />
        
        </div>
        <Marginer direction="vertical" margin="10em" />
        
        <Footer />
    </PageContainer>
  );
}