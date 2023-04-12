import {
    faCalendarAlt,
    faBicycle,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Step } from "../../components/bookcard/step";
  
interface ITopSectionProps {
    pickUpActive: boolean;
    chooseStoreActive: boolean;
    bookBikeActive: boolean;
}

const Container = styled.div`
    ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;
  
const StepsContainer = styled.div`
    ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-7
      lg:mt-16
    `};
`;
  
export function TopSection(props: ITopSectionProps) {
    const { pickUpActive, chooseStoreActive, bookBikeActive } = props;

    return (
        <Container>
            <StepsContainer>
                    <Step theme={pickUpActive ? "active" : "inactive"} title="Pick Up" icon={faCalendarAlt} />
                    <Step theme={chooseStoreActive ? "active" : "inactive"} title="Choose Store" icon={faMapMarkedAlt} />
                    <Step theme={bookBikeActive ? "active" : "inactive"} title="Book Bike" icon={faBicycle} />
            </StepsContainer>
        </Container>
    );
}
