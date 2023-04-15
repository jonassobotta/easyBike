import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;


export function ImageDropdown(){
    return (
        <Container>
            <h1>City Bikes: </h1>
        </Container>


        
    );
}

