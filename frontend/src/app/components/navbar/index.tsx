import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    }

    return (
        <NavbarContainer>
            <LogoContainer onClick={handleLogoClick}>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
        
    );
}