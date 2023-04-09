import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topsection";
import { MiddleSection } from "./middlesection";
import { BookCard } from "../../components/bookcard";
import { BookingSteps } from "./bookingSteps";

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

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <MiddleSection />
    </PageContainer>
  );
}
