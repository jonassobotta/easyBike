import React from "react";
import BikeLogoImg from "../../assets/logo.svg";
import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div `
    ${tw`
        flex
        items-center
        m-2
    `};
`;

const LogoText = styled.div `
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};

    & span {
        ${tw`text-green-500`}
    }
`;

const Image = styled.div `
    width: auto;
    ${tw`
        h-6
        md:h-9
    `};

    img {
        width: auto;
        height: 100%;
    }
`;

export function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={BikeLogoImg} alt="logo"/>
            </Image>
            <LogoText><span>e</span>asy<span>bike</span></LogoText>
            <Image>
                <img src={BikeLogoImg} alt="logo"/>
            </Image>
        </LogoContainer>
    );
}
