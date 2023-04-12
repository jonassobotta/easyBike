import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface IStepProps {
    theme: "active" | "inactive";
    title: string;
    icon: any;
}

const BaseStep = styled.div`
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `};
    &:hover {
        cursor: pointer;
        box-shadow: 0 1.3px 24px -3px rgba(200, 0, 0, 0.8);
    }
`;

const ActiveStep = styled(BaseStep)`
    ${tw`
        bg-red-500
    `};
`;

const BaseTitle = styled.h4`
    ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `};
`;

const ActiveStepTitle = styled(BaseTitle)`
    ${tw`
        text-red-500
    `};
`;

const BaseIcon = styled.span`
    ${tw`
        text-red-500
        text-3xl
    `};
`;

const ActiveStepIcon = styled(BaseIcon)`
    ${tw`   
        text-white
    `};
`;

const StepContainer = styled.div`
    ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-red-500
      m-3
    `};       
`;

export function Step(props: IStepProps) {
    const { theme, icon, title } = props;

    const navigate = useNavigate();

    const handleStepClick = () => {
        switch(title) {
            case "Pick Up Date":
                navigate("/booking-process/pick-up-date");
                break;
            case "Choose Store":
                navigate("/booking-process/choose-store");
                break;
            case "Book Bike":
                navigate("/booking-process/book-bike");
            break;
        }
    }

    if(theme === "active") {
        return (
            <StepContainer>
            <ActiveStep onClick={handleStepClick}>
                <ActiveStepIcon>
                    <FontAwesomeIcon icon={icon} />
                </ActiveStepIcon>
            </ActiveStep>
            <ActiveStepTitle>{title}</ActiveStepTitle>
            </StepContainer>
        );
    } else {    
        return (
            <StepContainer>
            <BaseStep onClick={handleStepClick}>
                <BaseIcon>
                    <FontAwesomeIcon icon={icon} />
                </BaseIcon>
            </BaseStep>
            <BaseTitle>{title}</BaseTitle>
            </StepContainer>
        );
    }
}