/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
${tw`
  mr-1
  md:mr-5
`};

a {
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    cursor-pointer
    transition
    duration-200
    ease-in-out
    hover:text-green-500
    no-underline
  `};

${({ menu }) =>
    menu &&
    css`
        ${tw`
            text-white
            text-xl
            mb-3
            focus:text-white
        `};
    `};
`;

export function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile) {
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <a href="#">Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Bikes</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Contact Us</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Login</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        )
    }


    return (
        <ListContainer>
            <NavItem>
                <a href="#">Home</a>
            </NavItem>
            <NavItem>
                <a href="#">Bikes</a>
            </NavItem>
            <NavItem>
                <a href="#">Contact Us</a>
            </NavItem>
            <NavItem>
                <a href="#">Login</a>
            </NavItem>
        </ListContainer>
    );
}