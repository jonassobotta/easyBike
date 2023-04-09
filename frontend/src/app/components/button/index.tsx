import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    text-white
    border-white
    bg-transparent
    relative
    overflow-hidden
  `};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.5;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;



const FilledButton = styled(BaseButton)`
  ${tw`
    border-green-500
    text-green-500
    bg-transparent
    hover:bg-green-500
    hover:text-white
    hover:border-transparent
  `};
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}

