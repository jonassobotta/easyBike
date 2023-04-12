import React from "react";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
  }

const LogoContainer = styled.div `
    ${tw`
        flex
        items-center
        m-2
    `};
    &:hover {
        cursor: pointer;
    }
`;

const LogoText = styled.div `
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};
    
    ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)};
    
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

export function Logo(props: ILogoProps) {
    const { color, bgColor } = props;

    return (
        <LogoContainer>
            <LogoText color={color || "dark"}>
                <FontAwesomeIcon icon={faBicycle} />
            </LogoText>
            <LogoText color={color || "dark"}>
                <span>e</span>asy<span>bike</span>
            </LogoText>
            <LogoText color={color || "dark"}>
                <FontAwesomeIcon icon={faBicycle} />
            </LogoText>
        </LogoContainer>
    );
}
