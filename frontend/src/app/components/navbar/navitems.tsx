/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Link } from "react-router-dom";

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
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/">Bikes</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/">Contact Us</Link>
                    </NavItem>
                    <NavItem menu>
                        <Link to="/">Login</Link>
                    </NavItem>
                </ListContainer>
            </Menu>
        )
    }


    return (
        <ListContainer>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/">Bikes</Link>
            </NavItem>
            <NavItem>
                <Link to="/">Contact Us</Link>
            </NavItem>
            <NavItem>
                <Link to="/">Login</Link>
            </NavItem>
        </ListContainer>
    );
}