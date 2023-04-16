import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";

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
        text-green-500
        font-extrabold
    `}
`;
export function Confirmation() {
    return (
        <PageContainer>
            <Navbar />
            <Marginer direction="vertical" margin="20em" />
            <Title>Successfully Booked !</Title>
        </PageContainer>
    );
}